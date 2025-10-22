import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#F0F0F8] pl-4 sm:pl-8 lg:pl-[159px] pt-7 flex justify-start">
      <a href="#">
        <img src={logo} className="h-6" alt="Sandbox Logo" />
      </a>
    </nav>
  );
};

export default Navbar;
