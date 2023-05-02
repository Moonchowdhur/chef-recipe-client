import React from "react";

const Error = () => {
  return (
    <div className="md:px-12 p-4 flex bg-black justify-center h-screen items-center">
      <div className="gap-3 text-red-600  animate-bounce flex items-center text-xl md:text-9xl tracking-wider font-bold ">
        <h2>E</h2>
        <h2>R</h2>
        <h2>R</h2>
        <div className="animate-spin border-white w-10 h-10 md:w-28 md:h-28 border-dashed rounded-full border-4 text-3xl"></div>
        <h2>R</h2>
        <h2 className="text-white">....</h2>
      </div>
    </div>
  );
};

export default Error;
