import React,{ useState, useEffect } from "react";
import "./HeroSection.css";
import { Arrowbutton } from "../Arrow Button/Arrowbutton";

export const HeroSection = () => {
  const elements = [
    "Insights",
    "Growth",
    "Innovation",
    "Opportunities",
    "Performance",
    "Decisions",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % elements.length);
        setOpacity(0.1);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, );

  useEffect(() => {
    if (opacity === 0.1) {
      const fadeInTimeout = setTimeout(() => {
        setOpacity(1);
      }, 50);

      const fadeOutTimeout = setTimeout(() => {
        setOpacity(0);
      }, 1050);

      return () => {
        clearTimeout(fadeInTimeout);
        clearTimeout(fadeOutTimeout);
      };
    }
  }, [opacity]);

  return (
    <div className="mainhero">
      <div className="Hero">
        <div className="HeroContent">
          <div className="Heroheadings">
            <h1 className="h1">Turn Data Into</h1>
            <div className="roteting">
              {elements.map((element, index) => (
                <h1
                  key={element}
                  className="innerheding"
                  style={{
                    opacity: currentIndex === index ? opacity : 0,
                    display: currentIndex === index ? "block" : "none",
                  }}
                >
                  {element}
                </h1>
              ))}
            </div>
            <div className="herodes">
              <h2>
                We help enterprise business teams use data, cloud, and AI to
                grow and work more efficiently
              </h2>
            </div>
            <br/>
            <Arrowbutton name={"Go Fladdra Today"} />
            <div className="arrow arrow-up"></div>
            <div className="arrow arrow-down"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
