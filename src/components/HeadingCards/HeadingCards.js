import React from 'react';
import '../../styles/styles';
import headingItems from './headingItems.json';

const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.';
const HeadingCards = () => (
  <div className="cardContainer">
    {headingItems.map((item) => (
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
export default HeadingCards;
