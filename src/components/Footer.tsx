import { NAV_ITEMS } from "../data/site";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#home" className="logo logo--light">
          <span className="logo__mark">YR</span>
          <span className="logo__text">Real Estate</span>
        </a>

        <nav className="footer__links">
          {NAV_ITEMS.map(({ label, href }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <p className="footer__copy">© 2026 YR Real Estate. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
