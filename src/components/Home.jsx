import React from "react";
import Navbar from "./Navbar";
import Part2 from "./Part2";
import Part3 from "./Part3";
import Part4 from "./Part4";
import Part5 from "./Part5";
import Part6 from "./Part6";
import Part7 from "./Part7";
import Part8 from "./Part8";
import Footer from "./Footer";
import Part1 from "./Part1";
import ProgressBar from "./ProgressBar";

const Home = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />
      <Part6 />
      <Part7 />
      <Part8 />
      <Footer />
      <ProgressBar />
    </div>
  );
};

export default Home;
