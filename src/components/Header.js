import React from "react";
import Logo from "../assets/Logo-Nav.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex md:flex-row justify-between items-center m-auto md:px-16 py-3 mb-4 font-poppins">
      <Link to="/">
        <img className="object-contain h-16" src={Logo} alt="Logo" />
      </Link>

      <div className="flex justify-between items-center text-white h-16">
        <Link
          to="/discover"
          className="md:w-28 md:w-20 w-20 text-base hover:text-gray-200"
        >
          Discover
        </Link>
        <Link to="/join" className="md:w-16 w-10 text-base hover:text-gray-200">
          Join
        </Link>
      </div>
    </header>
  );
};

export default Header;
