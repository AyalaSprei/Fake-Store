import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Jewelry from "./pages/Jewelry";
import Electronics from "./pages/Electronics.jsx";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/jewelry">Jewelry</Link> | <Link to="/electronics">Electronics</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="/electronics" element={<Electronics />} />
      </Routes>
    </Router>
  );
}

export default App;
