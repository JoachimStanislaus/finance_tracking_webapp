from fastapi import APIRouter, Depends, HTTPException, status, Response
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.responses import JSONResponse
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

    
    response = JSONResponse(content={"message": "Login successful"})
    response.set_cookie(
        key="access_token",
        value=token,
        httponly=True,
        secure=True,           # Only over HTTPS in production
        samesite="Lax",        # Or "Strict"/"None" based on your setup
        max_age=(utils.ACCESS_TOKEN_EXPIRE_MINUTES*60),
    )
    return response


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

@router.post("/logout", status_code=200)
async def logout(response: Response):
    response.delete_cookie("access_token")
    return {"message": "Successfully logged out"}