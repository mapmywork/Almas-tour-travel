import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingButtons from './components/common/FloatingButtons';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-bg text-brand-black">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
