import React from "react";

import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" w-full max-w-[1280px] py-16 px-4 mx-auto text-gray-400">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h1 className="w-full mb-4  text-3xl font-bold text-[#00df9a]">
            React.
          </h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            consectetur obcaecati, repellat ab eveniet voluptates assumenda
            excepturi sunt fugit molestiae.
          </p>
          <div className="flex pt-3 my-6 md:max-w-[75%] justify-between ">
            <FaFacebookSquare size={30} />
            <FaTwitterSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className="flex md:col-span-2 justify-between md:pr-6">
          <div>
            <ul>
              <li>Solutions</li>
              <li className="py-2">Analytics</li>
              <li className="py-2">Marketing</li>
              <li className="py-2">Commerce</li>
              <li className="py-2">Insights</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Support</li>
              <li className="py-2">Pricing</li>
              <li className="py-2">Documentation</li>
              <li className="py-2">Guides</li>
              <li className="py-2">API Status</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Company</li>
              <li className="py-2">About</li>
              <li className="py-2">Blog</li>
              <li className="py-2">Jobs</li>
              <li className="py-2">Press</li>
              <li className="py-2">Partners</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Legal</li>
              <li className="py-2">Claim</li>
              <li className="py-2">Policy</li>
              <li className="py-2">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
