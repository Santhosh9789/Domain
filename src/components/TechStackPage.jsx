import React, { useState } from 'react';
import { Cpu, ArrowLeft, Search, ArrowRight } from 'lucide-react';
import { expanded48Tools } from './TrendingTools';
import ArticleModal from './ArticleModal';

export default function TechStackPage({ onNavigateHome }) {
  const [selectedTech, setSelectedTech] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');

  const categories = [
    'All', 'Frontend', 'Backend', 'Cloud & DevOps', 
    'Databases', 'AI & ML', 'Mobile', 'Design', 'QA & Testing', 'Monitoring', 'Automation'
  ];

  const filteredTech = expanded48Tools.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          t.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCat === 'All' || t.category === selectedCat;
    return matchesSearch && matchesCat;
  });

  return (
    <div style={{ paddingTop: '100px', position: 'relative' }}>
      {/* Banner */}
      <section style={{
        padding: '60px 24px 40px 24px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #E0F2FE 0%, #F0F9FF 100%)',
        borderBottom: '1px solid rgba(56, 189, 248, 0.2)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}>
            <button
              onClick={onNavigateHome}
              className="glow-btn-secondary"
              style={{ padding: '8px 18px', fontSize: '0.85rem', display: 'inline-flex', gap: '8px' }}
            >
              <ArrowLeft size={16} />
              <span>Back to Main Site</span>
            </button>
          </div>

          <div className="badge-glow" style={{ marginBottom: '16px' }}>
            <Cpu size={14} color="#00A3FF" />
            <span>Dedicated Technology Ecosystem Page</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
            fontWeight: 900,
            color: '#0F172A',
            marginBottom: '16px'
          }}>
            Complete <span className="gradient-text">Tech Stack Catalog</span>
          </h1>

          <p style={{
            color: 'var(--text-muted)',
            fontSize: '1.2rem',
            maxWidth: '740px',
            margin: '0 auto 32px auto',
            lineHeight: 1.6
          }}>
            Explore our comprehensive suite of 50+ core technologies spanning Frontend frameworks, Node.js microservices, Cloud DevOps, AI automation, Mobile engineering, and NoSQL/Relational databases.
          </p>

          {/* Search Bar */}
          <div style={{ maxWidth: '580px', margin: '0 auto', position: 'relative' }}>
            <Search size={20} color="#0284C7" style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search 50+ tools (e.g. React, Next.js, Python, AWS, Docker, Flutter, PostgreSQL...)"
              style={{
                width: '100%',
                padding: '14px 20px 14px 50px',
                borderRadius: '30px',
                border: '1px solid rgba(0, 163, 255, 0.4)',
                background: '#FFFFFF',
                fontSize: '0.95rem',
                color: '#0F172A',
                outline: 'none',
                boxShadow: '0 8px 25px rgba(2, 132, 199, 0.12)'
              }}
            />
          </div>
        </div>
      </section>

      <div className="section-container" style={{ paddingTop: '50px' }}>
        {/* Category Filters */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '40px'
        }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '24px',
                border: selectedCat === cat ? '1px solid #00A3FF' : '1px solid rgba(56, 189, 248, 0.25)',
                background: selectedCat === cat ? '#00A3FF' : '#FFFFFF',
                color: selectedCat === cat ? '#FFFFFF' : '#334155',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 50+ Tech Cards Grid */}
        <div className="grid-responsive-3" style={{ gap: '24px', marginBottom: '60px' }}>
          {filteredTech.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '24px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: '#E0F2FE',
                      border: '1px solid rgba(0, 163, 255, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Icon size={24} color="#0284C7" />
                    </div>
                    <span style={{
                      padding: '4px 12px',
                      borderRadius: '12px',
                      background: '#F0F9FF',
                      color: '#0284C7',
                      fontSize: '0.75rem',
                      fontWeight: 700
                    }}>
                      {tech.category}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#0F172A',
                    marginBottom: '4px'
                  }}>
                    {tech.name}
                  </h3>

                  <div style={{ fontSize: '0.85rem', color: '#00A3FF', fontWeight: 700, marginBottom: '12px' }}>
                    {tech.subtitle}
                  </div>
                </div>

                <div style={{ paddingTop: '14px', borderTop: '1px solid rgba(56, 189, 248, 0.2)' }}>
                  <button
                    onClick={() => setSelectedTech(tech)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#00A3FF',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'var(--font-heading)'
                    }}
                  >
                    <span>View Architecture Detail</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tech Detail Modal */}
      <ArticleModal
        isOpen={!!selectedTech}
        onClose={() => setSelectedTech(null)}
        article={selectedTech ? {
          title: `${selectedTech.name} — ${selectedTech.subtitle}`,
          category: selectedTech.category,
          desc: `At Blueidealteck, we utilize ${selectedTech.name} (${selectedTech.subtitle}) to engineer scalable, security-first, and high-performance digital ecosystems.`,
          date: 'Production Stack Spec'
        } : null}
      />
    </div>
  );
}
