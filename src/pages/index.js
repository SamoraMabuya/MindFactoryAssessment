import React from 'react';
import HeroSection from '../components/HeroSection/heroSection';
import Footer from '../layout/Footer/footer';
import Header from '../layout/header/header';
import ServiceCards from '../components/Cards/ServiceCards/serviceCards';
import TouristCards from '../components/Cards/TouristCards/touristCards';

const MainPage = () => (
  <>
    <Header />
    <HeroSection />
    <ServiceCards />
    <TouristCards />
    <Footer />
  </>

);

export default MainPage;
