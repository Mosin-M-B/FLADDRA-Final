import './ThinkFuture.css';
import React from "react";

import { ThinkFutureCardData } from './ThinkFutureCardData';

export const ThinkFuture = () => {
    return (
        <div className="Future">
            <div className="FutureContent">
                <h1>Think Future Blog</h1>
                <p>Think Further, our blog, features perspectives and educational content from our award-winning thought leaders and experts.</p>
                <div className="future_cards">
                    {ThinkFutureCardData.map((item, index) => (
                        <div className='Thinkcard' key={index}>
                            <div className='Thinkcard_img'>
                                <img src={item.img} alt="img" />
                                <div className='Thinkcard_overlay'>
                                    <p>{item.des}</p>
                                </div>
                            </div>
                            <div className='Thinkcard_data'>
                                <h2>{item.h1}</h2>
                                <h3>{item.sub}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
