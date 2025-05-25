import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

load_dotenv()

Base = declarative_base()

#DATABASE_URL = os.getenv("DATABASE_URL")  # or hardcode it temporarily
DATABASE_URL = "mysql+pymysql://fintracking_user:password@localhost/fintracking_db"

if DATABASE_URL is None:
    raise ValueError("DATABASE_URL is not set!")

engine = create_engine(DATABASE_URL)

Base.metadata.create_all(bind=engine)

SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
