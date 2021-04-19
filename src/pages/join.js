import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const Join = () => {
  return (
    <div className="bg-purply min-h-screen overflow-auto bg-scroll relative font-poppins">
      <Header />

      <div className="container flex flex-col md:flex-row justify-center items-center mb-32">
        <h1 className="md:text-6xl text-4xl text-white text-center font-bold md:mr-6 my-4">
          Join the <span className="text-pink-700">boom</span> fun.
        </h1>

        <form className="bg-black text-white md:p-16 p-8 rounded-md flex flex-col w-11/12 md:w-5/12 items-center md:items-start mt-4">
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            className="bg-black border-white border rounded-md w-8/12 md:w-full py-2 my-4 outline-none"
          />
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            className="bg-black border-white border rounded-md w-8/12 md:w-full py-2 my-4 outline-none"
          />

          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            className="bg-black border-white border rounded-md w-8/12 md:w-full py-2 my-4 outline-none"
          />

          <input
            type="submit"
            value="Join Now"
            className="bg-blue-600 hover:bg-blue-700 w-8/12 py-3 rounded-lg mt-4 md:w-full outline-none"
          />
        </form>
      </div>

      <Footer />
    </div>
  );
};
