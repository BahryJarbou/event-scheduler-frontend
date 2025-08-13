import { useEffect, useState } from "react";
import { data, Link } from "react-router";
import EventCard from "../components/eventCard";
const HomePage = () => {
  const [events, setEvents] = useState([]);
  const getEvents = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/events", {
        headers: { "Content-Type": "application/json" },
      });
      // console.log(res);
      if (res.status !== 200) {
        throw new Error("couldn't fetch data");
      }
      const data = await res.json();
      return data.results;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    (async () => {
      try {
        const evs = await getEvents();
        setEvents((prev) => evs);
      } catch (err) {
        console.error(err);
      }
    })(),
      [];
  });
  return (
    <main className="flex flex-wrap gap-5 m-10">
      {events.map((evt) => (
        <EventCard key={evt.id} event={evt} />
      ))}
    </main>
    // );
    // <div
    //   className="hero min-h-screen"
    //   style={{
    //     backgroundImage:
    //       "url(https://partyslate.imgix.net/photos/1163643/photo-339fea65-310d-4f51-bb8c-269f9ccceb60.png?ixlib=js-2.3.2&auto=compress%2Cformat&bg=fff&cs=srgb)",
    //   }}
    // >
    //   <div className="hero-overlay"></div>
    //   <div className="hero-content text-neutral-content text-center">
    //     <div className="max-w-md">
    //       <h1 className="mb-5 text-7xl font-bold">Hello there</h1>
    //       <p className="mb-5 text-3xl">
    //         Join Us Now And Have All Your Events In One Place, Easily Managed
    //         And Retrievable On Any Device, Anywhere!
    //       </p>
    //       <Link to={"/signUp"}>
    //         <button className="btn btn-primary btn-xl">Sign Up Now!</button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default HomePage;
