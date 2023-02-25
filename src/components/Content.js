import * as React from 'react';
import '../styles/Content.css';

class Content extends React.Component {
  render() {
    return (
      <div id="scroll" className="Content">
        <h2>My New Song</h2>
        <p className="Song-title">"I Don't Wanna Suffer Again", being released on February 26!</p>
        <a href="https://www.youtube.com/watch?v=Hal46x0INes"><img className="Song-image" src="/idwsa.webp" alt="Song Image" /></a>
        <h2 className="fie">About Me</h2>
        <p className="About-me fie">
            Hey! My name's Adam Billard. I am mostly known as ClassyCrafter. I'm a young musician and developer aspiring to be a professional artist. I started learning guitar and piano at 13 years old some years after learning solfege. I started making music several months later with my first song "I Don't Wanna Suffer Again." Then, I started a band with some of my friends, and we are making an end-of-year concert at my middle school.
        </p>
      </div>
    );
  };
}

export default Content;