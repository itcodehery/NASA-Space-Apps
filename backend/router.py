from fastapi import APIRouter , Query
import pandas as pd
import sys, os
sys.path.append(os.path.dirname(__file__))  # add backend folder to path
from dataProcessing.data import df

router = APIRouter()


print(df[2019])

@router.get("/filter-data")
async def filter_data(year:int = Query(...,description = "Year to filter dates")):
    if year not in df:
        return {"Year not found"}
    
    dataframe = df[year]
    return dataframe.to_dict(orient="records")
