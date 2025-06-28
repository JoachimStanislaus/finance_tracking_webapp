# Pydantic Models

from pydantic import BaseModel, EmailStr, validator
from datetime import datetime, date


class UserCreate(BaseModel):
    email: EmailStr
    password: str
    first_name: str
    last_name: str
    birthday: date

    class Config:
        from_attributes = True


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    email: EmailStr
    first_name: str
    last_name: str
    birthday: date

    class Config:
        from_attributes = True
