import * as React from "react";
import "../styles/Socials.css";

class Socials extends React.Component {
    render() {
        return (
        <div className="Socials">
            <a href="https://www.twitter.com/ClassyCraft3r" target="_blank" title="Twitter" rel="noreferrer">
                <i className="bi bi-twitter"></i>
            </a>
            <a href="https://www.instagram.com/classy.craft3r/" target="_blank" title="Instagram" rel="noreferrer">
                <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@classy.craft3r" target="_blank" title="YouTube" rel="noreferrer">
                <i className="bi bi-youtube"></i>
            </a>
            <a href="https://discord.gg/d7dFSBcumt" target="_blank" title="Discord" rel="noreferrer">
                <i className="bi bi-discord"></i>
            </a>
            <a href="mailto:contact@classy.works" target="_blank" title="Contact" rel="noreferrer">
                <i className="bi bi-envelope-fill"></i>
            </a>
            <a href="https://classy.works" target="_blank" title="Links" rel="noreferrer">
                <i className="bi bi-link-45deg"></i>
            </a>
        </div>
        );
    };
}

export default Socials;