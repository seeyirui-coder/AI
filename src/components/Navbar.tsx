import { useEffect, useState } from "react";
import { NAV_ITEMS, SECTION_IDS } from "../data/site";
import { useActiveSection } from "../hooks/useActiveSection";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#home" className="logo" aria-label="YR home">
          <span className="logo__mark">YR</span>
          <span className="logo__text">Real Estate</span>
        </a>

        <nav className={`nav__links${open ? " is-open" : ""}`} id="navLinks">
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`nav__link${active === href.slice(1) ? " is-active" : ""}`}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <a href="#contact" className="btn btn--sm nav__cta" onClick={closeMenu}>
            Let's Talk
          </a>
        </nav>

        <button
          type="button"
          className={`nav__toggle${open ? " is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
