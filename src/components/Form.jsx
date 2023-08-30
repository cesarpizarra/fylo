import React from "react";

export default function Form() {
  return (
    <form>
      <div className="bg-dark-blue-main box-shadow px-4 md:px-12 py-8 flex flex-col items-center gap-5">
        <h1 className="text-white text-2xl md:text-4xl font-medium text-center">
          Get early access today
        </h1>
        <p className="text-white text-center max-w-lg">
          It only takes a minute to sign up, and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className="md:flex items-center justify-center gap-5 w-full max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-full outline-none w-full px-4 py-3 bg-white text-gray-800 placeholder-gray-400 focus:ring-cyan focus:ring-2"
          />
          <button className="mt-4 md:mt-0 w-full md:w-72 whitespace-nowrap text-white bg-cyan px-6 py-3 rounded-full font-semibold transition hover:bg-cyan-light focus:ring-cyan focus:ring-2">
            Get Started for Free
          </button>
        </div>
      </div>
    </form>
  );
}
