import '../styles/Navbar.css';
import * as React from 'react';
import logo from '../assets/logo.webp';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="Navbar">
                <div className="Navbar-headers">
                    <img className="Navbar-brand" src={logo} alt="Logo" />
                    <a href="/#/" className="Navbar-brand-title">Adam Billard</a>
                </div>
                <ul className="Navbar-items">
                    <li className="Navbar-item"><a href="/#/" className="Navbar-link">Home</a></li>
                    <li className="Navbar-item"><a href="/#/about" className="Navbar-link">About</a></li>
                    <li className="Navbar-item"><a href="/#/contact" className="Navbar-link">Contact</a></li>
                </ul>
            </nav>
        );
    };
}

export default Navbar;