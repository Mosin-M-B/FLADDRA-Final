/* eslint-disable react/jsx-key */
import React from "react";

import { Card, card2 } from "./Card.js";
import { Arrowbutton2 } from "../Arrow Button/Arrowbutton.jsx";
import "./Card.css";
export const Cards = () => {
  return (
    <div className="cards">
      {Card.map((item, index) => {
        return (
          <div className="card" key={index}>
            <div className="upper">
              <img src={item.image} alt="img" className="img" />
              <h1 className="title">{item.title}</h1>
              <p className="description">{item.des}</p>
            </div>
            <div className="lower">
              <Arrowbutton2 name={item.btn} url={item.url} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export const Cards2 = () => {
  return (
    <div className="cards">
      {card2.map((item, index) => {
        return (
          <div className="card" key={index} id="card">
            <div className="upper" id="upper">
              <img src={item.image} alt="img" className="img" id="card2" />
            </div>
            <div className="lower" id="lower">
              <h1 id="title">{item.title}</h1>
              <p id="description">{item.des}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
