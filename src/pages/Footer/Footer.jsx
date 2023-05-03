import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="bg-neutral text-neutral-content">
      <footer className="footer md:px-14 p-10 ">
        <div>
          <span className="footer-title text-3xl font-bold">Cooking Lite</span>
          <p>This website is different kind of chinese recipes.</p>
          <div className="flex text-3xl items-center gap-4 my-5">
            <BsFacebook className="text-blue-500" />
            <BsInstagram className="text-orange-600" />
            <BsTwitter className="text-blue-500" />
          </div>
        </div>

        <div>
          <span className="footer-title">Information</span>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">More Search</a>
          <a className="link link-hover">Latest Food</a>
          <a className="link link-hover">Blog</a>
        </div>
        <div>
          <span className="footer-title">Helpful Links</span>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Supports</a>
          <a className="link link-hover">Terms & Conditons</a>
          <a className="link link-hover">Privacy Policy</a>
        </div>
        <div>
          <span className="footer-title">Contact Us</span>
          <div className="flex items-center gap-2">
            <AiFillPhone className="text-blue-500 text-3xl" />
            <p>+918777090856</p>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineMail className="text-red-500 text-3xl" />
            <p>cookinglite96@gmail.com</p>
          </div>
        </div>
      </footer>
      <hr />
      <div className="flex  justify-around md:px-14 p-10 items-center py-5">
        <p>@2023 Cooking Lite. All Rights Reserved</p>
        <p>Powered by Cooking Lite</p>
      </div>
    </div>
  );
};

export default Footer;
