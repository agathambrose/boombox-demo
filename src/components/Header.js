import React from "react";
import Logo from "../assets/Logo-Nav.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex relative justify-between items-center m-auto px-4 md:px-16 py-3">
      <img className="left-40 top-6" src={Logo} alt="Logo" />

      <div className="flex justify-between text-white">
        <Link to="/discover" className="w-28 h-8 text-lg hover:text-gray-200">
          Discover
        </Link>
        <Link to="/join" className="w-14 h-8 text-lg hover:text-gray-200">
          Join
        </Link>
      </div>
    </div>
  );
};

export default Header;
