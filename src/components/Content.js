import * as React from 'react';
import '../styles/Content.css';

class Content extends React.Component {
  render() {
    return (
      <div id="scroll" className="Content">
        <h2>About Me</h2>
        <p className="AboutMe">Hey! My name's Adam Billard. I am mostly known as ClassyCrafter. I'm a young musician and developer inspiring to be a professional artist. I started learning guitar at 13 years old, some years after learning solfege. I learnt piano too (at the same time). I started making music several months later with my first music "I don't wanna suffer again". Then, I made a band with some of my friends and we are making an end-of-year concert at my middle school.</p>
      </div>
    );
  };
}

export default Content;