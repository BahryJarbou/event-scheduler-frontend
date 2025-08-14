import { useState, useEffect } from "react";
import EventCard from "./eventCard";
const UserEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const evs = await getEvents();
        setEvents((prev) => evs);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
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
  return (
    <main className="flex flex-wrap gap-5 m-10">
      {events.map((evt) => (
        <EventCard key={evt.id} event={evt} />
      ))}
    </main>
  );
};

export default UserEvents;
