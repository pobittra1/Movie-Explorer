function EachMovieDetails({ movie, onClose }) {
  const {
    image: { original: posterImg },
    name,
    premiered: releaseDate,
    rating: { average },
    genres,
    language,
    runtime,
    summary,
  } = movie;

  return (
    <dialog className="modal modal-open" onClick={onClose}>
      <div
        className="modal-box max-w-2xl bg-slate-900 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white"
        >
          ❌
        </button>
        <img
          src={posterImg}
          alt={name}
          className="mx-auto mb-5 max-h-[70vh] max-w-full rounded-xl object-contain"
        />
        <div className="space-y-5">
          <div className="flex w-full justify-between gap-4">
            <div>
              <p className="text-xs text-slate-400">Language</p>
              <p className="mt-1 font-semibold text-white">
                🌐 {language || "N/A"}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Rating</p>
              <p className="mt-1 font-semibold text-yellow-400">
                ⭐ {average || "N/A"}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Release Date</p>
              <p className="mt-1 font-semibold text-white">
                📅 {releaseDate || "Unknown"}
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-4 gap-4 border-t border-slate-700 pt-4">
            <div>
              <p className="text-xs text-slate-400">Runtime</p>
              <p className="mt-1 font-semibold text-white">
                ⏱️ {runtime ? `${runtime} min` : "N/A"}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Genres</p>
              <p className="mt-1 font-semibold text-white">
                🎭 {genres?.join(", ") || "N/A"}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-xl border border-slate-700 bg-slate-800/60 p-4">
          <h3 className="mb-3 text-lg font-bold text-white">Summary</h3>

          <div className="text-sm leading-6 text-slate-400">
            {summary || "No summary available."}
          </div>
        </div>
        <div className="modal-action">
          <button onClick={onClose} className="btn btn-warning">
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default EachMovieDetails;
