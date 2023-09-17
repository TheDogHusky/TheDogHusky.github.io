import * as React from 'react';
import '../styles/Content.css';

class Content extends React.Component {
  render() {
    return (
      <div id="scroll" className="Content">
        <h2 className="fie">My New Song</h2>
        <p className="Song-title fie">"Destroying Me Quit", is available on <a className="Song-link" rel="noreferrer" href="https://distrokid.com/hyperfollow/adambillard/destroying-me-quit" target="_blank">EVERY platforms</a>!</p>
        <a href="https://distrokid.com/hyperfollow/adambillard/destroying-me-quit" target="_blank" rel="noreferrer" className="Song-image-a"><img className="Song-image fie" src="/dmq.webp" alt="Song" /></a>
      </div>
    );
  };
}

export default Content;