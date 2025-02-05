import React from 'react'
import '../assets/styling/index.css';
import '../assets/js'
import { Link } from 'react-router-dom'
import logo from '../assets/icons/new_icon.png'
import menu_black from '../assets/images/menu- black.jpg'
import image_email from '../assets/images/email_i.jpg'
import phone_removebg_preview from '../assets/images/phone-removebg-preview.png'
import new_cut from '../assets/videos/newcut.mp4'
import award from '../assets/images/award.jpeg'
import instaone from '../assets/images/instaone.jpeg'
import fb from '../assets/images/facebook.jpeg'
import instatwo from '../assets/images/instatwo.jpeg'

const Index: React.FC = () => {
  return (
    <>
      <div className='video-background-holder'>
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
                <img src={logo} alt='logo' style={{ height: '95px' }} />
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

        <div className='video-background-overlay'></div>
        <video playsInline autoPlay muted loop>
          <source src={new_cut} type='video/mp4' />
        </video>
        {/* <!-- <img style="position: fixed; z-index: -1;height: 100%; width: 100%;" src="images/award.jpeg" alt="bg">--> */}
        <div className='video-background-content container h-100'>
          <div className='d-flex h-100 text-center align-items-center'>
            <div className='w-100 text-white'>
              <div
                className='lineUp'
                style={{ position: 'absolute', zIndex: '2' }}
              >
                <h1
                  className='display-4'
                  style={{
                    borderColor: 'white',
                    borderStyle: 'solid',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    fontFamily: 'Playfair Display, serif'
                  }}
                >
                  {' '}
                  Kanha Makeup Studio &amp; Acedemy
                </h1>
                <p
                  className='lead mb-0'
                  style={{ backgroundColor: 'white', color: 'black' }}
                >
                  Experience the Art of Makeup
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: 'black' }}>
        <div
          className='container-fluid'
          style={{
            backgroundColor: '#FF91A4',
            color: 'white',
            padding: '50px 15px'
          }}
          id='services'
        >
          <div className='row align-items-center'>
            {/* <!-- Text Content -->/ */}
            <div
              className='col-md-8'
              data-aos='fade-right'
              data-aos-duration='3000'
            >
              <div
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  padding: '30px',
                  borderRadius: '15px'
                }}
              >
                <h2
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    fontSize: '36px'
                  }}
                >
                  Kanha Makeup Studio
                </h2>
                <p
                  style={{
                    fontSize: '18px',
                    lineHeight: '1.8',
                    textAlign: 'justify'
                  }}
                >
                  At Kanha Makeup Studio and Academy, we believe that beauty is
                  an art, and every face is Link unique canvas. Founded and led
                  by internationally certified makeup artist{' '}
                  <strong>Madhvi</strong>, our studio is located in the heart of
                  Jalandhar, India. With Link passion for transforming looks and
                  enhancing natural beauty, Madhvi and her team are dedicated to
                  providing the highest level of professional makeup services.
                </p>
                <p
                  style={{
                    fontSize: '18px',
                    lineHeight: '1.8',
                    textAlign: 'justify'
                  }}
                >
                  Our studio offers Link wide range of services, from bridal
                  makeup to everyday glam, ensuring that every client leaves
                  feeling confident and radiant. As Link hub for beauty
                  enthusiasts, we also run Link makeup academy where aspiring
                  makeup artists can learn and hone their skills under expert
                  guidance.
                </p>
              </div>
            </div>

            {/* <!-- Image Content --> */}
            <div
              className='col-md-4'
              data-aos='fade-left'
              data-aos-duration='3000'
            >
              <div style={{ textAlign: 'center' }}>
                <img
                  src={award}
                  alt='Award'
                  style={{
                    width: '100%',
                    maxWidth: '100%',
                    borderRadius: '15px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section style={{ backgroundColor: 'white', padding: '50px 0' }}>
        <h3
          style={{
            textAlign: 'center',
            marginBottom: '40px',
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#333'
          }}
        >
          Area of our Expertise
        </h3>
        <div className='container'>
          <div className='row text-center g-4'>
            {/* <!-- Expertise Item 1 --> */}
            <div className='col-md-4'>
              <div className='card shadow-sm expertise-card'>
                <div className='card-body'>
                  <p className='card-text expertise-text'>Training Centre</p>
                </div>
              </div>
            </div>
            {/* <!-- Expertise Item 2 --> */}
            <div className='col-md-4'>
              <div className='card shadow-sm expertise-card'>
                <div className='card-body'>
                  <p className='card-text expertise-text'>Bridal Makeup</p>
                </div>
              </div>
            </div>
            {/* <!-- Expertise Item 3 --> */}
            <div className='col-md-4'>
              <div className='card shadow-sm expertise-card'>
                <div className='card-body'>
                  <p className='card-text expertise-text'>Pre-Wedding Makeup</p>
                </div>
              </div>
            </div>
            {/* <!-- Expertise Item 4 --> */}
            <div className='col-md-4'>
              <div className='card shadow-sm expertise-card'>
                <div className='card-body'>
                  <p className='card-text expertise-text'>Air Brush Makeup</p>
                </div>
              </div>
            </div>
            {/* <!-- Expertise Item 5 --> */}
            <div className='col-md-4'>
              <div className='card shadow-sm expertise-card'>
                <div className='card-body'>
                  <p className='card-text expertise-text'>
                    Vitiligo Skin Makeup
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Expertise Item 6 --> */}
            <div className='col-md-4'>
              <div className='card shadow-sm expertise-card'>
                <div className='card-body'>
                  <p className='card-text expertise-text'>Glossy Makeup</p>
                </div>
              </div>
            </div>
            {/* <!-- Expertise Item 7 --> */}
            <div className='col-md-4 mx-auto'>
              <div className='card shadow-sm expertise-card'>
                <div className='card-body'>
                  <p className='card-text expertise-text'>HD Makeup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='container-fluid py-5 bg-light'>
        <h3
          className='text-center mb-4'
          style={{ fontWeight: 'bold', color: '#333' }}
        >
          Follow Us on Social Media
        </h3>
        <div className='row text-center justify-content-center'>
          {/* <!-- Left Instagram Link --> */}
          <div
            className='col-12 col-md-3 mb-4'
            style={{ marginTop: '20px' }}
            data-aos='fade-up'
            data-aos-duration='3000'
          >
            <a
              href='https://www.instagram.com/manchandamadhvi?igsh=MXZiNGg0b3kzYWllbA%3D%3D&utm_source=qr'
              target='_blank'
              className='social-card text-decoration-none'
            >
              <h5 className='mt-2 text-dark'>Instagram</h5>
              <img
                src={instaone}
                className='img-fluid rounded shadow-sm'
                style={{ height: '450px', width: '290px' }}
                alt='Instagram 1'
              />
            </a>
          </div>

          {/* <!-- Facebook Link (Middle Image) --> */}
          <div
            className='col-12 col-md-3 mb-4'
            data-aos='fade-up'
            data-aos-duration='3000'
          >
            <a
              href='https://www.facebook.com/profile.php?id=100022484859849&mibextid=LQQJ4d'
              target='_blank'
              className='social-card text-decoration-none'
            >
              <h5 className='mt-2 text-dark'>Facebook</h5>
              <img
                src={fb}
                className='img-fluid rounded shadow-sm'
                style={{ height: '450px', width: '290px' }}
                alt='Facebook'
              />
            </a>
          </div>

          {/* <!-- Right Instagram Link --> */}
          <div
            className='col-12 col-md-3 mb-4'
            style={{ marginTop: '20px' }}
            data-aos='fade-up'
            data-aos-duration='3000'
          >
            <a
              href='https://www.instagram.com/madhvi_hair_artist/profilecard/?igsh=MTRxOTdsbnQ0d3U2bQ=='
              target='_blank'
              className='social-card text-decoration-none'
            >
              <h5 className='mt-2 text-dark'>Instagram</h5>
              <img
                src={instatwo}
                className='img-fluid rounded shadow-sm'
                style={{ height: '450px', width: '290px' }}
                alt='Instagram 2'
              />
            </a>
          </div>
        </div>
      </div>

      <section style={{ backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#333'
          }}
        >
          Come Visit Us
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#555' }}>
          We'd love to see you at our location! Here's where you can find us:
        </p>
        <div
          style={{
            maxWidth: '100%',
            height: 'auto',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
          }}
        >
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3408.364810119334!2d75.6162147756036!3d31.32129667430578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDE5JzE2LjciTiA3NcKwMzcnMDcuNiJF!5e0!3m2!1sen!2sin!4v1724761429678!5m2!1sen!2sin'
            width='100%'
            height='450'
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </section>

      <div
        className='container-fluid text-white py-5'
        style={{
          backgroundColor: '#FF91A4',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          margin: '0'
        }}
        id='aboutus'
      >
        <div className='text-center'>
          <h3
            style={{
              fontSize: '36px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 'bold',
              textAlign: 'center',
              padding: '10px',
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)'
            }}
          >
            Your Beauty Journey Begins Here
          </h3>
        </div>
        <div className='container'>
          <p
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '18px',
              letterSpacing: '1px',
              lineHeight: '1.8',
              textAlign: 'justify',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)'
            }}
          >
            Whether you're preparing for the most important day of your life or
            looking to master the art of makeup,{' '}
            <span style={{ fontWeight: 'bold' }}>
              Kanha Makeup Studio and Academy
            </span>{' '}
            is your destination for all things beauty. Join us in celebrating
            the art of makeup and discover the transformative power of our
            services.{' '}
            <span style={{ fontWeight: 'bold' }}>Connect with us today</span>{' '}
            and let us bring out the best in you!
          </p>
          <div className='text-center mt-4'>
            <Link
              to='contactus.html'
              className='btn btn-dark rounded-pill px-4 py-2'
              style={{
                backgroundColor: '#333',
                border: 'none',
                fontSize: '16px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease'
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <footer className='bg-dark text-center text-white'>
        <div className='container p-3'>
          <div className='row text-center'>
            {/* <!-- Column 1: About --> */}
            <div className='col-lg-4 mb-4'>
              <h5 className='text-uppercase fw-bold mb-3'>
                Kanha Makeup Studio
              </h5>
              <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
                We offer all kinds of services: Bridal, Pre-Wedding, Air Brush,
                Vitiligo, Glossy, and HD makeups. We also provide professional
                training in makeup artistry and hairstyling.
              </p>
            </div>

            {/* <!-- Column 2: Menu --> */}
            <div className='col-lg-4 mb-4'>
              <h5 className='text-uppercase fw-bold mb-3'>Menu</h5>
              <ul className='list-unstyled'>
                <li className='mb-2'>
                  <Link to='/' className='text-white text-decoration-none'>
                    Home
                  </Link>
                </li>
                <li className='mb-2'>
                  <Link
                    to='/academy'
                    className='text-white text-decoration-none'
                  >
                    Academy
                  </Link>
                </li>
                <li className='mb-2'>
                  <Link
                    to='/about-us'
                    className='text-white text-decoration-none'
                  >
                    About Us
                  </Link>
                </li>
                <li className='mb-2'>
                  <Link
                    to='/contact-us'
                    className='text-white text-decoration-none'
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className='col-lg-4 mb-4'>
              <h5 className='text-uppercase fw-bold mb-3'>Contact</h5>
              <div className='d-flex align-items-center justify-content-center mb-3'>
                <img
                  src='images/phone-removebg-preview.png'
                  alt='Phone'
                  style={{ height: '20px', marginRight: '15px' }}
                />
                <Link
                  to='tel:9646486969'
                  className='text-white text-decoration-none'
                  style={{ fontSize: '16px' }}
                >
                  9646486969
                </Link>
              </div>
              <div className='d-flex align-items-center justify-content-center'>
                <img
                  src='images/email2.jpg'
                  alt='Email'
                  style={{ height: '30px', marginRight: '15px' }}
                />
                <Link
                  to='mailto:madhvimanchanda92@gmail.com'
                  className='text-white text-decoration-none'
                  style={{ fontSize: '16px' }}
                >
                  madhvimanchanda92@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className='text-center py-3'
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', fontSize: '14px' }}
        >
          Copyright © 2024 Kanha Makeup Studio. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default Index
