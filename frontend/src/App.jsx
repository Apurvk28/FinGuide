import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import { Home as HomeIcon, Wallet, Settings, Info } from 'lucide-react';
import Home from './components/Home';
import FinancialInfo from './components/FinancialInfo';
import Setup from './components/Setup';
import About from './components/About';
import './App.css';

import Analyse from './components/Analyse';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="global-header">
          <Link to="/" className="logo-text">FinGuide</Link>
        </header>
        <main className="content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analyse" element={<Analyse />} />
            <Route path="/financial-information" element={<FinancialInfo />} />
            <Route path="/setup" element={<Setup />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <div className="marquee-wrapper">
          <div className="marquee-line marquee-left">
            <span>TRACK IT. OWN IT. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TRACK IT. OWN IT. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TRACK IT. OWN IT. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TRACK IT. OWN IT. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TRACK IT. OWN IT. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TRACK IT. OWN IT. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>TRACK IT. OWN IT. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TRACK IT. OWN IT. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TRACK IT. OWN IT. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TRACK IT. OWN IT. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TRACK IT. OWN IT. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TRACK IT. OWN IT. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </div>
          <div className="marquee-line marquee-right">
            <span>FINGUIDE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FINGUIDE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FINGUIDE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FINGUIDE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FINGUIDE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FINGUIDE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FINGUIDE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <span>FINGUIDE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FINGUIDE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FINGUIDE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FINGUIDE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FINGUIDE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FINGUIDE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FINGUIDE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-content">
            <h4 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>FinGuide Platform</h4>
            <div className="footer-links">
              <NavLink to="/" className={({ isActive }) => isActive ? "footer-link active" : "footer-link"}>Home</NavLink>
              <NavLink to="/financial-information" className={({ isActive }) => isActive ? "footer-link active" : "footer-link"}>Financial Information</NavLink>
              <NavLink to="/setup" className={({ isActive }) => isActive ? "footer-link active" : "footer-link"}>Setup</NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? "footer-link active" : "footer-link"}>About FinGuide</NavLink>
            </div>
            <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>© 2026 FinGuide. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
