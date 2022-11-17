import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { GoStar } from "react-icons/go";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Row, Col, Accordion, Image, Container } from "react-bootstrap";
import person1 from "../assets/images/img_photo1.png";
import person2 from "../assets/images/img_photo2.png";
import person3 from "../assets/images/img_photo3.png";

export default function First() {
  return (
    <div>
      <section id="ourservices" className="ourservices">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 sc_image">
              <img src="./icons/img_service.png" alt="services" />
            </div>
            <div className="col-md-6 col-sm-12 os_text">
              <h2 className="sc_title">Best Car Rental for any kind of trip in Bandung!</h2>
              <p className="sc_desc">
                Sewa mobil di Bandung bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
              </p>
              <ul className="list-unstyled p-0">
                <li className="d-flex">
                  <img src="./icons/list.png" alt="list" />
                  <p>Sewa Mobil Dengan Supir di Bandung 12 Jam</p>
                </li>
                <li className="d-flex">
                  <img src="./icons/list.png" alt="list" />
                  <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                </li>
                <li className="d-flex">
                  <img src="./icons/list.png" alt="list" />
                  <p>Sewa Mobil Jangka Panjang Bulanan</p>
                </li>
                <li className="d-flex">
                  <img src="./icons/list.png" alt="list" />
                  <p>Gratis Antar - Jemput Mobil di Bandara</p>
                </li>
                <li className="d-flex">
                  <img src="./icons/list.png" alt="list" />
                  <p>Layanan Airport Transfer / Drop In Out</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="whyus" className="whyus">
        <div className="container">
          <h2 className="sc_title">Why Us?</h2>
          <p className="sc_desc">Mengapa harus memilih Binar Car Rental?</p>
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="card">
                <div className="card-body">
                  <img src="./icons/icon_complete.svg" alt="complete" />
                  <h3 className="card-title">Mobil Lengkap</h3>
                  <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body">
                  <img src="./icons/icon_price.svg" alt="price" />
                  <h3 className="card-title">Harga Murah</h3>
                  <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body">
                  <img src="./icons/icon_24hrs.svg" alt="hours" />
                  <h3 className="card-title">Layanan 24 Jam</h3>
                  <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body">
                  <img src="./icons/icon_professional.svg" alt="profesional" />
                  <h3 className="card-title">Sopir Profesional</h3>
                  <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Container
        fluid
        id="testimony"
        className="d-flex justify-content-center align-items-center mt-2 mx-0 px-0"
      >
        <Row
          id="container-testimonial"
          className="d-flex flex-column justify-content-center align-items-center mx-0 px-0"
        >
          <Col className="d-flex justify-content-center align-items-center">
            <Row>
              <h1 className="d-flex justify-content-center align-items-center">
                Testimonial
              </h1>
              <p className="d-flex justify-content-center align-items-center">
                Berbagai review positif dari para pelanggan kami
              </p>
            </Row>
          </Col>

          <OwlCarousel
            id="owlcarousel"
            className="owl-carousel owl-theme"
            items="3"
            center={true}
            margin={10}
            nav={false}
            dots={false}
            responsive={{
              0: {
                items: 1,
              },
              600: {
                items: 2,
              },
              1000: {
                items: 2,
              },
            }}
          >
            <Col className="item">
              <Row>
                <Col md={3} className="text-center my-auto">
                  <Image
                    src={person1}
                    className="rounded-circle"
                    alt="GambarPhoto1"
                  />
                </Col>
                <Col>
                  <Col>
                    <GoStar style={{ color: "#F9CC00" }} />
                    <GoStar style={{ color: "#F9CC00" }} />
                    <GoStar style={{ color: "#F9CC00" }} />
                    <GoStar style={{ color: "#F9CC00" }} />
                    <GoStar style={{ color: "#F9CC00" }} />
                  </Col>

                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maxime, incidunt odit? Exercitationem earum officia est.
                    Dolore nobis totam quia dolores ad velit tempora accusamus
                    maiores eligendi, illo quidem modi fugit.
                  </p>
                  <p className="user fw-bold">John Dee 32, Bromo</p>
                </Col>
              </Row>
            </Col>
            <Col className="item">
              <Row>
                <Col md={3} className="text-center my-auto">
                  <Image
                    src={person2}
                    className="rounded-circle"
                    alt="GambarPhoto1"
                  />
                </Col>
                <Col>
                  <Col>
                    <GoStar style={{ color: "#F9CC00" }} />
                    <GoStar style={{ color: "#F9CC00" }} />
                    <GoStar style={{ color: "#F9CC00" }} />
                    <GoStar style={{ color: "#F9CC00" }} />
                    <GoStar style={{ color: "#F9CC00" }} />
                  </Col>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maxime, incidunt odit? Exercitationem earum officia est.
                    Dolore nobis totam quia dolores ad velit tempora accusamus
                    maiores eligendi, illo quidem modi fugit.
                  </p>
                  <p className="user fw-bold">John Dee 32, Bromo</p>
                </Col>
              </Row>
            </Col>
            <Col className="item">
              <Row>
                <Col md={3} className="text-center my-auto">
                  <Image
                    src={person3}
                    className="rounded-circle"
                    alt="GambarPhoto1"
                  />
                </Col>
                <Col>
                  <Col>
                    <GoStar style={{ color: "#F9CC00" }} />
                    <GoStar style={{ color: "#F9CC00" }} />
                    <GoStar style={{ color: "#F9CC00" }} />
                    <GoStar style={{ color: "#F9CC00" }} />
                    <GoStar style={{ color: "#F9CC00" }} />
                  </Col>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maxime, incidunt odit? Exercitationem earum officia est.
                    Dolore nobis totam quia dolores ad velit tempora accusamus
                    maiores eligendi, illo quidem modi fugit.
                  </p>
                  <p className="user fw-bold">John Dee 32, Bromo</p>
                </Col>
              </Row>
            </Col>
          </OwlCarousel>

          <Col className="owl-nav">
            <button
              className="owl-prev rounded-circle me-2 p-0"
              id="customPrevBtn"
              type="button"
              role="presentation"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <FiChevronLeft style={{ width: "20px", height: "20px" }} />
            </button>
            <button
              className="owl-next rounded-circle ms-2 p-0"
              id="customNextBtn"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <FiChevronRight style={{ width: "20px", height: "20px" }} />
            </button>
          </Col>
        </Row>
      </Container>

      <section id="followup" className="followup">
        <div className="container">
          <div className="row align-items-center">
            <div className="card text-center bg-blue">
              <div className="card-body">
                <h1 className="card-title tx-white">Sewa Mobil di Bandung Sekarang</h1>
                <p className="card-text tx-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="/cars">
                  <button type="button" className="btn btn_custom">
                    Mulai Sewa Mobil
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="faq">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h2 className="sc_title">Frequently Asked Question</h2>
              <p className="sc_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="col-lg-7">
              <Accordion className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      Apa saja syarat yang dibutuhkan?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe nihil culpa facilis est veniam hic. Exercitationem nobis laboriosam distinctio placeat debitis, blanditiis consequuntur autem? Exercitationem, harum nisi
                      quibusdam amet incidunt unde ea quam sit voluptatem dolorem in iusto consectetur officia quos placeat impedit. Optio doloribus odit enim iste obcaecati nemo.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Berapa hari minimal sewa mobil lepas kunci?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe nihil culpa facilis est veniam hic. Exercitationem nobis laboriosam distinctio placeat debitis, blanditiis consequuntur autem? Exercitationem, harum nisi
                      quibusdam amet incidunt unde ea quam sit voluptatem dolorem in iusto consectetur officia quos placeat impedit. Optio doloribus odit enim iste obcaecati nemo.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Berapa hari sebelumnya sabaiknya booking sewa mobil?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe nihil culpa facilis est veniam hic. Exercitationem nobis laboriosam distinctio placeat debitis, blanditiis consequuntur autem? Exercitationem, harum nisi
                      quibusdam amet incidunt unde ea quam sit voluptatem dolorem in iusto consectetur officia quos placeat impedit. Optio doloribus odit enim iste obcaecati nemo.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Apakah Ada biaya antar-jemput?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe nihil culpa facilis est veniam hic. Exercitationem nobis laboriosam distinctio placeat debitis, blanditiis consequuntur autem? Exercitationem, harum nisi
                      quibusdam amet incidunt unde ea quam sit voluptatem dolorem in iusto consectetur officia quos placeat impedit. Optio doloribus odit enim iste obcaecati nemo.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      Bagaimana jika terjadi kecelakaan?
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe nihil culpa facilis est veniam hic. Exercitationem nobis laboriosam distinctio placeat debitis, blanditiis consequuntur autem? Exercitationem, harum nisi
                      quibusdam amet incidunt unde ea quam sit voluptatem dolorem in iusto consectetur officia quos placeat impedit. Optio doloribus odit enim iste obcaecati nemo.
                    </div>
                  </div>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
