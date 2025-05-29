from typing import Union
import logging
import logging.config

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import os

from src.auth.router import router as auth_router


env = os.getenv("ENV", "development")

# Load logging configuration
logging.config.fileConfig("logging.ini")

# Create a logger
logger = logging.getLogger(__name__)


app = FastAPI()

if env == "development":
    origins = [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ]
else:
    origins = ["https://myapp.com"] 

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # or ["*"] for all origins (not recommended for production)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(auth_router, prefix="/auth")
