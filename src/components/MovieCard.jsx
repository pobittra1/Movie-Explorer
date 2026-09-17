import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  //   console.log(movie);
  const {
    image: { medium: mediumPosterImg },
    name,
    premiered: releaseDate,
    rating: { average },
  } = movie;
  return (
    <div className="group overflow-hidden rounded-2xl bg-slate-900 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:scale-105">
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
          <div className="absolute right-3 top-3 rounded-full bg-slate-950/80 px-3 py-1 text-sm font-semibold text-yellow-400 backdrop-blur-sm">
            ⭐ {average ? average.toFixed(1) : "No Rating"}
          </div>
          <p className="mb-4 text-sm text-slate-400">
            📅 {releaseDate || "Unknown"}
          </p>
        </div>
        <Link
          to={`/movies/${movie.id}`}
          className="block rounded-lg bg-yellow-400 px-4 py-2 mt-2 text-center font-semibold text-slate-950 transition hover:bg-yellow-300"
        >
          See Details
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
