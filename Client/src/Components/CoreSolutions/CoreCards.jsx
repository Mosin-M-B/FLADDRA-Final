import React from "react";
import "./CoreCards.css";
export default function CoreCards({ data }) {
  return (
    <div className="coreCardss">
      <h1>{data.heading}</h1>
      <div className="coreCards">
        {data.element.map((item, index) => {
          return (
            <div className="coreCard" key={index}>
              <div className="coreCardhead">
                <div className="coreCardimg">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="coreCardheading"><h2>{item.title}</h2></div>
              </div>
              <div className="coreCardbody">
                <p>{item.para}</p>
                <span>{item.link}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
