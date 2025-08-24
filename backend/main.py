from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
<<<<<<< HEAD
from router import router
from fastapi.responses import FileResponse
=======
import sys, os, asyncio

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PUBLIC_DIR = os.path.join(BASE_DIR, "public")
>>>>>>> 07e7eb6 (Fixed build and deployments scripts and renders the website from the backend)

app = FastAPI()

# --- Enable CORS ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # adjust if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount(
    "/assets", StaticFiles(directory=os.path.join(PUBLIC_DIR, "assets")), name="assets"
)


# --- Background loader ---
def load_data():
    from dataProcessing import data
    # return datasets instead of touching globals
    return data.ch4_df, data.co2_df, data.n2o_df, data.total_info


@app.on_event("startup")
async def startup_event():
    # run data loading in a thread
    ch4_df, co2_df, n2o_df, total_info = await asyncio.to_thread(load_data)

    # store datasets in app.state for global access
    app.state.ch4_df = ch4_df
    app.state.co2_df = co2_df
    app.state.n2o_df = n2o_df
    app.state.total_info = total_info


# --- Import and attach router ---
from router import router
app.include_router(router)

@app.get("/")
async def serve_frontend_root():
    return FileResponse("backend/public/index.html")


# Catch-all fallback for React Router / Vite SPA
@app.get("/{full_path:path}")
async def serve_frontend(full_path: str):
    file_path = f"backend/public/{full_path}"
    if os.path.exists(file_path):
        return FileResponse(file_path)
    return FileResponse("backend/public/index.html")
