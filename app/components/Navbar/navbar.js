"use client";
import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="top-0 navbar bg-base-100 backdrop-filter backdrop-blur-lg bg-opacity-30 fixed w-full shadow-lg z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <motion.button onClick={() => smoothScrollTo('home-section')}>
                Home
              </motion.button>
            </li>
            <li>
              <motion.button onClick={() => smoothScrollTo('menu-section')}>
                Menu
              </motion.button>
            </li>
            <li>
              <motion.button onClick={() => smoothScrollTo('AboutUs-section')}>
                About Us
              </motion.button>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">PIZZARO</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="home-section" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="menu-section" smooth={true} duration={500}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="AboutUs-section" smooth={true} duration={500}>
              About Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">order a pizza</a>
      </div>
    </div>
  );
};

export default Navbar;
