import React from "react";
import "./Solution.css";
import { Section2 } from "../Components/Section2.2/Section2";
import { ArrSectionTwo} from "../Components/Section/One.js";
import { Arrowbutton } from "../Components/Arrow Button/Arrowbutton";
import { OurSolution } from "../Components/OurSolution/OurSolution.jsx";
import { Partner } from "../Components/Partner/Partner.jsx";
import { Helmet } from "react-helmet";
import {SectionOne}from "../Components/Section/SectionOne"

export const Solution = () => {
  return (
    <>
      <Helmet>
        <title>Solution - Fladdra</title>
        <meta
          name="description"
          content="Connect with our team about your upcoming business projects and opportunities."
        />
      </Helmet>
      <div className="SolutionHero">
        <div className="SolutionContent">
          <h1>
            Unlock the Potential.
            <br />
            Harness the Power.
            <br />
            Embrace the Future.
          </h1>
          <p>
            We use data, cloud, and AI to help innovative companies find new
            business opportunities, make smart decisions, and drive business
            impact.
          </p>
          <Arrowbutton name={"GO Fladdra Today"} />
        </div>
      </div>

      <SectionOne
        h2={ArrSectionTwo.h2}
        h3={ArrSectionTwo.h3}
        para={ArrSectionTwo.para}
      />
      <OurSolution />
      <Section2 />
      <Partner />
    </>
  );
};
