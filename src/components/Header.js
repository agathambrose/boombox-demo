import React from "react";
import Logo from "../assets/Logo-Nav.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex md:flex-row  justify-between items-center m-auto px-4 md:px-16 py-3">
      <img className="object-contain h-16" src={Logo} alt="Logo" />

      <div className="flex justify-between items-center text-white h-16">
        <Link to="/discover" className="md:w-28 w-20 h-8 text-lg hover:text-gray-200">
          Discover
        </Link>
        <Link to="/join" className="w-16 h-8 text-lg hover:text-gray-200">
          Join
        </Link>
      </div>
    </header>
  );
};

export default Header;
