import React from "react";
import Profile1 from "../assets/profile-1.jpg";
import Profile2 from "../assets/profile-2.jpg";
import Profile3 from "../assets/profile-3.jpg";
import Quote from "../assets/bg-quotes.png";

const Comments = () => {
  return (
    <section className="w-full bg-dark-blue-main">
      <div className="max-w-[1240px] mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 py-32">
          <div className="px-10 py-6 bg-dark-blue-main2 rounded shadow-xl text-white relative ">
            <div className="z-10 ">
              <div className="absolute top-[-15%] left-0 z-0">
                <img src={Quote} alt="Quote" />
              </div>
              <div>
                <p>
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src={Profile1}
                    alt="Profile 1"
                    className="w-7 h-7 rounded-full"
                  />
                  <div className="ml-4">
                    <p>Satish Patel</p>
                    <p className="text-[10px] text-gray-400">
                      Founder & CEO, Huddle
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
