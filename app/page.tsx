"use client";

import { useState } from "react";

const examples = [
  "Find a keyboard...",
  "Create a business logo...",
  "Edit my photo...",
  "Build a website...",
  "Find someone to work with...",
  "Sell my old laptop...",
  "Find an opportunity...",
  "Create a flyer...",
  "Help me organize my project...",
  "Learn something new...",
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [exampleIndex, setExampleIndex] = useState(0);

  const nextExample = () => {
    setExampleIndex((current) => (current + 1) % examples.length);
  };

  return (
    <main className="nexus-home">
      <header className="nexus-header">
        <div className="nexus-brand">
          <div className="nexus-symbol">N</div>
          <span>NEXUS</span>
        </div>

        <nav className="nexus-nav">
          <a href="#home">Home</a>
          <a href="#explore">Explore</a>
          <a href="#opportunities">Opportunities</a>
          <a href="#market">Market</a>
          <a href="#messages">Messages</a>
        </nav>

        <button className="profile-button" aria-label="Open profile">
          U
        </button>
      </header>

      <section className="hero" id="home">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="hero-content">
          <p className="eyebrow">N = Network · E = Exchange · X = eXperience</p>

          <h1>What are you trying to do?</h1>

          <p className="hero-description">
            Find people, products, services, opportunities, tools and more —
            all in one place.
          </p>

          <div className="search-box">
            <span className="search-icon">⌕</span>

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={examples[exampleIndex]}
              aria-label="Search NEXUS"
            />

            <button
              className="search-button"
              onClick={() => {
                if (!search.trim()) {
                  nextExample();
                }
              }}
            >
              Search
            </button>
          </div>

          <div className="example-row">
            <span>Try:</span>
            <button onClick={nextExample}>{examples[exampleIndex]}</button>
          </div>

          <div className="quick-actions">
            <button>
              <span>＋</span>
              Create
            </button>

            <button>
              <span>⌕</span>
              Find
            </button>

            <button>
              <span>◈</span>
              Ask VERA
            </button>

            <button>
              <span>↗</span>
              Explore
            </button>
          </div>
        </div>
      </section>

      <section className="discover-section" id="explore">
        <div className="section-heading">
          <div>
            <p className="section-label">NEXUS</p>
            <h2>One place. Many possibilities.</h2>
          </div>

          <button className="text-button">Explore all →</button>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <span className="card-icon">⌕</span>
            <h3>Search</h3>
            <p>
              Tell NEXUS what you need in your own words and discover relevant
              results.
            </p>
          </article>

          <article className="feature-card">
            <span className="card-icon">◉</span>
            <h3>People</h3>
            <p>
              Discover people, skills, creators, professionals and potential
              collaborators.
            </p>
          </article>

          <article className="feature-card">
            <span className="card-icon">◇</span>
            <h3>Market</h3>
            <p>
              Discover products and services from people and businesses around
              you and around the world.
            </p>
          </article>

          <article className="feature-card">
            <span className="card-icon">↗</span>
            <h3>Opportunities</h3>
            <p>
              Discover jobs, projects, collaborations and other opportunities.
            </p>
          </article>

          <article className="feature-card">
            <span className="card-icon">✦</span>
            <h3>VERA</h3>
            <p>
              Your intelligent guide inside NEXUS, helping you find the right
              path and get things done.
            </p>
          </article>

          <article className="feature-card">
            <span className="card-icon">＋</span>
            <h3>Create</h3>
            <p>
              Create products, services, showcases, opportunities, requests
              and more.
            </p>
          </article>
        </div>
      </section>

      <section className="continue-section" id="opportunities">
        <div>
          <p className="section-label">KEEP MOVING</p>
          <h2>Continue where you left off.</h2>
          <p>
            Your projects, saved items, conversations and opportunities will
            have a home here as NEXUS grows.
          </p>
        </div>

        <button className="primary-button">Open Command Center →</button>
      </section>

      <footer className="nexus-footer">
        <div className="nexus-brand">
          <div className="nexus-symbol">N</div>
          <span>NEXUS</span>
        </div>

        <p>Connect. Create. Achieve.</p>
      </footer>
    </main>
  );
  }
