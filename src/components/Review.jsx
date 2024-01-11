import React, { useState } from "react";
import personone from "../assets/img/review/men.png";
import persontwo from "../assets/img/review/women.png";

export const Review = () => {
  const [review, setreview] = useState(true);

  console.log(review);

  return (
    <div className="px-5 md:px-12 py-7 overflow-hidden">
      <h2 className="text-lg font-semibold text-center">
        What customer say about <br />
        GREENMIND?
      </h2>
      <div className="mt-8 flex justify-center relative">
        {review ? (
          <div className="w-full sm:w-3/5 bg-[#C1DCDC] p-3 rounded-md relative">
            <p className="text-sm text-[#585858]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
              vitae aperiam qui odio numquam voluptate consequuntur vero
              expedita suscipit doloremque.
            </p>
            <div className="py-5 flex w-full my-2">
              <div className="">
                <img
                  src={personone}
                  alt="men_image"
                  className="w-24 absolute bottom-0"
                />
              </div>
              <div className="w-full flex justify-between">
                <div className="ml-20">
                  <h4 className="font-semibold">John Doe</h4>
                  <p className="text-xs text-[#757575]">Youtuber</p>
                </div>
                <div className="pr-5 font-semibold">
                  <i className="fa fa-star"></i>4.5
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full sm:w-3/5 bg-[#C1DCDC] p-3 rounded-md relative">
            <p className="text-sm text-[#585858]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
              vitae aperiam qui odio numquam voluptate consequuntur vero
              expedita suscipit doloremque.
            </p>
            <div className="py-5 flex w-full my-2">
              <div className="w-1/5">
                <img
                  src={persontwo}
                  alt="women_image"
                  className="w-24 absolute bottom-0"
                />
              </div>
              <div className="ml-12 xs:ml-0 w-4/5 xs:flex xs:justify-between">
                <div className="">
                  <h4 className="font-semibold">Amelia James</h4>
                  <p className="text-xs text-[#757575]">Influencer</p>
                </div>
                <div className="pr-5 font-semibold">
                  <i className="fa fa-star"></i>4.0
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-full flex justify-center my-5">
        <div
          className="w-3 h-3 bg-black rounded-full mx-1 cursor-pointer"
          onClick={() => setreview(review != false ? true : null)}
        ></div>
        <div
          className="w-3 h-3 bg-black rounded-full mx-1 cursor-pointer"
          onClick={() => setreview(review == true ? false : null)}
        ></div>
      </div>
    </div>
  );
};
