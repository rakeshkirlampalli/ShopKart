import React from "react";
import HeroImage from "../assets/images/hero.svg";
import star from "../assets/images/Star2.svg";
import Rectangle from "../assets/images/Rectangle.png";
import Header from "./Header";
import Star4 from "../assets/images/Star 4.png";
import Vector from "../assets/images/Vector.png";
const Hero = () => {
  return (
    <>
      <Header />
      <section
        className="text-gray-600 h-[542px] body-font relative  bg-[#1A1A1A] overflow-hidden"
        style={{ backgroundImage: `url(${Rectangle})` }}
      >
        <div className="container flex flex-col items-center px-5 mx-auto ">
          <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            {/* circle image */}
            <img
              src={star}
              alt=""
              className="absolute md:-top-3 md:right-32 -right-24 z-10 md:w-[330px]  h-[330px]"
            />

            <div className="md:w-[940px] w-[550px] md:h-[310px] h-[280px] z-40 absolute  bg-[#F07E15] bg-opacity-70 md:top-[170px] top-[185px] md:left-[410px]"></div>
            <div className="z-50">
              <h1 className="title-font absolute md:top-[112px] top-[250px] md:left-[120px] left-[65px]  md:text-8xl text-5xl font-Syne  font-extrabold text-white">
                Fresh
              </h1>
              <h1 className="title-font absolute md:top-[199px] top-[300px] md:right-[570px] right-[180px] md:text-8xl text-5xl  font-Syne font-extrabold text-transparent text-stroke-3">
                2022
              </h1>
              <h1 className="title-font absolute bottom-[150px] md:left-[178px] left-[80px] font-Syne md:text-8xl text-5xl font-extrabold text-white">
                Look
              </h1>
              <hr className="md:w-[800px] w-[200px] border-t border-[#FFFFFF] absolute bottom-[100px] left-[0]" />
            </div>
          </div>
          <img
            src={Star4}
            alt="Star4"
            className="absolute md:right-[500px] md:top-[396px] z-50 bottom-[55px]"
          />
          <div className="lg:max-w-md z-30 absolute md:right-[120px] right-[-110px] bottom-[0px]">
            {/* boy image */}
            <img
              className="object-cover object-center rounded md:w-88p w-80p"
              alt="hero"
              src={HeroImage}
            />
          </div>
          
          
          <div className="flex absolute md:left-[100px] left-[45px] md:bottom-[50px] bottom-[30px] w-[96px]  border border-white-300">
            <p className=" ml-1 text-[white]">See more</p>
            <img
              src={Vector}
              className="h-3 mt-1 ml-2 bg-transparent"
              alt="vector"
            />
          </div>
          <div className="absolute md:bottom-[80px]   md:right-[50px] z-50 text-[#161615]">
            <p>OREGON JACKET</p>
            <span>$124</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
