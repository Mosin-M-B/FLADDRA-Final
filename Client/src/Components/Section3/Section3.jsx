/* eslint-disable react/prop-types */
import React from "react";
import './Section3.css'
export default function Section3( {data} ) {
  return (
    <div className="section3">
      <div className="section3Content">
        <div className="leftside">
          <img src={data.img} alt=""/>
          <p>{data.heding}</p>
        </div>
        <div className="rightside">
          <h1>{data.title}</h1>
          <ul>
            {data.list.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ul>
        </div>
        <div className="riteside"></div>
      </div>
    </div>
  );
}
