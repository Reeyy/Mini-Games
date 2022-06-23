import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      className="
      container
      flex
      mx-auto
      my-96
  border-slate-200
  shadow-2xl
  bg-white
  backdrop-blur-[30px]
  shadow-[0_0_1rem_0_rgba(0,0,0,0.2)
    text-slate-700
    max-w-5xl
    p-8
    rounded-3xl
    justify-center
    items-center
    "
    >
      <div className="flex flex-col my-auto p-8 mx-auto justify-center items-center ">
        <h1 className="text-4xl font-bold mt-2 mb-8 text-center">
          Valorant Mini Card Game
        </h1>

        <Link
          to="/main"
          className=" w-[12rem] sm:w-[18rem] justify-center text-center items-center focus:ring-2 focus:ring-offset-2 focus:ring-gray-500bg-white transition duration-150 ease-in-out focus:outline-none rounded-2xl text-gray-800 border border-gray-300 px-2 py-2 text-xl hover:bg-gray-100"
        >
          Get Strated Now
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
