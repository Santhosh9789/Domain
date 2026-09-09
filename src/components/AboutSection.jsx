import React from 'react';
import { ShieldCheck, Cpu, Users, Layers, Award } from 'lucide-react';

const corePillars = [
  {
    icon: Layers,
    title: 'Full-Service Expertise',
    desc: 'From custom software and cloud infrastructure to mobile apps and AI pipelines, we cover your complete digital lifecycle.'
  },
  {
    icon: Cpu,
    title: 'Scalable & Future-Ready Solutions',
    desc: 'Engineered for extreme scalability and revenue growth, identifying tailored strategies that scale effortlessly.'
  },
  {
    icon: ShieldCheck,
    title: 'Security-First Development',
    desc: 'Military-grade security standards, DevSecOps compliance, and bank-grade data integrity built into every layer.'
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    desc: 'We take the time to understand your goals, challenges, and vision — crafting solutions tailored specifically for you.'
  }
];

export default function AboutSection() {
  return (
    <section id="about" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Header */}
        <div className="section-title-wrap">
          <div className="badge-glow" style={{ marginBottom: '16px' }}>
            <Award size={14} color="#00A3FF" />
            <span>Why World-Class Brands Choose Us</span>
          </div>
          <h2 className="section-title">
            Why Choose <span className="gradient-text">Blueidealteck</span>
          </h2>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', color: '#0284C7', fontWeight: 700 }}>
            Let Blueidealteck be your technology engine.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '60px'
        }}>
          {/* Left Text */}
          <div className="glass-panel" style={{ padding: '36px', background: '#FFFFFF' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '20px', color: '#0F172A' }}>
              We Don't Just Write Code; We Architect Digital Dominance.
            </h3>

            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '20px' }}>
              Our solutions are engineered for extreme scalability, identifying tailored strategies that drive revenue and efficiency. With a deep understanding of technology and a passion for innovation, our team is dedicated to building scalable, secure, and high-performance software that helps businesses grow and succeed in the digital world.
            </p>

            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '20px' }}>
              What sets us apart is our client-first mindset. We take the time to understand your goals, challenges, and vision — and then craft solutions tailored specifically for you. Whether it's a custom web application, a mobile app, or a cloud-native DevOps pipeline, our approach is always strategic, transparent, and results-driven.
            </p>

            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8 }}>
              We don’t believe in one-time transactions — we believe in long-term partnerships. From planning to development, and beyond deployment, we stay committed to your product's success. With on-time delivery, reliable support, and a collaborative working style, Blueidealteck becomes an extension of your team.
            </p>

            <div style={{
              marginTop: '28px',
              padding: '16px 20px',
              borderRadius: '12px',
              background: '#F0F9FF',
              borderLeft: '4px solid #00A3FF',
              fontWeight: 600,
              color: '#0F172A'
            }}>
              Our Mission: Empower businesses with technology that works — turning your ideas into digital impact.
            </div>
          </div>

          {/* Right Core Pillars Grid */}
          <div className="grid-responsive-2" style={{ gap: '20px' }}>
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="glass-panel" style={{ padding: '24px', background: '#FFFFFF' }}>
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
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px', color: '#0F172A' }}>
                    {pillar.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
