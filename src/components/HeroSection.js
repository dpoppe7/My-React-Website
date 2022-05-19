import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

function HeroSection() {
  return (
    <div className='hero-container' id="hero-section">
        <video src="/videos/video-2.mp4" autoPlay loop muted/>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp" offset={500}>  
        <h2>Hi, my name is</h2>
        <h1>Damaris Poppe.</h1>
        </ScrollAnimation>
        <p>I'm a Computer Science student focusing in designing and building creative things for the web. I'm currently working on different front-end projects.</p>
        <h2>Welcome to my portfolio!</h2>
        <div container className='hero-btns'>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
            >
                CONTACT
            </Button>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp" initiallyVisible={true} offset={100} className="scroll">
            <span>Scroll</span>
        </ScrollAnimation>
        </div>
    </div>
  )
}

export default HeroSection