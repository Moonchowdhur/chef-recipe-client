import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { BsFillHandThumbsUpFill, BsFillSuitHeartFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../Loading/Loading";

const Eachchef = () => {
  const chefDetails = useLoaderData();
  const navigation = useNavigation();
  const [love, setLove] = useState(true);
  const [con, setCon] = useState(true);
  const [lo, setLo] = useState(true);
  //   console.log(chefDetails);

  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

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
      toast("Recipe is your favorite");
    }
    setLove(false);
  };

  const changeLove2 = () => {
    if (con === true) {
      toast("Recipe is your favorite");
    }
    setCon(false);
  };

  const changeLove3 = () => {
    if (lo === true) {
      toast("Recipe is your favorite");
    }
    setLo(false);
  };
  return (
    <div className="md:mt-0 mt-32 p-4 md:px-12">
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
          <div className=" md:w-[30%] ">
            <img
              src={recipe1?.pic}
              className="w-[400px] rounded-lg h-[350px]"
              alt=""
            />
          </div>
          <div className="mt-5 md:mt-0 md:w-[50%]">
            <div className="flex  justify-between items-center">
              <h2 className="text-3xl text-[#41644A] font-bold">
                Recipe name:{recipe1?.recipe_name}
              </h2>
            </div>
            <p className="mt-4 text-xl font-medium">
              Ingredients: {recipe1?.ingredients}
            </p>
            <p className="mt-4">
              <span className="font-bold">Method:</span> {recipe1?.method}
            </p>

            <div className=" flex items-center gap-8 ">
              <p className="mt-4  font-bold text-[#41644A]">
                Rating: {recipe1?.rating}
              </p>
              <button
                disabled={!love}
                onClick={() => changeLove()}
                className="btn mt-3 bg-red-600 border-none font-bold flex items-center gap-2"
              >
                <BsFillSuitHeartFill />
                Add to Favourite
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 1st recipe end */}
      {/* 2nd recipe start */}
      <div className="mt-7 ">
        <div className="md:flex gap-6 shadow-lg p-4 shadow-green-800">
          <div className=" md:w-[30%]  ">
            <img
              src={recipe2?.pic}
              className="w-[400px] rounded-lg h-[350px]"
              alt=""
            />
          </div>
          <div className="mt-5 md:mt-0 md:w-[50%]">
            <div className="flex  justify-between items-center">
              <h2 className="text-3xl text-[#41644A] font-bold">
                Recipe name:{recipe2?.recipe_name}
              </h2>
            </div>
            <p className="mt-4 text-xl font-medium">
              Ingredients: {recipe2?.ingredients}
            </p>
            <p className="mt-4">
              <span className="font-bold">Method:</span> {recipe2?.method}
            </p>
            <div className=" flex items-center gap-8 ">
              <p className="mt-4  font-bold text-[#41644A]">
                Rating: {recipe2?.rating}
              </p>
              <button
                disabled={!con}
                onClick={() => changeLove2()}
                className="btn mt-3 bg-red-600 border-none font-bold flex items-center gap-2"
              >
                <BsFillSuitHeartFill />
                Add to Favourite
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 2nc recipe end */}
      {/* 3rd recipe start */}
      <div className="mt-7 ">
        <div className="md:flex gap-6 shadow-lg p-4 shadow-green-800">
          <div className=" md:w-[30%]  ">
            <img
              src={recipe3?.pic}
              className="w-[400px] rounded-lg h-[350px]"
              alt=""
            />
          </div>
          <div className="mt-5 md:mt-0 md:w-[50%]">
            <div className="flex  justify-between items-center">
              <h2 className="text-3xl text-[#41644A] font-bold">
                Recipe name:{recipe3?.recipe_name}
              </h2>
            </div>
            <p className="mt-4 text-xl font-medium">
              Ingredients: {recipe3?.ingredients}
            </p>
            <p className="mt-4">
              <span className="font-bold">Method:</span> {recipe3?.method}
            </p>
            <div className=" flex items-center gap-8 ">
              <p className="mt-4  font-bold text-[#41644A]">
                Rating: {recipe3?.rating}
              </p>
              <button
                disabled={!lo}
                onClick={() => changeLove3()}
                className="btn mt-3 bg-red-600 border-none font-bold flex items-center gap-2"
              >
                <BsFillSuitHeartFill />
                Add to Favourite
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 3rd recipe end */}
      <ToastContainer />
    </div>
  );
};

export default Eachchef;
