import { useState } from 'react'

function Leagues() {
    const [openLeague, setOpenLeague] = useState(null)
    const [showCreate, setShowCreate] = useState(false)
    const [showJoin, setShowJoin] = useState(false)

    const leagues = [
        {
            id: 1,
            name: "F1 Fanatics",
            members: 6,
            yourPosition: 2,
            yourPoints: 87,
            leaderboard: [
                { position: 1, username: "speedking99", points: 102 },
                { position: 2, username: "maticfilip", points: 87 },
                { position: 3, username: "f1_fan_23", points: 74 },
                { position: 4, username: "hamiltonera", points: 61 },
                { position: 5, username: "redbullracing", points: 54 },
                { position: 6, username: "tifosi_forever", points: 43 },
            ]
        },
        {
            id: 2,
            name: "Work Colleagues",
            members: 4,
            yourPosition: 1,
            yourPoints: 87,
            leaderboard: [
                { position: 1, username: "maticfilip", points: 87 },
                { position: 2, username: "john_doe", points: 72 },
                { position: 3, username: "jane_smith", points: 65 },
                { position: 4, username: "mikek", points: 48 },
            ]
        },
        {
            id: 3,
            name: "University Boys",
            members: 8,
            yourPosition: 5,
            yourPoints: 87,
            leaderboard: [
                { position: 1, username: "carlos_fan", points: 134 },
                { position: 2, username: "verstappen1", points: 121 },
                { position: 3, username: "leclerc16", points: 109 },
                { position: 4, username: "norris4ever", points: 98 },
                { position: 5, username: "maticfilip", points: 87 },
                { position: 6, username: "pitstop_king", points: 76 },
                { position: 7, username: "f1_newbie", points: 54 },
                { position: 8, username: "backmarker", points: 32 },
            ]
        }
    ]

    const toggleLeague = (id) => {
        setOpenLeague(openLeague === id ? null : id)
    }

    return (
        <div className="container-fluid">

            {/* PAGE TITLE + ACTIONS */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="mb-0">Leagues</h2>
                <div className="d-flex gap-2">
                    <button className="btn-secondary" onClick={() => { setShowJoin(!showJoin); setShowCreate(false) }}>
                        Join League
                    </button>
                    <button className="btn-primary" onClick={() => { setShowCreate(!showCreate); setShowJoin(false) }}>
                        + Create League
                    </button>
                </div>
            </div>

            {/* CREATE LEAGUE FORM */}
            {showCreate && (
                <div className="card p-4 mb-4">
                    <h3 className="mb-3">Create a New League</h3>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label className="text-muted mb-2" style={{fontSize: '0.85rem'}}>League Name</label>
                            <input type="text" className="form-control form-input" placeholder="Enter league name" />
                        </div>
                    </div>
                    <div className="d-flex gap-2 mt-3">
                        <button className="btn-primary">Create League</button>
                        <button className="btn-secondary" onClick={() => setShowCreate(false)}>Cancel</button>
                    </div>
                </div>
            )}

            {/* JOIN LEAGUE FORM */}
            {showJoin && (
                <div className="card p-4 mb-4">
                    <h3 className="mb-3">Join a League</h3>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label className="text-muted mb-2" style={{fontSize: '0.85rem'}}>League Code</label>
                            <input type="text" className="form-control form-input" placeholder="Enter invite code" />
                        </div>
                    </div>
                    <div className="d-flex gap-2 mt-3">
                        <button className="btn-primary">Join League</button>
                        <button className="btn-secondary" onClick={() => setShowJoin(false)}>Cancel</button>
                    </div>
                </div>
            )}

            {/* LEAGUES LIST */}
            <div className="d-flex flex-column gap-3">
                {leagues.map((league) => (
                    <div key={league.id} className="card">

                        {/* LEAGUE HEADER ROW */}
                        <div
                            className="d-flex justify-content-between align-items-center p-4"
                            style={{cursor: 'pointer'}}
                            onClick={() => toggleLeague(league.id)}
                        >
                            <div className="d-flex align-items-center gap-4">
                                <div>
                                    <h3 className="mb-1">{league.name}</h3>
                                    <p className="text-muted mb-0" style={{fontSize: '0.85rem'}}>
                                        {league.members} members
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center gap-4">
                                <div className="text-center">
                                    <p className="text-muted mb-0" style={{fontSize: '0.75rem'}}>YOUR POSITION</p>
                                    <p className="text-red mb-0" style={{fontWeight: 700, fontSize: '1.1rem'}}>#{league.yourPosition}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-muted mb-0" style={{fontSize: '0.75rem'}}>YOUR POINTS</p>
                                    <p className="text-white mb-0" style={{fontWeight: 700, fontSize: '1.1rem'}}>{league.yourPoints}</p>
                                </div>

                                {/* THREE DOTS MENU */}
                                <div className="dropdown" onClick={(e) => e.stopPropagation()}>
                                    <button
                                        className="btn-secondary"
                                        style={{padding: '0.4rem 0.75rem', fontSize: '1rem', letterSpacing: '2px'}}
                                        data-bs-toggle="dropdown"
                                    >
                                        ···
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end" style={{backgroundColor: '#1a1a1a', border: '1px solid #333'}}>
                                        <li>
                                            <a className="dropdown-item text-white" href="#" style={{fontSize: '0.9rem'}}>
                                                Copy Invite Code
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item text-white" href="#" style={{fontSize: '0.9rem'}}>
                                                Rename League
                                            </a>
                                        </li>
                                        <li><hr className="dropdown-divider" style={{borderColor: '#333'}} /></li>
                                        <li>
                                            <a className="dropdown-item" href="#" style={{fontSize: '0.9rem', color: '#e8002d'}}>
                                                Leave League
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* CHEVRON */}
                                <span className="text-muted" style={{fontSize: '0.85rem'}}>
                                    {openLeague === league.id ? '▲' : '▼'}
                                </span>
                            </div>
                        </div>

                        {/* LEADERBOARD DROPDOWN */}
                        {openLeague === league.id && (
                            <div style={{borderTop: '1px solid #222'}}>
                                <table className="w-100" style={{borderCollapse: 'collapse'}}>
                                    <thead>
                                        <tr style={{borderBottom: '1px solid #222'}}>
                                            <th className="text-muted px-4 py-3" style={{fontWeight: 500, fontSize: '0.8rem', width: '60px'}}>#</th>
                                            <th className="text-muted py-3" style={{fontWeight: 500, fontSize: '0.8rem'}}>Player</th>
                                            <th className="text-muted py-3 text-end px-4" style={{fontWeight: 500, fontSize: '0.8rem'}}>Points</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {league.leaderboard.map((member) => (
                                            <tr
                                                key={member.position}
                                                style={{
                                                    borderBottom: '1px solid #1a1a1a',
                                                    backgroundColor: member.username === 'maticfilip' ? '#1a0a0a' : 'transparent'
                                                }}
                                            >
                                                <td className="px-4 py-3 text-muted">{member.position}</td>
                                                <td className="py-3">
                                                    <span style={{color: member.username === 'maticfilip' ? '#e8002d' : '#ffffff'}}>
                                                        {member.username}
                                                        {member.username === 'maticfilip' && (
                                                            <span className="text-muted ms-2" style={{fontSize: '0.75rem'}}>(you)</span>
                                                        )}
                                                    </span>
                                                </td>
                                                <td className="py-3 text-end px-4" style={{fontWeight: 600, color: '#ffffff'}}>{member.points}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Leagues