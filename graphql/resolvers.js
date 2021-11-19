import { getMovies, getSuggestions, getMovie } from "./db.js";
const resolvers = {
  Query: {
    movies: (_, { limit, rating, query_term, genre }) =>
      getMovies(limit, rating, query_term, genre),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),
  },
};

export default resolvers;
