import Header_basic from "../components/Header_basic.jsx"
import Footer from "../components/Footer.jsx"
import { Link } from 'react-router-dom'


function Register(){
    return (
        <>
            <Header_basic variant="auth"/>

            <div className="d-flex align-items-center justify-content-center" style={{minHeight: 'calc(100vh - 120px)'}}>
                <div className="card p-4" style={{width: '650px', backgroundColor: '#141414', border: '1px solid #222222', borderRadius: '8px'}}>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h2 className="text-center text-white mb-4">Register</h2>
                            <div className="mb-3">
                                <input type="text" className="form-control form-input" placeholder="Username or email" />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control form-input" placeholder="Your password" />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control form-input" placeholder="Repeat your password" />
                            </div>
                            <div className="form-check mb-3">
                                <input type="checkbox" className="form-check-input" id="remember" />
                                <label className="form-check-label text-muted" htmlFor="remember">Remember Me</label>
                            </div>
                            <button className="btn-primary w-100 mb-3">Sign up</button>
                            <Link to="/login" className="forgot">I already have an account</Link>

                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                            <img src="../../images/f1-graphic.jpg" alt="F1 Car" className="img-fluid" style={{maxWidth: '220px'}} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Register