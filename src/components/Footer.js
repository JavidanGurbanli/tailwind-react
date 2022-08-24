import React from "react";

const Footer = () => {
  return (
    <div className="w-9/12 mx-auto min-h-[330px] flex flex-col md:flex-row justify-around align-center text-white">
      <div className="max-w-[400px]">
        <p className="text-3xl font-bold text-[#00df9a] p-4 pt-16">REACT</p>
        <p className=" text-[#aac3d1] pl-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className=" text-[#aac3d1] flex pl-4 py-4 justify-between w-10/12 ">
          <i className="fa-brands fa-square-facebook text-3xl"></i>
          <i className="fa-brands fa-instagram text-3xl"></i>
          <i className="fa-brands fa-square-twitter text-3xl"></i>
          <i className="fa-brands fa-square-github text-3xl"></i>
          <i className="fa-brands fa-square-dribbble text-3xl"></i>
        </div>
      </div>
      <div className="flex w-11/12 justify-around">
        <div className=" pt-8 m-2  text-center">
          <h4 className="pt-8 pb-2 text-[#aac3d1]">Solutions</h4>
          <p className="py-2">Analytics</p>
          <p className="py-2">Marketing</p>
          <p className="py-2">Commerce</p>
          <p className="py-2">Insights</p>
        </div>
        <div className=" pt-8 text-center m-2 ">
          <h4 className="pt-8 pb-2 text-[#aac3d1]">Support</h4>
          <p className="py-2">Pricing</p>
          <p className="py-2">Documentation</p>
          <p className="py-2">Guides</p>
          <p className="py-2">API Status</p>
        </div>
        <div className=" pt-8 text-center m-2 ">
          <h4 className="pt-8 pb-2 text-[#aac3d1]">Company</h4>
          <p className="py-2">About</p>
          <p className="py-2">Blog</p>
          <p className="py-2">Jobs</p>
          <p className="py-2">Press</p>
          <p className="py-2">Careers</p>
        </div>
        <div className=" pt-8 text-center m-2 ">
          <h4 className="pt-8 pb-2 text-[#aac3d1]">Legal</h4>
          <p className="py-2">Claim</p>
          <p className="py-2">Policy</p>
          <p className="py-2">Terms</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
