import React, { useState } from "react";
import { projeectAdhaselist } from "../common/Helper";

const ProjectAdashe = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleContent = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div id="about" className="bg-light_white py-16 sm:py-24 xl:py-36 3xl:py-[215px]  ">
        <div className="container px-4 md:px-6 xl:px-0 xl:max-w-[1240px] 3xl:max-w-[1580px] mx-auto">
          <div>
            <h2 className="font-bold text-[30px] sm:text-4xl lg:text-5xl 3xl:text-6xl text-blue">
              Project Adashe
            </h2>
            <p className="font-medium pt-1 md:pt-0 text-sm sm:text-[15px] text-light_gray leading-[24px] sm:leading-[28px] xl:leading-[33px] 3xl:max-w-[1532px]">
              Adashe is a seamless fusion of Tradefi, DeFi, and Data systems, It
              is the future of Money, It is available across multiple
              Blockchains. Developed by crypto pioneers, aerospace inventors,
              engineers, data scientist and tech leaders, Adashe establishes a
              standardized industry framework for trade, finance, data and for
              adoption of blockchain and crypto.
            </p>
            {showMore && (
              <p
                className={` ${
                  showMore === !showMore ? " h-0" : " h-full"
                } font-medium  duration-300  text-sm sm:text-[15px] text-light_gray leading-[24px] sm:leading-[28px] xl:leading-[33px] 3xl:max-w-[1532px] pt-4`}
              >
                Adabase is a federated data solution which will allow for robust
                and real time interactions of and with data from an endless
                stream of sources. Supply chains, performance data tracking and
                automated execution of commands specific to user and situation
                are all uses, giving users a detailed snapshot and the ability
                to respond faster and more precisely. Our crypto currency
                lubricates the ecosystem and serves as payment for interactions
                at predetermined intervals. Enterprise and non-enterprise users
                can interact with our Eco-system via our app and web-based
                solutions across different platforms for free. Adabase while
                built to work with Adashe can via smart contracts execute
                payments for other chains with associated fees, furthermore
                Project Adashe plans to eventually fork the Polygon chain for it
                custom blockchain protocol.
              </p>
            )}
            <button
              className="text-sm sm:text-base font-semibold text-[#263FDE] pt-4 md:pt-5 3xl:pt-7"
              onClick={toggleContent}
            >
              {showMore === true ? "View Less " : "View More"}
            </button>
          </div>
          <div className="flex flex-wrap justify-between pt-6 md:pt-8 xl:pt-14">
            {projeectAdhaselist.map((obj, index) => (
              <div
                className="sm:w-6/12 xl:w-3/12  2xl:px-0 pt-4"
                key={index}
              >
                <div className="flex items-start 3xl:max-w-[360px] w-full md:px-2">
                  <span className="">{obj.iconimg}</span>
                  <div className="pl-2">
                    <h4 className="font-bold text-[17px] 3xl:text-xl text-dark_blue ">
                      {obj.heading}
                    </h4>
                    <p className="text-sm text-light_gray2 font-medium sm:leading-[22px] 3xl:leading-[26px]">
                      {obj.para}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectAdashe;
