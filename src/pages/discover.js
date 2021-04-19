import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BiBarChartSquare, BiAlbum, BiPlus } from "react-icons/bi";
import Theweekend from "../assets/theweekend.png";
import Burna from "../assets/burna.png";
import Twice from "../assets/twiceastall.png";
import Jon from "../assets/jonbellion.png";
import { Link } from "react-router-dom";

export const Discover = () => {
  return (
    <div className="bg-purply min-h-screen overflow-auto bg-scroll relative font-poppins">
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="text-3xl text-white text-center mb-8">
            Discover New Music
          </h1>
          <div className="flex justify-center items-center mx-2 my-10">
            <div className="flex flex-col justify-center items-center bg-black rounded-md p-4 w-2/6 mr-2 text-white text-center">
              <BiBarChartSquare className="text-2xl" />
              <h4>Charts</h4>
            </div>

            <div className="flex flex-col justify-center items-center bg-black rounded-md p-4 w-2/6 mr-2 text-white text-center">
              <BiAlbum className="text-2xl" />
              <h4>Albums</h4>
            </div>

            <div className="flex flex-col justify-center items-center bg-black rounded-md p-4 w-2/6 text-white text-center">
              <BiPlus className="text-2xl" />
              <h4>More</h4>
            </div>
          </div>

          <h2 className="hidden md:visible text-white">
            By joining you benefit by listening to the latest albums
          </h2>

          <div className="mb-4">
            <div className="flex justify-center items-center p-4 mr-2 text-white">
              <img src={Theweekend} alt="img" className="w-3/6" />
              <img src={Burna} alt="img" className="w-3/6" />
            </div>

            <div className="flex justify-center items-center p-4 mr-2 -mt-8">
              <img src={Twice} alt="img" className="w-3/6" />
              <img src={Jon} alt="img" className="w-3/6" />
            </div>
          </div>
          <h2 className="text-white text-center p-3 text-xl mb-8">
            By{" "}
            <Link to="/join">
              <span className="text-pink-700">join</span>
            </Link>
            ing you benefit by listening to the latest albums
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};
