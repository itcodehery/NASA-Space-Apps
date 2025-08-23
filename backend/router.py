from fastapi import FastAPI, HTTPException, Query
from fastapi.staticfiles import StaticFiles
import sys
import os

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(os.path.join(os.path.dirname(os.path.abspath(__file__)), "ml"))
from ml.model.model_handler import predict_gas

from fastapi.responses import FileResponse
import pandas as pd
import os
from typing import Dict
from dataProcessing.data import ch4_df, co2_df, n2o_df, total_info
from fastapi import APIRouter

app = FastAPI()
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


@router.get("/get_predict", response_model=Dict[str, float])
async def get_predict(
    latitude: float = Query(..., ge=-90, le=90),
    longitude: float = Query(..., ge=-180, le=180),
    city_name: str = Query(..., min_length=1),
    state: str = Query(..., min_length=1),
    reporting_year: int = Query(..., ge=1990, le=2030),
    gas_type: str = Query(..., regex="^(co2|ch4|n2o)$"),
):
    input_data = pd.DataFrame(
        [
            {
                "latitude": latitude,
                "longitude": longitude,
                "city_name": city_name,
                "state": state,
                "reporting_year": reporting_year,
                "gas_type": gas_type,
            }
        ]
    )
    try:
        prediction = predict_gas(input_data, gas_type)
        return {"predicted_ghg_quantity": float(prediction[0][0])}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# --- Include router without prefix ---
app.include_router(router)

# --- Serve static assets (JS/CSS/images) ---
app.mount("/static", StaticFiles(directory="backend/public"), name="static")


# --- Catch-all route to render frontend (index.html) ---
@app.get("/{full_path:path}")
async def serve_frontend(full_path: str):
    file_path = f"backend/public/{full_path}"
    if os.path.exists(file_path) and not os.path.isdir(file_path):
        return FileResponse(file_path)
    return FileResponse("backend/public/index.html")
