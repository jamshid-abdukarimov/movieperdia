import { Movie } from "@/types";
import axios from "./base";

export const getPopularMovies = async () => {
  try {
    const { data } = await axios.get<{ results: Movie[] }>("movie/popular");
    return data.results;
  } catch (error) {
    console.log(error);
  }
};
