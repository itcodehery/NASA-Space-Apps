import pandas as pd
import joblib
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

c02_preprocessor = joblib.load(os.path.join(BASE_DIR, "CO2_preprocessor.pkl"))
ch4_preprocessor = joblib.load(os.path.join(BASE_DIR, "CH4_preprocessor.pkl"))
n2o_preprocessor = joblib.load(os.path.join(BASE_DIR, "N2O_preprocessor.pkl"))

def predict_gas(data, data_gas):
    if data_gas == 'co2':
        transformed_data = c02_preprocessor.transform(data)
    elif data_gas == 'ch4':
        transformed_data = ch4_preprocessor.transform(data)
    elif data_gas == 'n2o':
        transformed_data = n2o_preprocessor.transform(data)
    else:
        return "Invalid gas type"

    # Convert sparse matrix to dense array
    if hasattr(transformed_data, "toarray"):
        transformed_data = transformed_data.toarray()

    return transformed_data