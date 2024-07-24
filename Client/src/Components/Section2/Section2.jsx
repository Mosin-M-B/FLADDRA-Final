import React from "react";

import industries from "../../assets/IndustrySolutions.jpg";
import circle from "../../assets/circle.png";
import { Arrowbutton2 } from "../Arrow Button/Arrowbutton";
import "./Section2.css";

export const Section2 = () => {
  return (
    <div className="section2">
      <div className="sectionContent">
        <div className="imgs">
          <img src={industries} alt="Industry Solutions" loading="lazy" />
          <img src={circle} alt="Rotating Circle" className="circle" id="circle" />
        </div>
        <div className="section2text">
          <h2>Tailored Industry Solutions</h2>
          <p>
            In todays rapidly evolving landscape, the demand for innovative
            data, cloud, and AI solutions is higher than ever. Our customized
            industry solutions are designed to help financial services,
            high-tech, higher education, healthcare, and B2C companies:
          </p>
          <div className="sec2ol">
          <ol>
            <li >Increase leads & conversion rates</li>
            <li>Improve customer engagement & retention</li>
            <li>Optimize the customer journey</li>
            <li>Drive decisions with advanced analytics</li>
            <li>Optimize their tech stack</li>
          </ol>
          </div>
          <Arrowbutton2 name="Find Out How"  />
        </div>
      </div>
    </div>
  );
};
