import '../styles/Navbar.css';
import * as React from 'react';
import logo from '../assets/logo.webp';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navButtonActive: false
        };
    };

    changeBtnState() {
        this.setState({ navButtonActive: !this.state.navButtonActive });
    }

    render() {
        const navButtonStyle = this.state.navButtonActive ? "Navbar-menu-btn active" : "Navbar-menu-btn";
        const navContentStyle = this.state.navButtonActive ? "Navbar-content-collapse active" : "Navbar-content-collapse";

        return <nav className="Navbar">
            <div className="Navbar-headers Nav-separator">
                <img className="Navbar-brand" src={logo} alt="Logo" />
                <a href="/#/" className="Navbar-brand-title">Adam Billard</a>
            </div>
            <button className="Navbar-menu" onClick={this.changeBtnState.bind(this)}>
                <div className={navButtonStyle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <div className={navContentStyle}>
                <ul className="Navbar-items Nav-separator">
                    <li className="Navbar-item"><a href="/#/" className="Navbar-link">Home</a></li>
                    <li className="Navbar-item"><a href="/#/about" className="Navbar-link">About</a></li>
                    <li className="Navbar-item"><a href="/#/contact" className="Navbar-link">Contact</a></li>
                    <li className="Navbar-item"><a href="/#/songs" className="Navbar-link">Songs</a></li>
                </ul>
            </div>
        </nav>;
    };
}

export default Navbar;