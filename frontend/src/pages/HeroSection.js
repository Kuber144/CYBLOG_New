import React from 'react';
import '../App.css';
import { Button } from '../webSecurityAssessment/Button.js';
import './HeroSection.css';
import backVid from '../videos/video2.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={backVid} autoPlay loop muted />
      {/* <img src={skyGif} alt='Background GIF' className='background-gif' /> */}
      <h1>Scan Websites</h1>
      <h2> Perform Passive Scan on single or multiple websites to detect web security threats and vulnerabilities </h2>
    </div>
  );
}

export default HeroSection;
