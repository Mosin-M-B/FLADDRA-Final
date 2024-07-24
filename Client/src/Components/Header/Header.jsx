import React from "react";

import './Header.css'
import logo from "../../assets/logo.png"
export const Header = () =>{
    return(
        <header className="header">
            <div className="tagline">
                <h1>Fladdra is now part of <span>Future</span></h1> <p className='link_readmore'><a href="#">READ MORE</a></p>
            </div>
            <div className='logosection'>
                <div className='brandlogo '><img src={logo} alt="brand_logo" loading='lazy'/></div>
            </div>
        </header>)
}