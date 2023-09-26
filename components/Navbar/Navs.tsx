import { navs } from "@/lib/constants";
import Link from "next/link";
import Genres from "./Genres";
import { getMovieGenres, getTvGenres } from "@/api/genres";

export const revalidate = 60 * 60 * 24;

const Navs = async () => {
  const movieGenres = await getMovieGenres();
  const tvGenres = await getTvGenres();
  return (
    <ul className="flex gap-5">
      {navs.map((nav) => (
        <li className="hover:text-white transition-colors" key={nav.href}>
          <Link href={`${nav.href}`}>{nav.name}</Link>
        </li>
      ))}
      <Genres movieGenres={movieGenres || []} tvGenres={tvGenres || []} />
    </ul>
  );
};

export default Navs;
