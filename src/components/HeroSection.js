import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';
 

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/videos/video-2.mp4" autoPlay loop muted/>
        <h2>Hi, my name is</h2>
        <h1>Damaris Poppe.</h1>
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
        
        </div>
    </div>
  )
}

export default HeroSection