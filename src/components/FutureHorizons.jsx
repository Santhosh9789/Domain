import React, { useState } from 'react';
import { Gamepad2, ShieldAlert, Binary, Rocket, ArrowRight } from 'lucide-react';
import ArticleModal from './ArticleModal';

const futureItems = [
  {
    title: 'Next-Gen Game Design',
    category: 'Gaming & Metaverse',
    badge: 'Coming Soon',
    icon: Gamepad2,
    desc: 'Immersive, hyper-realistic gaming experiences powered by Unreal Engine 5 & Unity. We are crafting worlds that blur the line between reality and digital.'
  },
  {
    title: 'Elite Cyber Security',
    category: 'Zero Trust Security',
    badge: 'Coming Soon',
    icon: ShieldAlert,
    desc: 'Military-grade penetration testing and Zero Trust architecture to bulletproof your infrastructure against evolving threats.'
  },
  {
    title: 'Blockchain Revolution',
    category: 'Web3 & Smart Contracts',
    badge: 'Coming Soon',
    icon: Binary,
    desc: 'Decentralized innovation with Smart Contracts and Web3 Integration. Building transparent, immutable systems for the next era of the internet.'
  }
];

export default function FutureHorizons() {
  const [modalHorizon, setModalHorizon] = useState(null);

  return (
    <section id="future" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="badge-glow" style={{ marginBottom: '16px' }}>
            <Rocket size={14} color="#00A3FF" />
            <span>Innovation Horizon</span>
          </div>
          <h2 className="section-title">
            Future Horizons: <span className="gradient-text">The Next Frontier</span>
          </h2>
          <p className="section-subtitle">
            Innovation never stops. We are building the capabilities of tomorrow, today.
          </p>
        </div>

        {/* Future Cards Grid */}
        <div className="grid-responsive-3">
          {futureItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '28px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(0, 163, 255, 0.3)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    background: '#E0F2FE',
                    border: '1px solid rgba(0, 163, 255, 0.3)',
                    color: '#0284C7',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase'
                  }}>
                    {item.badge}
                  </div>

                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: '#F0F9FF',
                    border: '1px solid rgba(0, 163, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <Icon size={26} color="#00A3FF" />
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    marginBottom: '10px',
                    color: '#0F172A'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(56, 189, 248, 0.2)' }}>
                  <button
                    onClick={() => setModalHorizon(item)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#00A3FF',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontFamily: 'var(--font-heading)'
                    }}
                  >
                    <span>Read More</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ArticleModal
        isOpen={!!modalHorizon}
        onClose={() => setModalHorizon(null)}
        article={modalHorizon}
      />
    </section>
  );
}
