import { logDOM } from '@testing-library/dom';
import React, { useState } from 'react';
import {Link} from "react-scroll";
import './Navbar.css';
import {Button} from './Button';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return(
    <nav className="navbar">
        <div className="navbar-container">
            <Link to='/'>
                <img src="icons/logo.png" alt="Logo" className="navbar-logo" onClick={closeMobileMenu}/>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link 
                        to="hero-section" 
                        spy={true} 
                        smooth={true} 
                        offset={50} 
                        duration={500} 
                        className='nav-links' 
                        onClick={closeMobileMenu}
                    >
                        HOME
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link 
                        to="about-section" 
                        spy={true} 
                        smooth={true} 
                        offset={50} 
                        duration={500} 
                        className='nav-links' 
                        onClick={closeMobileMenu}
                    >
                        ABOUT
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link 
                        to="projects-section" 
                        spy={true} 
                        smooth={true} 
                        offset={50} 
                        duration={500} 
                        className='nav-links' 
                        onClick={closeMobileMenu}
                    >
                        PROJECTS
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link 
                        to='/contact' 
                        spy={true} 
                        smooth={true} 
                        offset={50} 
                        duration={500} 
                        className='nav-links' 
                        onClick={closeMobileMenu}
                    >
                        CONTACT
                    </Link>
                </li>
                <li>
                    <Link 
                        to="hero-section" 
                        spy={true} 
                        smooth={true} 
                        offset={50} 
                        duration={500} 
                        className='nav-links-mobile' 
                        onClick={closeMobileMenu}
                    >
                        RESUME
                    </Link>
                </li>

            </ul>
            {button && <Button buttonStyle='btn--outline'>RESUME</Button>}
        </div>
        
    </nav>
    
    )
}

export default Navbar