function Hero() {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("/hero-image.jpeg")`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block rounded-full bg-yellow-400/20 px-4 py-1 text-sm font-medium text-yellow-400 backdrop-blur-sm">
              🎬 Welcome to Movie Explorer
            </span>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              Explore the World of
              <span className="block text-yellow-400">Movies</span>
            </h1>

            <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
              Discover popular movies, find your favorites, and explore
              something new to watch anytime.
            </p>

            <button className="btn border-none bg-yellow-400 px-6 mt-2 text-base font-semibold text-slate-950 hover:bg-yellow-300">
              Explore Movies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
