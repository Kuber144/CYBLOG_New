import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import skyGif from '../img/Sky.gif';
import backVid from '../videos/video1.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={backVid} autoPlay loop muted />
      {/* <img src={skyGif} alt='Background GIF' className='background-gif' /> */}
      <h1>WEB SECURITY ASSESSMENT</h1>
      <h2> Scan Websites, Perform active and Passive Scans, and Collaborate to remove Vulnerabilities </h2>
    </div>
  );
}

export default HeroSection;
