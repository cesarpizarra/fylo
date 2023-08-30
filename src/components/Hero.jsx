import React from "react";
import { heroMain } from "../constant/index";
import BgCurveDesktop from "../assets/bg-curvy-desktop.svg";
import BgCurveMobile from "../assets/bg-curvy-mobile.svg";

const Hero = () => {
  return (
    <section className="w-full bg-dark-blue-main2 relative">
      <div className="max-w-[1240px] mx-auto flex items-center flex-col">
        {heroMain.map((item, index) => (
          <div
            className="flex items-center justify-center max-w-lg mx-auto text-white px-4 z-10"
            key={index}
          >
            <img src={item.heroImage} alt={item.alt} />
            <div>
              <p className="text-center text-2xl md:text-3xl font-medium mb-8">
                {item.title}
              </p>
              <p className="text-center text-sm md:text-md">{item.subtitle}</p>
            </div>
          </div>
        ))}
        <button className="mt-5 bg-cyan px-12 py-2 rounded-full text-white z-10 md:py-2">
          Get Started
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <img
          src={BgCurveDesktop}
          alt="Bg curve"
          className="hidden md:block w-full"
        />
        <img
          src={BgCurveMobile}
          alt="Bg curve mobile"
          className="md:hidden w-full object-cover transform translate-y-4"
        />
      </div>
    </section>
  );
};

export default Hero;
