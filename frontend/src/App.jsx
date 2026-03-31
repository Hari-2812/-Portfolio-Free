import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import ScrollProgressBar from './components/ScrollProgressBar';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Dev1 from './pages/Dev1';
import Dev2 from './pages/Dev2';
import Contact from './pages/Contact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div>
      <ScrollProgressBar />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/dev1" element={<Dev1 />} />
          <Route path="/dev2" element={<Dev2 />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <FloatingWhatsApp />
    </div>
  );
}
