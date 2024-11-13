import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroImg03 from "../assets/images/hero-img03.jpg";
import experienceImg from "../assets/images/experience.jpg";
import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      {/* ========== hero section start =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center ">
                  <Subtitle subtitle={"Know Before You Go"} />
                  
                </div>
                <h1>
                  Travelling
                  <span className="highlight"> energizes </span>
                  your body and <span className="highlight"> heals </span> your soul.
                </h1>
                <p>
                Discover a world of endless adventures and unforgettable memories. Our mission is to inspire and equip you to travel with confidence, whether you're seeking serene beaches, thrilling mountain trails, vibrant cityscapes, or hidden gems off the beaten path.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <img src={heroImg02} alt=""  />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg03} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ========== hero section start =========== */}

      {/* ============ featured tour section start ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ============ featured tour section end ============ */}

      {/* ============ experience section start ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />

                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  We have helped through the travelling journey of different people.
                  <br />
                  We prioritise your experience over anything else.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5 ">
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="counter__box">
                  <span>500+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>5</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============ experience section end ============= */}

      {/* ============ testimonial section start ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our customer has to say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============ testimonial section end ========== */}
      <Newsletter />
    </>
  );
};

export default Home;
