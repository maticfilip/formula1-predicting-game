from fastapi import FastAPI
from app.database import engine
from app import models
from app.routes import drivers
from fastapi.middleware.cors import CORSMiddleware



app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(bind=engine)

app.include_router(drivers.router, prefix="/api")

@app.get("/")
def root():
    return {"message":"F1 predictor is running"}

