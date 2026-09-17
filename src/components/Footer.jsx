import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-8 text-slate-300">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div>
          <h2 className="text-xl font-bold text-yellow-400">
            <Link to={"/"}>Movie Explorer</Link>
          </h2>
        </div>
        <p className="text-sm">© 2026 Movie Explorer. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/pobittra1"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-yellow-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
