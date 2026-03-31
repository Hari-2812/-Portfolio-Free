import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import ScrollProgressBar from './components/ScrollProgressBar';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Dev1 from './pages/Dev1';
import Dev2 from './pages/Dev2';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -16, filter: 'blur(6px)' }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/dev1" element={<Dev1 />} />
          <Route path="/dev2" element={<Dev2 />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="relative">
      <ScrollProgressBar />
      <Navbar />
      <main className="relative z-10">
        <AnimatedRoutes />
      </main>
      <FloatingWhatsApp />
    </div>
  );
}
