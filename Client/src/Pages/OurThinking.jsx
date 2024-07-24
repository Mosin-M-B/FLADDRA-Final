import React from "react";
import "./OurThinking.css";
import { ThinkFuture } from "../Components/ThinkFuture/ThinkFuture";
import { Cards2 } from "../Components/Card/Cards";
import { Helmet } from "react-helmet";

const evaluations = [
  {
    title: "Business Transformation Evaluation",
    description:
      "Learn where the challenges lie to building a dynamic, insightful data culture at your company.",
  },
  {
    title: "Martech Evaluation",
    description:
      "Step one on your journey to realizing better marketing impact and business outcomes.",
  },
];

const newsletters = [
  {
    title: "The Further Observer",
    description1:
      "Catch the latest industry trends we're watching and get new insights from our thought leaders delivered directly to your inbox each month.",
    description2: "MONTHLY NEWSLETTER",
  },
  {
    title: "Data Privacy",
    description1:
      "From privacy laws to data compliance, our CIPT-certified privacy leaders help you navigate the quickly changing privacy landscape.",
    description2: "MONTHLY NEWSLETTER",
  },
  {
    title: "Webinars & Videos",
    description1:
      "Replay helpful and informative content from the Further Education Community and our YouTube channels by subscribing here.",
    description2: "ON-DEMAND VIDEOS",
  },
];

export const OurThinking = () => {
  return (
    <>
      <Helmet>
        <title>Our Thinking-Fladdra</title>
        <meta
          name="description"
          content="Connect with our team about your upcoming business projects and opportunities."
        />
      </Helmet>
      <div className="ourthinking_hero">
        <div className="ourthinking_content">
          <h1>
            Ignite Your Imagination,
            <br />
            Redefine Your Limits.
          </h1>
          <p>
            Explore our thinking and insights across the leading edge of data,
            cloud, and AI.
          </p>
        </div>
      </div>
      <ThinkFuture />
      <div className="infocards">
        {evaluations.map((item, index) => {
          return (
            <div className="infocard" key={index}>
              <p className="card-title">{item.title}</p>
              <p className="small-desc">{item.description}</p>
              <div className="go-corner">
                <div className="go-arrow">→</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="card_section">
        <Cards2 />
      </div>
      <div className="infocards">
        {newsletters.map((item, index) => {
          return (
            <div className="infocard" key={index}>
              <p className="card-title">{item.title}</p>
              <p className="small-desc">{item.description1}</p>
              <div className="go-corner">
                <div className="go-arrow">→</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
