import { useState } from "react";

function Movies() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${search}`,
    );

    const data = await response.json();

    setMovies(data);
    // console.log(movies);
  };

  return (
    <section className="container mx-auto flex w-full justify-end px-4 py-10">
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
    </section>
  );
}

export default Movies;
