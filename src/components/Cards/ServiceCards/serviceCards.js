import React from 'react';
import serviceItems from './serviceItems.json';

const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.';
const ServiceCards = () => (
  <div className="cardContainer">
    {serviceItems.map((item) => (
      <div className="card" key={item.id}>
        <div className="imageWrapper">
          <img className="headImg" src={item.avatar} alt="Avatar" />
        </div>
        <br />
        <div>
          <h3>H2 Heading</h3>
          <p>{paragraph}</p>
        </div>
      </div>
    ))}
  </div>
);
export default ServiceCards;
