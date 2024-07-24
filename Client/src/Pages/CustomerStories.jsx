/* eslint-disable react/no-unescaped-entities */
import React from "react";

import "./CustomerStories.css";
import cus1 from "../assets/cus1.png";
import cus2 from "../assets/cus2.png";
import { Helmet } from "react-helmet";

export const CustomerStories = () => {
  return (
    <>
    <Helmet>
    <title> Customer Stories- Fladdra</title>
    <meta name="description" content="Connect with our team about your upcoming business projects and opportunities." />
  </Helmet>
      <div className="CustomerStories_hero">
        <div className="CustomerStories_content">
          <h1>Explore Our Customer's Stories.</h1>
          <p>
            Learn how Fladdra has helped some of the most innovative
            <br />
            companies in the world achieve remarkable success.
          </p>
        </div>
      </div>

      <div className="cus_contents">
        <div className="cus_content cus1">
          <div className="cus1_img">
            <img src={cus1} loading="lazy" alt="" />
          </div>
          <div className="cus1_des">
            <h3>
              Machine Learning Technology Saves Costs & Identifies Operational
              Efficiencies for Pharmaceutical Leader
            </h3>
            <p>
              During the unknowns of COVID, VOC Natural Language Processing
              analysis creates business impact for a healthcare provider.
            </p>
            <div>PHARMACEUTICAL LEADER | HEALTHCARE</div>
          </div>
        </div>
        <div className="cus_content cus2">
          
        <div className="cus1_img">
        <img src={cus2} loading="lazy" alt=""/>
      </div>
      <div className="cus1_des">
        <h3>
        3000% Increase in ROI and $1M Savings from CDP Implementation for Red Hat
        </h3>
        <p>
        Discover how a high-tech client achieved a 3000% increase in ROI and $1 million in savings by implementing a customer data platform (CDP).
        </p>
        <div>RED HAT | HIGH TECH</div>
      </div>
        </div>
      </div>
    </>
  );
};
