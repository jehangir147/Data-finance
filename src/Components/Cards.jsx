import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="bg-white w-full py-[10rem] px-4">
      <div className=" max-w-[1280px] mx-auto grid md:grid-cols-3 gap-4 ">
        <div className=" w-full grid md:col-span-1 my-[50px] shadow-xl rounded-lg justify-center text-center hover:scale-105 duration-300">
          <img className="w-[100px] mt-[-50px] mx-auto" src={Single} alt="" />
          <h3 className=" text-3xl font-bold py-6"> Single User</h3>
          <h1 className="text-5xl font-bold py-6">$149</h1>
          <p className=" border-b border-t border-gray-300 py-2">
            500 GB Storage
          </p>
          <p className=" border-b border-gray-300 py-2">1 User Allowed</p>
          <p className=" border-b border-gray-300 py-2">Send up to 2 GB</p>
          <button className="bg-[#00df9a] text-black w-[200px] font-bold px-6 py-3 rounded-md my-6 mx-auto">
            Start trial
          </button>
        </div>
        <div className=" w-full bg-gray-100 grid md:col-span-1 my-[50px] shadow-xl rounded-lg justify-center text-center hover:scale-105 duration-300">
          <img className="w-[100px]  mt-[-50px] mx-auto" src={Double} alt="" />
          <h3 className=" text-3xl font-bold py-6"> Partnership</h3>
          <h1 className="text-5xl font-bold py-6">$199</h1>
          <p className=" border-b border-t border-gray-300 py-2">
            1 TB Storage
          </p>
          <p className=" border-b border-gray-300 py-2">3 Users Allowed</p>
          <p className=" border-b border-gray-300 py-2">Send up to 10 GB</p>
          <button className="text-[#00df9a] bg-black w-[200px] font-bold px-6 py-3 rounded-md my-6 mx-auto">
            Start trial
          </button>
        </div>
        <div className=" w-full grid md:col-span-1 my-[50px] shadow-xl rounded-lg justify-center text-center hover:scale-105 duration-300">
          <img className="w-[100px] mt-[-50px] mx-auto" src={Triple} alt="" />
          <h3 className=" text-3xl font-bold py-6"> Group Account</h3>
          <h1 className="text-5xl font-bold py-6">$299</h1>
          <p className=" border-b border-t border-gray-300 py-2">
            5 TB Storage
          </p>
          <p className=" border-b border-gray-300 py-2">10 Users Allowed</p>
          <p className=" border-b border-gray-300 py-2">Send up to 20 GB</p>
          <button className="bg-[#00df9a] text-black w-[200px] font-bold px-6 py-3 rounded-md my-6 mx-auto">
            Start trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
