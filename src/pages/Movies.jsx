import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "../components/MovieCard";

function Movies() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  //   movies fetch
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("https://api.tvmaze.com/shows");
      const data = await response.json();

      setMovies(data);
    };
    fetchMovies();
  }, []);

  //   search
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${search}`,
    );

    const data = await response.json();

    setMovies(data.map((item) => item.show));
    console.log(movies);
  };

  return (
    <section className="container mx-auto w-full px-4 py-10">
      <div className="flex justify-end">
        <form onSubmit={handleSearch} className="flex w-full max-w-md gap-2">
          <input
            type="text"
            placeholder="Search Movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input w-full"
          />

          <button className="btn btn-soft">Search</button>
        </form>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </div>
    </section>
  );
}

export default Movies;

{
  /* <div key={movie.id} className="card bg-base-100 shadow-md">
            {movie.image && (
              <img
                src={movie.image.medium}
                alt={movie.name}
                className="h-80 w-full object-cover"
              />
            )}

            <div className="card-body">
              <h2 className="card-title">{movie.name}</h2>

              <p>⭐ {movie.rating?.average || "N/A"}</p>

              <p className="text-sm">
                {movie.premiered || "Release date unavailable"}
              </p>
            </div>
          </div> */
}
