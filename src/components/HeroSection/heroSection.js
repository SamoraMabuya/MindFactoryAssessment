import React from 'react';
import heroImage from '../../asset/lalo-hernandez-.png';
import ActionButton from '../Buttons/ActionButton/actionButtons';

const buttonObj = [
  {
    id: 1,
    text: 'Button One',
    className: 'buttonOne'
  },
  {
    id: 2,
    text: 'Button Two',
    className: 'buttonTwo'

  }
];

const Headings = () => (
  <>
    <header>Main content here</header>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi eget mauris pharetra. Amet risus nullam eget felis eget nunc lobortis. Purus in massa tempor nec. Porta nibh venenatis
    </p>
  </>

);
const WhiteBanner = () => (
  <div className="whiteBanner">
    <div className="content">
      <p className="callToAction">
        Lorem Ipsum Dolor Sit
      </p>
      <div className="buttonGroup">
        {buttonObj.map((item) => (
          <ActionButton
            key={item.id}
            actionBtnStyle={item.className}
            text={item.text}
          />
        ))}
      </div>
    </div>

  </div>
);
const HeroSection = () => (
  <div className="bannerWrapper">
    <div className="overlay" />
    <div className="heroContentWrapper">
      <Headings />
      <br />
      <WhiteBanner />
    </div>
    <img className="bannerImg" src={heroImage} alt="Avatar" />
  </div>
);

export default HeroSection;
