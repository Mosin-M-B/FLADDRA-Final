/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { PiArrowCircleRightFill } from "react-icons/pi";
import './Arrowbutton.css'
// eslint-disable-next-line react/prop-types
export const Arrowbutton = ({name,url}) =>{
    return(<div className='herobutton'>
      <Link to={url} target="_blank">
        <div style={{display:'flex', justifyContent:'center' ,alignItems:'center'}}>
        <div className='herobtntext'><p >{name}</p></div>
        <div className='herobtnicon'><PiArrowCircleRightFill/></div>
        </div>
        </Link>
      </div>)
}
export const Arrowbutton2 = ({name ,url}) =>{
  return(
    <div className='herobutton' id="arr2">
      <Link to={url} target="_blank">
      <div style={{display:'flex', justifyContent:'center' ,alignItems:'center'}}>
      <div className='herobtntext' style={{color:'black'}}><p className="p">{name}</p></div>
      <div className='herobtnicon'><PiArrowCircleRightFill/></div>
      </div>
      </Link>
    </div>
  )
}

