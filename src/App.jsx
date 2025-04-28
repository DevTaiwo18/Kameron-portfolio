import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Hero from './Sections/Hero';
import About from './Sections/About';
import Experience from './Sections/Experience';
import Education from './Sections/Education';
import Contact from './Sections/Contact';

// Import components

const Home = () => (
  <div>
    <Hero />
    <About />
    <Experience />
    <Education />
    <Contact />
  </div>
);

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;