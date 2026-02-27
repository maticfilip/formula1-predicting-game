import { NavLink } from 'react-router-dom'

function Sidebar() {
    return (
        
        <div className="sidebar">
            <nav className="sidebar-nav">
                <NavLink to="/dashboard" end>Overview</NavLink>
                <NavLink to="/dashboard/analytics">Analytics</NavLink>
                <NavLink to="/dashboard/races">Races</NavLink>
                <NavLink to="/dashboard/leagues">Leagues</NavLink>
                <NavLink to="/dashboard/settings">Settings</NavLink>
            </nav>
        </div>
    )
}

export default Sidebar