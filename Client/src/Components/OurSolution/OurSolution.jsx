import React from "react";
import './OurSolution.css'
import {Cards} from '../Card/Cards'
export const OurSolution = () =>{
   return <>
    <div className="OSM">
        <div className="OSMI">
            <div className="OSMIH">
                <h1>Our Solution</h1>
                <p>Our solutions help you build the capabilities and capacity you need to use data to its fullest potential. We empower you to solve problems, use your data with purpose, build your capacity, and create competitive advantage. We support you at any point in the process, regardless of your goals or existing situation.</p>
            </div>
            <div className="OSMID">
                <Cards/>
            </div>
        </div>
    </div>
   </>
}