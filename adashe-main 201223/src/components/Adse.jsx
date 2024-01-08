import React from "react";
import { AdseData,AdseDataPie } from "../common/Helper";
import { PieChart } from "../common/Icons";

const Adse = () => {
  return (
    <div className="3xl:pb-[100px] my-16 md:mb-24 xl:mb-10 ">
      <div className="container px-4 md:px-6 xl:px-0 xl:max-w-[1140px] 3xl:max-w-[1580px] mx-auto">
        <div>
          <h2 className="font-bold text-[30px] sm:text-4xl lg:text-5xl 3xl:text-6xl text-blue">
            ADSE DeFi
          </h2>
          <p className="font-medium pt-1 md:pt-0 text-sm sm:text-[15px] text-light_gray leading-[24px] sm:leading-[28px] 3xl:leading-[33px]  ">
            Adashe DeFi is a fine mix of traditional banking and finance with
            the convenience and accessibility of crypto which allows it to be
            potentially more profitable than traditional banking but much more
            secure than any other DeFi platforms. Our DeFi services and returns
            are protected by an Insurance policy to minimize risk for customers.
            Support of this standard guarantees the compatibility of the token
            with third-party services (wallets, exchanges, listings, etc.), and
            provides easy integration.
          </p>
        </div>
        <div className="flex justify-between lg:flex-nowrap flex-wrap  w-full pt-6 md:pt-8 xl:pt-14">
          <div className="flex justify-between flex-col   gap-7  ">
            {AdseData.map((obj, index) => (
              <div className="max-w-[786px]">
                <p className="lg:pr-4 3xl:pr-0">
                  {" "}
                  <span className="font-bold text-lg 3xl:text-xl text-dark_blue leading-10">
                    {obj.heading}:{" "}
                  </span>
                  <span className="font-medium pt-1 md:pt-0 text-sm sm:text-[15px] text-light_gray leading-[24px] sm:leading-[28px] 3xl:leading-[33px] ">
                    {obj.subheading}
                  </span>
                </p>
              </div>
            ))}
            <button className="whitespace-nowrap overflow-hidden w-fit hover:after:left-[0%] after:duration-300 group-hover relative after:text-white after:-left-full after:top-0 after:z-10 after:content-['VIEW-ETH-EXPLORER'] after:flex after:justify-center after:items-center after:absolute after:bg-common-gradient after:w-full after:h-full  border-[2px] text-xs sm:text-base text-dark_blue3      border-[#4F56EF] font-bold py-3 px-11 after:rounded-[36px] rounded-[36px]">
              <span className="group-hover:translate-x-8 duration-300">
                VIEW ETH EXPLORER
              </span>
            </button>
            <button className="whitespace-nowrap overflow-hidden w-fit hover:after:left-[0%] after:duration-300 group-hover relative after:text-white after:-left-full after:top-0 after:z-10 after:content-['VIEW-POLYGON-SCAN'] after:flex after:justify-center after:items-center after:absolute after:bg-common-gradient after:w-full after:h-full  border-[2px] text-xs sm:text-base text-dark_blue3      border-[#4F56EF] font-bold py-3 px-11 after:rounded-[36px] rounded-[36px]">
              <span className="group-hover:translate-x-8 duration-300">
                VIEW POLYGON SCAN
              </span>
            </button>
            <button className="whitespace-nowrap overflow-hidden w-fit hover:after:left-[0%] after:duration-300 group-hover relative after:text-white after:-left-full after:top-0 after:z-10 after:content-['VIEW-AUDITS-AND-KYC'] after:flex after:justify-center after:items-center after:absolute after:bg-common-gradient after:w-full after:h-full  border-[2px] text-xs sm:text-base text-dark_blue3      border-[#4F56EF] font-bold py-3 px-11 after:rounded-[36px] rounded-[36px]">
              <span className="group-hover:translate-x-8 duration-300">
              VIEW AUDITS AND KYC
              </span>
            </button>
          </div>

          <div className="flex flex-col p-2 bg-[#F6F9FC] rounded-lg max-w-[629px] h-fit  mt-6 lg:mt-0  w-full">
            <div className="border-b-[2px] border-[#dfdfdf] py-10">
              <div
                className="sm:flex items-start justify-between px-4 sm:px-14
                        "
              >
                <PieChart />
                <div className="">
                  {AdseDataPie.map((obj, index) => (
                    <div>
                      <p className="flex items-center gap-3 ">
                        <div
                          className={`w-3 h-3 ${obj.bgclr} mt-2  leading-10 rounded-full`}
                        ></div>
                        <span className="font-semibold text-lg text-black leading-10 pt-2">
                          {obj.heading}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-6 pb-4 px-4 sm:px-14 ">
              <p className="font-semibold sm:text-lg text-black leading-10 pt-2">
                Initial Minted Token: 4,637,000,000
              </p>
              <p className="font-semibold sm:text-lg text-black leading-10 pt-2">
                Initial Token Supply: 10,000,000,000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adse;
