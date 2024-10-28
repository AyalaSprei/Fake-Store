// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home'; // Import your Home component
import Jewelry from './pages/Jewelry'; // Import your Jewelry component
import Electronics from './pages/Electronics'; // Import your Electronics component
import './App.css'; // Import the CSS file for styling

const App = () => {
  return (
    <Router>
      <header className="header">
        <h1 className="logo">Fake Store</h1>
        <nav className="nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/jewelry">Jewelry</Link>
          <Link className="nav-link" to="/electronics">Electronics</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="/electronics" element={<Electronics />} />
      </Routes>
    </Router>
  );
};

export default App;
