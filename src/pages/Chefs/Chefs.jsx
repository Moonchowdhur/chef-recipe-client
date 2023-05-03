import React from "react";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { Link, useNavigation } from "react-router-dom";
import Loading from "../Loading/Loading";
import LazyLoad from "react-lazy-load";

const Chefs = ({ chef }) => {
  const navigation = useNavigation();

  console.log(chef);
  const { id, name, picture, expricence, recipeno, likes } = chef;

  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  return (
    <div className="p-4 border border-green-900 shadow-xl">
      <div className="md:flex gap-4">
        <div className="">
          <LazyLoad height={200} width={200} threshold={1}>
            <img src={picture} className="w-full h-full" alt="" />
          </LazyLoad>
        </div>
        <div>
          <h2 className="text-3xl font-medium">
            <span className="text-[#41644A] font-bold">Name:</span>
            {name}
          </h2>
          <div className="flex gap-6 mt-6 text-lg font-medium">
            <p className="">Years Of Expriences:{expricence}years</p>
            <p>Numbers of recipes:{recipeno}</p>
          </div>
          <div className="flex  items-center justify-between mt-5">
            <div className="flex font-medium items-center gap-2">
              <BsFillHandThumbsUpFill className="text-2xl text-blue-600" />
              <p className="text-base">{likes}</p>
            </div>
            <Link to={`/chefs/${id}`}>
              <button className="bg-[#F9D949] md:mx-5  font-bold hover:bg-[#FCC8D1] btn px-2 py-1  text-black">
                View Recipes Button
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
