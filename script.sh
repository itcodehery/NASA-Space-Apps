#!/bin/bash
set -e  # stop on first error

echo "🚀 Starting deployment..."

# --- Setup backend Python environment ---
echo "🐍 Setting up backend..."
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cd ..

# --- Build nasa-map (second frontend project) ---
# echo "🗺️ Building nasa-map..."
# cd frontend/nasa-map
# npm install
# rm -rf dist
# npm run build
# cd ../..

# --- Copy nasa-map build into backend/public ---
# echo "📂 Copying nasa-map build files to backend/public..."
# mkdir -p backend/public
# rm -rf backend/public/*
# cp -r frontend/nasa-map/dist/* backend/public/

echo "✅ Deployment complete!"