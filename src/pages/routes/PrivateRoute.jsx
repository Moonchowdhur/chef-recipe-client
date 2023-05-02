import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Loading/Loading";
import { Authcontext } from "../provider/Authprovider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(Authcontext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
