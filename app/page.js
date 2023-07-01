import React from 'react';
import Navbar from './Navbar/navbar';
import Home from './Home/Home';
import Menu from './Menu/Menu';
import AboutUs from './About/About';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Menu />
      <AboutUs />
    </>
  );
}

export default HomePage;
