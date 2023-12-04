from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .config import app_configs
from .router.routes import router as api_router

ALLOWED_ORIGINS = [
    "*",
]
app = FastAPI(**app_configs)
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router)
