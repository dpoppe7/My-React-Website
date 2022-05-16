import React from 'react';
import '../../App.css';
import AboutSection from '../AboutSection';
import HeroSection from '../HeroSection';

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