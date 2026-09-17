import { useState } from "react";
import EachMovieDetails from "./EachMovieDetails";

function MovieCard({ movie }) {
  const [isOpen, setIsOpen] = useState(false);
  //   console.log(movie);
  const {
    image: { medium: mediumPosterImg },
    name,
    premiered: releaseDate,
    rating: { average },
  } = movie;
  return (
    <>
      <div className="group overflow-hidden rounded-2xl bg-slate-900 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
        <div className="relative overflow-hidden">
          <img
            src={mediumPosterImg}
            alt={name}
            className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <h2 className="mb-2 line-clamp-1 text-xl font-bold text-white">
            {name}
          </h2>
          <div className="flex justify-between items-center px-4">
            <div className=" bg-slate-950/80 text-sm font-semibold text-yellow-400 backdrop-blur-sm">
              ⭐ {average ? average.toFixed(1) : "No Rating"}
            </div>
            <p className="mb-4 text-sm text-slate-400">
              📅 {releaseDate || "Unknown"}
            </p>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="block cursor-pointer w-full rounded-lg bg-yellow-400 px-4 py-2 mt-2 text-center font-semibold text-slate-950 transition hover:bg-yellow-300"
          >
            See Details
          </button>
        </div>
      </div>
      {isOpen && (
        <EachMovieDetails movie={movie} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}

export default MovieCard;
