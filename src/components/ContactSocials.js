import * as React from "react";
import "../styles/Socials.css";

class Socials extends React.Component {
    render() {
        let className = "Socials fie";
        if(this.props.place === "headers") className += " Headers";

        return (
            <div className={className}>
                <a href="https://www.twitter.com/ClassyCraft3r" target="_blank" title="Twitter" rel="noreferrer">
                    <i className="bi bi-twitter"></i>
                    <span> Twitter</span>
                </a>
                <a href="https://www.instagram.com/classy.craft3r/" target="_blank" title="Instagram" rel="noreferrer">
                    <i className="bi bi-instagram"></i>
                    <span> Instagram</span>
                </a>
                <a href="https://discord.gg/d7dFSBcumt" target="_blank" title="Discord" rel="noreferrer">
                    <i className="bi bi-discord"></i>
                    <span> Discord</span>
                </a>
                <a href="mailto:contact@classy.works" target="_blank" title="Contact" rel="noreferrer">
                    <i className="bi bi-envelope-fill"></i>
                    <span> E-Mail</span>
                </a>
            </div>
        );
    };
}

export default Socials;