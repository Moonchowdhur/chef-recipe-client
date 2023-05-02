import React, { useEffect, useState } from "react";
import { BsYoutube } from "react-icons/bs";
import Chefs from "../Chefs/Chefs";

const Home = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://assignment-server-jade.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  // console.log(chefs);

  return (
    <div className="mt-16 md:mt-5">
      <div className="md:flex gap-12  p-4 md:px-12 bg-[#41644A]">
        <div className="md:w-[50%] mt-16">
          <h2 className="text-5xl text-white font-bold tracking-widest">
            ENJOY YOUR <br />
            <span className="text-[#FCC8D1]">HEALTHY DELICIOUS FOOD</span>
          </h2>
          <div className="flex gap-8 mt-16 items-center">
            <button
              className="rounded-2xl hover:text-white bg-[#F9D949] text-base text-black font-bold border-none px-5
             py-2 btn "
            >
              Book a table
            </button>
            <button
              className="rounded-2xl hover:text-white bg-gray-200  text-base text-black font-bold border-none px-5
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

      {/* extra part1 */}
      <div className="mt-20 p-4 md:px-12 pb-8 ">
        <h2 className="text-center text-4xl font-bold italic text-[#41644A]">
          Latest foody news
        </h2>
        <h1 className="text-center text-4xl mt-3 font-bold">
          WE ARE FOODFRIES
        </h1>
        <div className="flex justify-center mt-8 gap-2">
          <img
            src="https://i.pinimg.com/564x/0e/58/dd/0e58dd00ec929da03a1ad7bf0cd7fefe.jpg"
            alt=""
            className="md:w-[300px] w-[150px] h-[150px]  md:h-[300px] rounded-2xl"
          />
          <img
            src="https://i.pinimg.com/564x/e3/ac/a4/e3aca4310acc6d2a0712baf724e64041.jpg"
            alt=""
            className="md:w-[300px] w-[150px] h-[150px]  md:h-[300px] rounded-2xl"
          />
        </div>
      </div>
      {/* extra part1 end */}

      {/* chefs card */}
      <div className="mt-20 p-4 gap-7 md:px-12 grid grid-cols-1 md:grid-cols-2">
        {chefs.map((chef) => (
          <Chefs key={chef.id} chef={chef}></Chefs>
        ))}
      </div>
    </div>
  );
};

export default Home;
