import React from "react";

const Notify = () => {
  return (
    <div className="text-white max-w-full flex flex-col lg:flex-row min-h-[300px]">
      <div className="flex flex-col p-4 w-full lg:w-7/12 align-center justify-center">
        <p className="md:text-4xl sm:text-3xl text-2xl font-bold my-4 text-center">
          Want tips & tricks to optimize your flow?
        </p>
        <p className="text-center">
          Sign up to our newsletter and stay up to date.
        </p>
      </div>
      <div className="flex flex-col p-8 max-w-full lg:w-5/12  align-center justify-center">
        <div className="flex ml-2 my-4">
          <input
            type="email"
            placeholder="Enter Email"
            className="outline-none rounded-md text-black p-1 md:p-3 ml-8 md:ml-12 mr-4"
          />
          <button className="bg-[#00df9a] p-1 text-sm md:px-4 md:py-3 font-bold text-black rounded-md hover:opacity-80">
            Notify Me
          </button>
        </div>
        <div className="flex flex-col ml-12  md:ml-16">
          <p className="font-medium">
            We care about the protection of your data. Read our
          </p>
          <p className="text-[#00df9a]">Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Notify;
