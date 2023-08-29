import React from "react";
import { heroMain } from "../constant/index";

const Hero = () => {
  return (
    <section className="w-full bg-dark-blue-main2  relative">
      <div className="max-w-[1240px] mx-auto flex items-center flex-col">
        {heroMain.map((item, index) => (
          <div
            className="flex items-center justify-center max-w-lg mx-auto text-white px-4"
            key={index}
          >
            <img src={item.heroImage} alt={item.alt} />
            <div className="z-10">
              <p className="text-center text-3xl font-bold mb-8">
                {item.title}
              </p>
              <p className="text-center text-lg">{item.subtitle}</p>
            </div>
          </div>
        ))}
        <button className="mt-5 bg-cyan px-12 py-2 rounded-full text-white z-10">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
