import React, { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav((prev) => !prev);
  };
  return (
    <div className="mx-auto w-11/12 h-24 bg-custom text-white flex justify-between items-center ">
      <h1 className="ml-24 text-[#00df9a] text-3xl font-bold">REACT</h1>
      <ul className="hidden md:flex">
        <li className="p-5 ">Home</li>
        <li className="p-5">Company</li>
        <li className="p-5">Resources</li>
        <li className="p-5">About</li>
        <li className="p-5">Contact</li>
      </ul>
      <div onClick={handleNav} className="md:hidden cursor-pointer">
        {nav ? (
          <i className="fa-solid fa-bars text-xl"></i>
        ) : (
          <i className="fa-solid fa-xmark text-xl"></i>
        )}
      </div>
      <ul
        className={
          nav
            ? "fixed -left-full top-0 ease-in-out duration-500 w-3/5 h-full "
            : " fixed left-0 top-0 h-full w-2/5 bg-custom border-r-2 border-r-gray-900 ease-in-out duration-500 "
        }
      >
        <h1 className="p-5  text-[#00df9a] text-3xl font-bold cursor-pointer">
          REACT
        </h1>
        <li className="p-5 border-b border-[#00df9a] ">Home</li>
        <li className="p-5 border-b border-[#00df9a] ">Company</li>
        <li className="p-5 border-b border-[#00df9a] ">Resources</li>
        <li className="p-5 border-b border-[#00df9a] ">About</li>
        <li className="p-5 border-b border-[#00df9a] ">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
