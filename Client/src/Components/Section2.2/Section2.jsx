import React from "react";

import industries from "../../assets/AIC.jpg";
import circle from "../../assets/circle.png";
import { Arrowbutton2 } from "../Arrow Button/Arrowbutton";


export const Section2 = () => {
  return (
    <div className="section2" >
      <div className="sectionContent">
      <div className="imgs">
      <img src={industries} alt="Industry Solutions" loading="lazy" id="AIC"/>
      <img src={circle} alt="Rotating Circle" className="circle" id="circle" />
    </div>
        <div className="section2text" style={{marginBottom:'250px' ,marginTop:'200px'}}>
          <h2>Moments That Matter</h2>
          <p>
          Gain visibility into which campaigns drive results, and improve those results by understanding the Moments That Matter. Harness machine learning and marketing insights to analytically uncover key performance metrics.
          </p>
          <Arrowbutton2 name="Find Out How"  />
        </div>
        
      </div>
    </div>
  );
};
