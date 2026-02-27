function Footer(){
    return(
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
            <div className="container">

            
                <div className="row">
                    <div className="col-12 col-md">
                        <div className="navbar-logo">
                            F1<span>Predictor</span>
                    </div>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Features</h5>
                        <ul className="list-unstyled text-small">
                        <li><a className="footer-text" href="#">Data analysis</a></li>
                        <li><a className="footer-text" href="#">Create a leaderboard</a></li>
                        <li><a className="footer-text" href="#">Invite your friends</a></li>
                        <li><a className="footer-text" href="#">Create your predictions</a></li>
                        <li><a className="footer-text" href="#">Compete globally</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>About</h5>
                        <ul className="list-unstyled text-small">
                        <li><a className="footer-text" href="#">About the project</a></li>
                        <li><a className="footer-text" href="#">About the author</a></li>
                        <li><a className="footer-text" href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Your account</h5>
                        <ul className="list-unstyled text-small">
                        <li><a className="footer-text" href="#">Sign up</a></li>
                        <li><a className="footer-text" href="#">Login</a></li>
                        <li><a className="footer-text" href="#">Your leaderboards</a></li>
                        <li><a className="footer-text" href="#">Your predictions</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer