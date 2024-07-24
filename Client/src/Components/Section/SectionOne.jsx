import React from "react";

import "./SectionOneStyle.css";


 export const SectionOne = ({h2,h3,para}) => {
  return (
    <>
      <section className="sectionOne">
        <div className="rotateimg"></div>
        <div className="s1c">
          <div className="innersection">
            <div className="innersectionheading">
              <h2>{h2}</h2>
            </div>
            <div className="sectioncontent">
              <p>
                {para}
              </p>
              <h3>{h3}</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SectionOne;
