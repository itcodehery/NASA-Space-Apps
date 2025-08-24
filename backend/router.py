from fastapi import HTTPException, Query, APIRouter, Request
from fastapi.responses import FileResponse
import os
import pandas as pd
from typing import Dict
from ml.model.model_handler import predict_gas

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PUBLIC_DIR = os.path.join(BASE_DIR, "public")

router = APIRouter()

# --- API routes ---
@router.get("/n2o/{year}")
def get_n2o_data(year: int, request: Request):
    df = request.app.state.n2o_df.get(year)
    if df is None:
        raise HTTPException(status_code=404, detail="Year not found")
    return df.to_dict(orient="records")


@router.get("/co2/{year}")
def get_co2_data(year: int, request: Request):
    df = request.app.state.co2_df.get(year)
    if df is None:
        raise HTTPException(status_code=404, detail="Year not found")
    return df.to_dict(orient="records")


@router.get("/ch4/{year}")
def get_ch4_data(year: int, request: Request):
    df = request.app.state.ch4_df.get(year)
    if df is None:
        raise HTTPException(status_code=404, detail="Year not found")
    return df.to_dict(orient="records")


@router.get("/total/{year}")
def get_total_data(year: int, request: Request):
    df = request.app.state.total_info.get(year)
    if df is None:
        raise HTTPException(status_code=404, detail="Year not found")
    return df.to_dict(orient="records")


@router.get("/get_predict", response_model=Dict[str, float])
async def get_predict(
    request: Request,
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


# --- Root route serves frontend index.html ---
@router.get("/")
async def serve_index():
    return FileResponse(os.path.join(PUBLIC_DIR, "index.html"))
