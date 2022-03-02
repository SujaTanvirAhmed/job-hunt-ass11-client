import { Link } from "react-router-dom";
import "./Services.css";

export const Services = () => {
    return (
        <div className="services">
            <div className="container">
                <h2 className="feature-title">Journeys on the horizon</h2>
                <div className="service-group">
                    <div className="service">
                        <img src="https://i.ibb.co/HHK6xQX/amritsar.jpg" alt="amritsar" border="0" />
                        <h3>Amritsar Sojourn</h3>
                        <p>BDT 43,000</p>
                        <Link to="">View Details</Link>
                    </div>
                    <div className="service">
                        <img src="https://i.ibb.co/7rR64H3/andaman.jpg" alt="andaman" border="0" />
                        <h3>Island Hopping in Andaman</h3>
                        <p>BDT 53,000</p>
                        <Link to="">View Details</Link>
                    </div>
                    <div className="service">
                        <img src="https://i.ibb.co/W2X15hk/pondicherry.jpg" alt="pondicherry" border="0" />
                        <h3>French Touch In Pondicherry</h3>
                        <p>BDT 37,000</p>
                        <Link to="">View Details</Link>
                    </div>
                    <div className="service">
                        <img src="https://i.ibb.co/HCwRwvq/kashmir.jpg" alt="kashmir" border="0" />
                        <h3>Kashmir-Paradise on Earth (With Flights)</h3>
                        <p>BDT 65,000</p>
                        <Link to="">View Details</Link>
                    </div>
                    <div className="service">
                        <img src="https://i.ibb.co/vvk9Kmv/turkey.jpg" alt="turkey" border="0" />
                        <h3>Turkish Delight</h3>
                        <p>BDT 99,000</p>
                        <Link to="">View Details</Link>
                    </div>
                    <div className="service">
                        <img src="https://i.ibb.co/0Dd2pG0/srilanka.jpg" alt="srilanka" border="0" />
                        <h3>Splendid Sri Lanka</h3>
                        <p>BDT 72,000</p>
                        <Link to="">View Details</Link>
                    </div>
                    <div className="service">
                        <img src="https://i.ibb.co/k3Ln7Cb/meghalaya.jpg" alt="meghalaya" border="0" />
                        <h3>Offbeat Trails of Kaziranga & Meghalaya</h3>
                        <p>BDT 74,000</p>
                        <Link to="">View Details</Link>
                    </div>
                    <div className="service">
                        <img src="https://i.ibb.co/ZLGL0r2/kerala.jpg" alt="kerala" border="0" />
                        <h3>WOW Wellness @ Kerala</h3>
                        <p>BDT 53,000</p>
                        <Link to="">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}