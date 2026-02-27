import { Link } from "react-router-dom"


function Header_basic( { variant }){
    return (

        <nav className="navbar">
                <div className="container-fluid navbar-inner">
                    <div className="navbar-logo">
                        F1<span>Predictor</span>
                    </div>
                    <div className="navbar-actions">
                        {variant !== "auth" &&(
                            <>
                                <Link to="/login">
                                    <button className="btn-secondary">Login</button>
                                </Link>
                                <Link to="/register">
                                    <button className="btn-secondary">Sign Up</button>
                                </Link>
                            </>
                        )}
                        <Link to="/">
                            <button className="btn-tertiary">Home</button>
                        </Link>
                        <Link to="/">
                            <button className="btn-tertiary">About</button>
                        </Link>
                    </div>
                </div>
            </nav>

    )
}

export default Header_basic