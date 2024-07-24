import React from "react";
import './Partner.css'
import google from '../../assets/google.jpg'
import saleforce from '../../assets/saleforce.jpg'
import adobe from '../../assets/adobe.jpg'
import { Arrowbutton2 } from '../Arrow Button/Arrowbutton'
const imgs=[
    {
        img:saleforce
    },{
        img:adobe
    },
    {
        img:google
    }
]
export const Partner = () => {
  return (
    <>
      <div className="partner-section">
        <div className="psi">
          <div className="psi-heding">
            <h1 className="psi-heding-h1">We Partner With The Best</h1>
          </div>
          <div className="psi-text">
            <p className="psi-text-p">
              As a top-tier certified partner of Google, Adobe, Salesforce, and
              other key platforms, we provide clients with licensing, training,
              and managed services to maximize ROI and improve operational
              efficiency.
            </p>
          </div>
          <div className="psi-logos">
                {
                    imgs.map((img,index)=>{
                        return <img key={index} src={img.img} alt="partner" style={{width:'100px', height:'100px'}} />
                    })
                }
          </div>
          <div className='psi-btn'>
                <Arrowbutton2 name={'Lern More'}/>
          </div>
        </div>
      </div>
    </>
  );
};
