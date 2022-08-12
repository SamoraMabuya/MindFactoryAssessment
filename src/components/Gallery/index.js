/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import galleryItems from './galleryItems.json';
import eatIcon from '../../asset/Group 17.png';
import hotelIcon from '../../asset/Group 18.png';
import flightIcon from '../../asset/Group 19.png';
import arrow from '../../asset/Icon awesome-ar.png';
import Button from '../Tabs';

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

const All = 'All';
const desc = 'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
const Gallery = () => {
  const allCategories = [All, ...new Set(galleryItems.map((item) => item.category))];
  const [menuItem, setMenuItem] = useState(galleryItems);
  const [active, setActive] = useState(All);

  const handleClick = (button) => {
    if (allCategories === All) {
      setMenuItem(galleryItems);
      setActive(button);
      return;
    }
    const filteredData = galleryItems.filter((galleryItem) => galleryItem.category === button);
    setMenuItem(filteredData);
    setActive(button);
  };

  const tabs = {
    button: allCategories,
    handleClick,
    active
  };

    <div className="more">
      <span>
        Learn more
      </span>
      <img src={arrow} alt="more" />
    </div>;
    return (
      <>
        <h2 className="sectionHeading">Section heading here</h2>
        <br />
        <br />
        <Button {...tabs} />
        <div className="galleryContainer">
          {menuItem.map((item) => (
            <div key={item.id} className="gallery">
              <img src={item.avatar} alt={item.alt} />
              <h2>Lorem Ipsum</h2>
              <br />
              <div className="desc">
                {desc}
              </div>
              <br />
              <CardFooter />
            </div>
          ))}
        </div>
      </>
    );
};
export default Gallery;
