import React from 'react';
import Gallery from '../components/Gallery/index';
import HeadingCards from '../components/HeadingCards/HeadingCards';
import HeroBanner from '../components/HeroBanner/index';
import Navbar from '../components/Navbar/index';
import Footer from '../components/Footer';

const MainPage = () => (
  <>
    <Navbar />
    <HeroBanner />
    <HeadingCards />
    <Gallery />
    <Footer />
  </>

);

export default MainPage;
