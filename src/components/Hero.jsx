import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Zap, Server, Cpu } from 'lucide-react';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'blueidealteck.deploy({ solutions: "FullStack AI & Cloud", uptime: "99.9%" });';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '120px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="section-container" style={{ width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '60px',
          alignItems: 'center'
        }}>
          {/* Left Hero Content */}
          <div>
            <div className="badge-glow" style={{ marginBottom: '24px' }}>
              <span>Full-Stack AI & Cloud Engineering</span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.4rem, 4.8vw, 4.1rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: '24px',
              letterSpacing: '-1px',
              color: '#0F172A'
            }}>
              Full-Stack AI & Cloud Solutions for <span className="gradient-text">Scalable Businesses</span>
            </h1>

            <p style={{
              color: 'var(--text-muted)',
              fontSize: '1.2rem',
              lineHeight: 1.7,
              marginBottom: '40px',
              maxWidth: '580px'
            }}>
              Empowering startups and enterprises with secure, high-performance software. We build digital success stories tailored to your needs.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '50px' }}>
              <a href="#contact" className="glow-btn-primary">
                <span>Get Started</span>
                <ArrowRight size={18} />
              </a>
              <a href="#about" className="glow-btn-secondary">
                <span>Why Choose Us</span>
              </a>
            </div>

            {/* Highlight Metrics */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(56, 189, 248, 0.2)'
            }}>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: '#0284C7' }}>
                  99.9%
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '4px', fontWeight: 500 }}>
                  Uptime Guaranteed
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: '#00A3FF' }}>
                  100%
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '4px', fontWeight: 500 }}>
                  Tailored Strategies
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: '#0369A1' }}>
                  24/7
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '4px', fontWeight: 500 }}>
                  Ongoing Support
                </div>
              </div>
            </div>
          </div>

          {/* Right Floating Interactive 3D Card Showcase */}
          <div className="floating-element">
            <div className="glass-panel" style={{
              padding: '28px',
              background: '#FFFFFF',
              border: '1px solid rgba(0, 163, 255, 0.3)',
              boxShadow: '0 20px 50px rgba(2, 132, 199, 0.15)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                borderBottom: '1px solid rgba(56, 189, 248, 0.2)',
                marginBottom: '20px'
              }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#38BDF8' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#0284C7' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#0369A1' }}></div>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#0284C7', fontWeight: 700 }}>
                  Blueidealteck Architecture
                </div>
              </div>

              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.88rem',
                color: '#334155',
                lineHeight: 1.8
              }}>
                <p style={{ color: '#0284C7', fontWeight: 600 }}>➜ ~/blueidealteck-engine --status</p>
                <p>✔ Node.js Event-Driven Microservices: Active</p>
                <p>✔ React & Next.js Frontend Canvas: Mounted</p>
                <p>✔ Python AI & Cloud Infrastructure: Connected</p>
                <div style={{
                  background: '#F0F9FF',
                  borderLeft: '4px solid #00A3FF',
                  padding: '12px 16px',
                  margin: '16px 0',
                  borderRadius: '0 8px 8px 0',
                  color: '#0F172A',
                  fontWeight: 600
                }}>
                  <code>{typedText}</code>
                  <span style={{ color: '#00A3FF', fontWeight: 700 }}>|</span>
                </div>
                <p style={{ color: '#00A3FF', fontSize: '0.85rem', fontWeight: 600 }}>✓ Ready to turn your ideas into digital impact.</p>
              </div>

              <div style={{
                display: 'flex',
                gap: '16px',
                marginTop: '24px',
                paddingTop: '16px',
                borderTop: '1px solid rgba(56, 189, 248, 0.2)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#0284C7', fontWeight: 600 }}>
                  <ShieldCheck size={16} color="#00A3FF" />
                  <span>Security-First</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#0284C7', fontWeight: 600 }}>
                  <Zap size={16} color="#00A3FF" />
                  <span>Scalable & Future-Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
