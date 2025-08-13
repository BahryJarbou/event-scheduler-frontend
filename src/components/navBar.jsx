const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Event Scheduler</a>
      </div>
      <div className="navbar-end gap-4">
        <a className="btn">Sign In</a>
        <a className="btn">Sign Up</a>
      </div>
    </div>
  );
};

export default NavBar;
