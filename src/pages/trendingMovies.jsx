

import React from "react";
import { useQuery } from "@tanstack/react-query";
import MovieListPageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import { getTrendingMovies } from "../api/tmdb-api";
import AddToTrendingIcon from "../components/cardIcons/addToTrending";

const TrendingMoviesPage = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["trendingMovies"],
    queryFn: getTrendingMovies,
  });

  if (isLoading) return <Spinner />;
  if (isError) {
    console.error("Error fetching trending movies:", error.message);
    return <p>Error loading trending movies.</p>;
  }

  return (
    <MovieListPageTemplate
      title="Trending Movies"
      movies={data.results}
      action={(movie) => <AddToPlaylistIcon movie={movie} />}
    />
  );
};

export default TrendingMoviesPage;
