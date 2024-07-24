import React from "react";
import whoweare from "../assets/whowearecircle.jpg";
import award1 from "../assets/pic1.png";
import award2 from "../assets/pic2.png";
import award3 from "../assets/pic3.png";
import award4 from "../assets/pic4.png";
import award5 from "../assets/pic5.png";
import { Arrowbutton } from "../Components/Arrow Button/Arrowbutton";
import "./WhoWeAre.css";
import { Helmet } from "react-helmet";

export const WhoWeAre = () => {
  return (
    <>
      <Helmet>
        <title>Who We Are - Fladdra</title>
        <meta
          name="description"
          content="Connect with our team about your upcoming business projects and opportunities."
        />
        <meta
          name="heding"
          content="A More Practical Strategy,A More Flexible Foundation,A More Focused Partner"
        />
      </Helmet>
      <div className="whoweare_hero">
        <div className="whoweare_content">
          <h1 className="text-10xl" style={{ fontWeight: "700" }}>
            A More Practical Strategy.
            <br />
            A More Flexible Foundation.
            <br />A More Focused Partner.
          </h1>

          <p>
            Fladdra helps companies use data, cloud, and AI to discover valuable
            insights and answer critical business questions that drive business
            impact.
          </p>
          <Arrowbutton name={`Let's Connect`} />
        </div>
      </div>

      <div className="whoweare_content1">
        <div className="content1">
          <div className="content1_writing">
            <h1>We help clients use data to drive business impact.</h1>
            <p>
              Our primary focus is helping you find answers to questions about
              your company and discovering fresh insights and techniques to
              drive business impact. With 15+ years of industry experience, we
              help you harness untapped potential, drive robust growth, and
              achieve unparalleled performance efficiency.
            </p>
          </div>

          <div className="content1_img">
            <img src={whoweare} alt="" />
          </div>
        </div>
      </div>

      <div className="Statistics">
        <div className="Statistics-content">
          <h2>Proven Track Record of Driving Business Impact</h2>
          <div className="Stat-number">
            <div className="stat-num stat1">
              <div>
                <p>90</p>
                <p>
                  <span>%</span>
                </p>
              </div>
              <h3>Client Retention Rate</h3>
            </div>
            <div className="stat-num stat2">
              <div>
                <p>70</p>
                <p>
                  <span>+</span>
                </p>
              </div>
              <h3>Net Promoter Score</h3>
            </div>
            <div className="stat-num stat3">
              <div>
                <p>1990</p>
                <p>
                  <span>+</span>
                </p>
              </div>
              <h3>Client Projects</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="whoweare_achievement">
        <div className="content">
          <h1>
            <strong>Award Winning Excellence Delivered</strong>
          </h1>
          <p>
            We’re proud of our track record of driving transformation for our
            clients, our partners, and our industry, and we’re thankful to be
            recognized for our growth and ongoing efforts to create innovative
            technologies with our diverse team.
          </p>
          <div className="awardsPic">
            <div className="Award">
              <img src={award1} alt=""/>
              <br />
              <h2>2017 - 2021 | 2023</h2>
            </div>
            <div className="Award">
              <img src={award2} alt=""/>
              <br />
              <h2>2020 - 2023</h2>
            </div>
            <div className="Award">
              <img src={award3} alt=""/>
              <br />
              <h2>2021 - 2023</h2>
            </div>
            <div className="Award">
              <img src={award4} alt=""/>
              <br />
              <h2>2022 | 2023 </h2>
              <h2>Top Agency Winner</h2>
            </div>
            <div className="Award">
              <img src={award5} alt=""/>
              <br />
              <h2>2022 | 2023 </h2>
              <h2>Best Technology Winner</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
