import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineFacebook } from "react-icons/ai";
import { TiSocialTwitterCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="bg-black block bottom-0">
      <div className="flex justify-between items-center  md:px-16 py-5 text-white ">
        <div>
          <Link className="md:mr-10 ml-1 mr-4">About</Link>
          <Link className="mr-4">Contact</Link>
        </div>

        <div className="flex items-center">
          <div className="flex items-center">
            <TiSocialTwitterCircular className="text-pink-800 text-3xl mr-1" />

            <div>
              <Link className="md:mr-10 mr-4">Twitter</Link>
            </div>
          </div>

          <div className="flex items-center">
            <AiOutlineFacebook className="text-pink-800 text-2xl mr-1" />

            <div className="mr-1">
              <Link>Facebook</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
