import React from 'react'
import menu_black from '../assets/images/menu- black.jpg';
import image_email from '../assets/images/email_i.jpg';
import phone_removebg_preview from '../assets/images/phone-removebg-preview.png';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/new_icon.png'
import '../assets/styling/contactus.css'

const Contactus:React.FC = () => {
  return (
    <>
      <div className="video-background-holder" style={{
    position: 'absolute',
    width: '100%'
}}>
      <section
        className="canva"
        style={{
          width: '100%',
          position: 'fixed',
          backgroundColor: 'white',
          zIndex: '10'
        }}
      >
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            {/* <!-- Hamburger Menu (Small Screens) --> */}
            <button
              className="navbar-toggler me-auto"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <span className="navbar-toggler-icon">
                <img
                  src={menu_black}
                  alt="Menu"
                  style={{height: '30px'}}
                />
              </span>
            </button>

            {/* <!-- Logo for small and large screens --> */}
            <div className="d-lg-none d-xl-block text-center">
              <img src={logo} alt="logo" style={{height: '95px'}} />
            </div>

            {/* <!-- Navbar brand (optional text) --> */}
            <Link
              className="navbar-brand d-none d-lg-block"
              to="/"
              style={{marginLeft: '15px', color: 'black'}}
              >Kanha Makeup Studio</Link>

            {/* <!-- Offcanvas for Small Screens --> */}
            <div
              className="offcanvas offcanvas-start"
              tabIndex={-1}
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">Kanha Makeup Studio</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/academy">Academy</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about-us">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="contactus.html"
                      >Contact Us</Link>
                  </li>
                </ul>
              </div>
              {/* <!-- Contact Details in Offcanvas --> */}
              <div className="d-flex flex-column align-items-start px-3 mt-3">
                <a
                  href="tel:7983858470"
                  className="text-decoration-none text-dark mb-2"
                >
                  <img
                    src={phone_removebg_preview}
                    alt="phone"
                    style={{height: '20px'}}
                    className="me-2"
                  />7983858470
                </a>
                <a
                  href="mailto:madhvimanchanda92@gmail.com"
                  className="text-decoration-none text-dark"
                >
                  <img
                    src={image_email}
                    alt="email"
                    style={{height: '20px'}}
                    className="me-2"
                  />madhvimanchanda92@gmail.com
                </a>
              </div>
            </div>

            {/* <!-- Links for Large Screens --> */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/academy">Academy</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about-us">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/contact-us"
                    >Contact Us</Link>
                </li>
              </ul>
              <div className="d-flex align-items-center">
                <a
                  href="tel:9646486969"
                  className="d-flex align-items-center text-dark text-decoration-none me-4"
                >
                  <img
                    src={phone_removebg_preview}
                    alt="phone"
                    style={{height: '20px'}}
                    className="me-2"
                  />9646486969
                </a>
                <a
                  href="mailto:madhvimanchanda92@gmail.com"
                  className="d-flex align-items-center text-dark text-decoration-none"
                >
                  <img
                    src={image_email}
                    alt="email"
                    style={{height: '28px'}}
                    className="me-2"
                  />madhvimanchanda92@gmail.com
                </a>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
      
      <div>
        <div style={{backgroundColor: 'lightgrey'}}>
        <div style={{backgroundColor: 'lightgrey'}}>
            <div
              className="container-fluid"
              style={{padding: '5vh', marginTop: '13vh', backgroundColor: 'lightgrey'}}
            >
              <div
                className="row"
                style=
                {{
                  backgroundColor: '#ff91a4',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  color: 'white',
                  borderRadius: '20px'
                }}
              >
                <div className="col-sm" style={{padding: '30px'}}>
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
                      <small id="emailHelp" className="form-text text-muted"
                        >We'll never share your email with anyone else.</small>
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
                    <button type="submit" className="btn btn-dark">Submit</button>
                  </form>
                </div>
                <div className="col-sm" style={{padding: '40px'}}>
                  <h2 className="text" >Contact Us</h2>
                  <p className="text-justify">
                    <b>THANK YOU FOR YOUR INTEREST IN Kanha Makeup Studio </b>
                    <br />
                    We are just a phone call or mail away from you.<br />
                    Our Mail ID: madhvimanchanda92@gmail.com<br />
                    Phone: 9646486969<br /><br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3408.364810119334!2d75.6162147756036!3d31.32129667430578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDE5JzE2LjciTiA3NcKwMzcnMDcuNiJF!5e0!3m2!1sen!2sin!4v1724761429678!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{border: '0'}}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <footer className="bg-dark text-center text-white">
            <div className="container p-3">
              <div className="row text-center">
                {/* <!-- Column 1: About --> */}
                <div className="col-lg-4 mb-4">
                  <h5 className="text-uppercase fw-bold mb-3">Kanha Makeup Studio</h5>
                  <p style={{fontSize: '16px', lineHeight: '1.8'}}>
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
                      <Link to="/" className="text-white text-decoration-none"
                        >Home</Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        to="/academy"
                        className="text-white text-decoration-none"
                        >Academy</Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        to="/about-us"
                        className="text-white text-decoration-none"
                        >About Us</Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        to="/contact-us"
                        className="text-white text-decoration-none"
                        >Contact Us</Link>
                    </li>
                  </ul>
                </div>

                {/* <!-- Column 3: Contact --> */}
                <div className="col-lg-4 mb-4">
                  <h5 className="text-uppercase fw-bold mb-3">Contact</h5>
                  <div
                    className="d-flex align-items-center justify-content-center mb-3"
                  >
                    <img
                      src={phone_removebg_preview}
                      alt="Phone"
                      style={{height: '20px', marginRight: '15px'}}
                    />
                    <a
                      href="tel:9646486969"
                      className="text-white text-decoration-none"
                      style={{fontSize: '16px'}}
                      >9646486969</a>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src={image_email}
                      alt="Email"
                      style={{height: '30px', marginRight: '15px'}}
                    />
                    <a
                      href="mailto:madhvimanchanda92@gmail.com"
                      className="text-white text-decoration-none"
                      style={{fontSize: '16px'}}
                      >madhvimanchanda92@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Footer Bottom --> */}
            <div
              className="text-center py-3"
              style={{backgroundColor: 'rgba(0, 0, 0, 0.2)', fontSize: '14px'}}
            >
              Copyright © 2024 Kanha Makeup Studio. All rights reserved.
            </div>
          </footer>
        </div>

      </div>
    </>
  )
}

export default Contactus