import React from "react";
import Novartis from '../../assets/ovartis Logo.jpg';
import seleforce from '../../assets/sale.jpg';
import America from '../../assets/American-Cancer-Society.jpg';
import GameStop from '../../assets/gamestop.jpg';
import michaels from '../../assets/ichaels2.jpg';
import password from '../../assets/Password.jpg';
import cracker from '../../assets/CrackerBarrel.jpg';
import './Client.css';

const clients = [
  { src: Novartis, alt: "Novartis" },
  { src: seleforce, alt: "Salesforce" },
  { src: America, alt: "American Cancer Society" },
  { src: GameStop, alt: "GameStop" },
  { src: michaels, alt: "Michaels" },
  { src: password, alt: "1Password" },
  { src: cracker, alt: "Cracker Barrel" }
];

export const Client = () => {
  return (
    <div className="clientsheding">
      <h1>Our Thriving Enterprise Clients</h1>
      <div className="clientlogo">
        {clients.map((client, index) => (
          <img key={index} src={client.src} alt={client.alt} />
        ))}
      </div>
    </div>
  );
};


