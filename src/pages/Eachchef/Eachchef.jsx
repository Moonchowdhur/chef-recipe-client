import React from "react";
import { useLoaderData } from "react-router-dom";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

const Eachchef = () => {
  const chefDetails = useLoaderData();
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
    </div>
  );
};

export default Eachchef;
