import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetails from './components/ServiceDetails';
import PortfolioDetails from './components/PortfolioDetails';
import ContactForm from './components/ContactForm';
import AboutPage from './components/AboutPage';
import Collaborations from './components/Collaborations';
import AccessDenied from './pages/AccessDenied';
import SignupLogin from './pages/SignupLogin';
import UserTypeSelection from './pages/UserTypeSelection';
import AssetsPage from './pages/AssetsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-dark-400 to-dark-300 text-white overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <Services />
              <Portfolio />
              <Contact />
              <Testimonials />
              <Pricing />
            </>
          } />
          <Route path="/services" element={<ServiceDetails />} />
          <Route path="/portfolio" element={<PortfolioDetails />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/colaborations" element={<Collaborations />} />
          <Route path="/assets" element={<AssetsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/selection" element={<UserTypeSelection />} />
          <Route path="/auth" element={<SignupLogin />} />
          <Route path="/access-denied" element={<AccessDenied />} />
          {/* Catch all route for undefined paths */}
          <Route path="*" element={<Navigate to="/\" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;