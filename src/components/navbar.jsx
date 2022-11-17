import React from "react";

export default function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg fixed-top bg-grey">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="./icons/logo.png" className="img-fluid" alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h4 className="offcanvas-title" id="offcanvasNavbarLabel">
                BCR
              </h4>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item align-middle">
                  <a className="nav-link" aria-current="page" href="#ourservices">
                    Our Services
                  </a>
                </li>
                <li className="nav-item align-middle">
                  <a className="nav-link" aria-current="page" href="#whyus">
                    Why Us
                  </a>
                </li>
                <li className="nav-item align-middle">
                  <a className="nav-link" aria-current="page" href="#testimonial">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item align-middle">
                  <a className="nav-link" aria-current="page" href="#faq">
                    FAQ
                  </a>
                </li>
                <li className="nav-item ms-4">
                  <button className="btn btn_custom" type="button">
                    Register
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  );
}
