import React from 'react';
import { Link } from 'react-scroll';
import './section2.css';

const Section2 = () => {
    return (
        <div className='section2'>
            <div className="section2Content">
                <h1 className="c2text1">Lets Work Together<br/> 
                <span className="c2Text2">Get in touch</span></h1>
            </div>
            <div className="footer">
                <h4 className="coyright">@Lawrence 2024</h4>
                <div className="footerLinks">
                    <Link className="footerItems">X</Link>
                    <Link className="footerItems">GitHub</Link>
                    <Link className="footerItems">LinkedIn</Link>
                </div>
            </div>
        </div>
    );
}

export default Section2;
