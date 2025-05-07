# DB Models
from sqlalchemy import Column, Integer, String, create_engine, Date
from sqlalchemy.ext.declarative import declarative_base

from src.models import Base


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True)
    hashed_password = Column(String(255))
    first_name = Column(String(100))
    last_name = Column(String(100))
    birthday = Column(Date)
