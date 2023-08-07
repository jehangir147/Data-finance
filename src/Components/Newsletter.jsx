import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full text-white py-16 px-4">
      <div className=" max-w-[1280px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 py-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter & stay up to date.</p>
        </div>
        <div className=" my-4">
          <div className=" flex flex-col sm:flex-row justify-between items-center">
            <input
              className="py-5 my-4 rounded-md w-full text-black"
              type="email"
              placeholder="Enter Your Email"
            />
            <button className="bg-[#00df9a] text-black w-[200px] font-medium px-6 py-3 rounded-md my-6 ml-4">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our &nbsp;
            <span className=" text-[#00df9a]">privacy policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
