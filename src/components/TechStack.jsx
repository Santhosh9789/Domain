import React, { useState } from 'react';
import { Globe, Server, Code, Cloud, Terminal, Smartphone, Cpu } from 'lucide-react';

const techItems = [
  {
    title: 'Frontend Web Development',
    category: 'Web',
    icon: Globe,
    desc: 'We build responsive, accessible, and highly interactive user interfaces using modern HTML, CSS, and vanilla JS to ensure flawless experiences across all devices through our expert full-stack web development.'
  },
  {
    title: 'Node.js Architecture',
    category: 'Backend',
    icon: Server,
    desc: 'Engineering high-performance, event-driven enterprise web applications and decoupled microservices using Node.js, ensuring your platform scales seamlessly with our scalable web development services.'
  },
  {
    title: 'Modern JS Frameworks',
    category: 'Web',
    icon: Code,
    desc: 'Architecting lightning-fast, highly interactive single-page applications and SEO-optimized corporate portals using React and Next.js as a leading web app development company.'
  },
  {
    title: 'Cloud & DevOps',
    category: 'Cloud',
    icon: Cloud,
    desc: 'Optimizing infrastructure with automated CI/CD pipelines to guarantee secure deployments and 99.9% uptime on AWS or Azure.'
  },
  {
    title: 'Python & Django Backend',
    category: 'Backend',
    icon: Terminal,
    desc: 'Developing secure RESTful APIs, data-intensive backend architectures, and intelligent AI models utilizing the flexibility of Python and Django.'
  },
  {
    title: 'Cross-Platform Mobile Apps',
    category: 'Mobile',
    icon: Smartphone,
    desc: 'Delivering premium, native-like iOS and Android mobile experiences faster and more efficiently from a unified Flutter codebase.'
  }
];

export default function TechStack() {
  return (
    <section id="techstack" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="badge-glow" style={{ marginBottom: '16px' }}>
            <Cpu size={14} color="#00A3FF" />
            <span>Tech Stack Illustration</span>
          </div>
          <h2 className="section-title">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            We leverage the latest technologies to build robust and scalable solutions.
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid-responsive-3">
          {techItems.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  background: '#FFFFFF'
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: '#E0F2FE',
                  border: '1px solid rgba(0, 163, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <Icon size={26} color="#0284C7" />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  marginBottom: '10px',
                  color: '#0F172A'
                }}>
                  {tech.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {tech.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
