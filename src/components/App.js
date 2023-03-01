import '../styles/App.css';
import * as React from 'react';
import Index from './Routes/Index';
import About from './Routes/About';
import Contact from './Routes/Contact';

function App(props) {
    React.useEffect(() => {
        const event = new Event('rendered');
        document.dispatchEvent(event);
    }, []);

    switch(props.route) {
        case 'index':
            return <Index />
        case 'about':
            return <About />
        case 'contact':
            return <Contact />
        default:
            return <Index />
    }
}

export default App;
