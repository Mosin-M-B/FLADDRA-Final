import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { Footer } from "./Components/Footer/Footer";
import { Solution } from "./Pages/Solution";
import DataPage from "./Pages/DataPage.jsx";
import AI from "./Pages/AI.jsx";
import Cloud from "./Pages/Cloud.jsx";
import { OurThinking } from "./Pages/OurThinking.jsx";
import {CustomerStories} from "./Pages/CustomerStories.jsx"
import { GetInTouch} from './Pages/GetInTouch'
import { WhoWeAre } from "./Pages/WhoWeAre";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="solution">
            <Route path="" element={<Solution />} />
            <Route path="data" element={<DataPage />} />
            <Route path="cloud" element={<Cloud />} />
            <Route path="ai" element={<AI />} />
          </Route>
          <Route path="getin" element={<GetInTouch/>}/>
          <Route path="whowe" element={<WhoWeAre/>}/>
          <Route path="our" element={<OurThinking/>}/>
          <Route path="cus" element={<CustomerStories/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
