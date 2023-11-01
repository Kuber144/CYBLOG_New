import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import skyGif from "../img/Sky.gif";
import backVid from "../videos/video1.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={backVid} autoPlay loop muted />
      {/* <img src={skyGif} alt='Background GIF' className='background-gif' /> */}
      <h1>Sorry!! Website is under construction</h1>
      {/* <p>
        {" "}
        Scan Websites, Perform active and Passive Scans, and Collaborate to
        remove Vulnerabilities
      </p> */}
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>

      </div> */}
    </div>
  );
}

export default HeroSection;
