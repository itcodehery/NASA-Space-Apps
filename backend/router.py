from fastapi import APIRouter, Query, FastAPI, HTTPException
import pandas as pd
import sys, os

sys.path.append(os.path.dirname(__file__))  # add backend folder to path
from dataProcessing.data import ch4_df, co2_df, n2o_df  # df should be a dict: {2019: DF2019_processed, ...}

router = APIRouter()

# Just for debugging
# print(df.keys())

# @router.get("/filter-data")
# async def filter_data(year: int = Query(..., description="Year to filter data")):
#     if year not in df:
#         return {"error": "Year not found"}
    
#     dataframe = df[year]   # keep df keys as int in your data.py
#     return dataframe.to_dict(orient="records")

# Endpoints for N2O, CO2, and CH4 data
app = FastAPI()


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

'''@router.get("/get_all")
async def get_all():
    # Return all years and their data
    return {yr: frame.to_dict(orient="records") for yr, frame in df.items()}'''


