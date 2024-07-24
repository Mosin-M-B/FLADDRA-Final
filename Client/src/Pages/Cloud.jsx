import React from "react";

import HeroSolution from "../Components/HeroPageForSolutions/HeroSolution";
import { SolutionHeroData } from "../Components/HeroPageForSolutions/Solutions.js";
import { Section3Data } from "../Components/Section3/Section3.js";
import Section3 from "../Components/Section3/Section3.jsx";
import CoreCards from "../Components/CoreSolutions/CoreCards.jsx";
import { Solutions } from "../Components/CoreSolutions/data.js";
import { Helmet } from "react-helmet";
import TabCircle from "../Components/TabCircle/TabCircle.jsx";
import { TabCircles } from "../Components/TabCircle/Circletabdata.js";
export default function Cloud() {
  return (
    <div>
      <Helmet>
        <title>Cloud Solutions | Fladdra</title>
      </Helmet>
      <HeroSolution data={SolutionHeroData[1]} />
      <Section3 data={Section3Data[1]} />
      <CoreCards data={Solutions[1]} />
      <TabCircle data={TabCircles[1]} />
    </div>
  );
}
