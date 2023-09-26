"use client";

import Link from "next/link";
import styles from "./genres.module.css";
import { Genre } from "@/types";
import { useState } from "react";

interface Props {
  movieGenres: Genre[];
  tvGenres: Genre[];
}

const Genres = ({ movieGenres, tvGenres }: Props) => {
  const [checked, setChecked] = useState<any>(false);

  return (
    <li className={"relative " + styles.dropdown}>
      <span className="cursor-pointer">Genres</span>
      <div
        className={
          "absolute w-[450px] h-auto bg-black-400 p-5 rounded-md -left-36 hidden " +
          styles.dropdownContent
        }
      >
        <div className="mb-3 flex justify-center">
          <input
            value={checked}
            onChange={(e) => setChecked(e.target.checked)}
            type="checkbox"
            id="genre_toggle"
            className={`${styles.input} absolute`}
          />
          <label
            className={`${styles.label} flex justify-between items-center px-2`}
            htmlFor="genre_toggle"
          >
            <span
              className={`relative z-50 ${
                !checked ? "text-white-800" : "text-black-400"
              } font-medium transition-colors`}
            >
              Movie
            </span>
            <span
              className={`relative z-50 ${
                checked ? "text-white-800" : "text-black-400"
              } font-medium transition-colors`}
            >
              TV Shows
            </span>
          </label>
        </div>
        <ul className="grid-cols-3  gap-2 grid">
          {(checked ? tvGenres! : movieGenres!).map((genre) => (
            <li
              key={genre.id}
              className="col-span-1 hover:text-white hover:underline transition-colors"
            >
              <Link
                href={`/${checked ? "tvshows" : "movies"}/genres/${genre.id}`}
              >
                {genre.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default Genres;
