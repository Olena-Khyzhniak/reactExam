import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveTrendingIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveTrending = (e) => {
    e.preventDefault();
    context.removeTrending(movie);
  };

  return (
    <IconButton
      aria-label="remove from trending"
      onClick={handleRemoveTrending}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveTrendingIcon;
