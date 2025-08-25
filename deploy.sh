#!/bin/bash
set -e

echo "Starting the Server"
cd backend

echo "Running Server Command"
# Use the PORT provided by Render automatically
echo "Render PORT: $PORT"
gunicorn -k uvicorn.workers.UvicornWorker main:app --bind 0.0.0.0:$PORT --workers 2
