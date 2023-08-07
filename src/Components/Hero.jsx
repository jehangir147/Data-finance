import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className=" text-white">
      <div className="max-w-[800px] mt-[-96px] px-4 mx-auto justify-center text-center w-full h-screen flex flex-col">
        <p className="text-[#00df9a] font-bold p-1">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className=" md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="md:text-5xl sm:text-2xl text-xl font-bold justify-center py-4 flex">
          <p>Fast, flexible financing for &nbsp;</p>
          <Typewriter
            words={[" BTB", " BTC", " SASS"]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={150}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <p className=" md:text-2xl text-xl font-bold text-gray-500">
          Monitoring your data analytics to increase revenue for BTB, BTC & SASS
          platforms
        </p>
        <button className=" bg-[#00df9a] font-medium rounded-md w-[200px] mx-auto m-4 p-2 text-black">
          {" "}
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
