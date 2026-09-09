import React from 'react';
import { 
  ShieldCheck, Zap, Users, Cloud, HeartPulse, Landmark, 
  ShoppingBag, GraduationCap, CheckCircle2 
} from 'lucide-react';

const differentiators = [
  { text: 'Bank-Grade Security: Built-in threat modeling and compliance via DevSecOps.' },
  { text: 'Performance Optimized: Sub-second load times and efficient API routing.' },
  { text: 'Dedicated Project Managers: Transparent, agile, and daily communication.' },
  { text: 'Vendor-Agnostic Cloud: Proficiency across AWS, Azure, and Google Cloud.' }
];

const industries = [
  {
    icon: HeartPulse,
    title: 'Healthcare & HealthTech',
    desc: 'HIPAA compliant solutions, telemedicine platforms, and patient portals.'
  },
  {
    icon: Landmark,
    title: 'FinTech & Banking',
    desc: 'High-frequency trading architectures, secure payment gateways, and blockchain.'
  },
  {
    icon: ShoppingBag,
    title: 'Retail & eCommerce',
    desc: 'Scalable online storefronts, inventory management ERPs, and POS systems.'
  },
  {
    icon: GraduationCap,
    title: 'EdTech & eLearning',
    desc: 'Virtual classrooms, student LMS dashboards, and course monetization.'
  }
];

export default function PhilosophySection() {
  return (
    <section id="philosophy" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="badge-glow" style={{ marginBottom: '16px' }}>
            <span>Digital Transformation Philosophy</span>
          </div>
          <h2 className="section-title">
            The Blueidealteck <span className="gradient-text">Philosophy</span>
          </h2>
          <p className="section-subtitle">
            A deep dive into how we engineer success for modern enterprises.
          </p>
        </div>

        {/* Philosophy Deep Dive Card */}
        <div className="glass-panel" style={{ padding: '36px', background: '#FFFFFF', marginBottom: '60px' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
            Engineering Above Off-The-Shelf
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '20px' }}>
            At Blueidealteck, we recognize that true digital transformation requires custom-tailored approaches. Off-the-shelf software often forces successful organizations to change their proven workflows to fit a rigid system. We flip that paradigm. We build software that molds to your operational processes. Whether you need an agile DevOps consulting strategy to streamline deployments or a robust Web Application that scales to millions of users, our engineering teams build systems designed specifically for your long-term roadmap.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '28px' }}>
            Our commitment to excellence ensures that every project incorporates heavy technical diligence. From containerized microservices to enterprise-grade cybersecurity measures, we prioritize stability and data integrity above all else.
          </p>

          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '16px' }}>
            Our Core Differentiators
          </h4>
          <div className="grid-responsive-2" style={{ gap: '16px' }}>
            {differentiators.map((diff, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: '#F0F9FF', padding: '14px 18px', borderRadius: '10px', border: '1px solid rgba(0, 163, 255, 0.2)' }}>
                <CheckCircle2 size={20} color="#00A3FF" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.95rem', color: '#0F172A', fontWeight: 600 }}>
                  {diff.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Industries We Empower */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: '#0F172A' }}>
            Industries We Empower <span className="gradient-text">Globally</span>
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '8px' }}>
            Domain expertise across heavily regulated and highly competitive markets.
          </p>
        </div>

        <div className="grid-responsive-4">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
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
                  {ind.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {ind.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
