import React from "react";
import Laptop from "../assets/laptop.jpg";
const Manage = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col bg-white md:flex-row w-10/12 mx-auto min-h-[200px] ">
        <img
          src={Laptop}
          className="max-w-[500px] max-h-[400px] mt-16"
          alt="laptop"
        />
        <div className="bg-white flex flex-col md:mt-16 px-16 py-20 w-full ">
          <p className="text-[#00df9a] font-bold mb-4 ">
            DATA ANALYTICS DASHBOARD
          </p>
          <p className="md:text-4xl sm:text-3xl text-2xl font-bold pb-6">
            Manage Data Analytics Centrally
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className="bg-black px-2 py-3 my-6 w-[200px] rounded text-[#00df9a] hover:opacity-80">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Manage;
