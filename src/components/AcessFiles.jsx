import React from "react";
import { accessFiles } from "../constant/index";
const AcessFiles = () => {
  return (
    <section className="w-full bg-dark-blue-main p-4">
      <div className="max-w-[1240px] mx-auto flex items-center justify-center">
        <div className="grid grid-cols- md:grid-cols-2 gap-10 py-16">
          {accessFiles.map((item, index) => (
            <div
              key={index}
              className="max-w-lg mx-auto flex items-center flex-col text-white p-8"
            >
              <img src={item.icon} alt={item.title} />
              <div className="text-center py-4">
                <p className="text-xl font-medium ">{item.title}</p>
                <p className="py-2">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcessFiles;
