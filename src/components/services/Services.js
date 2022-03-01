import { Link } from "react-router-dom";
import "./Services.css";
import Amritsar from "./amritsar.jpg";

export const Services = () => {
    return (
        <div className="services">
            <div className="container">
                <h2>Journeys on the horizon</h2>
                <div className="service-group">
                    <div className="service">
                        <img src={Amritsar} alt="" />
                        <h3>Amritsar Sojourn</h3>
                        <p>BDT 15,000</p>
                        <Link to="">View Details</Link>
                    </div>
                    <div className="service">
                        <img src={Amritsar} alt="" />
                        <h3>Amritsar Sojourn</h3>
                        <p>BDT 15,000</p>
                        <Link to="">View Details</Link>
                    </div>
                    <div className="service">
                        <img src={Amritsar} alt="" />
                        <h3>Amritsar Sojourn</h3>
                        <p>BDT 15,000</p>
                        <Link to="">View Details</Link>
                    </div>
                    <div className="service">
                        <img src={Amritsar} alt="" />
                        <h3>Amritsar Sojourn</h3>
                        <p>BDT 15,000</p>
                        <Link to="">View Details</Link>
                    </div>
                    <div className="service">
                        <img src={Amritsar} alt="" />
                        <h3>Amritsar Sojourn</h3>
                        <p>BDT 15,000</p>
                        <Link to="">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}