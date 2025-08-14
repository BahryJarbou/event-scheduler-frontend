import { Children, createContext } from "react";
import { useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("isAuthenticated")) || false
  );

  const toggleAuth = () => {
    setIsAuthenticated((prev) => !prev);
  };

  return (
    <AuthContext value={{ toggleAuth, isAuthenticated }}>
      {children}
    </AuthContext>
  );
};

export { AuthContextProvider, AuthContext };
