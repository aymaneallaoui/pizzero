"use client";
import React from "react";
import { Reveal } from "../utils/Reveal";
import pizza from "./pizza.png";
import Link from "next/link";

function Home() {
  return (
    <div id="home-section">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)",
        }}
      >
        <div className="hero-overlay bg-base-100 bg-opacity-40" />
        <div className="hero-content  text-neutral-content lg:flex-row-reverse ">
          {" "}
          {/* Modified line */}
          <div>
            <Reveal>
              <h1 className="text-5xl font-bold [&::selection]:bg-neutral-focus">
                Hello there
              </h1>
            </Reveal>
            <Reveal>
              <p className="py-6 [&::selection]:bg-neutral-focus ">
                Welcome to our pizza restaurant! Discover a world of flavorful
                pizza creations crafted with care and passion. From traditional
                Margherita to bold and inventive combinations, our menu offers a
                delightful range of options to satisfy your cravings. Join us
                today and let our pizzas transport you to a place of pure
                culinary bliss.
              </p>
            </Reveal>
            <Link href="/order">
              <button className="btn btn-primary [&::selection]:bg-neutral-focus">
                Order now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
