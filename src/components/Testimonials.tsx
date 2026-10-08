import { QUOTES } from "../data/site";

function Testimonials() {
  return (
    <section className="quotes section">
      <div className="container">
        <div className="quotes__grid">
          {QUOTES.map((quote) => (
            <figure className="quote reveal" key={quote.author}>
              <blockquote>{quote.text}</blockquote>
              <figcaption>{quote.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
