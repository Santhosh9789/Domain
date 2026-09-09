import React, { useState } from 'react';
import ThreeCanvas from './components/ThreeCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Services3D from './components/Services3D';
import FutureHorizons from './components/FutureHorizons';
import ProcessSection from './components/ProcessSection';
import PhilosophySection from './components/PhilosophySection';
import ContactSection from './components/ContactSection';
import BlogPage from './components/BlogPage';
import TechStackPage from './components/TechStackPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import AIChatbot from './components/AIChatbot';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      {/* 120 FPS Sky Blue & White Interactive 3D WebGL Background Canvas */}
      <ThreeCanvas page={currentPage} />

      {/* Persistent Floating AI Chatbot Widget */}
      <AIChatbot />

      {/* Main Page Layout Container */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

        <main>
          {currentPage === 'home' && (
            <>
              <Hero />
              <AboutSection />
              <Services3D />
              <FutureHorizons />
              <ProcessSection />
              <PhilosophySection />
              <ContactSection />
            </>
          )}

          {currentPage === 'blog' && (
            <BlogPage onNavigateHome={() => handleNavigate('home')} />
          )}

          {currentPage === 'techstack' && (
            <TechStackPage onNavigateHome={() => handleNavigate('home')} />
          )}

          {currentPage === 'privacy' && (
            <PrivacyPolicyPage onNavigateHome={() => handleNavigate('home')} />
          )}
        </main>

        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
}
