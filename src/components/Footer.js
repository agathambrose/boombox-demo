import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineFacebook } from "react-icons/ai";
import { TiSocialTwitterCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-4 md:px-16 py-5 text-white bg-black mt-8">
      <div>
        <Link className="md:mr-10 mr-6">About</Link>
        <Link>Contact</Link>
      </div>

      <div className="flex items-center">
        <div className="flex items-center">
          <TiSocialTwitterCircular className="text-pink-800 text-3xl mr-2" />

          <div>
            <Link className="md:mr-10 mr-6">Twitter</Link>
          </div>
        </div>

        <div className="flex items-center">
          <AiOutlineFacebook className="text-pink-800 text-2xl mr-2" />

          <div>
            <Link>Facebook</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
