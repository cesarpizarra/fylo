import React from "react";
import Logo from "../assets/logo.svg";
import { navItems } from "../constant";
const NavBar = () => {
  return (
    <section className="bg-dark-blue-main2 w-full px-4 py-8">
      <div className="flex items-center justify-between max-w-[1240px] mx-auto">
        <div className="cursor-pointer">
          <img src={Logo} alt="Logo" className="w-24 md:w-32 lg:w-full" />
        </div>
        <ul className="flex items-center">
          {navItems.map((item, index) => (
            <li
              className="cursor-pointer text-white px-4 text-sm md:text-base lg:text-lg xl:text-xl"
              key={index}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NavBar;
