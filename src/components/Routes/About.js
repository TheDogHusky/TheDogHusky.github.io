import '../../styles/App.css';
import '../../styles/Content.css';
import * as React from 'react';
import Navbar from "../Navbar";
import Footer from "../Footer";

function About(props) {
    return (
        <div className="App">
            <Navbar />
            <header className="App-header">
                <h1 className="App-title">About Me</h1>
                <p className="About-me fie">
                    Hello, my name's Adam Billard. I'm a young French songwriter singing in English. I'm currently 14 years old and I've been writing songs since I was 13. So here's a little story about me. I started music at like 7-8 years old with Harp and solfege. Then I stopped music because I got tired of it, and stopped everything for several years. At 13 years old, for a school project, I needed to learn something on guitar. So I did. My new music passion started with that, and from this time I passed days learning guitar and songs. After that, I took guitar classes with Jesse Hite. I made my first ever song, "<a href="https://www.youtube.com/watch?v=Hal46x0INes" rel="noreferrer" target="_blanck">I don't wanna suffer again</a>" while having big love problems and made a studio version with Jesse several months after. Then, I started a band with some of my friends, and we are making an end-of-year concert at my middle school. I'm also a developer, and I'm currently learning several different languages including JavaScript and web technologies. And now I'm here, making songs and developing, enjoying life with music!
                </p>
            </header>
            <Footer />
        </div>
    );
}

export default About;