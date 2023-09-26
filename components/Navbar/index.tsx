import React from "react";
import Logo from "./Logo";
import Navs from "./Navs";

const Navbar = () => {
  return (
    <main className="py-6 flex items-center justify-between">
      <div className="flex gap-16 items-center text-white-800">
        <Logo />
        <Navs />
      </div>
      <form>
        <input
          type="text"
          placeholder="Search for a movie, tv show or person..."
          className="w-[320px] px-4 py-2 rounded-full border border-gray-300 outline-none placeholder:text-white bg-black-400 text-white sm:block hidden"
        />
      </form>
    </main>
  );
};

export default Navbar;
