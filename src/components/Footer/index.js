import React from 'react';
import FaceBookIcon from '../../asset/facebook.png';
import LinkedinIcon from '../../asset/LinkedIn .png';
import InstagramIcon from '../../asset/Instagram .png';

const socialIcons = [{
  id: 1,
  image: FaceBookIcon,
  alt: 'FaceBookIcon'
},
{
  id: 2,
  image: LinkedinIcon,
  alt: 'LinkedinIcon'

},
{
  id: 3,
  image: InstagramIcon,
  alt: 'InstagramIcon'

}

];
const copyRight = 'Copyright © 2022 Exigent. All rights reserved';
const Footer = () => (
  <div
    className="footerContainer"
  >
    <div className="copyRight">
      <span>
        {copyRight}
      </span>
    </div>
    <br />
    <div className="socialIcons">
      {socialIcons.map((item) => (
        <img key={item.id} src={item.image} alt={item.alt} />
      ))}
    </div>
  </div>
);
export default Footer;
