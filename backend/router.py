from fastapi import APIRouter, Query, FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import pandas as pd
import sys, os
from ml.model.model_handler import predict_gas

# Add backend folder to path
sys.path.append(os.path.dirname(__file__))

from dataProcessing.data import (
    ch4_df,
    co2_df,
    n2o_df,
    total_info,
)  # df should be a dict: {2019: DF2019_processed, ...}

# Create FastAPI app
app = FastAPI()

# Router for API endpoints
router = APIRouter()

@router.get("/n2o/{year}")
def get_n2o_data(year: int):
    df = n2o_df.get(year)
    if df is None:
        raise HTTPException(status_code=404, detail="Year not found")
    return df.to_dict(orient="records")


@router.get("/co2/{year}")
def get_co2_data(year: int):
    df = co2_df.get(year)
    if df is None:
        raise HTTPException(status_code=404, detail="Year not found")
    return df.to_dict(orient="records")


@router.get("/ch4/{year}")
def get_ch4_data(year: int):
    df = ch4_df.get(year)
    if df is None:
        raise HTTPException(status_code=404, detail="Year not found")
    return df.to_dict(orient="records")


@router.get("/total/{year}")
def get_total_data(year: int):
    df = total_info.get(year)
    if df is None:
        raise HTTPException(status_code=404, detail="Year not found")
    return df.to_dict(orient="records")


@router.get("/get_predict", response_model=dict[str, float])
async def get_predict(
    latitude: float = Query(..., ge=-90, le=90),
    longitude: float = Query(..., ge=-180, le=180),
    city_name: str = Query(..., min_length=1),
    state: str = Query(..., min_length=1),
    reporting_year: int = Query(..., ge=1990, le=2030),
    gas_type: str = Query(..., regex="^(co2|ch4|n2o)$")  # regex instead of pattern for FastAPI
):
    # ✅ Create a DataFrame from the input parameters
    input_data = pd.DataFrame([{
        "latitude": latitude,
        "longitude": longitude,
        "city_name": city_name,
        "state": state,
        "reporting_year": reporting_year,
        "gas_type": gas_type
    }])

    # ✅ Call the prediction function
    try:
        prediction = predict_gas(input_data, gas_type)
        return {"predicted_ghg_quantity": float(prediction[0][0])}
    except Exception as e:
        return {"error": str(e)}

# --- Mount API router ---
app.include_router(router, prefix="/api")

# --- Serve Frontend (after APIs) ---
# Serve static assets (JS, CSS, images, etc.)
app.mount("/static", StaticFiles(directory="backend/public/assets"), name="static")

# Serve index.html for root
@app.get("/")
async def serve_frontend_root():
    return FileResponse("backend/public/index.html")

# Catch-all fallback for React Router / Vite SPA
@app.get("/{full_path:path}")
async def serve_frontend(full_path: str):
    file_path = f"backend/public/{full_path}"
    if os.path.exists(file_path):
        return FileResponse(file_path)
    return FileResponse("backend/public/index.html")
