import { STEPS } from "../data/site";

function Services() {
  return (
    <section className="services section">
      <div className="container">
        <div className="section__head section__head--center reveal">
          <div>
            <span className="eyebrow">How I help</span>
            <h2>Three steps, zero guesswork</h2>
          </div>
        </div>

        <div className="steps">
          {STEPS.map((step) => (
            <article className="step reveal" key={step.num}>
              <span className="step__num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
