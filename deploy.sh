#!/bin/bash
set -e


echo "Starting the Server"
cd backend

echo "Running Server Command"
gunicorn -k uvicorn.workers.UvicornWorker main:app --bind 0.0.0.0:10000 --workers 2
