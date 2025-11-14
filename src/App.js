import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resources from './pages/Resources';
import ResourceDetail from './pages/ResourceDetail';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-100 bg-math-grid bg-50">
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resource/:id" element={<ResourceDetail />} />
          </Routes>
        </motion.div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;