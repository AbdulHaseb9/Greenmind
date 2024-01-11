import blackimg from "../assets/img/herosec/Rectangle 2.png";
import planthandimg from "../assets/img/herosec/unsplash_cLaaxa4DSnc-removebg-preview 1.png";

import React from "react";

export const Hero = () => {
  return (
    <div className="px-5 md:px-12">
      <div className="px-5 bg-[#C1DCDC] md:flex py-8 rounded-md">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-semibold">
            Buy your <br /> dream plants
          </h1>
          <div className="flex items-center gap-4 my-5 justify-center md:justify-start">
            <span className="text-2xl">
              50+ <br />
              <span className="text-base"> Plant Species</span>
            </span>
            <span>
              | <br />
              | <br />
            </span>
            <span className="text-2xl">
              100+ <br />
              <span className="text-base">Customers</span>
            </span>
          </div>
          <div className="flex justify-center md:block">
            <div className="bg-white px-3 py-2 rounded-md flex items-center justify-between w-[242px] relative">
              <input
                type="text"
                className="outline-none bg-transparent w-[80%]"
                placeholder="What are you looking for?"
              />
              <i className="fa fa-magnifying-glass bg-[#C1DCDC] p-[6px] mx-1 rounded absolute right-1"></i>
            </div>
          </div>
        </div>
        <div className="w-full h-[230px] md:h-auto md:w-1/2 flex justify-center relative">
          <img src={blackimg} className="w-64 absolute -bottom-8" />
          <img src={planthandimg} className="w-56 absolute -bottom-8" />
        </div>
      </div>
    </div>
  );
};
