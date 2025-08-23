from fastapi import APIRouter, Query, FastAPI, HTTPException
import pandas as pd
import sys, os
from ml.model.model_handler import predict_gas
    

sys.path.append(os.path.dirname(__file__))  # add backend folder to path
from dataProcessing.data import (
    ch4_df,
    co2_df,
    n2o_df,
    total_info,
)  # df should be a dict: {2019: DF2019_processed, ...}

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
    reporting_year: int = Query(..., ge=1990, le=2023),
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
        return {"predicted_ghg_quantity_(metric_tons_co2e)": float(prediction[0][0])}
    except Exception as e:
        return {"error": str(e)}

"""@router.get("/get_all")
async def get_all():
    # Return all years and their data
    return {yr: frame.to_dict(orient="records") for yr, frame in df.items()}"""
