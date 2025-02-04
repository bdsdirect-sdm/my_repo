import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styling/academy.css';
import menu_black from '../assets/images/menu- black.jpg';
// import '../assets/js';
import image_email from '../assets/images/email_i.jpg';
import phone_removebg_preview from '../assets/images/phone-removebg-preview.png';
import newicon from '../assets/icons/new_icon.png'

const Academy: React.FC = () => {
  return (
    <>
      <div className="video-background-holder">
        <section className="canva" style={{width: '100%', backgroundColor: 'white', zIndex: '10'}}>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              {/* Hamburger Menu (Small Screens) */}
              <button className="navbar-toggler me-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <span className="navbar-toggler-icon">
                  <img src={menu_black} alt="Menu" style={{height: '30px'}} />
                </span>
              </button>

              {/* Logo for small and large screens */}
              <div className="d-lg-none d-xl-block text-center">
                <img src={newicon} alt="logo" style={{height: '95px'}} />
              </div>

              {/* Navbar brand (optional text) */}
              <a className="navbar-brand d-none d-lg-block" href="/" style={{marginLeft: '15px', color: 'black'}}>Kanha Makeup Studio</a>

              {/* Offcanvas for Small Screens */}
              <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title">Kanha Makeup Studio</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link " to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link active" to="/academy">Academy</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/about-us">About Us</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/contact-us">Contact Us</Link></li>
                  </ul>
                </div>
                {/* Contact Details in Offcanvas */}
                <div className="d-flex flex-column align-items-start px-3 mt-3">
                  <a href="tel:7983858470" className="text-decoration-none text-dark mb-2">
                    <img src={phone_removebg_preview} alt="phone" style={{height: '20px'}} className="me-2" />7983858470
                  </a>
                  <a href="mailto:madhvimanchanda92@gmail.com" className="text-decoration-none text-dark">
                    <img src={image_email} alt="email" style={{height: '20px'}} className="me-2" />madhvimanchanda92@gmail.com
                  </a>
                </div>
              </div>

              {/* Links for Large Screens */}
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item"><Link className="nav-link " to="/">Home</Link></li>
                  <li className="nav-item"><Link className="nav-link active" to="/academy">Academy</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/about-us">About Us</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/contact-us">Contact Us</Link></li>
                </ul>
                <div className="d-flex align-items-center">
                  <a href="tel:9646486969" className="d-flex align-items-center text-dark text-decoration-none me-4">
                    <img src={phone_removebg_preview} alt="phone" style={{height: '20px'}} className="me-2" />9646486969
                  </a>
                  <a href="mailto:madhvimanchanda92@gmail.com" className="d-flex align-items-center text-dark text-decoration-none">
                    <img src={image_email} alt="email" style={{height: '28px'}} className="me-2" />madhvimanchanda92@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </section>

        <div className="content-wrapper">
          <div className="container-fluid" style={{padding: '4vh', marginTop:'10vh', backgroundColor: 'lightgrey'}}>
            <div className="container" id="pos">
              {/* Level 1 (Silver) Course Section */}
              <div className="course-box">
                <h2>Level 1 (Silver) International Hairstyling Course</h2>
                <h2>10 Hairstyle Techniques:</h2>
                <ul>
                  <li>Product Knowledge Class</li>
                  <li>Instagram Marketing Class</li>
                  <li>Business Class</li>
                  <li>Live Model Portfolios (2)</li>
                </ul>

                <h2>Techniques to Be Covered:</h2>
                <div className="techniques">
                  <ul>
                    <li>Spreading</li>
                    <li>Pulling</li>
                    <li>Bridal Bun</li>
                    <li>Back Twisting</li>
                    <li>Hair Preparation</li>
                    <li>Major Pulling</li>
                    <li>Bow Technique</li>
                    <li>Braids</li>
                    <li>Blow Dryer</li>
                    <li>Note Technique</li>
                    <li>Different Types of Curls</li>
                    <li>Different Types of Sections</li>
                    <li>Different Types of Back Combing</li>
                    <li>Pony Hairstyles</li>
                  </ul>
                </div>

                <div className="enroll">
                  <Link to="contact-us">Enroll Now</Link>
                </div>
              </div>

              {/* Level 2 (Diamond) Course Section */}
              <div className="course-box">
                <h2>Level 2 (Diamond) International Hairstyling Course</h2>
                <h2>25 Hairstyle Techniques:</h2>
                <ul>
                  <li>Product Knowledge Class</li>
                  <li>Instagram Marketing Class</li>
                  <li>Business Class</li>
                  <li>Live Model Portfolios (5)</li>
                </ul>

                <h2>Techniques to Be Covered:</h2>
                <div className="techniques">
                  <ul>
                    <li>Spreading</li>
                    <li>Pulling</li>
                    <li>Bridal Bun</li>
                    <li>Flower Tucking</li>
                    <li>Rose Bud</li>
                    <li>Front Twisting</li>
                    <li>Back Twisting</li>
                    <li>Hair Preparation</li>
                    <li>Major Pulling</li>
                    <li>Bow Technique</li>
                    <li>Braids</li>
                    <li>Blow Dryer</li>
                    <li>Note Technique</li>
                    <li>Multiple Rose Bud</li>
                    <li>Mermaid Hairstyle</li>
                    <li>Hollywood Technique</li>
                    <li>Tucking Technique</li>
                    <li>Leaf Technique</li>
                    <li>Different Types of Curls</li>
                    <li>Different Types of Sections</li>
                    <li>Different Types of Back Combing</li>
                    <li>Advance Spreading</li>
                    <li>Pony Hairstyles</li>
                  </ul>
                </div>

                <div className="enroll">
                  <Link to="/contact-us">Enroll Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <footer className="bg-dark text-center text-white">
          <div className="container p-3">
            <div className="row text-center">
              {/* Column 1: About */}
              <div className="col-lg-4 mb-4">
                <h5 className="text-uppercase fw-bold mb-3">Kanha Makeup Studio</h5>
                <p style={{fontSize: '16px', lineHeight: '1.8'}}>
                  We offer all kinds of bridal makeup, hairstyling, and academy classes to help you build your skills. Come and get trained in the art of makeup at our studio.
                </p>
              </div>

              {/* Column 2: Useful Links */}
              <div className="col-lg-4 mb-4">
                <h5 className="text-uppercase fw-bold mb-3">Quick Links</h5>
                <ul className="list-unstyled">
                  <li><a href="/" className="text-white">Home</a></li>
                  <li><a href="/academy" className="text-white">Academy</a></li>
                  <li><a href="/contact-us" className="text-white">Contact</a></li>
                  <li><a href="/about-us" className="text-white">About</a></li>
                </ul>
              </div>

              {/* Column 3: Contact Information */}
              <div className="col-lg-4 mb-4">
                <h5 className="text-uppercase fw-bold mb-3">Contact</h5>
                <p>Call us: 9646486969</p>
                <p>Email: madhvimanchanda92@gmail.com</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Academy;
