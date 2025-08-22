from fastapi import APIRouter, Query
import pandas as pd
import sys, os

sys.path.append(os.path.dirname(__file__))  # add backend folder to path
from dataProcessing.data import df  # df should be a dict: {2019: DF2019_processed, ...}

router = APIRouter()

# Just for debugging
print(df.keys())  # should show dict keys like [2019, 2020, 2021, ...]

@router.get("/filter-data")
async def filter_data(year: int = Query(..., description="Year to filter data")):
    if year not in df:
        return {"error": "Year not found"}
    
    dataframe = df[year]   # keep df keys as int in your data.py
    return dataframe.to_dict(orient="records")

'''@router.get("/get_all")
async def get_all():
    # Return all years and their data
    return {yr: frame.to_dict(orient="records") for yr, frame in df.items()}'''
