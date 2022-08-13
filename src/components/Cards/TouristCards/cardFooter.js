import React from 'react';
import eatIcon from '../../../asset/Group 17.png';
import hotelIcon from '../../../asset/Group 18.png';
import flightIcon from '../../../asset/Group 19.png';
import arrow from '../../../asset/Icon awesome-ar.png';

const imgIcons = [
  {
    id: 1,
    icon: hotelIcon,
    alt: 'hotel'
  },

  {
    id: 2,
    icon: eatIcon,
    alt: 'eat'

  },

  {
    id: 3,
    icon: flightIcon,
    alt: 'flight'

  }
];
const More = () => (
  <div className="more">
    <span>
      Learn more
    </span>
    <img src={arrow} alt="more" />
  </div>
);
const CardFooter = () => (
  <div className="cardFooter">
    <div className="iconGroup">
      {imgIcons.map((item) => (
        <img key={item.id} src={item.icon} alt={item.alt} />
      ))}
    </div>
    <More />
  </div>

);

export default CardFooter;
