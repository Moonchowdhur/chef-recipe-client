import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BsFillHandThumbsUpFill, BsFillSuitHeartFill } from "react-icons/bs";

const Eachchef = () => {
  const chefDetails = useLoaderData();
  const [love, setLove] = useState(true);
  console.log(chefDetails);
  const {
    bio,
    picture,
    recipe1,
    recipe2,
    recipe3,
    id,
    expricence,
    likes,
    name,
    recipeno,
  } = chefDetails;

  const changeLove = () => {
    if (love === true) {
      alert("added");
    }
    setLove(false);
  };
  return (
    <div className=" p-4 md:px-12">
      <div className="md:flex  text-white bg-[#41644A] p-4 gap-6">
        <div className="border p-4 border-dashed shadow-lg md:w-[50%]">
          <img
            src={picture}
            className="md:w-[700px] md:h-[500px] w-[400px] h-[300px] rounded-lg"
            alt=""
          />
        </div>
        <div className="flex md:w-[50%] items-center">
          <div>
            <h2 className="text-4xl ms-4 mt-4 md:mt-0 italic  font-medium">
              <span className="text-[#FCC8D1] me-2 font-bold ">Name:</span>
              {name}
            </h2>
            <p className="mt-7 mx-5 text-3xl font-medium ">{bio}</p>
            <div className="md:flex items-center mx-5 gap-7 mt-7 text-xl font-medium">
              <p className="mb-3 md:mt-0">
                Years Of Expriences: {expricence}years
              </p>
              <p className="mb-3 md:mt-0">Numbers of recipes: {recipeno}</p>
              <div className="flex font-medium items-center gap-2">
                <BsFillHandThumbsUpFill className="text-3xl text-[#FCC8D1]" />
                <p className="text-base"> {likes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 1st recipe */}
      <div className="mt-7 ">
        <div className="md:flex gap-6 shadow-lg p-4 shadow-green-800">
          <div className=" md:w-[30%]  bg-slate-300">
            <img
              src={recipe1?.pic}
              className="w-[400px] rounded-lg h-[300px]"
              alt=""
            />
          </div>
          <div className="mt-5 md:mt-0 md:w-[50%]">
            <div className="flex  justify-between items-center">
              <h2 className="text-3xl text-[#41644A] font-bold">
                Recipe name:{recipe1?.recipe_name}
              </h2>
              <button onClick={() => changeLove()}>
                <BsFillSuitHeartFill
                  className={` text-3xl ${
                    love ? "text-red-500" : "text-gray-500"
                  }`}
                />
              </button>
            </div>
            <p className="mt-4 text-xl font-medium">
              Ingredients: {recipe1?.ingredients}
            </p>
            <p className="mt-4">
              <span className="font-bold">Method:</span> {recipe1?.method}
            </p>
            <p className="mt-4 font-bold text-[#41644A]">
              Rating: {recipe1?.rating}
            </p>
          </div>
        </div>
      </div>
      {/* 1st recipe end */}
    </div>
  );
};

export default Eachchef;
