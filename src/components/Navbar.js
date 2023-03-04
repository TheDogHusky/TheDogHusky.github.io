import '../styles/Navbar.css';
import * as React from 'react';
import logo from '../assets/logo.webp';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.ref0 = React.createRef();
        this.ref1 = React.createRef();
        this.ref2 = React.createRef();
    };

    navAppear() {
        const nav = this.ref0.current;
        const navItems = this.ref1.current;
        const appearButton = this.ref2.current;
        this.switchDisplay(navItems, 'flex');
        this.switchClassBetween('bi-list', appearButton.firstChild, 'bi-x');
        this.switchClass(nav, 'Nav-active');
    }

    switchClassBetween(className, element, className2) {
        if (element.classList.contains(className)) {
            element.classList.replace(className, className2);
        } else {
            element.classList.replace(className2, className);
        }
    }

    switchClass(element, className) {
        if (element.classList.contains(className)) {
            element.classList.remove(className);
        } else {
            element.classList.add(className);
        }
    }

    switchDisplay(element, displayType) {
        if (element.style.display === 'none') {
            element.style.display = displayType;
        } else {
            element.style.display = 'none';
        }
    }

    updateDisplay() {
        const navItems = this.ref1.current;
        if (window.innerWidth < 768) {
            navItems.style.display = 'none';
        } else {
            navItems.style.display = 'flex';
        }
    }

    render() {
        const elems = [];
        const navHeaders = <div className="Navbar-headers Nav-separator" key="navbar-headers">
            <img className="Navbar-brand" src={logo} alt="Logo" />
            <a href="/#/" className="Navbar-brand-title">Adam Billard</a>
        </div>;
        elems.push(navHeaders);
        const style = {
            display: window.innerWidth < 768 ? 'none' : 'flex'
        };
        const navItems = <ul className="Navbar-items Nav-separator" key="navbar-items" style={style} ref={this.ref1}>
            <li className="Navbar-item"><a href="/#/" className="Navbar-link">Home</a></li>
            <li className="Navbar-item"><a href="/#/about" className="Navbar-link">About</a></li>
            <li className="Navbar-item"><a href="/#/contact" className="Navbar-link">Contact</a></li>
        </ul>;
        elems.push(navItems);
        window.addEventListener('resize', this.updateDisplay.bind(this));
        const btn = <button className="Navbar-appear-button" onClick={this.navAppear.bind(this)} ref={this.ref2} key="navbar-appear-btn"><i className="bi bi-list"></i></button>;
        elems.push(btn);

        return <nav className="Navbar" ref={this.ref0}>{elems}</nav>;
    };
}

export default Navbar;