import React from "react";

export default function Footer() {
  return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="ft_address col-lg-4 col-md-6">
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            <div className="ft_qmenu col-lg-2 col-md-6">
              <ul className="list-unstyled">
                <li className="d-flex">
                  <a href="#ourservices">Our Services</a>
                </li>
                <li className="d-flex">
                  <a href="#whyus">Why Us</a>
                </li>
                <li className="d-flex">
                  <a href="#testimonial">Testimonial</a>
                </li>
                <li className="d-flex">
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="ft_connect col-lg-4 col-md-6">
              <p>Connect With Us</p>
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <img src="./icons/icon_facebook.svg" alt="fb" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./icons/icon_instagram.svg" alt="ig" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./icons/icon_twitter.svg" alt="tw" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./icons/icon_mail.svg" alt="ml" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./icons/icon_twitch.svg" alt="tc" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="ft_copyright col-lg-2 col-md-6">
              <p>Copyright Binar 2022</p>
              <a href="#">
                <img src="./icons/logo.png" alt="logo" />
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
}
