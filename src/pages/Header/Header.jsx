import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="md:px-12 flex items-center justify-between p-4 bg-[#F9D949]">
        <div className="flex items-center gap-2">
          <img
            src="https://ik.imagekit.io/awwybhhmo/satellite_images/chinese/beyondmenu/hero/2.jpg?tr=w-3840,q-50"
            className="w-14 h-14 rounded-full"
            alt=""
          />
          <h2 className="italic font-bold text-black text-4xl">Resta</h2>
        </div>
        <ul
          className={`md:flex items-center gap-4 text-2xl font-bold md:static absolute ${
            open ? "top-20 right-0 " : "-top-36 right-0"
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-red-500" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "text-red-500" : "")}
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          {open ? <ImCross /> : <FaHamburger />}
        </div>
      </div>
    </div>
  );
};

export default Header;
