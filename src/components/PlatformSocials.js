import * as React from "react";
import "../styles/Socials.css";

class Socials extends React.Component {
    render() {
        let className = "Socials Platform-socials fie";

        return (
            <div className={className}>
                <a className="Spotify-social" href="https://open.spotify.com/intl-fr/artist/6X7S0mL7hoLfO4KvZ5JKfC" target="_blank" title="Spotify" rel="noreferrer">
                    <i className="bi bi-spotify"></i>
                </a>
                <a className="Amazon-music-social" href="https://music.amazon.fr/artists/B0CJ7MBCMK/adam-billard" target="_blank" title="Amazon Music" rel="noreferrer">
                    <i className="bi bi-amazon"></i>
                </a>
                <a className="Apple-music-social" href="https://music.apple.com/us/artist/adam-billard/1707702995" target="_blank" title="Apple Music" rel="noreferrer">
                    <i className="bi bi-apple"></i>
                </a>
                <a className="Deezer-social" href="https://deezer.page.link/z323FFbE4yFQQnfx8" target="_blank" title="Deezer" rel="noreferrer">
                    <i className="bi bi-music-note-list"></i>
                </a>
                <a className="YouTube-music-social" href="https://music.youtube.com/channel/UCAvZuyiIhBwTGR4V_TyIpag" target="_blank" title="YouTube Music" rel="noreferrer">
                    <i className="bi bi-youtube"></i>
                </a>
            </div>
        );
    };
}

export default Socials;