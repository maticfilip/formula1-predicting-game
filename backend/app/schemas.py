from pydantic import BaseModel
from datetime import datetime
from typing import Optional
from app.models import SessionType, PredictionCategory

# ===== TEAMS =====
class TeamBase(BaseModel):
    id: int
    name: str

    class Config:
        from_attributes = True

# ===== DRIVERS =====
class DriverBase(BaseModel):
    id: int
    name: str
    number: int
    team: TeamBase

    class Config:
        from_attributes = True

# ===== USERS =====
class UserCreate(BaseModel):
    username: str
    email: str
    password: str

class UserBase(BaseModel):
    id: int
    username: str
    email: str
    created_at: datetime

    class Config:
        from_attributes = True

# ===== EVENTS =====
class EventBase(BaseModel):
    id: int
    name: str
    circuit: str
    country: str
    round_number: int

    class Config:
        from_attributes = True

# ===== SESSIONS =====
class SessionBase(BaseModel):
    id: int
    event_id: int
    type: SessionType
    deadline: datetime
    event: EventBase

    class Config:
        from_attributes = True

# ===== PREDICTION ITEMS =====
class PredictionItemCreate(BaseModel):
    category: PredictionCategory
    position: Optional[int] = None
    driver_id: Optional[int] = None
    team_id: Optional[int] = None

class PredictionItemBase(BaseModel):
    id: int
    category: PredictionCategory
    position: Optional[int] = None
    driver: Optional[DriverBase] = None
    team: Optional[TeamBase] = None

    class Config:
        from_attributes = True

# ===== PREDICTIONS =====
class PredictionCreate(BaseModel):
    session_id: int
    items: list[PredictionItemCreate]

class PredictionBase(BaseModel):
    id: int
    user_id: int
    session_id: int
    submitted_at: datetime
    items: list[PredictionItemBase]

    class Config:
        from_attributes = True

# ===== RESULT ITEMS =====
class ResultItemBase(BaseModel):
    id: int
    category: PredictionCategory
    position: Optional[int] = None
    driver: Optional[DriverBase] = None
    team: Optional[TeamBase] = None

    class Config:
        from_attributes = True

# ===== RESULTS =====
class ResultBase(BaseModel):
    id: int
    session_id: int
    recorded_at: datetime
    items: list[ResultItemBase]

    class Config:
        from_attributes = True

# ===== SCORES =====
class ScoreBase(BaseModel):
    id: int
    user_id: int
    session_id: int
    points: int

    class Config:
        from_attributes = True

# ===== LEAGUES =====
class LeagueCreate(BaseModel):
    name: str

class LeagueBase(BaseModel):
    id: int
    name: str
    join_code: str
    created_at: datetime

    class Config:
        from_attributes = True

# ===== LEAGUE MEMBERS =====
class LeagueMemberBase(BaseModel):
    id: int
    league_id: int
    user_id: int
    joined_at: datetime

    class Config:
        from_attributes = True