import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-group">
                    <div>
                        <h3 className="footer-header">Explore</h3>
                        <ul>
                            <li><Link to="#">Upcoming Trips</Link></li>
                            <li><Link to="#">Blog</Link></li>
                            <li><Link to="#">Personalized Trip</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="footer-header">Company</h3>
                        <ul>
                            <li><Link to="#">Our Story</Link></li>
                            <li><Link to="#">Contact Us</Link></li>
                            <li><Link to="#">Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="footer-header">Terms & Conditions</h3>
                        <ul>
                            <li><Link to="#">Terms & Conditions</Link></li>
                            <li><Link to="#">Cancellation Policy</Link></li>
                            <li><Link to="#">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="footer-header">Contact us</h3>
                        <ul>
                            <li><Link to="#">+91-9871921623</Link></li>
                            <li><Link to="#">hello@wowclub.in</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="socio-links">
                    <h3>Follow us on</h3>
                    <ul>
                        <li>facebook</li>
                        <li>twitter</li>
                        <li>instagram</li>
                    </ul>
                </div>

                <p>Copyright © All Rights reserved 2022</p>
            </div>
        </footer>
    );
}