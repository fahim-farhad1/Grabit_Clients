import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if(loading) return <>Loading....</>
  if (user) return children;
  return <Navigate to="/login" state={{ from: location }} replace />;
};
export default PrivateRoutes;
