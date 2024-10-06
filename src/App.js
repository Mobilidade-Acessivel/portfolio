import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home/home'; // Importe a página Home
import About from './About/about'; // Importe a página About
import Projects from './project/project'; // Importe a página Projects
import Contact from './contact/contact'; // Importe a página Contact
import './App.css'; // Importe o CSS para estilizar os botões

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="nav-buttons">
            <Link to="/" className="nav-button">Home</Link>
            <Link to="/about" className="nav-button">About</Link>
            <Link to="/projects" className="nav-button">Projects</Link>
            <Link to="/contact" className="nav-button">Contact</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
