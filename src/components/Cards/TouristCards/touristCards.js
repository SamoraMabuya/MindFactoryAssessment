/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import galleryItems from './touristItems.json';
import arrow from '../../../asset/Icon awesome-ar.png';
import TabButtons from '../../Buttons/Tabs';
import CardFooter from './cardFooter';

const All = 'All';
const allCategories = [All, ...new Set(galleryItems.map((item) => item.category))];
const desc = 'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

const TouristCards = () => {
  const [toggleItems, setToggleItems] = useState(galleryItems);
  const [active, setActive] = useState(All);
  const [buttons, setButtons] = useState(allCategories);

  const setEvents = (button) => {
    setToggleItems(galleryItems);
    setButtons(buttons);
    setActive(button);
  };

  const filterCards = (button) => (galleryItems.filter((galleryItem) => galleryItem.category === button));

  const handleClick = (button) => {
    if (button === All) {
      setEvents(button);
    } else {
      setToggleItems(filterCards(button));
      setActive(button);
    }
  };

  const tabs = {
    button: buttons,
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
        <TabButtons {...tabs} />
        <div className="galleryContainer">
          {toggleItems.map((item) => (
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
export default TouristCards;
