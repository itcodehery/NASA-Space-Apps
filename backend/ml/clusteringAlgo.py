import sys, os
import pandas as pd
import numpy as np
import tensorflow as tf
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer

# ---------------------------------------------------------
# 1. Load Data
# ---------------------------------------------------------
sys.path.append(os.path.dirname(os.path.dirname(__file__)))
from dataProcessing.data import ml

all_data = []
for gas in ml.keys():
    for year in ml[gas].keys():
        df = ml[gas][year].copy()
        df["reporting_year"] = year
        df["gas_type"] = gas
        all_data.append(df)

master_df = pd.concat(all_data, ignore_index=True)

print("✅ Master DataFrame:", master_df.shape)

# ---------------------------------------------------------
# 2. Select Features
# ---------------------------------------------------------
features = [
    "latitude",
    "longitude",
    "city_name",
    "state",
    "ghg_quantity_(metric_tons_co2e)",
    "gas_type",
    "reporting_year"
]
X = master_df[features]

# Preprocess: scale numeric + one-hot categorical
numeric_features = ["latitude", "longitude", "ghg_quantity_(metric_tons_co2e)"]
categorical_features = ["city_name", "state", "gas_type"]

preprocessor = ColumnTransformer(
    transformers=[
        ("num", StandardScaler(), numeric_features),
        ("cat", OneHotEncoder(handle_unknown="ignore", sparse_output=False), categorical_features)
    ]
)

# Force dense numpy array
X_processed = preprocessor.fit_transform(X)
X_processed = np.asarray(X_processed, dtype=np.float32)  # ✅ ensures dense float32 array

# ---------------------------------------------------------
# 3. TensorFlow KMeans Implementation
# ---------------------------------------------------------
def tf_kmeans(X, k=5, epochs=50):
    """
    Simple KMeans implementation in TensorFlow (memory-optimized).
    X: (num_samples, num_features)
    """
    n_samples, n_features = X.shape
    X_tf = tf.constant(X, dtype=tf.float32)

    # Randomly initialize cluster centers
    idx = np.random.choice(n_samples, k, replace=False)
    centroids = tf.Variable(X_tf.numpy()[idx], dtype=tf.float32)

    for epoch in range(epochs):
        # Efficient distance computation using (x - c)^2 = x^2 + c^2 - 2xc
        x2 = tf.reduce_sum(tf.square(X_tf), axis=1, keepdims=True)      # (n, 1)
        c2 = tf.reduce_sum(tf.square(centroids), axis=1, keepdims=True) # (k, 1)
        xc = tf.matmul(X_tf, centroids, transpose_b=True)               # (n, k)
        distances = x2 + tf.transpose(c2) - 2 * xc                      # (n, k)

        # Assign clusters
        cluster_assignments = tf.argmin(distances, axis=1)

        # Update centroids
        new_centroids = []
        for i in range(k):
            mask = tf.equal(cluster_assignments, i)
            cluster_points = tf.boolean_mask(X_tf, mask)
            if tf.shape(cluster_points)[0] > 0:
                new_centroids.append(tf.reduce_mean(cluster_points, axis=0))
            else:
                new_centroids.append(centroids[i])  # keep old if empty
        centroids.assign(tf.stack(new_centroids))

        if epoch % 10 == 0:
            print(f"Epoch {epoch}: updated centroids")

    return cluster_assignments.numpy(), centroids.numpy()

# ---------------------------------------------------------
# 4. Run Clustering
# ---------------------------------------------------------
k = 5  # number of clusters
labels, centers = tf_kmeans(X_processed, k=k, epochs=100)

# Attach results back
master_df["cluster"] = labels

print("\n✅ TensorFlow Clustering Done!")
print(master_df[["city_name", "state", "gas_type", "reporting_year", "cluster"]].head(20))

# Save
master_df.to_csv("tf_clustered_facilities.csv", index=False)
print("\n💾 Clustered data saved to tf_clustered_facilities.csv")
