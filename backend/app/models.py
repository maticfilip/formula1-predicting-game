from sqlalchemy import *
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.database import Base
import enum

class SessionType(str, enum.Enum):
    qualifying="qualifying"
    race="race"
    sprint="sprint"

class PredictionCategory(str, enum.Enum):
    qualifying_top3="qualifying_top3"
    race_top3="race_top3"
    fastest_lap="fastest_lap"
    fastest_pitstop="fastest_pitstop"

#----teams and drivers----#

class Team(Base):
    __tablename__="teams"

    id=Column(Integer, primary_key=True, index=True)
    name=Column(String, unique=True, nullable=False)

    drivers=relationship("Driver", back_populates="team")

class Driver(Base):
    __tablename__="drivers"

    id=Column(Integer, primary_key=True, index=True)
    name=Column(String, nullable=False)
    number=Column(Integer, unique=True, nullable=False)
    team_id=Column(Integer, ForeignKey("teams.id"), nullable=False)

    team=relationship("Team", back_populates="drivers")

#------users------#

class User(Base):
    __tablename__="users"

    id=Column(Integer, primary_key=True,index=True)
    username=Column(String, unique=True, nullable=False)
    email=Column(String, unique=True, nullable=False)
    password_hash=Column(String, nullable=False)
    created_at=Column(DateTime(timezone=True), server_default=func.now())

    predictions=relationship("Prediction",back_populates="user")
    scores=relationship("Score", back_populates="user")
    leagues=relationship("LeagueMember", back_populates="user")


# ------ EVENTS ------
class Event(Base):
    __tablename__ = "events"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    circuit = Column(String, nullable=False)
    country = Column(String, nullable=False)
    round_number = Column(Integer, unique=True, nullable=False)

    sessions = relationship("Session", back_populates="event")

# ------ SESSIONS ------
class Session(Base):
    __tablename__ = "sessions"

    id = Column(Integer, primary_key=True, index=True)
    event_id = Column(Integer, ForeignKey("events.id"), nullable=False)
    type = Column(Enum(SessionType), nullable=False)
    deadline = Column(DateTime(timezone=True), nullable=False)

    event = relationship("Event", back_populates="sessions")
    predictions = relationship("Prediction", back_populates="session")
    results = relationship("Result", back_populates="session")
    scores = relationship("Score", back_populates="session")

# ------ PREDICTIONS ------
class Prediction(Base):
    __tablename__ = "predictions"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    session_id = Column(Integer, ForeignKey("sessions.id"), nullable=False)
    submitted_at = Column(DateTime(timezone=True), server_default=func.now())

    user = relationship("User", back_populates="predictions")
    session = relationship("Session", back_populates="predictions")
    items = relationship("PredictionItem", back_populates="prediction")

# ------ PREDICTION ITEMS ------
class PredictionItem(Base):
    __tablename__ = "prediction_items"

    id = Column(Integer, primary_key=True, index=True)
    prediction_id = Column(Integer, ForeignKey("predictions.id"), nullable=False)
    category = Column(Enum(PredictionCategory), nullable=False)
    position = Column(Integer, nullable=True)
    driver_id = Column(Integer, ForeignKey("drivers.id"), nullable=True)
    team_id = Column(Integer, ForeignKey("teams.id"), nullable=True)

    prediction = relationship("Prediction", back_populates="items")
    driver = relationship("Driver")
    team = relationship("Team")

# ------ RESULTS ------
class Result(Base):
    __tablename__ = "results"

    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(Integer, ForeignKey("sessions.id"), nullable=False)
    recorded_at = Column(DateTime(timezone=True), server_default=func.now())

    session = relationship("Session", back_populates="results")
    items = relationship("ResultItem", back_populates="result")

# ------ RESULT ITEMS ------
class ResultItem(Base):
    __tablename__ = "result_items"

    id = Column(Integer, primary_key=True, index=True)
    result_id = Column(Integer, ForeignKey("results.id"), nullable=False)
    category = Column(Enum(PredictionCategory), nullable=False)
    position = Column(Integer, nullable=True)
    driver_id = Column(Integer, ForeignKey("drivers.id"), nullable=True)
    team_id = Column(Integer, ForeignKey("teams.id"), nullable=True)

    result = relationship("Result", back_populates="items")
    driver = relationship("Driver")
    team = relationship("Team")

# ------ SCORES ------
class Score(Base):
    __tablename__ = "scores"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    session_id = Column(Integer, ForeignKey("sessions.id"), nullable=False)
    prediction_id = Column(Integer, ForeignKey("predictions.id"), nullable=False)
    points = Column(Integer, default=0)

    user = relationship("User", back_populates="scores")
    session = relationship("Session", back_populates="scores")

# ------ LEAGUES ------
class League(Base):
    __tablename__ = "leagues"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    created_by = Column(Integer, ForeignKey("users.id"), nullable=False)
    join_code = Column(String, unique=True, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    members = relationship("LeagueMember", back_populates="league")

# ------ LEAGUE MEMBERS ------
class LeagueMember(Base):
    __tablename__ = "league_members"

    id = Column(Integer, primary_key=True, index=True)
    league_id = Column(Integer, ForeignKey("leagues.id"), nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    joined_at = Column(DateTime(timezone=True), server_default=func.now())

    league = relationship("League", back_populates="members")
    user = relationship("User", back_populates="leagues")