import React from 'react'
import contactUSImg from "../assets/img/png/buy-coin.png";
import logo from "../assets/img/png/whitelogo.png";
import { Arrow } from "../common/Icons";
import { Link } from "react-router-dom";
import DarkModeToggle from './DarkModeToggle';

const BuyToken = () => {
  return (
    <div className="lg:h-screen lg:h-auto flex items-center">
    <div className="flex flex-wrap items-center w-full relative">
    <div className='container 3xl:max-w-[1800px] px-4 items-center absolute top-8 left-1/2 -translate-x-1/2 z-10 flex justify-between mx-auto'>
      <Link to='/'>
          <img
            className=" z-10 top-8 left-5 w-[180px] xl:w-[260px]"
            src={logo}
            alt="contact-US-Img"
          />
          </Link>
      {/* <div className=' z-10 top-8 right-5'><DarkModeToggle/></div> */}
    </div>
      <div className="w-full lg:w-6/12 lg:block relative">
        <img
          className="w-full h-full object-contain"
          src={contactUSImg}
          alt="contact-US-Img"
        />
       
   
      </div>
      <div className="sm:w-10/12 mx-auto lg:w-6/12 py-6 lg:py-0">
        <div className="container px-6 xl:px-0 xl:max-w-[580px] 3xl:max-w-[630px] mx-auto">
          <h4 className="text-2xl md:text-[35px] xl:text-[40px] 3xl:text-4xl font-bold text-[#4B3BE4]">
          Buy Token
          </h4>
          <p className="font-normal text-sm md:text-base leading-6 3xl:leading-8  text-black">
          All ADSE bought and sold on both Pink Sale and Raze will be available to buyers on the same day after the subsequent IEO.
          </p>

          <h6 className="text-xl   xl:text-[25px] font-bold text-[#4B3BE4] mt-10">
          For US and Int Citizens
          </h6>
          <p className="font-normal text-sm md:text-base leading-6 3xl:leading-8 text-black">
              If you are a US citizen then you must participate in our first public sale by buying our token via a SAFT on Raze.finance, US citizens are limited to this option until after we are listed on exchanges.
          </p><br/>

          <p>
              International buyers can also use Raze as it gives more options for purchase including ACH wire transfer, ERC 20 USDC Crypto, and Credit cards.
          </p><br/>

          <p>
              All buyers using Raze have to be KYC’d but only US citizens need to additionally qualify as accredited Investors, International buyers don’t have to be accredited or do an accreditation check.
          </p>
            <button  className="whitespace-nowrap flex items-center gap-4 ff_jost bg-common-gradient text-lg sm:text-base text-white group font-medium py-4 lg:py-5 px-6 lg:px-10 rounded-[36px] mt-3">
            Raze Finance
              <span className=" duration-500 group-hover:translate-x-2">
                <Arrow />
              </span>
            </button>
 
          <h6 className="text-xl   xl:text-[25px] font-bold text-[#4B3BE4] mt-10">
          For Int Citizens Only
          </h6>
          <p className="font-normal text-sm md:text-base leading-6 3xl:leading-8  text-black">
          Anyone except US and European citizens can participate in our sale by buying ADSE via Pink Sale using crypto, you will need to connect a wallet to enable this.
          </p>

            <button  className="whitespace-nowrap flex items-center gap-4 ff_jost bg-common-gradient text-lg sm:text-base text-white group font-medium py-4 lg:py-5 px-6 lg:px-10 rounded-[36px] mt-3">
            Pink Sale 
              <span className=" duration-500 group-hover:translate-x-2">
                <Arrow />
              </span>
            </button>
 
        </div>
      </div>
    </div>
  </div>
  )
  
}

export default BuyToken