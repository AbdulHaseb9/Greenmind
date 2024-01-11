import naturalimg from "../assets/img/categories/Frame 36.png";
import plantimg from "../assets/img/categories/Frame 38.png";
import artificialimg from "../assets/img/categories/Frame 37.png";

import React from "react";

export const Categories = () => {
  return (
    <>
      <div className="text-center">
        <h2 className="text-lg font-bold">Categories</h2>
        <p className="text-[#9e9e9e] text-sm mb-16">
          Find what you are looking for
        </p>
      </div>
      <div className="w-full bg-[#C1DCDC]">
        <div className="h-full px-5 md:px-12 py-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 relative place-items-center">
          <div className="text-center w-52 my-3">
            <div className="md:absolute md:-top-10 w-52">
              <img src={naturalimg} alt="natural image" className="w-full" />
              <h5 className="font-bold text-sm py-2">Natural Plants</h5>
            </div>
          </div>
          <div className="text-center w-52 my-3">
            <img src={plantimg} alt="natural image" className="w-full" />
            <h5 className="font-bold text-sm py-2">Plants Accessories</h5>
            <p className="text-xs text-[#6b6b6b]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="bg-white px-3 py-1 rounded-md text-sm my-2">
              Explore <i className="fa fa-arrow-right"></i>
            </button>
          </div>
          <div className="text-center w-52 my-3">
            <div className="md:absolute md:-top-10 w-52">
              <img src={artificialimg} alt="natural image" className="w-full" />
              <h5 className="font-bold text-sm py-2">Artificial Plants</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
