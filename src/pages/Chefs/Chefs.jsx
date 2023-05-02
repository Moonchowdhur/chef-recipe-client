import React from "react";

const Chefs = ({ chef }) => {
  console.log(chef);
  const { id, name, picture, expricence, recipeno, likes } = chef;
  return (
    <div className="p-4 border border-green-900 shadow-xl">
      <div className="md:flex gap-4">
        <div className="">
          <img
            src={picture}
            className="w-[200px] h-[200px] rounded-lg"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-2xl font-medium">
            <span className="text-[#41644A] font-bold">Name:</span>
            {name}
          </h2>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
