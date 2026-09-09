import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles } from 'lucide-react';

const projectTypes = [
  { id: 'web-3d', label: '3D Web Application', weeks: 4, complexity: 'High' },
  { id: 'microservices', label: 'Microservices & Node.js API', weeks: 3, complexity: 'Medium' },
  { id: 'cloud-devops', label: 'Cloud Infrastructure & DevOps', weeks: 2, complexity: 'Medium' },
  { id: 'modernization', label: 'Legacy Refactoring', weeks: 6, complexity: 'High' }
];

const scaleOptions = [
  { id: 'startup', label: 'Startup (< 10k users)', multiplier: 1 },
  { id: 'growth', label: 'Growth (10k - 100k users)', multiplier: 1.3 },
  { id: 'enterprise', label: 'Enterprise (100k+ users)', multiplier: 1.8 }
];

const featureList = [
  { id: '3d-canvas', label: '3D Canvas & WebGL Visualizer', addWeeks: 1 },
  { id: 'realtime', label: 'Real-time WebSockets / Streaming', addWeeks: 0.8 },
  { id: 'auth-rbac', label: 'Enterprise Security & OAuth2', addWeeks: 0.5 },
  { id: 'ai-genai', label: 'AI & GenAI API Integration', addWeeks: 1.2 },
  { id: 'devops-cicd', label: 'Automated CI/CD & Kubernetes', addWeeks: 0.7 }
];

export default function ProjectEstimator() {
  const [selectedType, setSelectedType] = useState('web-3d');
  const [selectedScale, setSelectedScale] = useState('growth');
  const [selectedFeatures, setSelectedFeatures] = useState(['3d-canvas', 'realtime']);

  const currentType = projectTypes.find(p => p.id === selectedType);
  const currentScale = scaleOptions.find(s => s.id === selectedScale);

  const toggleFeature = (id) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const baseWeeks = currentType ? currentType.weeks : 4;
  const featureWeeks = selectedFeatures.reduce((acc, fId) => {
    const feat = featureList.find(f => f.id === fId);
    return acc + (feat ? feat.addWeeks : 0);
  }, 0);

  const totalWeeks = Math.ceil((baseWeeks + featureWeeks) * currentScale.multiplier);
  const estimatedVelocityGain = Math.round(150 + totalWeeks * 12);

  return (
    <section id="estimator" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="badge-glow" style={{ marginBottom: '16px' }}>
            <Calculator size={14} color="#00A3FF" />
            <span>Interactive Tool</span>
          </div>
          <h2 className="section-title">
            Instant Project Scope <span className="gradient-text">& Delivery Estimator</span>
          </h2>
          <p className="section-subtitle">
            Configure your technical requirements below to generate an instant timeline and architecture baseline.
          </p>
        </div>

        {/* Calculator Interface */}
        <div className="glass-panel" style={{ padding: '40px', background: '#FFFFFF' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}>
            {/* Left Controls */}
            <div>
              {/* Step 1: Project Type */}
              <div style={{ marginBottom: '32px' }}>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  marginBottom: '14px',
                  color: '#0F172A'
                }}>
                  1. Select Solution Scope
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {projectTypes.map(t => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedType(t.id)}
                      style={{
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: selectedType === t.id ? '1px solid #00A3FF' : '1px solid rgba(56, 189, 248, 0.25)',
                        background: selectedType === t.id ? '#E0F2FE' : '#F8FAFC',
                        color: selectedType === t.id ? '#0284C7' : '#475569',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'var(--transition-smooth)'
                      }}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Target Scale */}
              <div style={{ marginBottom: '32px' }}>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  marginBottom: '14px',
                  color: '#0F172A'
                }}>
                  2. System Scale & Capacity
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {scaleOptions.map(s => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedScale(s.id)}
                      style={{
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: selectedScale === s.id ? '1px solid #00A3FF' : '1px solid rgba(56, 189, 248, 0.25)',
                        background: selectedScale === s.id ? '#E0F2FE' : '#F8FAFC',
                        color: selectedScale === s.id ? '#0284C7' : '#475569',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'var(--transition-smooth)'
                      }}
                    >
                      <span>{s.label}</span>
                      {selectedScale === s.id && <Check size={16} color="#00A3FF" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Features Checklist */}
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  marginBottom: '14px',
                  color: '#0F172A'
                }}>
                  3. Key Features & Modules
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {featureList.map(f => {
                    const isChecked = selectedFeatures.includes(f.id);
                    return (
                      <div
                        key={f.id}
                        onClick={() => toggleFeature(f.id)}
                        style={{
                          padding: '12px 16px',
                          borderRadius: '10px',
                          border: isChecked ? '1px solid #00A3FF' : '1px solid rgba(56, 189, 248, 0.2)',
                          background: isChecked ? '#F0F9FF' : '#F8FAFC',
                          color: isChecked ? '#0F172A' : '#475569',
                          fontSize: '0.85rem',
                          fontWeight: 500,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          userSelect: 'none'
                        }}
                      >
                        <span>{f.label}</span>
                        <div style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '4px',
                          border: isChecked ? 'none' : '1px solid #94A3B8',
                          background: isChecked ? '#00A3FF' : 'transparent',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          {isChecked && <Check size={14} color="#FFF" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Output Panel */}
            <div style={{
              background: 'linear-gradient(180deg, #F0F9FF 0%, #E0F2FE 100%)',
              borderRadius: '16px',
              padding: '32px',
              border: '1px solid rgba(0, 163, 255, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div className="badge-glow" style={{ marginBottom: '20px' }}>
                  <Sparkles size={14} color="#00A3FF" />
                  <span>Calculated Blueprint</span>
                </div>

                <div style={{ marginBottom: '28px' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: 600 }}>
                    Estimated Delivery Time
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '3rem',
                    fontWeight: 900,
                    color: '#0284C7',
                    lineHeight: 1
                  }}>
                    {totalWeeks} <span style={{ fontSize: '1.4rem', fontWeight: 600, color: '#0F172A' }}>Weeks</span>
                  </div>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                  marginBottom: '28px',
                  padding: '16px',
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid rgba(0, 163, 255, 0.2)'
                }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 600 }}>Complexity Rating</div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#0284C7', marginTop: '4px' }}>
                      {currentType.complexity}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 600 }}>Velocity Acceleration</div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#00A3FF', marginTop: '4px' }}>
                      +{estimatedVelocityGain}%
                    </div>
                  </div>
                </div>

                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
                  Includes automated testing, security checks, deployment scripts, and 30 days of post-launch engineering support.
                </div>
              </div>

              <a href="#contact" className="glow-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <span>Request Blueprint Proposal</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
