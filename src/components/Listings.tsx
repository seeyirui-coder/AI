import { LISTINGS } from "../data/site";
import ListingArt from "./ListingArt";

function Listings() {
  return (
    <section className="listings section" id="listings">
      <div className="container">
        <div className="section__head reveal">
          <div>
            <span className="eyebrow">Featured listings</span>
            <h2>Homes worth a second look</h2>
          </div>
          <a href="#contact" className="link-arrow">
            View all properties
          </a>
        </div>

        <div className="cards">
          {LISTINGS.map((listing) => (
            <article className="card reveal" key={listing.id}>
              <div className={`card__media card__media--${listing.art}`}>
                <span
                  className={
                    listing.badgeVariant === "dark" ? "badge badge--dark" : "badge"
                  }
                >
                  {listing.badge}
                </span>
                <ListingArt art={listing.art} />
              </div>
              <div className="card__body">
                <span className="card__price">{listing.price}</span>
                <h3>{listing.title}</h3>
                <p>{listing.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Listings;
