import React from "react";
import Image from "next/image";
import Search from "@/../public/Images/search.svg";
import SearchIcon from "@/../public/Images/search-icon.svg";
import PrivacyIcon from "@/../public/Images/privacy.svg";
import StatsIcon from "@/../public/Images/stats.svg";
import Input from "../Input/Input";
import DropDown from "../DropDown/DropDown";
const HeroSection = () => {
  const locations = [
    "location1",
    "location2",
    "location4",
    "location5",
    "location6",
    "location7",
    "location8",
  ];
  return (
    <div
      className="block  bg-primary-grey w-full  gradient md:flex md:container  "
      id="hero-section"
    >
      <div className="pt-10 bg-primary-grey flex flex-col items-center md:block md:bg-secondary-grey md:text-start md:w-6/10 md:box-border ">
        <h1 className="text-xl leading-none mb-8 font-bold font-poppins md:text-header md:mt-20   ">
          Search, Find, & Apply
        </h1>
        <p className="text-8 text-center font-poppins font-normal max-w-60 md:text-justify  md:text-xl md:max-w-xs lg:max-w-sm xl:max-w-xl ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
        <div className="flex justify-center gap-1 mt-8 mb-20 rounded-xl p-3 bg-white flex-wrap md:justify-center md:flex-wrap lg:flex-nowrap  md:rounded-2xl md:p-3 lg:p-4 xl:p-5 md:mb-32 md:mt-14 md:gap-5 md:w-10/12  lg:w-11/12 xl:w-8/12">
          <Input
            placeholder={"Job title or keyword"}
            icon={SearchIcon}
            iconAlt={"SearchIcon"}
            type={"text"}
          />
          <DropDown options={locations} placeholder={"Location"} />
          <button className="bg-primary-color text-7 text-white w-max px-1 py-1 font-bold font-poppins rounded-md md:rounded-xl  md:px-6 md:py-4 lg:px-4 xl:px-4 md:text-sm">
            Search
          </button>
        </div>
      </div>
      <div className="h-72 box-border text-start md:h-auto bg-primary-color md:w-4/10  md:rounded-bl-5xl">
        {/* <ul>
          <li className='flex justify-start w-full pt-7 px-14 '>
            {' '}
            <Image src={Search} className='w-12 h-12 md:w-20 md:h-20' />
          </li>
          <li className='flex justify-end w-full pb-7 px-14 '>
            {' '}
            <Image src={StatsIcon} className='w-12 h-12 md:w-20 md:h-20' />
          </li>
          <li className='flex justify-start w-full  pt-7 pb-20 px-14'>
            {' '}
            <Image src={PrivacyIcon} className='w-12 h-12 md:w-20 md:h-20' />
          </li>
        </ul> */}
        <div>
          <div>
            {" "}
            <ul className="flex-row flex h-32 md:flex-col md:h-max">
              <li className="flex justify-start w-full pt-7 pl-14 ">
                {" "}
                <Image src={Search} className="w-12 h-12 md:w-20 md:h-20" />
              </li>
              <li className="flex items-end justify-end w-full pb-7 pr-14 md:justify-end  md:pt-8  md:pr-0 ">
                {" "}
                <Image src={StatsIcon} className="w-12 h-12 md:w-20 md:h-20" />
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="flex justify-start w-full pt-4 px-14  md:pt-20 pb-20 ">
                <Image
                  src={PrivacyIcon}
                  className="w-12 h-12 md:w-20 md:h-20"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
