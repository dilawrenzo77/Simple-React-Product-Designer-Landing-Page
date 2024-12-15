import React from 'react';
import { Link } from 'react-scroll';
import "./intro.css";

const Intro = () => {
    return (
        <div className='intro'>
            <nav className="navBar">
                <Link className="navItems">Home</Link>
                <Link className="navItems">Profile</Link>
                <Link className="navItems">Contact</Link>
            </nav>
            <h1 className="introText">A brand and product<br/> designer working with<br/> clients globally</h1>
            <nav className="NavBar2">
                <Link className="navItems2">Expertise</Link>
                <Link className="navItems2">Branding</Link>
                <Link className="navItems2">Products</Link>
                <Link className="navItems2">Design Systems</Link>
            </nav>
        </div>
    );
}

export default Intro;
