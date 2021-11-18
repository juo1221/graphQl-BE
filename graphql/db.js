let movies = [
  { id: 1, name: "juo", score: 2 },
  { id: 2, name: "juo1", score: 3 },
  { id: 3, name: "juo2", score: 76 },
  { id: 4, name: "juo3", score: 6 },
  { id: 5, name: "juo4", score: 26 },
  { id: 6, name: "juo5", score: 22 },
  { id: 7, name: "juo6", score: 29 },
  { id: 8, name: "juo7", score: 16 },
  { id: 9, name: "juo8", score: 25 },
  { id: 10, name: "juo9", score: 46 },
];

export const getMovies = () => movies;
export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
};
export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};
export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
