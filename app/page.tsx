export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-7xl px-5 py-6 md:px-8">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <h1 className="text-2xl font-bold tracking-[0.25em] text-blue-400">
              NEXUS
            </h1>
            <p className="text-xs text-slate-500">
              Your world, connected.
            </p>
          </div>

          <button className="rounded-full border border-white/15 px-4 py-2 text-sm">
            Sign in
          </button>
        </header>

        {/* Hero */}
        <section className="py-16 text-center md:py-24">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-300">
            Connect • Discover • Create
          </p>

          <h2 className="mx-auto max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Find what you need.
            <span className="block text-blue-400">
              Discover what’s next.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            NEXUS connects people, businesses, services, opportunities,
            products, creators and communities in one global platform.
          </p>

          {/* Search */}
          <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 sm:flex-row">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="min-w-0 flex-1 rounded-xl bg-transparent px-4 py-4 text-white outline-none placeholder:text-slate-500"
            />

            <button className="rounded-xl bg-blue-500 px-7 py-4 font-semibold hover:bg-blue-400">
              Search
            </button>
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {[
              "Buy something",
              "Find a service",
              "Find talent",
              "Find opportunities",
            ].map((item) => (
              <button
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 hover:bg-white/10"
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        {/* Discover */}
        <section className="border-t border-white/10 py-12">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Explore NEXUS
            </p>
            <h3 className="mt-2 text-3xl font-bold">
              One place. Many possibilities.
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Explore", "Discover useful things, people and opportunities."],
              ["People", "Find talent, creators and people with useful skills."],
              ["Services", "Discover people and businesses offering services."],
              ["Opportunities", "Find jobs, projects and collaborations."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.07]"
              >
                <h4 className="text-xl font-semibold">{title}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {text}
                </p>
                <button className="mt-5 text-sm font-semibold text-blue-400">
                  Explore →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Marketplace */}
        <section className="py-12">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-sm uppercase tracking-widest text-blue-400">
                Marketplace
              </p>
              <h3 className="mt-2 text-3xl font-bold">
                Find products and services
              </h3>
            </div>

            <button className="hidden text-sm text-slate-400 sm:block">
              View all →
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Products", "Discover products from people and businesses."],
              ["Digital products", "Find useful digital products and resources."],
              ["Business", "Discover businesses and what they offer."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-7"
              >
                <div className="mb-8 h-12 w-12 rounded-xl border border-blue-400/30 bg-blue-400/10" />

                <h4 className="text-xl font-semibold">{title}</h4>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {text}
                </p>

                <button className="mt-6 rounded-lg border border-white/10 px-4 py-2 text-sm hover:bg-white/10">
                  Discover
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* VERA */}
        <section className="my-8 rounded-3xl border border-blue-400/20 bg-blue-400/[0.06] p-7 md:p-10">
          <p className="text-sm uppercase tracking-widest text-blue-300">
            Meet VERA
          </p>

          <h3 className="mt-3 text-3xl font-bold">
            Your guide inside NEXUS.
          </h3>

          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            VERA helps you discover people, services, products and
            opportunities based on what you're looking for.
          </p>

          <button className="mt-7 rounded-xl bg-blue-500 px-6 py-3 font-semibold hover:bg-blue-400">
            Ask VERA
          </button>
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t border-white/10 py-8 text-center text-sm text-slate-500">
          <p>NEXUS — Your world, connected.</p>
          <p className="mt-2">
            Connect • Discover • Create
          </p>
        </footer>
      </div>
    </main>
  );
      }
