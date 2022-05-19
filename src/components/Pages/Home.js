import React from 'react';
import '../../App.css';
import ProjectsSection from '../ProjectsSection';
import AboutSection from '../AboutSection';
import HeroSection from '../HeroSection';
import { HashLink as Link } from 'react-router-hash-link';


function Home() {
    return (
        <div>  
            <HeroSection/>
            <div>  
                 <AboutSection/>
                <div>  
                    <ProjectsSection/>
                </div>
            </div>
        </div>
    )
}

export default Home;