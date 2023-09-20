import '../../styles/App.css';
import '../../styles/Songs.css';
import * as React from 'react';
import Navbar from "../Navbar";
import PlatformSocials from "../PlatformSocials";
import Footer from "../Footer";

function Contact() {
    return (
        <div className="App">
            <Navbar />
            <header className="App-header">
                <h1 className="App-title">My Songs</h1>
                <PlatformSocials />
            </header>
            <div className="Song-list">
                <div className="Song">
                    <a className="Song-a" rel="noreferrer" href="https://distrokid.com/hyperfollow/adambillard/destroying-me-quit" target="_blank">
                        <h2 className="Song-title">Destroying Me Quit</h2>
                        <img className="Song-image" src="/dmq.webp" alt="Song" />
                    </a>
                </div>
                <div className="Song">
                    <a className="Song-a" rel="noreferrer" href="https://distrokid.com/hyperfollow/adambillard/i-dont-wanna-suffer-again" target="_blank">
                        <h2 className="Song-title">I Don't Wanna Suffer Again</h2>
                        <img className="Song-image" src="/idwsa.webp" alt="Song" />
                    </a>
                </div>
                <div className="Song">
                    <a className="Song-a" rel="noreferrer" href="https://distrokid.com/hyperfollow/adambillard/i-want-a-girlfriend" target="_blank">
                        <h2 className="Song-title">I Want A Girlfriend</h2>
                        <img className="Song-image" src="/iwag.webp" alt="Song" />
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;