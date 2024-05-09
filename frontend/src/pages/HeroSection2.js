import React from "react";
import backVid from "../videos/video3.mp4";
import "./HeroSection2.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={backVid} autoPlay loop muted className="video-background" />
      <div className="content">
        <h1>Welcome to CySecLearn!</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p className="centered-text">
          This is a community of cybersecurity executives dedicated to
          peer-driven collaboration, knowledge sharing, and technology
          education.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
