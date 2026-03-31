import React from "react";
import { FiShoppingCart } from "react-icons/fi";
const Navbar = ({cart}) => {
  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-sm">
    <div className="container mx-auto ">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <a className="cursor-pointer text-3xl bg-linear-to-r from-[#4800f1] to-[#8b02f3] bg-clip-text text-transparent font-bold">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-1 sm:gap-">
          <button className="btn btn-ghost p-2 relative">   {cart.length > 0 && (
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
        {cart.length}
      </span>)}
            <FiShoppingCart className="text-lg"/> 
          </button>
          <a className="btn btn-ghost rounded-full font-semibold bg-linear-to-r from-[#6223f3] to-[#A020F0] text-white sm:bg-none sm:text-current">
            Login
          </a>
          <button>
            <a className="btn rounded-full border-none bg-linear-to-r from-[#6223f3] to-[#A020F0] text-white hover:opacity-90 hidden sm:flex">
              Get Started
            </a>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
