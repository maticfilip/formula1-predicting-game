from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app import models,schemas

router=APIRouter()

@router.get("/drivers",response_model=list[schemas.DriverBase])
def get_drivers(db: Session=Depends(get_db)):
    drivers=db.query(models.Driver).all()
    return drivers

