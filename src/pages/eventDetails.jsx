import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const EventDetails = () => {
  const { eventID } = useParams();
  const [event, setEvent] = useState({
    id: 0,
    title: "",
    description: "",
    date: "",
    location: "",
    latitude: 0,
    longitude: 0,
    organizerId: 0,
    createdAt: "",
    updatedAt: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const eventRetieved = await getEventDetails(eventID);
        setEvent((prev) => eventRetieved);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const getEventDetails = async (eID) => {
    try {
      const res = await fetch(`http://localhost:3001/api/events/${eID}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (res.status !== 200) {
        throw new Error("Something went wrong!");
      }
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <MapContainer
        center={[event.latitude, event.longitude]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[Number(event.latitude), Number(event.longitude)]}>
          <Popup>{event.location}</Popup>
        </Marker>
      </MapContainer>
      <div className="card bg-base-100 w-[100vw] shadow-sm">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Title: {event.title}</h2>
          <p>Description: {event.description}</p>
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Delete Event</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
