import { HERO_STATS } from "../data/site";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content reveal">
          <span className="chip">Now accepting new clients · 2026</span>
          <h1>
            Finding the right home, <em>made simple.</em>
          </h1>
          <p className="lead">
            I'm YR — a local real estate agent who handles the paperwork, the negotiation
            and the pressure, so you can focus on picturing your life in the new place.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              Book a free consultation
            </a>
            <a href="#listings" className="btn btn--ghost">
              Browse listings
            </a>
          </div>

          <dl className="stats">
            {HERO_STATS.map(({ value, label }) => (
              <div className="stat" key={label}>
                <dt>{value}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__visual reveal">
          <div className="showcase">
            <div className="showcase__sky">
              <span className="showcase__sun" />
              <svg
                className="showcase__art"
                viewBox="0 0 420 300"
                fill="none"
                aria-hidden="true"
              >
                <path d="M0 236h420" stroke="rgba(255,255,255,.35)" strokeWidth="2" />
                <path
                  d="M118 236V140l64-44 64 44v96"
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                <path
                  d="M96 152 182 92l86 60"
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect x="162" y="186" width="40" height="50" stroke="#fff" strokeWidth="3" />
                <rect
                  x="132"
                  y="160"
                  width="26"
                  height="24"
                  stroke="rgba(255,255,255,.75)"
                  strokeWidth="3"
                />
                <rect
                  x="208"
                  y="160"
                  width="26"
                  height="24"
                  stroke="rgba(255,255,255,.75)"
                  strokeWidth="3"
                />
                <path
                  d="M286 236v-70l38-26 38 26v70"
                  stroke="rgba(255,255,255,.7)"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                <rect
                  x="312"
                  y="196"
                  width="24"
                  height="40"
                  stroke="rgba(255,255,255,.7)"
                  strokeWidth="3"
                />
                <path
                  d="M40 236v-46l30-20 30 20v46"
                  stroke="rgba(255,255,255,.5)"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="showcase__meta">
              <div>
                <span className="showcase__tag">Featured · Oakridge</span>
                <h3>Sunlit 4-bed family home</h3>
                <p>142 Maple Crescent · 4 bed · 3 bath</p>
              </div>
              <span className="showcase__price">$765,000</span>
            </div>
          </div>

          <div className="float float--rating">
            <strong>4.9</strong>
            <span>Average client rating</span>
          </div>
          <div className="float float--sold">
            <strong>12</strong>
            <span>Homes sold this quarter</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
