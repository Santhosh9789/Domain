import React from 'react';
import { X, Calendar, User, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function ArticleModal({ isOpen, onClose, article }) {
  if (!isOpen || !article) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1000,
      background: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div 
        className="glass-panel" 
        style={{
          background: '#FFFFFF',
          maxWidth: '780px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '36px',
          borderRadius: '20px',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(2, 132, 199, 0.25)',
          border: '1px solid rgba(0, 163, 255, 0.4)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#F0F9FF',
            border: '1px solid rgba(0, 163, 255, 0.3)',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0284C7',
            cursor: 'pointer',
            transition: 'var(--transition-smooth)'
          }}
        >
          <X size={20} />
        </button>

        {/* Category Pill */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 14px',
          borderRadius: '16px',
          background: '#E0F2FE',
          color: '#0284C7',
          fontSize: '0.8rem',
          fontWeight: 700,
          marginBottom: '16px'
        }}>
          <Sparkles size={14} color="#00A3FF" />
          <span>{article.category || 'Technology & Innovation'}</span>
        </div>

        {/* Article Title */}
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.9rem',
          fontWeight: 900,
          lineHeight: 1.3,
          color: '#0F172A',
          marginBottom: '16px'
        }}>
          {article.title}
        </h2>

        {/* Meta Info */}
        <div style={{
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
          fontSize: '0.85rem',
          color: 'var(--text-dim)',
          paddingBottom: '20px',
          borderBottom: '1px solid rgba(56, 189, 248, 0.2)',
          marginBottom: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Calendar size={15} color="#0284C7" />
            <span>{article.date || '2026 Edition'}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <User size={15} color="#0284C7" />
            <span>{article.author || 'Blueidealteck Engineering Team'}</span>
          </div>
        </div>

        {/* Article Body Content */}
        <div style={{
          color: '#334155',
          fontSize: '1.02rem',
          lineHeight: 1.8,
          marginBottom: '32px'
        }}>
          <p style={{ marginBottom: '18px', fontWeight: 500 }}>
            {article.desc || article.description}
          </p>

          <div style={{
            background: '#F0F9FF',
            padding: '24px',
            borderRadius: '14px',
            borderLeft: '4px solid #00A3FF',
            margin: '24px 0'
          }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontWeight: 800, marginBottom: '10px' }}>
              Strategic Engineering Takeaway
            </h4>
            <p style={{ fontSize: '0.95rem', color: '#475569', margin: 0 }}>
              At Blueidealteck, we integrate modern full-stack architectures, Node.js microservices, and AI-driven automation to ensure your enterprise stays years ahead of rigid market competitors.
            </p>
          </div>

          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', marginTop: '24px', marginBottom: '12px' }}>
            Key Implementation Benefits
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <CheckCircle2 size={18} color="#00A3FF" style={{ flexShrink: 0, marginTop: '3px' }} />
              <span>Enhanced system throughput and reduced infrastructure latency.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <CheckCircle2 size={18} color="#00A3FF" style={{ flexShrink: 0, marginTop: '3px' }} />
              <span>Automated CI/CD deployment pipelines with zero operational downtime.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <CheckCircle2 size={18} color="#00A3FF" style={{ flexShrink: 0, marginTop: '3px' }} />
              <span>Bank-grade encryption, DevSecOps compliance, and 99.9% uptime SLA.</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid rgba(56, 189, 248, 0.2)' }}>
          <button
            onClick={onClose}
            className="glow-btn-secondary"
            style={{ padding: '10px 20px', fontSize: '0.9rem' }}
          >
            Close Article
          </button>
          <a href="#contact" onClick={onClose} className="glow-btn-primary" style={{ padding: '10px 22px', fontSize: '0.9rem' }}>
            <span>Consult Our Engineers</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
