import React from "react";
import Typed from "react-typed";
const Main = () => {
  return (
    <div className="flex flex-col  align-center text-white max-w-[850px] mx-auto  ">
      <p className="mt-20 mb-8 text-xl text-[#00df9a] mx-auto  font-bold">
        GROWING WITH DATA ANALYTICS
      </p>
      <p className="md:text-7xl sm:text-6xl text-4xl  font-bold mx-auto mb-12">
        Grow with data
      </p>
      <div className="flex mb-8 self-center">
        <p className="md:text-5xl sm:text-4xl text-xl font-bold">
          Fast,flexible financing for data
        </p>
        <Typed
          className="md:text-5xl sm:text-4xl text-xl font-bold pl-2"
          strings={["BTB", "BTC", "SASS"]}
          typeSpeed={200}
          backSpeed={200}
          loop
        />
      </div>
      <p className="md:text-2xl text-xl font-bold text-center text-gray-400">
        Monitor your data analytics to increase revenue for BTB, BTC, & SASS
        platforms.
      </p>
      <button className="mt-4 mb-44 text-black hover:opacity-70  max-w-[200px] px-8 py-2 rounded mx-auto bg-[#00df9a]">
        Get Started
      </button>
    </div>
  );
};

export default Main;
