import React from "react";
import MainButton from "../MainButton/MainButton";
import Card from "../Card/Card";
import Register from "@/../public/Images/register.svg";
import Upload from "@/../public/Images/upload.svg";
import Resume from "@/../public/Images/resume.svg";
import Find from "@/../public/Images/find.svg";

const ExplanationSection = () => {
  const cards = [
    {
      icon: Register,
      title: "Register",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      icon: Resume,
      title: "Create a Resume",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      icon: Find,
      title: "Find Job",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      icon: Upload,
      title: "Apply Job",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
  ];

  return (
    <div className="container pt-14 pb-14  md:pt-150 md:pb-150" id="about-us">
      <h1 className="mb-4 font-bold font-poppins text-sm md:text-3xl md:mb-10 md:leading-none">
        How it Works
      </h1>{" "}
      <div className="flex flex-wrap md:flex-row md:justify-between  ">
        <div className="w-11/12 md:w-6/10 order-1  ">
          {" "}
          <p className="text-8 mb-5 font-poppins font-normal text-primary-text-color md:mb-14 md:text-base ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
        <div className="flex mb-8 justify-center w-full order-3 md:justify-end md:m-0 md:w-4/10  md:order-2">
          <MainButton text={"Learn More"} small={false} />
        </div>
        <div className="flex mb-1 gap-x-4 gap-y-4 justify-center flex-wrap order-2 md:gap-x-8 md:gap-y-8 md:w-full  md:mb-32 md:order-3">
          {cards.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
      <div className="md:grid md:grid-cols-3 ">
        {" "}
        <div className="mb-6  max-w-72 h-52 mx-auto rounded-lg md:h-370 md:max-w-full bg-placeholder-grey md:rounded-xl  md:mx-0 md:col-span-1 md:mb-0"></div>
        <div className="text-center md:text-start md:col-span-2 md:ml-12   ">
          {" "}
          <h1
            className="mb-3 mx-auto font-bold font-poppins text-sm md:text-xl lg:text-3xl  md:mb-8 md:leading-tight max-w-72 
md:max-w-full "
          >
            We will help you to become an employee for your dream company
          </h1>
          <p
            className="mx-auto text-8  mb-5 font-poppins font-normal text-primary-text-color  md:mb-9 md:text-sm lg:text-base max-w-72 
md:max-w-full "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>{" "}
          <MainButton text={"Learn More"} small={true} />
        </div>
      </div>
    </div>
  );
};

export default ExplanationSection;
