echo "Starting the Server"
cd backend
source bin/activate

echo "Running Server Command"
gunicorn -k uvicorn.workers.UvicornWorker main:app --bind 0.0.0.0:8000 --workers 2
