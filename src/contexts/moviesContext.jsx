import React, { useState } from "react";
import { getTrendingMovies } from "../api/tmdb-api";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  const [trending, setTrending] = useState([]);
  const [topTrendingMoviesIds, setTopTrendingMoviesIds] = useState([]);
  const [myReviews, setMyReviews] = useState({});

  const addToTrending = (movie) => {
    let newTrending = [];
    if (!trending.includes(movie.id)) {
      newTrending = [...trending, movie.id];
    }
    setTrending(newTrending);
  };  

  

useEffect(() => {
  getTrendingMovies("day").then((data) => {
    const ids = data.results.map((movie) => movie.id);
    setTopTrendingMoviesIds(ids);
  });
}, []);

  const removeTrending = (movie) => {
    setTrending(trending.filter(
      (mId) => mId !== movie.id
    ))
  };

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)) {
      newFavorites = [...favorites, movie.id];
    }
    else {
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };

  // We will use this function in the next step
  const removeFromFavorites = (movie) => {
    setFavorites(favorites.filter(
      (mId) => mId !== movie.id
    ))
  };

  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review })
  };
  console.log(myReviews);


  return (
    <MoviesContext.Provider
      value={{
        favorites,
        trending,   
        addToTrending,
        removeTrending, 
        addToFavorites,
        removeFromFavorites,
        addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );

};

export default MoviesContextProvider;



