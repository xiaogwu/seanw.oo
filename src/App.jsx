import { Routes, Route } from 'react-router-dom';

import Header from 'Components/Header';
import Home from 'Pages/Home';
import About from 'Pages/About';
import Projects from 'Pages/Projects';
import Contact from 'Pages/Contact';
import Footer from 'Components/Footer';

import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
