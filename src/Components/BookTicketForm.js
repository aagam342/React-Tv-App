import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const BookTicketForm = () => {
  const location = useLocation();
  const { showId, movieDetails } = location.state;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  return (
    <div className="container">
      <h2 className="mt-4">Book Ticket</h2>
      <h3 className="mt-4">TV Show: {movieDetails.movieName}</h3>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Your Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input type="hidden" value={showId} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookTicketForm;
