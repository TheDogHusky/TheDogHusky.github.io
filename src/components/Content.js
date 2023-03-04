import * as React from 'react';
import '../styles/Content.css';

class Content extends React.Component {
  render() {
    return (
      <div id="scroll" className="Content">
        <h2 className="fie">My New Song</h2>
        <p className="Song-title fie">"I Don't Wanna Suffer Again", is available on <a className="Song-link" rel="noreferrer" href="https://soundcloud.com/adambillard/idwsa" target="_blank">SoundCloud</a> and <a className="Song-link" href="https://youtu.be/Hal46x0INes" rel="noreferrer" target="_blank">YouTube</a>!</p>
        <a href="https://www.youtube.com/watch?v=Hal46x0INes" target="_blank" rel="noreferrer" className="Song-image-a"><img className="Song-image fie" src="/idwsa.webp" alt="Song" /></a>
      </div>
    );
  };
}

export default Content;