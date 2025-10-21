import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import TrendingIcon from "@mui/icons-material/Trending";

const AddToTrendingIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToTrending = (e) => {
    e.preventDefault();
    context.addToTrending(movie);
  };

  return (
    <IconButton aria-label="add to trending" onClick={handleAddToTrending}>
      <TrendingIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToTrendingIcon;
