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
        orm_mode = True

    @validator('birthday', pre=True)
    def parse_birthday(cls, value):
        try:
            return datetime.strptime(value, "%d/%m/%Y").date()
        except ValueError:
            raise ValueError("Birthday must be in DD/MM/YYYY format")
