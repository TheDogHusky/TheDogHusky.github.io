import '../../styles/App.css';
import '../../styles/Content.css';
import * as React from 'react';
import Navbar from "../Navbar";
import Footer from "../Footer";

function About() {
    return (
        <div className="App">
            <Navbar />
            <header className="App-header">
                <h1 className="App-title">About Me</h1>
                <p className="About-me fie">
                    Hello, my name's Adam Billard. I'm a young French songwriter who sings in English. I'm currently 14 years old, and I've been writing songs since I was 13. I started learning music when I was seven or eight years old with Harp and solfège. After a while, I got tired of making music and stopped for several years. At 13 years old, I needed to learn something on guitar for a school project. So I did. My new passion for music started with that, and from then on, I spent my time learning guitar and writing songs. After that, I took guitar classes with Jesse Hite. I made my first ever song, "I Don't Wanna Suffer Again," while feeling heartbroken and made a studio version with Jesse several months after. Then, I started a band with some friends, and we are holding an end-of-year concert at my middle school. I'm also a developer and am currently learning several different languages and web technologies, including JavaScript. Now I'm here—making songs, developing websites, and enjoying life with music!
                </p>
            </header>
            <Footer />
        </div>
    );
}

export default About;