import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import codeEditorImage from "../../src/img/CodeEditor.jpg";
import scanningImage from "../../src/img/vulnScanning.png";
import learningImage from "../../src/img/VulnLearn.png";

function Cards() {
  return (
    <div className="cards">
      <h1> Web Security Assessment Features</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={scanningImage}
              text="Scan Websites for Vulnerabilities and generate Report"
              label="Scan Websites"
              path="/Coming"
            />
            <CardItem
              src={learningImage}
              text="Learn about different Vulnerabilities and Threats"
              label="Learn Vulnerabilities"
              path="/Learn"
            />
            <CardItem
              src={codeEditorImage}
              text="Work on Projects with fellow developers with Realtime Interaction"
              label="Real-Time Shared Code editor"
              externalLink={true}
              path="https://realtime-fronted.vercel.app/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
