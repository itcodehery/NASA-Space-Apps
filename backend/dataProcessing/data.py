import pandas as pd
import os

BASE_DIR = os.getcwd()

file_path = os.path.join(BASE_DIR,"backend","dataProcessing","Data","flight.xls")


sheet_dict = pd.read_excel(file_path , sheet_name = None)

for sheet_name , df in sheet_dict.items():
    print(sheet_name)
    print(df.head())
    print("\n\n")