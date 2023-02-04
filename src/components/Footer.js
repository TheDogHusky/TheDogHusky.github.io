import * as React from 'react';
import '../styles/Footer.css';
import Socials from './Socials';

class Footer extends React.Component {
    render() {
        return (
        <footer className="Footer">
            <p>© Adam Billard | All rights reserved | Website made with ❤️ by Adam Billard</p>
            <Socials />
        </footer>
        );
    };
}

export default Footer;