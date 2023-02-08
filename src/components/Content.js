import * as React from 'react';
import '../styles/Content.css';

class Content extends React.Component {
  render() {
    return (
      <div id="scroll" className="Content">
        <h2 className="fade-in-enabled">About Me</h2>
        <p className="AboutMe fade-in-enabled">
            Hey! My name's Adam Billard. I am mostly known as ClassyCrafter. I'm a young musician and developer aspiring to be a professional artist. I started learning guitar and piano at 13 years old some years after learning solfege. I started making music several months later with my first song "I Don't Wanna Suffer Again." Then, I started a band with some of my friends, and we are making an end-of-year concert at my middle school.
        </p>
      </div>
    );
  };
}

export default Content;