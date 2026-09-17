import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-slate-950 text-white shadow-lg">
      <div className="container mx-auto flex w-full items-center justify-between px-4 py-3">
        <Link to="/" className="text-2xl font-bold text-yellow-400">
          Movie Explorer
        </Link>

        <nav>
          <Link
            to="/movies"
            className="rounded-lg px-4 py-2 font-medium text-slate-200 transition hover:bg-slate-800 hover:text-yellow-400"
          >
            Movies
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
