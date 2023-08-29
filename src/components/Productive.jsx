import React from "react";
import IllustrationStay from "../assets/illustration-stay-productive.png";
import Arrow from "../assets/icon-arrow.svg";
const Productive = () => {
  return (
    <section className="w-full bg-dark-blue-main">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex justify-center">
            <img src={IllustrationStay} alt="Stay" />
          </div>
          <div className="flex justify-center flex-col text-white gap-6">
            <h1 className="font-medium text-2xl md:text-4xl">
              Stay productive,{" "}
              <span className="inline md:block">wherever you are</span>
            </h1>
            <p className="text-md md:text-lg">
              Never let location be an issue when accessing your files.Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="text-md md:text-lg">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <div className="flex items-center  border-b border-cyan w-44">
              <a href="#" className="text-cyan hover:text-white duration-300">
                See how Fylo works
              </a>
              <span className="ml-2">
                <img src={Arrow} alt="Arrow" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productive;
