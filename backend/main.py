from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from router import router
from fastapi.responses import FileResponse

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials= True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

app.mount("/static", StaticFiles(directory="backend/public/assets"), name="static")
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
