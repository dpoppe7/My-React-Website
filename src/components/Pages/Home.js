import React from 'react';
import '../../App.css';
import AboutSection from '../AboutSection';
import HeroSection from '../HeroSection';
import { HashLink as Link } from 'react-router-hash-link';


function Home() {
    return (
        <div>  
            <HeroSection/>
            <div>  
                 <AboutSection/>
            </div>
        </div>
    )
}

export default Home;