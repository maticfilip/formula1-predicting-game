import { Link } from "react-router-dom"

function Overview(){

    const nextRace = {
        round: 4,
        name: "Japanese Grand Prix",
        circuit: "suzuka",
        country: "Japan",
        date: "April 6, 2025",
        session: "Race",
        countdown: "2 days 14 hours"
    }

    const predictionStatus = {
        qualifying: true,   // true = submitted
        race: false
    }

    const seasonStats = {
        totalPoints: 87,
        leaguePosition: 2,
        totalPredictions: 12,
        accuracy: "64%"
    }

    const driverStandings = [
        { position: 1, name: "Max Verstappen", team: "Red Bull Racing", points: 119 },
        { position: 2, name: "Lando Norris", team: "McLaren", points: 101 },
        { position: 3, name: "Charles Leclerc", team: "Ferrari", points: 98 },
        { position: 4, name: "Oscar Piastri", team: "McLaren", points: 91 },
        { position: 5, name: "Carlos Sainz", team: "Ferrari", points: 87 },
    ]

    const constructorStandings = [
        { position: 1, team: "McLaren", points: 192 },
        { position: 2, team: "Ferrari", points: 185 },
        { position: 3, team: "Red Bull Racing", points: 143 },
        { position: 4, team: "Mercedes", points: 121 },
        { position: 5, team: "Aston Martin", points: 56 },
    ]
    return (
        <div className="container-fluid">

            {/* PAGE TITLE */}
            <h2 className="mb-4">Overview</h2>

            {/* TOP ROW - Next Race + Prediction Status */}
            <div className="row g-4 mb-4">

                {/* NEXT RACE CARD */}
                <div className="col-md-7">
                    <div className="card h-100">
                        <div className="row align-items-center g-0">
                            <div className="col-md-6 p-4">
                                <span className="text" style={{fontSize: '0.8rem'}}>
                                    ROUND {nextRace.round} — {nextRace.country.toUpperCase()}
                                </span>
                                <h3 className="mt-1 mb-3">{nextRace.name}</h3>
                                <p className="text mb-1">Next Session: <span className="text-white">{nextRace.session}</span></p>
                                <p className="text mb-1">Date: <span className="text-white">{nextRace.date}</span></p>
                                <p className="text mb-3">
                                    Starts in: <span className="text-red">{nextRace.countdown}</span>
                                </p>
                                <Link to="/dashboard/races">
                                    <button className="btn-secondary">View Race Details</button>
                                </Link>
                            </div>
                            <div className="col-md-6 d-flex justify-content-center p-4">
                                <img
                                    src={`/circuits/${nextRace.circuit}.svg`}
                                    alt={nextRace.name}
                                    style={{maxWidth: '100%', maxHeight: '180px', filter: 'invert(1) opacity(0.85)'}}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* PREDICTION STATUS CARD */}
                <div className="col-md-5">
                    <div className="card h-100 p-4">
                        <h3 className="mb-4">Prediction Status</h3>
                        <div className="d-flex justify-content-between align-items-center mb-3 pb-3" style={{borderBottom: '1px solid #222'}}>
                            <span className="text">Qualifying</span>
                            {predictionStatus.qualifying
                                ? <span style={{color: '#28a745', fontWeight: 600}}>✓ Submitted</span>
                                : <span className="text-red">✗ Not submitted</span>
                            }
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <span className="text">Race</span>
                            {predictionStatus.race
                                ? <span style={{color: '#28a745', fontWeight: 600}}>✓ Submitted</span>
                                : <span className="text-red">✗ Not submitted</span>
                            }
                        </div>
                        {(!predictionStatus.qualifying || !predictionStatus.race) && (
                            <Link to="/dashboard/races">
                                <button className="btn-primary w-100">Submit Predictions</button>
                            </Link>
                        )}
                        {predictionStatus.qualifying && predictionStatus.race && (
                            <p className="text text-center mb-0">All predictions submitted for this weekend ✓</p>
                        )}
                    </div>
                </div>
            </div>

            {/* SEASON STATS ROW */}
            <div className="row g-4 mb-4">
                <div className="col-6 col-md-3">
                    <div className="card p-3 text-center">
                        <p className="text mb-1" style={{fontSize: '0.8rem'}}>TOTAL POINTS</p>
                        <h2 className="text-red mb-0">{seasonStats.totalPoints}</h2>
                    </div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="card p-3 text-center">
                        <p className="text mb-1" style={{fontSize: '0.8rem'}}>LEAGUE POSITION</p>
                        <h2 className="text-red mb-0">#{seasonStats.leaguePosition}</h2>
                    </div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="card p-3 text-center">
                        <p className="text mb-1" style={{fontSize: '0.8rem'}}>PREDICTIONS MADE</p>
                        <h2 className="text-red mb-0">{seasonStats.totalPredictions}</h2>
                    </div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="card p-3 text-center">
                        <p className="text mb-1" style={{fontSize: '0.8rem'}}>ACCURACY</p>
                        <h2 className="text-red mb-0">{seasonStats.accuracy}</h2>
                    </div>
                </div>
            </div>

            {/* STANDINGS ROW */}
            <div className="row g-4">

                {/* DRIVER STANDINGS */}
                <div className="col-md-6">
                    <div className="card p-4">
                        <h3 className="mb-4">Driver Standings</h3>
                        <table className="w-100" style={{borderCollapse: 'collapse'}}>
                            <thead>
                                <tr style={{borderBottom: '1px solid #222'}}>
                                    <th className="text pb-2" style={{fontWeight: 500, fontSize: '0.8rem', width: '40px'}}>#</th>
                                    <th className="text pb-2" style={{fontWeight: 500, fontSize: '0.8rem'}}>Driver</th>
                                    <th className="text pb-2" style={{fontWeight: 500, fontSize: '0.8rem'}}>Team</th>
                                    <th className="text pb-2 text-end" style={{fontWeight: 500, fontSize: '0.8rem'}}>PTS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {driverStandings.map((driver) => (
                                    <tr key={driver.position} style={{borderBottom: '1px solid #1a1a1a'}}>
                                        <td className="py-2 text">{driver.position}</td>
                                        <td className="py-2 text-white">{driver.name}</td>
                                        <td className="py-2 text" style={{fontSize: '0.85rem'}}>{driver.team}</td>
                                        <td className="py-2 text-end text-red" style={{fontWeight: 600}}>{driver.points}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* CONSTRUCTOR STANDINGS */}
                <div className="col-md-6">
                    <div className="card p-4">
                        <h3 className="mb-4">Constructor Standings</h3>
                        <table className="w-100" style={{borderCollapse: 'collapse'}}>
                            <thead>
                                <tr style={{borderBottom: '1px solid #222'}}>
                                    <th className="text pb-2" style={{fontWeight: 500, fontSize: '0.8rem', width: '40px'}}>#</th>
                                    <th className="text pb-2" style={{fontWeight: 500, fontSize: '0.8rem'}}>Team</th>
                                    <th className="text pb-2 text-end" style={{fontWeight: 500, fontSize: '0.8rem'}}>PTS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {constructorStandings.map((constructor) => (
                                    <tr key={constructor.position} style={{borderBottom: '1px solid #1a1a1a'}}>
                                        <td className="py-2 text">{constructor.position}</td>
                                        <td className="py-2 text-white">{constructor.team}</td>
                                        <td className="py-2 text-end text-red" style={{fontWeight: 600}}>{constructor.points}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Overview