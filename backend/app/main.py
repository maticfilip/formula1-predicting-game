from fastapi import FastAPI
from app.database import engine

app=FastAPI()

@app.get("/")
def root():
    try:
        with engine.connect() as connection:
            return {"message":"Success","database":"connected"}
    except Exception as e:
        return {"message":"Success","database":str(e)}

