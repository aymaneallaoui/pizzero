import React from 'react';
import Navbar from './Navbar/navbar';
import Home from './Home/Home';
import Menu from './Menu/Menu';
import AboutUs from './About/About';
import Footer from './Footer/Footer';

const HomePage = () => {
  return (
    <div >
      <Navbar />
      <Home id="Home" />
      <Menu />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default HomePage;
