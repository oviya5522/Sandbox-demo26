import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0   z-50 bg-[#F0F0F8] px-8 pt-7">
      <a href="#" className="">
        <img src={logo} className="h-6 pl-25" alt="Sandbox Logo"/>
      </a>
    </nav>
  );
};

export default Navbar;
