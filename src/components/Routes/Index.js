import logo from '../../assets/logo.webp';
import '../../styles/App.css';
import * as React from 'react';
import Content from '../Content';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Socials from "../Socials";

function Index() {
    React.useEffect(() => {
        const event = new Event('rendered');
        document.dispatchEvent(event);
    }, []);

    return (
        <div className="App">
            <Navbar />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title"><span className="App-title-special">Adam Billard</span>, young musician.</h1>
                <Socials place="headers" />
                <a className="App-scroll-button" href="#scroll" title="Scroll"><i className="bi bi-chevron-down"></i></a>
            </header>
            <Content />
            <Footer />
        </div>
    );
}

export default Index;
