import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Leadership } from './pages/Leadership';
// import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
// import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/leadership" element={<Leadership />} />
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/terms" element={<Terms />} /> */}
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
