import React from "react";
import "./style.css";
import nest from "../assets/Nest_logo.png";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <div
      className="lg:flex lg:flex-row lg:justify-between lg:px-10 lg:py-3  bg-[#1A191C]"
      id="menuBar"
    >
      <div className=" lg:flex lg:space-x-14 justify-center items-center">
        {/* <p className="text-[#13CDEA] lg:text-3xl">nest</p> */}
        <img src={nest} alt="logo" className="lg:h-7" />
        <input
          className=" bg-[#2F2E31] px-4 outline-none h-7 lg:w-60 rounded-md text-xs"
          placeholder="search..."
          type="text"
        />
      </div>
      <div className=" lg:flex lg:space-x-7 text-white justify-center items-center">
        <i class="fa-solid fa-sun "></i>
        <i class="fa-brands fa-facebook-messenger"></i>
        <p className="text-white lg:text-xl">
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default MenuBar;
