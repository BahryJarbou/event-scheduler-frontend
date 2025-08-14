import { use } from "react";
import { Outlet, Navigate } from "react-router";
import { AuthContext } from "../context/authContext";
const ProtectedLayout = () => {
  const { isAuthenticated } = use(AuthContext);
  return isAuthenticated ? <Outlet /> : <Navigate to="/signIn" />;
};

export default ProtectedLayout;
