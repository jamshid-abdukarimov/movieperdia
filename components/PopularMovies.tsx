import { getPopularMovies } from "@/api/movies";
import React from "react";

const PopularMovies = async () => {
  const movies = await getPopularMovies();
  console.log(movies?.length);
  return (
    <main>
      <h3 className="text-2xl text-white-800">Popular Movies</h3>
    </main>
  );
};

export default PopularMovies;
