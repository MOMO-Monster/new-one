import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import Projects from './pages/Projects';
import CaseStudy from './pages/CaseStudy';
import About from './pages/About';
import Playground from './pages/Playground';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-zinc-950 text-zinc-100 min-h-screen font-sans selection:bg-acid-green selection:text-black overflow-x-hidden">
        <ScrollToTop />
        <CustomCursor />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;