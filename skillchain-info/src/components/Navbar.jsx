import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll create this file next

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">SkillChain</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/why-skillchain">Why SkillChain</Link>
        <Link to="/how-it-works">How It Works</Link>
        <Link to="/key-features">Key Features</Link>
        <Link to="/about">About</Link>
        <Link to="/join-us">Join Us</Link>
        {/* <Link to="/student">Student</Link>
        <Link to="/professional">Professional</Link>
        <Link to="/recruiter">Recruiter</Link> */}
      </div>
    </nav>
  );
}

export default Navbar;