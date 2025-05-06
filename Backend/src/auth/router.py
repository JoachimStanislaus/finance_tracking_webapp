from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from . import models, schemas, utils
from db.db import get_db
from .models import User

router = APIRouter()

# TODO write login, register, reset password and logout apis


@router.get("/users/")
def get_users(db: Session = Depends(get_db)):
    return db.query(User).all()


@router.post("/login")
async def login_for_access_token():
    return True


@router.post("/register")
async def register_user():
    return True


@router.post("/reset-password")
async def reset_password(email: str):
    return True


@router.post("/logout")
async def logout():
    # Invalidate the current session or token
    return {"msg": "Successfully logged out"}
