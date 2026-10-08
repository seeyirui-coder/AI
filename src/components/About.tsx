function About() {
  return (
    <section className="about section" id="about">
      <div className="container about__grid">
        <div className="about__portrait reveal">
          <div className="portrait">
            <svg viewBox="0 0 320 360" fill="none" aria-hidden="true">
              <circle cx="160" cy="132" r="58" stroke="#fff" strokeWidth="4" />
              <path
                d="M52 320c0-58 48-104 108-104s108 46 108 104"
                stroke="#fff"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <span className="portrait__name">YR</span>
          </div>
          <div className="about__card">
            <strong>8 yrs</strong>
            <span>Matching families with homes across the city</span>
          </div>
        </div>

        <div className="about__content reveal">
          <span className="eyebrow">About me</span>
          <h2>A calm guide through your biggest purchase</h2>
          <p>
            Real estate moves fast, but it doesn't have to feel frantic. I built my
            practice around clear numbers, honest advice and a process you always
            understand — whether you're buying your first place or selling a property
            you've loved for decades.
          </p>
          <ul className="ticks">
            <li>Neighbourhood-by-neighbourhood market analysis</li>
            <li>Staging and pricing strategy that sells in days, not months</li>
            <li>One point of contact from first tour to final signature</li>
          </ul>
          <div className="about__actions">
            <a href="#contact" className="btn btn--primary">
              Work with me
            </a>
            <a href="#contact" className="link-arrow">
              Request my selling guide
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
