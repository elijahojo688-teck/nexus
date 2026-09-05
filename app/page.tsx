"use client";

import { useState } from "react";

const suggestions = [
  "Find a keyboard",
  "Create a business logo",
  "Find a photographer",
  "Build a website",
  "Find someone to work with",
  "Sell my old laptop",
  "Find an opportunity",
  "Create a flyer",
];

const areas = [
  {
    icon: "⌕",
    title: "Explore",
    text: "Discover people, products, services and opportunities around the world.",
  },
  {
    icon: "◉",
    title: "People",
    text: "Find creators, professionals, talent and people with useful skills.",
  },
  {
    icon: "◇",
    title: "Marketplace",
    text: "Discover products and services from people and businesses.",
  },
  {
    icon: "↗",
    title: "Opportunities",
    text: "Find jobs, projects, collaborations and new possibilities.",
  },
];

function getSearchMessage(query: string) {
  const text = query.toLowerCase();

  if (
    text.includes("buy") ||
    text.includes("sell") ||
    text.includes("keyboard") ||
    text.includes("laptop") ||
    text.includes("phone") ||
    text.includes("product")
  ) {
    return "NEXUS is looking for products and marketplace results.";
  }

  if (
    text.includes("designer") ||
    text.includes("photographer") ||
    text.includes("developer") ||
    text.includes("drummer") ||
    text.includes("talent") ||
    text.includes("someone")
  ) {
    return "NEXUS is looking for people and services that match your request.";
  }

  if (
    text.includes("job") ||
    text.includes("opportunity") ||
    text.includes("project") ||
    text.includes("collaboration")
  ) {
    return "NEXUS is looking for opportunities that match your request.";
  }

  if (
    text.includes("logo") ||
    text.includes("flyer") ||
    text.includes("website") ||
    text.includes("create")
  ) {
    return "NEXUS is looking for people, tools and services that can help you create it.";
  }

  return "NEXUS understands your request and is preparing relevant results.";
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [suggestion, setSuggestion] = useState(0);
  const [searchMessage, setSearchMessage] = useState("");

  const nextSuggestion = () => {
    setSuggestion((current) => (current + 1) % suggestions.length);
  };

  const runSearch = () => {
    const query = search.trim();

    if (!query) {
      setSearchMessage("Tell NEXUS what you're trying to find.");
      return;
    }

    setSearchMessage(getSearchMessage(query));
  };

  const useSuggestion = () => {
    const selected = suggestions[suggestion];
    setSearch(selected);
    setSearchMessage(getSearchMessage(selected));
  };

  <return (
    <main className="nexus-page">      
      <div className="background-grid" />
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />

      <header className="nexus-header">
        <div className="brand">
          <div className="brand-symbol">
            <span>N</span>
          </div>

          <div>
            <div className="brand-name">NEXUS</div>
            <div className="brand-tagline">
              Connect. Create. Achieve.
            </div>
          </div>
        </div>

        <nav className="desktop-nav">
          <a href="#home">Home</a>
          <a href="#explore">Explore</a>
          <a href="#opportunities">Opportunities</a>
          <a href="#marketplace">Market</a>
        </nav>

        <button className="signin-button">
          Sign in
        </button>
      </header>

      <section className="hero" id="home">
        <div className="hero-badge">
          <span className="status-dot" />
          NEXUS GLOBAL NETWORK
        </div>

        <h1>
          What are you
          <span>trying to do?</span>
        </h1>

        <p className="hero-text">
          Find people, products, services, opportunities, businesses,
          creators and more — all in one place.
        </p>

        <div className="search-container">
          <div className="search-symbol">⌕</div>

          <input
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setSearchMessage("");
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                runSearch();
              }
            }}
            placeholder={suggestions[suggestion]}
            aria-label="Search NEXUS"
          />

          <button
            className="search-button"
            onClick={runSearch}
          >
            Search
          </button>
        </div>

        {searchMessage && (
  <section className="search-results">
    <div className="search-results-header">
      <div>
        <div className="section-label">NEXUS SEARCH</div>
        <h2>Results for "{search}"</h2>
      </div>
    </div>

    <div className="results-grid">
      <article className="result-card">
        <span>PEOPLE</span>
        <h3>Find the right person</h3>
        <p>
          Discover people, creators and professionals who can help with your request.
        </p>
        <button>Explore people →</button>
      </article>

      <article className="result-card">
        <span>PRODUCTS</span>
        <h3>Find what you need</h3>
        <p>
          Explore products and items available from people and businesses.
        </p>
        <button>Explore products →</button>
      </article>

      <article className="result-card">
        <span>SERVICES</span>
        <h3>Get something done</h3>
        <p>
          Find services from people and businesses that match your request.
        </p>
        <button>Explore services →</button>
      </article>

      <article className="result-card">
        <span>OPPORTUNITIES</span>
        <h3>Discover possibilities</h3>
        <p>
          Find jobs, projects, collaborations and other opportunities.
        </p>
        <button>Explore opportunities →</button>
      </article>
    </div>
  </section>
)}

        <div className="try-row">
          <span>Try:</span>

          <button onClick={useSuggestion}>
            {suggestions[suggestion]}
          </button>

          <button
            className="try-next"
            onClick={nextSuggestion}
            aria-label="Next suggestion"
          >
            ↻
          </button>
        </div>

        <div className="quick-actions">
          <button>
            <span>＋</span>
            Create
          </button>

          <button onClick={() => {
            document
              .querySelector(".search-container input")
              ?.scrollIntoView({ behavior: "smooth" });

            document
              .querySelector(".search-container input")
              ?.focus();
          }}>
            <span>⌕</span>
            Find
          </button>

          <button
            onClick={() => {
              setSearch("Help me with something");
              setSearchMessage(
                "VERA will become your intelligent guide inside NEXUS."
              );
            }}
          >
            <span>✦</span>
            Ask VERA
          </button>

          <button
            onClick={() => {
              document
                .querySelector("#explore")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>↗</span>
            Explore
          </button>
        </div>
      </section>

      <section className="section" id="explore">
        <div className="section-heading">
          <div>
            <div className="section-label">DISCOVER</div>
            <h2>One place. Many possibilities.</h2>
          </div>

          <button className="view-button">
            Explore all →
          </button>
        </div>

        <div className="area-grid">
          {areas.map((area) => (
            <article
              className="area-card"
              key={area.title}
            >
              <div className="area-icon">
                {area.icon}
              </div>

              <h3>{area.title}</h3>

              <p>{area.text}</p>

              <button>
                Discover →
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="vera-section">
        <div className="vera-glow" />

        <div className="vera-symbol">
          <span>V</span>
        </div>

        <div className="vera-content">
          <div className="section-label">
            VERA
          </div>

          <h2>
            Your intelligent guide inside NEXUS.
          </h2>

          <p>
            Tell VERA what you're trying to accomplish and
            get help finding the right people, products,
            services, opportunities and tools.
          </p>

          <button
            className="primary-button"
            onClick={() => {
              setSearch("Help me accomplish something");
              setSearchMessage(
                "VERA will help guide you through NEXUS."
              );

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Ask VERA
            <span>→</span>
          </button>
        </div>
      </section>

      <section
        className="section"
        id="marketplace"
      >
        <div className="section-heading">
          <div>
            <div className="section-label">
              NEXUS MARKET
            </div>

            <h2>
              Discover what the world has to offer.
            </h2>
          </div>
        </div>

        <div className="market-grid">
          <article className="market-card large">
            <div className="market-number">
              01
            </div>

            <h3>Products</h3>

            <p>
              Find physical and digital products
              from people and businesses.
            </p>

            <button>
              Explore products →
            </button>
          </article>

          <article className="market-card">
            <div className="market-number">
              02
            </div>

            <h3>Services</h3>

            <p>
              Find people and businesses ready to help.
            </p>

            <button>
              Find services →
            </button>
          </article>

          <article className="market-card">
            <div className="market-number">
              03
            </div>

            <h3>Businesses</h3>

            <p>
              Discover businesses, brands and organizations.
            </p>

            <button>
              Discover businesses →
            </button>
          </article>
        </div>
      </section>

      <section
        className="continue-section"
        id="opportunities"
      >
        <div>
          <div className="section-label">
            KEEP MOVING
          </div>

          <h2>
            Your next opportunity could be here.
          </h2>

          <p>
            Discover projects, collaborations, jobs and
            possibilities that match what you're looking for.
          </p>
        </div>

        <button className="primary-button">
          Explore opportunities
          <span>→</span>
        </button>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <div className="brand-symbol small">
            <span>N</span>
          </div>

          <strong>NEXUS</strong>
        </div>

        <p>
          Connect. Create. Achieve.
        </p>
      </footer>
    </main>
  );
}
