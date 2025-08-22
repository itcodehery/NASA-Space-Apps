#from fastapi import APIRouter , Query
import pandas as pd
from dataprocessing.Data.data import df
router = APIRouter()


print(df[2019])

'''@router.get("/filter-data")
async def filter_data(year:int = Query(...,description = "Year to filter dates")):
    if year not in df:
        return {"Year not found"}
    
    dataframe = df[year]
    return dataframe.to_dict(orient="records")'''
