import React from "react";
import img1 from "../assets/img/png/advisor1.png";
import { Linkdin } from "../common/Icons";
import { OurTeamData } from "../common/Helper";

const OurTeam = () => {
  return (
    <div id="team">
      <div className="py-8 lg:py-24 xl:py-[122px] bg-[#f6f9fc]">
        <div className="container px-4 md:px-6 xl:px-0 xl:max-w-[1140px] 3xl:max-w-[1580px] mx-auto">
          <h3 className="text-blue text-center font-bold text-[30px] sm:text-4xl lg:text-5xl  3xl:text-6xl">
            Our Team
          </h3>
          <p className="text-light_gray text-center text-[15px] max-w-[625px] mx-auto">
            Our success stems from the leadership, professionalism and vision of
            our management and staff.
          </p>
          <div className="flex justify-center items-center gap-6 rounded-lg mt-8 flex-wrap">
            <div className="flex flex-wrap xl:justify-normal justify-center gap-[30px] w-full h-full mt-6">
              {OurTeamData.map((obj, index) => (
                <div className="w-full md:w-[47.5%] lg:w-[23%] 4xl:w-[23%] bg-white shadow-new rounded-xl overflow-hidden group">
                  <div className="overflow-hidden ">
                    <img
                      className="w-full rounded-t-xl h-[277px] object-cover duration-300 group-hover:scale-125"
                      src={obj.img}
                      alt=""
                    />
                  </div>
                  <div className="bg-white px-6  ">
                    <div className="flex items-center justify-between pt-4 ">
                      <div>
                        <p className="ff_jost font-bold text-xl">{obj.name}</p>
                        <p className="ff_jost font-medium text-base">
                          {" "}
                          <i>{obj.designation}</i>
                        </p>
                      </div>
                      <a href={obj.link}>
                          <Linkdin />
                      </a>
                    </div>
                    <p
                      className={`${
                        index === 0 ? "max-w-[360px]" : ""
                      } text-sm text-gray leading-7 py-6`}
                    >
                      {obj.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
