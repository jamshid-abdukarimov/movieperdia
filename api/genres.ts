import { Genre } from "@/types";
import axios from "./base";

export const getMovieGenres = async () => {
  try {
    const { data } = await axios.get<{ genres: Genre[] }>("genre/movie/list");
    return data.genres;
  } catch (error) {
    console.log(error);
  }
};

export const getTvGenres = async () => {
  try {
    const { data } = await axios.get<{ genres: Genre[] }>("genre/tv/list");
    return data.genres;
  } catch (error) {
    console.log(error);
  }
};
