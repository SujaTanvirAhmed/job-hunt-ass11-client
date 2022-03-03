import { Link } from 'react-router-dom';
import "./Header.css";

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="ribbon">
                    <div className="logo">
                        <h2><Link to="/">TourClub</Link></h2>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/profile">Manage Orders</Link></li>
                            <li><Link to="/dashboard">Manage All Orders</Link></li>
                            <li><Link to="/auth">Authentication</Link></li>
                        </ul>
                    </nav>
                    <ul className="login">
                        <li><Link to="/contact" className="nav-login-btn">Login</Link></li>
                    </ul>
                </div>
            </div>
            {/* <div className="header-bg"></div> */}
        </header>
    );
}