#!/bin/bash
set -e  # stop on first error

echo "🚀 Starting deployment..."

# Build frontend
echo "📦 Building frontend..."
cd frontend
npm install
npm run build
cd ..

# Copy frontend build into backend static folder
echo "📂 Copying build files to backend..."
rm -rf backend/static/*
cp -r frontend/dist/* backend/static/

# Setup backend Python environment
echo "🐍 Setting up backend..."
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

echo "✅ Deployment complete!"
