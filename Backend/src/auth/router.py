from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from . import models, schemas, utils
from ..db import db

from sqlalchemy.exc import SQLAlchemyError


router = APIRouter()

# TODO write login, register, reset password and logout apis


@router.get("/users/")
def get_users():
    return True


@router.post("/login", status_code=status.HTTP_200_OK)
async def login_for_access_token(
    user: schemas.UserLogin, db: Session = Depends(db.get_db)
):
    db_user = db.query(models.User).filter(models.User.email == user.email).first()
    if not db_user or not utils.verify_password(user.password, db_user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid email or password"
        )
    token = utils.create_access_token(data={"sub": db_user.email})
    return {"access_token": token, "token_type": "bearer"}


@router.post("/register", status_code=status.HTTP_201_CREATED)
async def register_user(user: schemas.UserCreate, db: Session = Depends(db.get_db)):
    try:
        existing_user = (
            db.query(models.User).filter(models.User.email == user.email).first()
        )
        if existing_user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Email already registered",
            )
        hashed_pw = utils.hash_password(user.password)
        db_user = models.User(
            email=user.email,
            hashed_password=hashed_pw,
            first_name=user.first_name,
            last_name=user.last_name,
            birthday=user.birthday,
        )
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return db_user
    except SQLAlchemyError as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"An unexpected error occurred: {str(e)}"
        )


@router.post("/reset-password")
async def reset_password(email: str):
    return True


@router.post("/logout")
async def logout():
    # Invalidate the current session or token
    return {"msg": "Successfully logged out"}
