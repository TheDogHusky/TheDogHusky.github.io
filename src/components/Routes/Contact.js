import '../../styles/App.css';
import * as React from 'react';
import Navbar from "../Navbar";
import ContactSocials from "../ContactSocials";
import Footer from "../Footer";

function Contact() {
    return (
        <div className="App">
            <Navbar />
            <header className="App-header">
                <h1 className="App-title">Contact Me</h1>
                <ContactSocials place="headers" />
            </header>
            <Footer />
        </div>
    );
}

export default Contact;