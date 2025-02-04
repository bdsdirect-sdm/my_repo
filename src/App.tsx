import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Helmet from 'react-helmet'
import Index from './components/Index'
// import './App.css'
import Academy from './components/Academy'
import Aboutus from './components/Aboutus'
import Contactus from './components/Contactus'

function App () {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Helmet>
                  <title>Kanha Makeup Studio</title>
                </Helmet>
                <Index />
              </>
            }
          />

          <Route
            path='/academy'
            element={
              <>
                <Helmet>
                  <title>Academy</title>
                </Helmet>
                <Academy />
              </>
            }
          />

          <Route
            path='/about-us'
            element={
              <>
                <Helmet>
                  <title>About Us</title>
                </Helmet>
                <Aboutus />
              </>
            }
          />

          <Route
            path='/contact-us'
            element={
              <>
                <Helmet>
                  <title>Contact Us</title>
                </Helmet>
                <Contactus />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
