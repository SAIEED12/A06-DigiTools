import React from "react";
import bannerImg from "../assets/banner.png";
const Banner = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row container mx-auto items-center gap-10 md:gap-20 mt-10 md:mt-20 px-4">
        <div className="left">
          <div className="bg-[#E1E7FF] rounded-full p-2 w-80 flex justify-center mb-4">
            <p className="bg-linear-to-r from-[#4800f1] to-[#8b02f3] bg-clip-text text-transparent flex items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.2"
                  width="16"
                  height="16"
                  rx="8"
                  fill="url(#paint0_linear_2_340)"
                />
                <rect
                  opacity="0.4"
                  x="2"
                  y="2"
                  width="12"
                  height="12"
                  rx="6"
                  fill="url(#paint1_linear_2_340)"
                />
                <rect
                  x="5"
                  y="5"
                  width="6"
                  height="6"
                  rx="3"
                  fill="url(#paint2_linear_2_340)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_340"
                    x1="-5.10067"
                    y1="8.91954"
                    x2="16.009"
                    y2="8.60591"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4F39F6" />
                    <stop offset="1" stop-color="#9514FA" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2_340"
                    x1="-1.8255"
                    y1="8.68966"
                    x2="14.0068"
                    y2="8.45443"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4F39F6" />
                    <stop offset="1" stop-color="#9514FA" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_2_340"
                    x1="3.08725"
                    y1="8.34483"
                    x2="11.0034"
                    y2="8.22722"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4F39F6" />
                    <stop offset="1" stop-color="#9514FA" />
                  </linearGradient>
                </defs>
              </svg>
              New: AI-Powered Tools Available
            </p>
          </div>
          <h2 className="font-bold text-4xl sm:text-7xl mb-8">
            Supercharge Your <br />
            <span className="bg-linear-to-r from-[#4800f1] to-[#8b02f3] bg-clip-text text-transparent">
              Digital Workflow
            </span>
          </h2>
          <p className="text-[#627382] mb-6">
            Access premium AI tools, design assets, templates, and productivity
            <br />
            software—all in one place. Start creating faster today.
          </p>
          <div className="flex gap-8">
            <button className="btn rounded-full border-none bg-linear-to-r from-[#6223f3] to-[#A020F0] text-white hover:opacity-90">
              Explore Products
            </button>
            <button className="group btn rounded-full border border-purple-500 bg-white hover:bg-purple-700/75 transition-all">
              <span
                className="bg-linear-to-r from-[#4800f1] to-[#8b02f3] bg-clip-text text-transparent font-bold 
    group-hover:bg-none group-hover:text-white flex gap-2"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3195 8.67734L7.06328 1.79218C6.82722 1.64827 6.55721 1.56957 6.2808 1.56412C6.00439 1.55866 5.73148 1.62664 5.48992 1.76112C5.24837 1.8956 5.04682 2.09176 4.90585 2.32958C4.76488 2.56741 4.68953 2.83838 4.6875 3.11484V16.8851C4.68953 17.1616 4.76488 17.4326 4.90585 17.6704C5.04682 17.9082 5.24837 18.1044 5.48992 18.2389C5.73148 18.3733 6.00439 18.4413 6.2808 18.4359C6.55721 18.4304 6.82722 18.3517 7.06328 18.2078L18.3195 11.3226C18.5465 11.1845 18.7341 10.9902 18.8643 10.7586C18.9945 10.527 19.0628 10.2657 19.0628 9.99999C19.0628 9.73428 18.9945 9.47303 18.8643 9.24139C18.7341 9.00974 18.5465 8.8155 18.3195 8.67734ZM6.5625 16.3164V3.68359L16.8875 9.99999L6.5625 16.3164Z"
                    fill="url(#paint0_linear_2_353)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2_353"
                      x1="0.104758"
                      y1="10.9697"
                      x2="19.0721"
                      y2="10.7296"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#4F39F6" />
                      <stop offset="1" stop-color="#9514FA" />
                    </linearGradient>
                  </defs>
                </svg>
                Watch Demo
              </span>
            </button>
          </div>
        </div>
        <div className="right flex-col flex">
          <img src={bannerImg} alt="Banner" className="w-full h-auto" />
        </div>
      </div>

<div className="bg-linear-to-r from-[#4800f1] to-[#8b02f3] mt-20 mb-20 flex flex-col md:flex-row justify-center items-center gap-0 px-6 py-4 md:py-0 md:gap-10 lg:gap-20">
  
  <div className="p-8 space-y-4 text-center md:text-left">
    <h2 className="text-white font-extrabold text-5xl">50K+</h2>
    <p className="text-white/80 text-xl">Active Users</p>
  </div>

  <div className="w-32 h-px md:w-px md:h-16 bg-white/30" />

  <div className="p-8 space-y-4 text-center">
    <h2 className="text-white font-extrabold text-5xl">200+</h2>
    <p className="text-white/80 text-xl">Premium Tools</p>
  </div>

  <div className="w-32 h-px md:w-px md:h-16 bg-white/30" />

  <div className="p-8 space-y-4 text-center">
    <h2 className="text-white font-extrabold text-5xl">4.9</h2>
    <p className="text-white/80 text-xl">Rating</p>
  </div>

</div>

    </div>
  );
};

export default Banner;
