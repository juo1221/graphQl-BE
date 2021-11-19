import axios from "axios";

const BASE_URL = "https://yts.mx/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETALIS_URL = `${BASE_URL}movie_details.json`;
const MOVIES_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating, query_term, genre) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating,
      query_term,
      genre,
    },
  });
  return movies;
};
export const getMovie = async (id) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios(MOVIE_DETALIS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movie;
};
export const getSuggestions = async (id) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(MOVIES_SUGGESTIONS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movies;
};
