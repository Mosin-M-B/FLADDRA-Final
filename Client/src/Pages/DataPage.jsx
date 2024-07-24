import React from "react";

import { Section3Data } from '../Components/Section3/Section3.js'
import Section3 from '../Components/Section3/Section3.jsx'
import HeroSolution from '../Components/HeroPageForSolutions/HeroSolution.jsx'
import {SolutionHeroData} from '../Components/HeroPageForSolutions/Solutions.js'
import CoreCards from '../Components/CoreSolutions/CoreCards.jsx'
import{Solutions} from '../Components/CoreSolutions/data.js'
import TabCircle from "../Components/TabCircle/TabCircle.jsx"
import {TabCircles} from "../Components/TabCircle/Circletabdata.js"
import { Helmet } from "react-helmet";

function DataPage() {
  console.log('Datyaaaaaaaaa', Section3Data)
  return (
    <div>
      <Helmet>
        <title>Data Solutions | Fladdra</title>
      </Helmet>
      <HeroSolution data={SolutionHeroData[0]}/>
      <Section3 data={Section3Data[0]}/>
      <CoreCards data={Solutions[0]}/>
      <TabCircle data={TabCircles[0]}/>
    </div>
  )
}

export default DataPage
