import React from "react";
import { Link } from "react-router-dom";
import "../assets/styling/aboutus.css";
import menu_black from "../assets/images/menu- black.jpg";
import image_email from "../assets/images/email_i.jpg";
import phone_removebg_preview from "../assets/images/phone-removebg-preview.png";
import newicon from "../assets/icons/new_icon.png";
import banner from "../assets/images/banner.jpeg";

const Aboutus: React.FC = () => {
  return (
    <div className="">
      <div className="" >
      <section
          className='canva'
          style={{
            width: '100%',
            position: 'fixed',
            backgroundColor: 'white',
            zIndex: '10'
          }}
        >
          <nav className='navbar navbar-expand-lg navbar-light'>
            <div className='container-fluid'>
              <button
                className='navbar-toggler me-auto'
                type='button'
                data-bs-toggle='offcanvas'
                data-bs-target='#offcanvasExample'
                aria-controls='offcanvasExample'
              >
                <span className='navbar-toggler-icon'>
                  <img src={menu_black} alt='Menu' style={{ height: '30px' }} />
                </span>
              </button>

              <div className='d-lg-none d-xl-block text-center'>
                <img src={newicon} alt='logo' style={{ height: '95px' }} />
              </div>

              <Link
                className='navbar-brand d-none d-lg-block'
                to='/'
                style={{ marginLeft: '15px', color: 'black' }}
              >
                Kanha Makeup Studio
              </Link>

              <div
                className='offcanvas offcanvas-start'
                tabIndex={-1}
                id='offcanvasExample'
                aria-labelledby='offcanvasExampleLabel'
              >
                <div className='offcanvas-header'>
                  <h5 className='offcanvas-title'>Kanha Makeup Studio</h5>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='offcanvas'
                    aria-label='Close'
                  ></button>
                </div>
                <div className='offcanvas-body'>
                  <ul className='navbar-nav'>
                    <li className='nav-item'>
                      <Link className='nav-link active' to='/'>
                        Home
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/academy'>
                        Academy
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/about-us'>
                        About Us
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/contact-us'>
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className='d-flex flex-column align-items-start px-3 mt-3'>
                  <a
                    href='tel:7983858470'
                    className='text-decoration-none text-dark mb-2'
                  >
                    <img
                      src={phone_removebg_preview}
                      alt='phone'
                      style={{ height: '20px' }}
                      className='me-2'
                    />
                    7983858470
                  </a>
                  <a
                    href='mailto:madhvimanchanda92@gmail.com'
                    className='text-decoration-none text-dark'
                  >
                    <img
                      src={image_email}
                      alt='email'
                      style={{ height: '20px' }}
                      className='me-2'
                    />
                    madhvimanchanda92@gmail.com
                  </a>
                </div>
              </div>

              {/* <!-- Links for Large Screens --> */}
              <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'
              >
                <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                  <li className='nav-item'>
                    <Link className='nav-link active' to='/'>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/academy'>
                      Academy
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/about-us'>
                      About Us
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/contact-us'>
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <div className='d-flex align-items-center'>
                  <a
                    href='tel:9646486969'
                    className='d-flex align-items-center text-dark text-decoration-none me-4'
                  >
                    <img
                      src={phone_removebg_preview}
                      alt='phone'
                      style={{ height: '20px' }}
                      className='me-2'
                    />
                    9646486969
                  </a>
                  <a
                    href='mailto:madhvimanchanda92@gmail.com'
                    className='d-flex align-items-center text-dark text-decoration-none'
                  >
                    <img
                      src={image_email}
                      alt='email'
                      style={{ height: '28px' }}
                      className='me-2'
                    />
                    madhvimanchanda92@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </section>

      </div>
      <div
        className="container-fluid overflow-scroll "
        id=""
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "600px",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          // position: "fixed",
          // width: "100%",
          height: "100vh",
          // zIndex: 10,

        }}
      >

        <div
          className="container-fluid "
          style={{ marginTop: "60vh", backgroundColor: "#f8f9fa" }}>
          <div className="row align-items-center">
            {/* <!-- Left Column --> */}
            <div className="col-md-6 text-dark px-4">
              <h2 className="mb-4 text-center" style={{ fontWeight: "bold" }}>
                Why Choose Us?
              </h2>

              <h3 className="text-primary mb-3 text-center">
                For Makeup Services
              </h3>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <span className="fw-bold">Expertise You Can Trust:</span> Led
                  by internationally certified makeup artist Anu Bala, our team
                  brings years of experience and a deep understanding of diverse
                  beauty needs.
                </li>
                <li className="mb-3">
                  <span className="fw-bold">Customized Beauty:</span> We believe
                  in enhancing your natural features, creating looks that are
                  personalized just for you—whether it’s for your wedding day or
                  a special event.
                </li>
                <li className="mb-3">
                  <span className="fw-bold">High-Quality Products:</span> We use
                  only the best, professional-grade products to ensure
                  long-lasting, flawless results.
                </li>
                <li className="mb-3">
                  <span className="fw-bold">Attention to Detail:</span> Our
                  meticulous approach ensures that every aspect of your makeup
                  is perfect, down to the last detail.
                </li>
              </ul>
            </div>

            {/* <!-- Right Column --> */}
            <div className="col-md-6 px-5">
              <div
                className="bg-light p-5 rounded"
                style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
              >
                <h2
                  className="mb-4 text-center text-dark"
                  style={{ fontWeight: "bold" }}
                >
                  For Learning Hair Styling and Makeup
                </h2>
                <ul className="list-unstyled text-dark">
                  <li className="mb-3">
                    <span className="fw-bold">Hands-On Training:</span> Our
                    academy offers practical, hands-on learning experiences
                    guided by industry experts, giving you real-world skills.
                  </li>
                  <li className="mb-3">
                    <span className="fw-bold">Comprehensive Curriculum:</span>{" "}
                    From basic techniques to advanced artistry, our courses
                    cover everything you need to become a professional makeup
                    artist or hairstylist.
                  </li>
                  <li className="mb-3">
                    <span className="fw-bold">Flexible Learning:</span> We offer
                    courses that fit your schedule, whether you’re a beginner or
                    looking to refine your skills.
                  </li>
                  <li className="mb-3">
                    <span className="fw-bold">
                      Certification and Career Support:
                    </span>
                    As an internationally recognized academy, we provide
                    certifications that boost your career, along with ongoing
                    support and guidance to help you succeed in the beauty
                    industry.
                  </li>
                </ul>
                <p className="mt-4 text-center fw-bold">
                  Choosing Kanha Makeup Studio and Academy means choosing
                  excellence, professionalism, and a personalized experience in
                  both makeup services and beauty education.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div
          className="container-fluid "
          style={{ padding: "5vh", backgroundColor: "lightgrey" }}
        >
          <div
            className="row"
            style={{
              backgroundColor: "#ff91a4",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              color: "white",
              borderRadius: "20px",
            }}
          >
            <div className="col-sm" style={{ padding: "30px" }}>
              <form action="https://api.web3forms.com/submit" method="POST">
                <input
                  type="hidden"
                  name="access_key"
                  value="5183f124-530a-47a9-aa6a-fa25a8a98ba7"
                />
                <div className="form-group">
                  <label htmlFor="Name1">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Name1"
                    name="name"
                    aria-describedby="emailHelp"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    required
                    placeholder="Enter Mail Adress"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="Message1">Message</label>
                  <textarea
                    name="message"
                    required
                    className="form-control"
                    id="Message1"
                    placeholder="Message"
                  ></textarea>
                </div>
                <br />
                <div className="h-captcha" data-captcha="true"></div>
                <button type="submit" className="btn btn-dark">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-sm" style={{ padding: "40px" }}>
              <h2 className="text">Contact Us</h2>
              <p className="text-justify">
                <b>THANK YOU FOR YOUR INTEREST IN Kanha Makeup Studio </b>{" "}
                <br />
                We are just a phone call or mail away from you.
                <br />
                Our Mail ID: madhvimanchanda92@gmail.com
                <br />
                Phone: 9646486969
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>

        <footer className="bg-dark text-center text-white">
          <div className="p-3">
            <div className="row text-center">
              {/* <!-- Column 1: About --> */}
              <div className="col-lg-4 mb-4">
                <h5 className="text-uppercase fw-bold mb-3">
                  Kanha Makeup Studio
                </h5>
                <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
                  We offer all kinds of services: Bridal, Pre-Wedding, Air
                  Brush, Vitiligo, Glossy, and HD makeups. We also provide
                  professional training in makeup artistry and hairstyling.
                </p>
              </div>

              {/* <!-- Column 2: Menu --> */}
              <div className="col-lg-4 mb-4">
                <h5 className="text-uppercase fw-bold mb-3">Menu</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <Link to="/" className="text-white text-decoration-none">
                      Home
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/academy"
                      className="text-white text-decoration-none"
                    >
                      Academy
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/about-us"
                      className="text-white text-decoration-none"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/contact-us"
                      className="text-white text-decoration-none"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* <!-- Column 3: Contact --> */}
              <div className="col-lg-4 mb-4">
                <h5 className="text-uppercase fw-bold mb-3">Contact</h5>
                <div className="d-flex align-items-center justify-content-center mb-3">
                  <img
                    src={phone_removebg_preview}
                    alt="Phone"
                    style={{ height: "20px", marginRight: "15px" }}
                  />
                  <a
                    href="tel:9646486969"
                    className="text-white text-decoration-none"
                    style={{ fontSize: "16px" }}
                  >
                    9646486969
                  </a>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    src={image_email}
                    alt="Email"
                    style={{ height: "30px", marginRight: "15px" }}
                  />
                  <a
                    href="mailto:madhvimanchanda92@gmail.com"
                    className="text-white text-decoration-none"
                    style={{ fontSize: "16px" }}
                  >
                    madhvimanchanda92@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Footer Bottom --> */}
          <div
            className="text-center py-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", fontSize: "14px" }}
          >
            Copyright © 2024 Kanha Makeup Studio. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Aboutus;
