/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { Arrowbutton2 } from "../Arrow Button/Arrowbutton.jsx";
import "./HeroSolution.css";

export default function HeroSolution({ data }) {
  return (
    <div className="HeroSolution">
      <div className="HeroSolutionContent">
        <p>
          <Link to="/solution">{data.parentpage}</Link>
          <IoIosArrowForward /> {data.currentpage}
        </p>
        <h1>{data.heading}</h1>
        <span>
        {data.des}
        </span>
            <Arrowbutton2 name={"GO Fladdra Today"}/>
      </div>
    </div>
  );
}
