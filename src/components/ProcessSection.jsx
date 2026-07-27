import React, { useState } from 'react';
import { Search, PenTool, Code2, Rocket, ArrowRight } from 'lucide-react';
import ArticleModal from './ArticleModal';

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    category: 'Process Phase 1',
    icon: Search,
    desc: 'We start by understanding your business goals, target audience, technical constraints, and exact requirements.'
  },
  {
    step: '02',
    title: 'Design',
    category: 'Process Phase 2',
    icon: PenTool,
    desc: 'Creating intuitive and engaging visual designs, wireframes, and interactive prototypes tailored to user conversion.'
  },
  {
    step: '03',
    title: 'Development',
    category: 'Process Phase 3',
    icon: Code2,
    desc: 'Building the solution with clean, maintainable, and scalable code, security standards, and automated testing.'
  },
  {
    step: '04',
    title: 'Launch',
    category: 'Process Phase 4',
    icon: Rocket,
    desc: 'Deploying to live production servers, zero downtime, and providing ongoing support, monitoring, and updates 24/7.'
  }
];

export default function ProcessSection() {
  const [modalStep, setModalStep] = useState(null);

  return (
    <section id="process" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="badge-glow" style={{ marginBottom: '16px' }}>
            <Rocket size={14} color="#00A3FF" />
            <span>Proven Delivery Methodology</span>
          </div>
          <h2 className="section-title">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="section-subtitle">
            How we turn your ideas into reality through strategic planning, clean development, and seamless deployment.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid-responsive-4">
          {processSteps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '28px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(0, 163, 255, 0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2.2rem',
                    fontWeight: 900,
                    color: 'rgba(0, 163, 255, 0.25)',
                    marginBottom: '8px'
                  }}>
                    {item.step}
                  </div>

                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: '#E0F2FE',
                    border: '1px solid rgba(0, 163, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}>
                    <Icon size={24} color="#0284C7" />
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    marginBottom: '10px',
                    color: '#0F172A'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(56, 189, 248, 0.2)' }}>
                  <button
                    onClick={() => setModalStep(item)}
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
        isOpen={!!modalStep}
        onClose={() => setModalStep(null)}
        article={modalStep}
      />
    </section>
  );
}
