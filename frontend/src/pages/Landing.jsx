import "../styles/Landing.css"
import Footer from "../components/Footer.jsx"
import Header_basic from "../components/Header_basic.jsx"
import { Link } from "react-router-dom"

function Landing() {
    return (
        <>
            <Header_basic />

            <section className="section-landing">
                <div className="container text-center">
                    <h1>Think you know<br /><span className="text-red"><i>Formula 1</i> ?</span></h1>
                    <p className="mt-3 mb-4">
                        Predict race results, outscore your friends,<br />
                        and prove you're the ultimate F1 fan.
                    </p>
                    <button className="btn-primary">Start Predicting — It's Free</button>
                    <p className="text-muted mt-3">No payment required. 2026 season is live.</p>
                </div>
            </section>

            <section className="section-features">
                <div className="container container-features">
                    <h2>Everything you need</h2>
                    <p>Analyse data, predict race outcomes, compete with your friends</p>
                    <div className="row row-features">
                        <div className="col-md-4">
                            <div className="card">
                                <img src="../../images/features-1.png" alt="" className="features-image"/>
                                <p>Have a look at top data analysis with real-time data.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="../../images/features-1.png" alt="" className="features-image"/>
                                <p>Predict race positions, fastest laps and more!</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="../../images/features-3.png" alt="" className="features-image"/>
                                <p>Create leagues and compete with your friends!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            
        </>
    )
}

export default Landing