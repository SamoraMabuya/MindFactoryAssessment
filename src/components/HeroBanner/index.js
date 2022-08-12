import React from 'react';
import heroImage from '../../asset/lalo-hernandez-.png';

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
const WhiteBanner = () => (
  <div className="whiteBanner">
    <div className="content">
      <p>
        Lorem Ipsum Dolor Sit
      </p>
      <div className="buttonGroup">
        {buttonObj.map((item) => <button key={item.id} className={item.className} type="button">{item.text}</button>)}
      </div>
    </div>

  </div>
);
const HeroBanner = () => (
  <div className="bannerWrapper">
    <div className="overlay" />
    <div className="heroContentWrapper">
      <h1>Main content here</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi eget mauris pharetra. Amet risus nullam eget felis eget nunc lobortis. Purus in massa tempor nec. Porta nibh venenatis
      </p>
      <br />
      <WhiteBanner />
    </div>

    <img className="bannerImg" src={heroImage} alt="Avatar" />
  </div>
);

export default HeroBanner;
