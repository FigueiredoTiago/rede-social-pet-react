import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ( {children} ) => {
  const { data } = useSelector((state) => state.user);

  if (data) return children;

  if (data === null) return <Navigate to="/login" />;
};

export default ProtectedRoute;
