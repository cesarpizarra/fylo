import React from "react";
import Logo from "../assets/logo.svg";
import Location from "../assets/icon-location.svg";
import Contact from "../assets/icon-phone.svg";
import Email from "../assets/icon-email.svg";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <section className="bg-dark-blue-footer w-full">
      <div className="max-w-[1240px] mx-auto px-4 pb-16 pt-80 md:pt-52">
        <img src={Logo} alt="Logo" className="w-62 md:w-28 mb-4" />
        <div className="mt-10 md:flex justify-center gap-20 text-white">
          <div className="flex justify-center max-w-md ">
            <img src={Location} alt="Location" className="mt-1 w-5 h-5" />
            <p className="text-justify ml-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi,
              ducimus asperiores nulla totam facilis quae omnis dicta numquam!
            </p>
          </div>
          <div className="mt-10 md:mt-0 ">
            <div className="flex items-center gap-2 md:gap-4">
              <img src={Contact} alt="Contact" />
              <p className="text-sm md:text-base">+1-543-123-4567</p>
            </div>
            <div className="flex items-center gap-2 mt-8 md:mt-4">
              <img src={Email} alt="Email" />
              <p className="text-sm md:text-base">example@fylo.com</p>
            </div>
          </div>
          <div className="md:flex gap-12 ">
            <ul className="mt-10 md:mt-0">
              <li className="text-md md:text-base">About Us</li>
              <li className="text-md md:text-base">Jobs</li>
              <li className="text-md md:text-base">Press</li>
              <li className="text-md md:text-base">Blog</li>
            </ul>
            <ul className="mt-10 md:mt-0">
              <li className="text-md md:text-base">Contact Us</li>
              <li className="text-md md:text-base">Terms</li>
              <li className="text-md md:text-base">Privacy</li>
            </ul>
          </div>
          <div className="flex items-center md:items-start justify-center gap-4 md:gap-6 mt-12 md:mt-0 ">
            <FaFacebook
              size={35}
              className="border-2 border-gray-500 rounded-full p-1 cursor-pointer hover:border-cyan hover:text-cyan duration-300"
            />
            <FaTwitter
              size={35}
              className="border-2 border-gray-500 rounded-full p-1 cursor-pointer hover:border-cyan hover:text-cyan duration-300"
            />
            <FaInstagram
              size={35}
              className="border-2 border-gray-500 rounded-full p-1 cursor-pointer hover:border-cyan hover:text-cyan duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
