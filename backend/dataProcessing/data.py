import pandas as pd
import os

# Path of the folder where this script lives
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Add Data/flight.xls inside that folder
file_path = os.path.join(BASE_DIR, "Data", "flight.xls")

sheet_dict = pd.read_excel(file_path, sheet_name=None)

for sheet_name, df in sheet_dict.items():
    print(sheet_name)
    print(df.head())
    print("\n\n")
