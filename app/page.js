import React from 'react';
import Navbar from './Navbar/navbar';
import Home from './Home/Home';
import AboutUs from './About/About';
import Footer from './Footer/Footer';
import PizzaMe from './Menu/Menu';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <PizzaMe />
      <AboutUs />
      <Footer />
    </>
  );
}

export default HomePage;
