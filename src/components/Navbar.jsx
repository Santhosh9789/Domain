import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page, sectionId) => {
    setMobileMenuOpen(false);
    onNavigate(page);
    if (page === 'home' && sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '10px 16px' : '14px 16px',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.90)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid rgba(56, 189, 248, 0.15)',
        boxShadow: scrolled ? '0 8px 25px rgba(2, 132, 199, 0.08)' : 'none'
      }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '10px'
      }}>
        {/* Brand Logo & Name */}
        <div 
          onClick={() => handleNavClick('home')} 
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}
        >
          <div style={{
            padding: '3px',
            borderRadius: '10px',
            background: '#FFFFFF',
            border: '1px solid rgba(0, 163, 255, 0.3)',
            boxShadow: '0 4px 12px rgba(0, 163, 255, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '38px',
            flexShrink: 0
          }}>
            <img 
              src="./logo.png" 
              alt="Blueidealteck Logo" 
              style={{
                height: '30px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: 'clamp(1.05rem, 3.8vw, 1.4rem)',
              letterSpacing: '-0.5px',
              color: '#0F172A',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              BLUEIDEAL<span style={{ color: '#00A3FF' }}>TECK</span>
            </div>
            <div style={{
              fontSize: '0.6rem',
              color: '#0284C7',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              fontWeight: 700,
              display: 'block'
            }} className="mobile-subtitle">
              Software Solutions
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav style={{
          display: 'none',
          gap: '24px',
          alignItems: 'center'
        }} className="desktop-nav">
          <button 
            onClick={() => handleNavClick('home')} 
            className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('home', 'about')} 
            className="nav-btn"
          >
            About
          </button>
          <button 
            onClick={() => handleNavClick('home', 'services')} 
            className="nav-btn"
          >
            Services
          </button>
          <button 
            onClick={() => handleNavClick('techstack')} 
            className={`nav-btn ${currentPage === 'techstack' ? 'active' : ''}`}
          >
            Tech Stack
          </button>
          <button 
            onClick={() => handleNavClick('blog')} 
            className={`nav-btn ${currentPage === 'blog' ? 'active' : ''}`}
          >
            Blog
          </button>
          <button 
            onClick={() => handleNavClick('home', 'contact')} 
            className="nav-btn"
          >
            Contact
          </button>
        </nav>

        {/* Right Action CTA & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <button 
            onClick={() => handleNavClick('home', 'contact')} 
            className="glow-btn-primary header-cta-btn" 
            style={{ padding: '8px 14px', fontSize: '0.82rem', gap: '6px' }}
          >
            <span className="cta-text">Get Started</span>
            <ArrowRight size={14} />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(0, 163, 255, 0.3)',
              color: '#0284C7',
              borderRadius: '10px',
              padding: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0, 163, 255, 0.1)'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="glass-panel" style={{
          marginTop: '12px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          background: '#FFFFFF'
        }}>
          <button onClick={() => handleNavClick('home')} className="nav-btn-mobile">Home</button>
          <button onClick={() => handleNavClick('home', 'about')} className="nav-btn-mobile">About</button>
          <button onClick={() => handleNavClick('home', 'services')} className="nav-btn-mobile">Services</button>
          <button onClick={() => handleNavClick('techstack')} className="nav-btn-mobile">Tech Stack</button>
          <button onClick={() => handleNavClick('blog')} className="nav-btn-mobile">Blog</button>
          <button onClick={() => handleNavClick('home', 'contact')} className="nav-btn-mobile">Contact</button>
        </div>
      )}

      <style>{`
        .nav-btn {
          background: none;
          border: none;
          color: #475569;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          font-family: var(--font-body);
          transition: var(--transition-smooth);
          padding: 6px 12px;
          border-radius: 8px;
        }
        .nav-btn:hover, .nav-btn.active {
          color: #00A3FF;
          background: rgba(0, 163, 255, 0.08);
        }
        .nav-btn-mobile {
          background: none;
          border: none;
          color: #0F172A;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          text-align: left;
          font-family: var(--font-body);
        }
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
        }
        @media (max-width: 480px) {
          .cta-text {
            display: none;
          }
          .mobile-subtitle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
