import React from "react";
import { HeroSection } from "../Components/HeroSection/HeroSection";
import { Client } from "../Components/ClientofCompany/Client";
import { Section2 } from "../Components/Section2/Section2";
import { TabSection } from "../Components/TabSection/TabSection";
import { ArrSectionOne } from "../Components/Section/One.js";
import { ThinkFuture } from "../Components/ThinkFuture/ThinkFuture.jsx";
import { Helmet } from "react-helmet";
import {SectionOne} from "../Components/Section/SectionOne.jsx";
export const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Fladdra</title>
        <meta
          name="description"
          content="Connect with our team about your upcoming business projects and opportunities."
        />
      </Helmet>
      <HeroSection />
      <Client />
      <SectionOne
        h2={ArrSectionOne.h2}
        h3={ArrSectionOne.h3}
        para={ArrSectionOne.para}
      />
      <TabSection />
      <Section2 />
      <ThinkFuture />
    </>
  );
};
