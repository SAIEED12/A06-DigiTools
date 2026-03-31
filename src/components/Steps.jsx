import React from "react";
import userImg from "../assets//user.png";
import packageImg from "../assets//package.png";
import rocketImg from "../assets//rocket.png";
const Steps = () => {
  return (
    <div className="bg-base-200 p-14 mt-30 mb-30">
      <div className="container mx-auto text-center  mb-4">
        <h2 className="text-5xl font-bold mb-4">Get Started in 3 Steps</h2>
        <p className="text-[#627382]">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4 px-8 container mx-auto">
        <div className="card bg-base-100 w-full shadow-sm">
          <div className="relative">
            <span className="absolute top-4 right-4 bg-linear-to-r from-[#6223f3] to-[#A020F0] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center p-4">
              01
            </span>
          </div>
          <figure className="px-10 pt-10">
            <img
              src={userImg}
              alt="User"
              className=" bg-purple-100 h-20 w-20 p-4 rounded-full mt-10"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Create Account</h2>
            <p className="text-[#627382]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-sm">
          <div className="relative">
            <span className="absolute top-4 right-4 bg-linear-to-r from-[#6223f3] to-[#A020F0] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center p-4">
              02
            </span>
          </div>
          <figure className="px-10 pt-10">
            <img
              src={packageImg}
              alt="Package"
              className="bg-purple-100 h-20 w-20 p-4 rounded-full mt-10"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Choose Products</h2>
            <p className="text-[#627382]">Browse our catalog and select the tools that fit your needs.</p>
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-sm ">
          <div className="relative">
            <span className="absolute top-4 right-4 bg-linear-to-r from-[#6223f3] to-[#A020F0] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center p-4">
              03
            </span>
          </div>
          <figure className="px-10 pt-10 ">
            <div className="bg-purple-100 h-18 w-18 p-4 rounded-full flex items-center justify-center mt-10">
              <img src={rocketImg} alt="Rocket" className="w-full h-full" />
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Start Creating</h2>
            <p className="text-[#627382]">Download and start using your premium tools immediately.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
