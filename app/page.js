import React from 'react';

import AboutUs from './components/About/About';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/Home';
import PizzaMe from './components/Menu/Menu';

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
