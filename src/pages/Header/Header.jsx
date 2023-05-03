import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Authcontext } from "../provider/Authprovider";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(Authcontext);
  console.log(user);

  const logOutBtn = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="md:px-12 flex items-center justify-between p-4 bg-[#F9D949]">
        <div className="flex items-center gap-2">
          <img
            src="https://ik.imagekit.io/awwybhhmo/satellite_images/chinese/beyondmenu/hero/2.jpg?tr=w-3840,q-50"
            className="w-14 h-14 rounded-full"
            alt=""
          />
          <h2 className="italic font-bold text-black text-4xl">Chef Lite</h2>
        </div>
        <ul
          className={`md:flex md:bg-transparent bg-[#E9EDC9] items-center gap-4 text-2xl font-bold md:static absolute ${
            open ? "top-24 right-7 p-3 " : "-top-36 right-0"
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
          <li>
            {user ? (
              <div className="flex  items-center gap-2">
                <img
                  src={user.photoURL}
                  className="w-10 h-10 rounded-full"
                  alt={user.displayName}
                  title={user.displayName && user.displayName}
                />
                <button onClick={logOutBtn}>Logout</button>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <button>Login</button>
                </Link>
              </>
            )}
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
