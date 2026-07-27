import React from 'react';
import { ArrowUp, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (page, sectionId) => {
    if (onNavigate) onNavigate(page);
    if (page === 'home' && sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      name: 'X (Twitter)',
      icon: Twitter,
      url: 'https://x.com/blueidealteck'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/people/Blueidealtec-K/pfbid0DrJ2ETaQFtdKne5BmiVKrJck7TbVvABi53qnQwvMsiT8t6iwncL6kmjCYCTi4n91l/'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/blueidealteck/'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/blueidealteck-software-solution'
    }
  ];

  return (
    <footer style={{
      borderTop: '1px solid rgba(56, 189, 248, 0.3)',
      background: '#FFFFFF',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '60px 24px 40px 24px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Brand & Address */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <div style={{
                padding: '4px',
                borderRadius: '10px',
                background: '#FFFFFF',
                border: '1px solid rgba(0, 163, 255, 0.3)',
                boxShadow: '0 4px 15px rgba(0, 163, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '40px'
              }}>
                <img 
                  src="/logo.png" 
                  alt="Blueidealteck Logo" 
                  style={{
                    height: '32px',
                    width: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.3rem', color: '#0F172A' }}>
                BLUEIDEAL<span style={{ color: '#00A3FF' }}>TECK</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, maxWidth: '280px', fontWeight: 500, marginBottom: '12px' }}>
              SF/NO.139/1, ANNA NAGAR, MANGALAMPET,<br />
              Karnatham, Vriddhachalam, Cuddalore,<br />
              Tamil Nadu, India - 606104
            </p>
            <p style={{ color: '#0F172A', fontSize: '0.88rem', fontWeight: 600 }}>
              Phone: +91 9789836077<br />
              Email: info@blueidealteck.com
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h5 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1rem', fontWeight: 800, marginBottom: '16px' }}>
              Useful Links
            </h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><button onClick={() => handleLinkClick('home')} className="footer-btn">Home</button></li>
              <li><button onClick={() => handleLinkClick('home', 'about')} className="footer-btn">About us</button></li>
              <li><button onClick={() => handleLinkClick('home', 'services')} className="footer-btn">Services</button></li>
              <li><button onClick={() => handleLinkClick('techstack')} className="footer-btn">Tech Stack</button></li>
              <li><button onClick={() => handleLinkClick('blog')} className="footer-btn">Blog</button></li>
              <li><button onClick={() => handleLinkClick('privacy')} className="footer-btn">Privacy Policy</button></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1rem', fontWeight: 800, marginBottom: '16px' }}>
              Resources & Portfolio
            </h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><button onClick={() => handleLinkClick('home', 'about')} className="footer-btn">Success Stories (Case Studies)</button></li>
              <li><button onClick={() => handleLinkClick('techstack')} className="footer-btn">Developer Resources</button></li>
              <li><button onClick={() => handleLinkClick('home', 'future')} className="footer-btn">Next-Gen Frontiers</button></li>
              <li><button onClick={() => handleLinkClick('home', 'philosophy')} className="footer-btn">Our Philosophy</button></li>
            </ul>
          </div>

          {/* Social Media Links & Back to top */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div>
              <h5 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1rem', fontWeight: 800, marginBottom: '16px' }}>
                Follow Us & Stay Connected
              </h5>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '16px' }}>
                Connect with our official channels for the latest updates, engineering insights, and tech news.
              </p>

              {/* Social Media Buttons */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: '#F0F9FF',
                        border: '1px solid rgba(0, 163, 255, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0284C7',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(0, 163, 255, 0.1)'
                      }}
                      className="social-icon-btn"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            <button
              onClick={scrollToTop}
              style={{
                marginTop: '24px',
                padding: '10px 18px',
                borderRadius: '10px',
                background: '#F0F9FF',
                border: '1px solid rgba(0, 163, 255, 0.3)',
                color: '#0284C7',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div style={{
          borderTop: '1px solid rgba(56, 189, 248, 0.2)',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          fontSize: '0.88rem',
          color: 'var(--text-dim)'
        }}>
          <div>
            © 2026 Copyright Blueidealteck All Rights Reserved
          </div>
          <div>
            Dedicated Multi-Page Router (Home, Tech Stack, Blog).
          </div>
        </div>
      </div>

      <style>{`
        .footer-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-body);
          padding: 0;
          transition: var(--transition-smooth);
        }
        .footer-btn:hover {
          color: #00A3FF;
        }
        .social-icon-btn:hover {
          background: #00A3FF !important;
          color: #FFFFFF !important;
          transform: translateY(-3px);
          boxShadow: 0 6px 16px rgba(0, 163, 255, 0.3) !important;
        }
      `}</style>
    </footer>
  );
}
