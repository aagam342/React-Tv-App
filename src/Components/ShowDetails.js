import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getShowSummary } from "../services/Api";
import theme from "../theme";

const ShowDetails = () => {
  const { showId } = useParams();
  const [show, setShow] = useState(null);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const handleBookTicket = () => {
    const movieDetails = {
      movieName: show.name,
      director: "Director A",
      genre: "Genre A",
    };
    navigate("/book-ticket", { state: { showId, movieDetails } });
  };

  const removeTags = (str) => {
    if (str === null || str === "") {
      return false;
    } else {
      str = str.toString();
    }
    return str.replace(/<[^>]*>/g, "");
  };
  useEffect(() => {
    const fetchShowDetails = async () => {
      const data = await getShowSummary(showId);
      setShow(data);
    };

    fetchShowDetails();
  }, [showId]);

  return (
    <div style={{ backgroundColor: theme.colors.primary }}>
      {show ? (
        <>
          <h2 style={{ color: theme.colors.secondary }}>{show.name}</h2>
          <p>{removeTags(show.summary)}</p>
          <button className="btn btn-primary mx-3" onClick={handleBookTicket}>
            Book Ticket
          </button>
          <button className="btn btn-secondary mx-3" onClick={handleGoBack}>
            Go Back
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShowDetails;
