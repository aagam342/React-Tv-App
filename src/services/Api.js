import axios from "axios";

const BASE_URL = "https://api.tvmaze.com";

export const searchShows = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/shows?q=${query}`);
  return response.data;
};

export const getShowSummary = async (showId) => {
  const response = await axios.get(`${BASE_URL}/shows/${showId}`);
  return response.data;
};
