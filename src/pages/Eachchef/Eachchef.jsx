import React from "react";
import { useLoaderData } from "react-router-dom";

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
    <div>
      <h2>chefDetails</h2>
    </div>
  );
};

export default Eachchef;
