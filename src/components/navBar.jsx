import Button from "daisyui/components/button";
import { Link } from "react-router";
import { AuthContext } from "../context/authContext";
import { use } from "react";

const NavBar = () => {
  const { isAuthenticated, toggleAuth } = use(AuthContext);
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <Link to={isAuthenticated ? "/protected" : "/"}>
          <button className="btn btn-ghost text-xl">Event Scheduler</button>
        </Link>
      </div>
      <div className="navbar-end gap-4">
        {!isAuthenticated ? (
          <Link to={"/signIn"}>
            <button className="btn">Sign In</button>
          </Link>
        ) : (
          <button
            onClick={() => {
              toggleAuth();
              localStorage.removeItem("token");
              localStorage.removeItem("isAuthenticated");
            }}
            className="btn"
          >
            Sign Out
          </button>
        )}
        {!isAuthenticated && (
          <Link to={"/signUp"}>
            <button className="btn">Sign Up</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
