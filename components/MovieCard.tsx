import React from "react";

import Image from "./Image";
import { HeartIcon } from "@/lib/icons";
import { convertDate } from "@/lib/utils";

const MovieCard = () => {
  return (
    <div className="col-span-1 md:col-span-4 lg:col-span-3 xl:col-span-2 flex flex-col gap-5">
      <Image
        src="/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
        alt="poster"
        width={400}
        height={400}
        className="w-full h-auto rounded-md object-cover object-center aspect-[9/14]"
      />

      <div className="flex justify-between">
        <div className="py-1 px-2 rounded-md bg-purple text-white-800 uppercase font-bold text-xs">
          en
        </div>
        <HeartIcon className="text-purple text-2xl cursor-pointer" />
      </div>
      <div className="flex flex-col justify-between h-full">
        <h3 className="text-sm sm:text-base font-bold text-white-800 mb-1">
          The Godfather
        </h3>
        <span className="text-xs text-white-400">
          {convertDate("1972-03-14")}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
