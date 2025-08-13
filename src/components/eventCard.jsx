const EventCard = ({ event }) => {
  return (
    <div className="card w-96 bg-base-100 card-xl shadow-md">
      <div className="card-body">
        <h2 className="card-title font-bold">{event.title}</h2>
        <p className="italic">{event.date.slice(0, 10)}</p>
        <p>{event.description}</p>
        <p>{event.location}</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">See More Details</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
