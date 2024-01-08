import React from 'react' 
import { Arrow } from '../common/Icons'
import { Link } from "react-router-dom";

const StayClose = () => {
  return (
    <div className=" bg-contact relative after:h-full after:w-full after:left-0 after:top-0 after:bg-bg-gradient after:absolute py-[76px]">
      <div className="container px-4 md:px-6 xl:px-0 xl:max-w-[1140px] 3xl:max-w-[1580px]  mx-auto relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div className="">
            <h4 className="text-white text-3xl sm:text-5xl font-bold">
              Stay Close, We Are Always Here
            </h4>
            <p className="text-white text-xl font-semibold">
              do you have questions?, Please get in touch with our friendly
              team.
            </p>
          </div>
          <Link to="/contact-us">
            <button className="whitespace-nowrap flex items-center gap-4 ff_jost bg-common-gradient text-lg sm:text-base text-white group font-bold py-3 sm:py-5 px-8 sm:px-10 rounded-[36px]">
              Contact Us
              <span className=" duration-500 group-hover:translate-x-2">
                <Arrow />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StayClose