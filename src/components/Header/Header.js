import React from "react";

const Header = () => {
  return (
    <header id="header">
      {/* Navbar */}
      <nav
        data-aos="zoom-out"
        data-aos-delay={800}
        className="navbar navbar-expand"
      >
        <div className="container header">
          {/* Navbar Brand*/}
          <a className="navbar-brand" href="/">
            <img
              className="navbar-brand-sticky"
              src="/img/logo.png"
              alt="sticky brand-logo"
            />
          </a>
          <div className="ml-auto" />
          {/* Navbar */}
          <ul className="navbar-nav items">
            <li className="nav-item dropdown">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#">
                Explore <i className="fas fa-angle-down ml-1" />
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <a
                    href="https://opensea.io/collection/number-forty-two"
                    target="_blank"
                    className="nav-link"
                    rel="noreferrer"
                  >
                    See on OpenSea
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/explore-1" className="nav-link">
                    Precious materials NFT
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/explore-2" className="nav-link">
                    Funny NFT
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/explore-3" className="nav-link">
                    Flag NFT
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/explore-4" className="nav-link">
                    Psychedelic NFT
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/explore-5" className="nav-link">
                    Nature NFT
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/explore-6" className="nav-link">
                    Original NFT
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
