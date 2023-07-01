"use client";
import React from 'react';
import { Reveal } from '../utils/Reveal';

const AboutUs = () => {
  return (
    <div className="p-10 flex flex-col md:flex-row" id='AboutUs-section'>
      <div className="flex-none w-full md:w-1/3">
        <img
          className="mb-5 rounded-lg max-w-full h-auto"
          src='https://cdn.vox-cdn.com/thumbor/p3GjD-7suCuZWD7nH6ZUoWACP_g=/0x0:9467x6311/1200x800/filters:focal(3977x2399:5491x3913)/cdn.vox-cdn.com/uploads/chorus_image/image/69323734/Side_Piece_2___Anthony_Mair.0.jpg'
          alt="About Us"
        />
      </div>
      <div className="md:ml-5 md:w-2/3">
        <Reveal>
        <h2 className="text-3xl font-bold mb-5">About Us</h2>
        </Reveal>
        <Reveal>
        <p className="mb-5">
          At our small pizza restaurant, we're passionate about crafting delicious and authentic pizzas. We believe in using the freshest ingredients and traditional techniques to create pizzas that are bursting with flavor.
        </p>
        </Reveal>
        <Reveal>
        <p className="mb-5">
          Our dough is made in-house daily, allowing it to rise slowly and develop a perfect texture. We carefully select the finest locally sourced produce to top our pizzas, ensuring a vibrant and mouthwatering experience with each bite.
        </p>
        </Reveal>
        <Reveal>
        <p className="mb-5">
          Whether you prefer classic Margherita, indulgent Meat Lovers, or unique combinations that push the boundaries of taste, we have a pizza to satisfy every craving. Our menu also includes a variety of appetizers, salads, and desserts, all crafted with the same dedication to quality and flavor.
        </p>
        </Reveal>
        <Reveal>
        <p className="mb-5">
          We take pride in providing a cozy and welcoming atmosphere for our guests. Our friendly staff is always ready to assist you in choosing the perfect pizza and ensuring an enjoyable dining experience. Whether you dine in, take out, or opt for delivery, we strive to deliver exceptional service and outstanding food.
        </p>
        </Reveal>
        <Reveal>
        <p className="mb-5">
          Come visit us and experience the true taste of authentic, handcrafted pizzas. We look forward to serving you and becoming your go-to destination for pizza cravings!
        </p>
        </Reveal>
      </div>
    </div>
  );
};

export default AboutUs;