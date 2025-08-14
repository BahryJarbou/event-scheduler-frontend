import { useEffect, useState } from "react";
import { data, Link } from "react-router";
import EventCard from "../components/eventCard";
const HomePage = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://partyslate.imgix.net/photos/1163643/photo-339fea65-310d-4f51-bb8c-269f9ccceb60.png?ixlib=js-2.3.2&auto=compress%2Cformat&bg=fff&cs=srgb)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-7xl font-bold">Hello there</h1>
          <p className="mb-5 text-3xl">
            Join Us Now And Have All Your Events In One Place, Easily Managed
            And Retrievable On Any Device, Anywhere!
          </p>
          <Link to={"/signUp"}>
            <button className="btn btn-primary btn-xl">Sign Up Now!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
