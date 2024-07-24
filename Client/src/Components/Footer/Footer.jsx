import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer>
      <div className="footercontent" style={{textDecoration:'none'}}>
        <div className="footerleft">
          <Link to="/">
            <div className="flogo ">
              <h1>Fladdra</h1>
              <img src={logo} alt=""/>
            </div>
          </Link>
          <div className="fsocial">
            <a href="https://www.linkedin.com/company/fladdra" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',color:'white'}}>
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/fladdraglobal?igsh=MXFmbTV2OGdmZTJkZg==" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',color:'white'}}>
              <FaSquareInstagram />
            </a>
            <a href="https://www.facebook.com/share/45DcopaPWxnpZeJz/?mibextid=qi2Omg" rel="noopener noreferrer" target="_blank" style={{textDecoration:'none', color:'white'}}>
              <FaFacebookSquare />
            </a>
            <a href="https://x.com/FladdraGlobal?t=1JE8jOIRLBZAMHZ8j-fIkQ&s=09" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none' , color:'white'}}>
              <FaSquareXTwitter />
            </a>
          </div>
          <div className="fcontact">
            <div className="number">
              <MdOutlineLocalPhone /> <p> 9881109889</p>
            </div>
            <div className="mail">
              <MdOutlineAlternateEmail />
              <p>info@fladdra.com</p>
            </div>
            <div className="mail" style={{ marginTop: "20px" }}>
              <FaLocationDot />
              <p> Fladdra The Core lattitude NIBM Pune 411048</p>
            </div>
          </div>
        </div>
        <div className="footerright">
          <div className="rightleft">
            <h3>Solutions</h3>
            <ol style={{listStyleType:'none'}}>
              <li>
                <Link to="solution/data" style={{textDecoration:'none',color:'white'}}>Data</Link>
              </li>
              <li><Link to="solution/cloud" style={{textDecoration:'none',color:'white'}}>Cloud</Link></li>
              <li><Link to="solution/ai" style={{textDecoration:'none',color:'white'}}>AI</Link></li>
            </ol>
            <div
              style={{
                backgroundColor: "white",
                width: "226px",
                height: "1.5px",
                marginTop: "10px",
              }}
            ></div>
            <h3 style={{ marginTop: "20px" }}>Industries</h3>
            <ol  style={{listStyleType:'none'}}>
              <li>Healthcare</li>
              <li>Financial Services</li>
              <li>Higher Education</li>
              <li>High-Tech</li>
              <li>B2C</li>
            </ol>
            <div
              style={{
                backgroundColor: "white",
                width: "226px",
                height: "1.5px",
                marginTop: "10px",
              }}
            ></div>
            <h3 style={{ marginTop: "10px" }}>Technology</h3>
            <div
              style={{
                backgroundColor: "white",
                width: "226px",
                height: "1.5px",
                marginTop: "10px",
              }}
            ></div>
          </div>
          <div className="rightright">
            <h3>Partners</h3>
            <ol  style={{listStyleType:'none'}}>
              <li>Adobe</li>
              <li>Google</li>
              <li>Salesforce</li>
            </ol>
            <div
              style={{
                backgroundColor: "white",
                width: "226px",
                height: "1.5px",
                marginTop: "10px",
              }}
            ></div>
            <h3 style={{ marginTop: "20px" }}>Who We Are</h3>

            <ol  style={{listStyleType:'none'}}>
              <li>News</li>
              <li>Events</li>
              <li>Join The Team</li>
            </ol>
            <div
              style={{
                backgroundColor: "white",
                width: "226px",
                height: "1.5px",
                marginTop: "10px",
              }}
            ></div>
            <h3 style={{ marginTop: "10px" }}>Our Thinking</h3>
            <ol  style={{listStyleType:'none'}}>
              <li>Think Further Blog</li>
              <li>Further Education</li>
              <li>Resources</li>
            </ol>

            <div
              style={{
                backgroundColor: "white",
                width: "226px",
                height: "1.5px",
                marginTop: "10px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </footer>
  );
};
