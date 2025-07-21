import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import WhySkillChain from './pages/WhySkillChain';
import HowItWorks from './pages/HowItWorks';
import KeyFeatures from './pages/KeyFeatures';
import About from './pages/About';
import JoinUs from './pages/JoinUs';
import Student from './pages/Student';
import Professional from './pages/Professional';
import Recruiter from './pages/Recruiter';
import Explore from './pages/Explore';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-skillchain" element={<WhySkillChain />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/key-features" element={<KeyFeatures />} />
        <Route path="/about" element={<About />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/student" element={<Student />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/recruiter" element={<Recruiter />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
