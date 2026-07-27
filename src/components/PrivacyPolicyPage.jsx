import React from 'react';
import { ShieldCheck, Lock, ArrowLeft, Mail, FileText, CheckCircle2 } from 'lucide-react';

export default function PrivacyPolicyPage({ onNavigateHome }) {
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
            <ShieldCheck size={14} color="#00A3FF" />
            <span>Official Legal Document</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
            fontWeight: 900,
            color: '#0F172A',
            marginBottom: '16px'
          }}>
            Privacy <span className="gradient-text">Policy</span>
          </h1>

          <p style={{
            color: 'var(--text-muted)',
            fontSize: '1.15rem',
            maxWidth: '720px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Blueidealteck Software Solution Private Limited. Effective Date: July 27, 2026. Your privacy, confidentiality, and data security are our top corporate priorities.
          </p>
        </div>
      </section>

      {/* Content Container */}
      <div className="section-container" style={{ paddingTop: '50px', maxWidth: '960px' }}>
        <div className="glass-panel" style={{ padding: '40px', background: '#FFFFFF', lineHeight: 1.8, color: '#334155' }}>
          
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
            1. Introduction & Corporate Commitment
          </h2>
          <p style={{ marginBottom: '24px' }}>
            Welcome to Blueidealteck Software Solution Private Limited (“Blueidealteck”, “we”, “us”, or “our”). We are committed to protecting the personal information and confidential business data of all clients, website visitors, and partners. This Privacy Policy outlines how we collect, use, safeguard, and handle data when you interact with our website (<strong>blueidealteck.com</strong>) or engage our software development and cloud consulting services.
          </p>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
            2. Information We Collect
          </h2>
          <p style={{ marginBottom: '14px' }}>
            We collect information necessary to provide bespoke software engineering, technical infrastructure audits, and client consultation services:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>Personal Identification Data:</strong> Full name, corporate email address, phone number, and company name provided voluntarily through our inquiry form or free audit request.</li>
            <li><strong>Technical & Project Specifications:</strong> Project outlines, architectural goals, technology preferences, and operational workflow requirements submitted for project estimation.</li>
            <li><strong>Automated Telemetry:</strong> Anonymized browser type, IP address, device specifications, and page interaction metrics collected via standard web server logs for performance optimization.</li>
          </ul>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
            3. How We Use Your Information
          </h2>
          <p style={{ marginBottom: '14px' }}>
            We strictly limit the use of collected data to legitimate business operations:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <CheckCircle2 size={18} color="#00A3FF" style={{ flexShrink: 0, marginTop: '4px' }} />
              <span>To prepare custom project blueprints, architecture cost estimations, and technical proposals.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <CheckCircle2 size={18} color="#00A3FF" style={{ flexShrink: 0, marginTop: '4px' }} />
              <span>To communicate directly regarding your requested free infrastructure audit or support inquiry via <strong>info@blueidealteck.com</strong>.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <CheckCircle2 size={18} color="#00A3FF" style={{ flexShrink: 0, marginTop: '4px' }} />
              <span>To maintain software reliability, prevent cybersecurity vulnerabilities, and optimize 120 FPS WebGL site performance.</span>
            </div>
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
            4. Client Intellectual Property & Non-Disclosure (NDA)
          </h2>
          <p style={{ marginBottom: '24px' }}>
            We understand that custom software ideas and proprietary workflows represent core business value. We sign Non-Disclosure Agreements (NDAs) prior to detailed discovery. <strong>We do not sell, rent, lease, or trade your personal or project data to any third-party marketing companies under any circumstances.</strong> Upon project completion, 100% of custom code and IP rights belong to you.
          </p>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
            5. Bank-Grade Security Measures
          </h2>
          <p style={{ marginBottom: '24px' }}>
            We employ bank-grade security protocols, SSL/TLS encryption, restricted access controls, and DevSecOps practices to protect all data against unauthorized access, disclosure, or alteration.
          </p>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
            6. Contact Our Data Protection Officer
          </h2>
          <p style={{ marginBottom: '16px' }}>
            If you have questions regarding this Privacy Policy or wish to exercise your data access or deletion rights, please contact our team:
          </p>
          <div style={{ background: '#F0F9FF', padding: '20px 24px', borderRadius: '12px', borderLeft: '4px solid #00A3FF', fontWeight: 600 }}>
            <div>Blueidealteck Software Solution Private Limited</div>
            <div>SF/NO.139/1, ANNA NAGAR, MANGALAMPET, Karnatham, Vriddhachalam, Cuddalore, Tamil Nadu, India - 606104</div>
            <div>Email: <strong>info@blueidealteck.com</strong> | Phone: <strong>+91 9789836077</strong></div>
          </div>

        </div>
      </div>
    </div>
  );
}
