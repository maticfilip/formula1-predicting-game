import { Outlet } from "react-router-dom"
import "../../styles/Dashboard.css"
import Header_basic from "../Header_basic"
import Footer from "../Footer.jsx"
import Sidebar from "./sidebar"

function DashboardLayout() {
    return (
        <>

            <div className="dashboard-wrapper">
                <div className="dashboard-main">
                    <div className="dashboard-topbar">
                        <Header_basic variant="auth" />
                    </div>
                    <div className="dashboard-content">
                        <Sidebar />
                        <Outlet />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default DashboardLayout