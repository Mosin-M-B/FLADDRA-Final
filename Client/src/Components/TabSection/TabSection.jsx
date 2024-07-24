import React,{ useState } from "react";
import TabButton from "./TabButton";
import { Arrowbutton } from "../Arrow Button/Arrowbutton.jsx";
import { EXAMPLES } from "./data.js";
import "./TabSection.css";

export const TabSection = () => {
  const [selectedTopic, setSelectedTopic] = useState("Data");


  const handleSelect = (selectedButton) => {
   
    setTimeout(() => {
      setSelectedTopic(selectedButton);
    }, 900); // Duration should match the CSS transition time
  };



  return (
    <section className="tabsection">
      <div className="tabsContent">
        <menu>
          {["Data", "Cloud", "AI"].map((topic) => (
            <TabButton
              key={topic}
              isSelected={selectedTopic === topic}
              onSelect={() => handleSelect(topic)}
            >
              {topic}
            </TabButton>
          ))}
        </menu>
        <div className="tabright">
          <div id="tab-content">
            <p>Our Solution</p>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <ul style={{ listStyle: "disc", listStyleType:'disc' }}>
              {EXAMPLES[selectedTopic].description.map((value, index) => (
                <li key={index} style={{ listStyle: "disc" }}>
                  {value}
                </li>
              ))}
            </ul>
            <br/>
            <a href={EXAMPLES[selectedTopic].url} target="blank">
            <Arrowbutton name={"Learn More"} url={EXAMPLES[selectedTopic].url} /> 
            </a>
          </div>
          <div className="tabsimg">
            <img src={EXAMPLES[selectedTopic].img} alt={selectedTopic} />
          </div>
        </div>
      </div>
    </section>
  );
};
