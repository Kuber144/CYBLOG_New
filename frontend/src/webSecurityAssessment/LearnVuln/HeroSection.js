import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import './HeroSection.css';
import skyGif from '../../img/Sky.gif';
import backVid from '../../videos/video4.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={backVid} autoPlay loop muted />
      {/* <img src={skyGif} alt='Background GIF' className='background-gif' /> */}
      <h1>Learn Vulnerabilities</h1>
      <h2> Learn about the potential security threats in your web applications</h2>
    </div>
  );
}

export default HeroSection;
