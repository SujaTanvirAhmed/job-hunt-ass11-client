import { Link } from 'react-router-dom';
import "./Header.css";

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="ribbon">
                    <div className="logo">
                        <h2>TourClub</h2>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/auth">Authentication</Link></li>
                        </ul>
                    </nav>
                    <ul className="login">
                        <li><Link to="/auth">Login</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}