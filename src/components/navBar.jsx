import Button from "daisyui/components/button";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <Link to={"/"}>
          <button className="btn btn-ghost text-xl">Event Scheduler</button>
        </Link>
      </div>
      <div className="navbar-end gap-4">
        <Link to={"/signIn"}>
          <button className="btn">Sign In</button>
        </Link>
        <Link to={"/signUp"}>
          <button className="btn">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
