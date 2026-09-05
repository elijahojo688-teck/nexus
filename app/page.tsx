export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
        <nav className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-widest text-blue-400">
            NEXUS
          </h1>

          <button className="rounded-full border border-white/20 px-4 py-2 text-sm">
            Sign in
          </button>
        </nav>

        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-300">
            Connect • Discover • Create
          </p>

          <h2 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Find what you need.
            <span className="block text-blue-400">Discover what’s next.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            NEXUS connects people, businesses, services, opportunities,
            products, creators and communities in one global platform.
          </p>

          <div className="mt-10 flex w-full max-w-2xl items-center rounded-2xl border border-white/15 bg-white/5 p-2 shadow-2xl">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-1 bg-transparent px-4 py-4 text-white outline-none placeholder:text-slate-500"
            />

            <button className="rounded-xl bg-blue-500 px-6 py-4 font-semibold transition hover:bg-blue-400">
              Search
            </button>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {["Buy something", "Find a service", "Find talent", "Find opportunities"].map(
              (item) => (
                <button
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 hover:bg-white/10"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>

        <footer className="border-t border-white/10 pt-5 text-center text-sm text-slate-500">
          NEXUS — Your world, connected.
        </footer>
      </section>
    </main>
  );
}
