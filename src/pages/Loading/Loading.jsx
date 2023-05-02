import React from "react";

const Loading = () => {
  return (
    <div className="md:mx-12 p-4 flex justify-center h-screen items-center">
      <div>
        <div className="radial-progress bg-green-700" style={{ "--value": 70 }}>
          70%
        </div>
      </div>
    </div>
  );
};

export default Loading;
