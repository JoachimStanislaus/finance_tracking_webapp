from typing import Union
import logging
import logging.config

from fastapi import FastAPI

from src.auth.router import router as auth_router


# Load logging configuration
logging.config.fileConfig('../logging.ini')

# Create a logger
logger = logging.getLogger(__name__)


app = FastAPI()


app.include_router(auth_router, prefix="/auth")  # optional prefix