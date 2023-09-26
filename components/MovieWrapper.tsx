import React from "react";
import MovieCard from "./MovieCard";

const MovieWrapper = () => {
  return (
    <div className="font-medium grid grid-cols-2 md:grid-cols-12 gap-5">
      <MovieCard />
    </div>
  );
};

export default MovieWrapper;
