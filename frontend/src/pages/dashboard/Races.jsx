import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function Races(){
    const [currentRound, setCurrentRound] = useState(1)
    const [drivers, setDrivers]=useState([])
    const [loading, setLoading]=useState(true)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/drivers")
        .then(respone=>{
            setDrivers(response.data)
            setLoading(false)
        })
        .catch(error=>{
            console.error(error)
            setLoading(false)

        })
    }, [])

    if (loading) return <p className="text-muted">Loading...</p>

    return(
        
        <div>
            <div>
                <h2>Drivers</h2>
                {drivers.map(driver => (
                    <div key={driver.id} className="card p-3 mb-2">
                        <p className="text-white mb-0">
                            #{driver.number} {driver.name}
                            <span className="text-muted ms-2" style={{fontSize: '0.85rem'}}>
                                {driver.team.name}
                            </span>
                        </p>
                    </div>
                ))}
            </div>
            <div className="race-navigation d-flex align-items-center gap-3 mb-4">
                <button 
                    className="btn-secondary"
                    onClick={() => setCurrentRound(currentRound - 1)}
                    disabled={currentRound === 1}
                >
                    ← Previous race
                </button>

                <h2 className="mb-0">Round {currentRound}</h2>

                <button 
                    className="btn-secondary"
                    onClick={() => setCurrentRound(currentRound + 1)}
                    disabled={currentRound === 24}
                >
                    Next race →
                </button>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="race-content">
                        <h2> Upcoming race: <span className="red">London</span></h2>
                        <h4> Round number: <span className="red"></span> </h4>

                        <h5> Practice: <span className="red"></span></h5>
                        <h5> Qualifying: <span className="red"></span></h5>
                        <h5> Race: <span className="red"></span></h5>

                        <div className="last-year-results">
                            <h5>Last year winner: <span className="red"></span></h5>
                            <h5>Pole position: <span className="red"></span></h5>
                            <h5>Fastest lap: <span className="red"></span></h5>                    
                        </div>

                        <p> Find detailed analysis and visualizations <Link to="/dashboard/analytics" className="analytics">here.</Link> </p>
                        <p> Find more info on previous races on official F1 pages. </p>
                    </div>
                </div>
                <div className="col-md-6">
                    
                </div>
            </div>
            

            {/* race content changes based on currentRound */}
        </div>
        

    )
}

export default Races