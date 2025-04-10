import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Work from './pages/Work';
import Footer from './components/Footer';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <div className='contain'>
          <Navbar />
          <main className="">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/works" element={<Work />} />
                <Route path="/contact-us" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;