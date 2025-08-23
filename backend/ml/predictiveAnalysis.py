import sys, os
import pandas as pd
import numpy as np
import tensorflow as tf
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.metrics import mean_squared_error, r2_score
import joblib

# ---------------------------------------------------------
# 1. Load Data
# ---------------------------------------------------------
sys.path.append(os.path.dirname(os.path.dirname(__file__)))
from dataProcessing.data import ml   # <-- your dict of yearly DataFrames

# Merge everything into one DataFrame
all_data = []
for gas in ml.keys():
    for year in ml[gas].keys():
        df = ml[gas][year].copy()
        df["reporting_year"] = year
        df["gas_type"] = gas
        all_data.append(df)

df = pd.concat(all_data, ignore_index=True)
print("✅ Data Loaded:", df.shape)

# ---------------------------------------------------------
# 2. Data Cleaning
# ---------------------------------------------------------
df = df.drop_duplicates()
df = df.dropna(subset=["ghg_quantity_(metric_tons_co2e)", "latitude", "longitude"])
df["city_name"] = df["city_name"].fillna("Unknown")
df["state"] = df["state"].fillna("Unknown")

print("✅ After cleaning:", df.shape)

# ---------------------------------------------------------
# 3. Train a separate model for each gas
# ---------------------------------------------------------
def build_model(input_dim):
    """Define a simple regression neural net"""
    model = tf.keras.Sequential([
        tf.keras.layers.Input(shape=(input_dim,)),
        tf.keras.layers.Dense(128, activation="relu"),
        tf.keras.layers.Dropout(0.2),
        tf.keras.layers.Dense(64, activation="relu"),
        tf.keras.layers.Dense(1)   # regression output
    ])
    model.compile(optimizer="adam", loss="mse", metrics=["mae"])
    return model

results = {}

for gas in df["gas_type"].unique():
    print(f"\n🚀 Training model for gas: {gas}")
    
    # Filter only this gas
    df_gas = df[df["gas_type"] == gas].copy()
    
    # Features & Target
    features = ["latitude", "longitude", "city_name", "state", "reporting_year"]
    target = "ghg_quantity_(metric_tons_co2e)"
    
    X = df_gas[features]
    y = df_gas[target].values
    
    # Preprocessing
    numeric_features = ["latitude", "longitude", "reporting_year"]
    categorical_features = ["city_name", "state"]
    
    preprocessor = ColumnTransformer(
        transformers=[
            ("num", StandardScaler(), numeric_features),
            ("cat", OneHotEncoder(handle_unknown="ignore"), categorical_features)
        ]
    )
    
    X_processed = preprocessor.fit_transform(X).astype(np.float32)
    
    # Train/Test Split
    X_train, X_test, y_train, y_test = train_test_split(
        X_processed, y, test_size=0.2, random_state=42
    )
    
    # Build + Train model
    model = build_model(X_train.shape[1])
    history = model.fit(
        X_train, y_train,
        validation_split=0.2,
        epochs=25,
        batch_size=32,
        verbose=0
    )
    
    # Evaluate
    y_pred = model.predict(X_test).flatten()
    mse = mean_squared_error(y_test, y_pred)
    rmse = np.sqrt(mse)
    r2 = r2_score(y_test, y_pred)
    
    print(f" {gas} - MSE: {mse:.2f}, RMSE: {rmse:.2f}, R²: {r2:.3f}")
    
    # Save model & preprocessor
    model.save(f"{gas}_emission_predictor.h5")
    joblib.dump(preprocessor, f"{gas}_preprocessor.pkl")
    
    results[gas] = {"MSE": mse, "RMSE": rmse, "R2": r2}

# ---------------------------------------------------------
# 4. Print final summary
# ---------------------------------------------------------
print("\n✅ Training completed for all gases.")
for gas, metrics in results.items():
    print(f"{gas}: MSE={metrics['MSE']:.2f}, RMSE={metrics['RMSE']:.2f}, R²={metrics['R2']:.3f}")