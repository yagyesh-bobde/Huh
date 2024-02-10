import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full min-h-[10vh] flex items-center justify-between">
      <img
        src="/images/profile/arrow.svg"
        alt=""
        className="text-primary text-xl lg:text-3xl font-extrabold"
      />
      <Link to="/">
        <div className="text-primary px-10 py-2 flex justify-center items-center text-2xl font-bold">
          Huh!
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
