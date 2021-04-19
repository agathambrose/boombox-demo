import React from "react";
import Header from "../components/Header";
import Afro from "../assets/Afro.png";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="bg-purply min-h-screen relative">
      <Header />

      <span className="bg-pulp flex rounded-full md:p-12 p-16 absolute md:top-80 top-40 md:right-60 right-8">
        <div></div>
      </span>

      <span className="bg-palegreen flex rounded-full md:p-24 p-10 absolute md:bottom-10 md:-left-5 bottom-0 left-8">
        <div></div>
      </span>

      <span className="bg-pulpy flex md:bottom-0 md:right-0 rounded-full md:p-24 absolute">
        <div></div>
      </span>

      <div className="md:flex md:justify-evenly px-10 md:px-0 pt-4 md:pt-0 items-center justify-center absolute left-8 mx-auto">
        <img src={Afro} alt="img" className="md:w-2/6 md:mt-6 mt-3" />

        <div className="text-white flex flex-col items-center text-center py-3 ">
          <h2 className="md:text-6xl font-bold text-4xl md:mb-6 mb-2">
            Good music is happiness
          </h2>
          <p className="md:text-3xl text-2xl leading-loose">
            Stream over 200 thousand songs with one click
          </p>
          <Link to="/join">
            <button className="rounded bg-blue-600 hover:bg-blue-700 px-10 py-3 md:mt-10 mt-4 text-xl mx-auto">
              Join now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
