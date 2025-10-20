import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { IoIosArrowRoundUp } from "react-icons/io";

const ProgressBar = () => {
  const [scroll, setScroll] =useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; 
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScroll(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 w-16 h-16 z-50">
       <div className="fixed bottom-5 right-5 w-9 h-9 z-50">
      {/* prg-bar */}
      <CircularProgressbar
        value={scroll}
        styles={buildStyles({
          pathColor: "#605dba",
          trailColor: "#e0e0e0",
        })}
      />
      
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
        <IoIosArrowRoundUp className="text-[#605dba] w-6 h-6" />
      </div>
    </div>
    </div>
  );
};

export default ProgressBar;
