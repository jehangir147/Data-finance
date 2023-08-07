import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div>
      <div className=" w-full bg-white py-16 px-4 ">
        <div className=" max-w-[1280px] mx-auto grid md:grid-cols-2">
          <img className="w-[500px] mx-auto" src={Laptop} alt="Laptop" />
          <div className=" flex flex-col justify-center mt-4">
            <p className=" text-[#00df9a] font-bold uppercase">
              Data Analytics Dashboard
            </p>
            <h1 className=" md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Manage Data Analytics Centerally
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio,
              quibusdam laborum ut eaque eum nesciunt quae voluptatibus velit
              accusamus dolores facere officia iure consectetur, praesentium
              dolorem reprehenderit illo neque optio?
            </p>
            <button
              className=" text-[#00df9a] bg-black font-medium rounded-md w-[200px] mx-auto md:mx-0
              m-5 p-2 "
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
