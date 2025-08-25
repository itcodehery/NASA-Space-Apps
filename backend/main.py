from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import sys, os, asyncio

# --- Ensure backend folder is in sys.path so all internal modules are importable ---
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.append(BASE_DIR)

# Now internal imports will work
from router import router
from ml.model.model_handler import predict_gas  # Example usage

PUBLIC_DIR = os.path.join(BASE_DIR, "public")

app = FastAPI()

# --- Enable CORS ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve static assets
app.mount(
    "/assets", StaticFiles(directory=os.path.join(PUBLIC_DIR, "assets")), name="assets"
)


# --- Background loader ---
def load_data():
    from dataProcessing import data

    return data.ch4_df, data.co2_df, data.n2o_df, data.total_info


@app.on_event("startup")
async def startup_event():
    ch4_df, co2_df, n2o_df, total_info = await asyncio.to_thread(load_data)
    app.state.ch4_df = ch4_df
    app.state.co2_df = co2_df
    app.state.n2o_df = n2o_df
    app.state.total_info = total_info


# --- Attach router ---
app.include_router(router)


# --- Serve frontend SPA ---
@app.get("/")
async def serve_frontend_root():
    return FileResponse(os.path.join(PUBLIC_DIR, "index.html"))


@app.get("/{full_path:path}")
async def serve_frontend(full_path: str):
    file_path = os.path.join(PUBLIC_DIR, full_path)
    if os.path.exists(file_path):
        return FileResponse(file_path)
    return FileResponse(os.path.join(PUBLIC_DIR, "index.html"))
