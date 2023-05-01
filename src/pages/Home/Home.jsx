import React from "react";
import { BsYoutube } from "react-icons/bs";

const Home = () => {
  return (
    <div className=" mt-5">
      <div className="md:flex gap-12  p-4 md:px-12 bg-[#41644A]">
        <div className="md:w-[50%] mt-16">
          <h2 className="text-5xl text-white font-bold tracking-widest">
            ENJOY YOUR <br />
            <span className="text-[#FCC8D1]">HEALTHY DELICIOUS FOOD</span>
          </h2>
          <div className="flex gap-8 mt-16 items-center">
            <button
              className="rounded-2xl bg-[#F9D949] text-base text-black font-bold border-none px-5
             py-2 btn "
            >
              Book a table
            </button>
            <button
              className="rounded-2xl bg-gray-200  text-base text-black font-bold border-none px-5
             py-2 btn "
            >
              <BsYoutube className="text-red-500 text-3xl mx-2" /> Watch Video
            </button>
          </div>
        </div>
        <div className="md:w-[50%] mt-10 md:mt-10">
          <img
            src="https://i.pinimg.com/564x/14/73/24/147324a7fd0d64e83ba39e8db92af694.jpg"
            className="w-[400px] h-[400px] mx-auto rounded-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
