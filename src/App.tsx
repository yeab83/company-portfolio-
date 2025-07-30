// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/header.tsx'
// import Footer from './components/Footer';
// import Home from './routes/Home';
// import About from './routes/About';
// import Portfolio from './routes/Portfolio';
// import Contact from './routes/Contact';
// import NotFound from './routes/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen p-6">
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
