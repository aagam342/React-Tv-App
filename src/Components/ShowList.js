import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { searchShows } from "../services/Api";
import theme from "../theme";

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const data = await searchShows("all");
      setShows(data);
    };

    fetchShows();
  }, []);

  return (
    <div style={{ backgroundColor: theme.colors.primary }}>
      <h1 style={{ color: theme.colors.secondary }}>TV Shows</h1>
      <ul>
        {shows.map((show) => (
          <li key={show.show.id}>
            <Link to={`/show/${show.show.id}`}>{show.show.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
