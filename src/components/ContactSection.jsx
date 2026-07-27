import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Sparkles, ShieldCheck } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Custom Software Development',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [auditEmail, setAuditEmail] = useState('');
  const [auditSubmitted, setAuditSubmitted] = useState(false);

  // Target recipient email address
  const TARGET_EMAIL = 'info@blueidealteck.com';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Trigger direct mailto link to info@blueidealteck.com
    const subject = encodeURIComponent(`New Project Inquiry from ${formData.name} [${formData.service}]`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Service Required: ${formData.service}\n\n` +
      `Project Description / Details:\n${formData.message}\n`
    );

    window.location.href = `mailto:${TARGET_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (!auditEmail) return;

    const subject = encodeURIComponent(`Free Infrastructure & Architecture Audit Request`);
    const body = encodeURIComponent(`Please conduct a Free Technical Audit for company email: ${auditEmail}`);

    window.location.href = `mailto:${TARGET_EMAIL}?subject=${subject}&body=${body}`;
    setAuditSubmitted(true);
  };

  return (
    <section id="contact" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Free Audit Banner Box */}
        <div className="glass-panel" style={{
          padding: '40px',
          background: 'linear-gradient(135deg, #0284C7 0%, #00A3FF 100%)',
          color: '#FFFFFF',
          marginBottom: '60px',
          boxShadow: '0 20px 45px rgba(0, 163, 255, 0.3)'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 14px', borderRadius: '20px', background: 'rgba(255, 255, 255, 0.2)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '12px' }}>
                <Sparkles size={14} color="#FFF" />
                <span>Direct Mail to info@blueidealteck.com</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 900, marginBottom: '8px' }}>
                Request Your Free Infrastructure & Architecture Audit
              </h3>
              <p style={{ fontSize: '1.05rem', opacity: 0.95, maxWidth: '640px' }}>
                All audit submissions are routed directly to <strong>{TARGET_EMAIL}</strong> for review by our engineering leads.
              </p>
            </div>

            {auditSubmitted ? (
              <div style={{ background: '#FFFFFF', color: '#0F172A', padding: '16px 24px', borderRadius: '12px', fontWeight: 800 }}>
                ✓ Audit Email Prepared for {TARGET_EMAIL}!
              </div>
            ) : (
              <form onSubmit={handleAuditSubmit} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <input
                  type="email"
                  required
                  value={auditEmail}
                  onChange={(e) => setAuditEmail(e.target.value)}
                  placeholder="name@company.com"
                  style={{
                    padding: '14px 20px',
                    borderRadius: '10px',
                    border: 'none',
                    fontSize: '0.95rem',
                    outline: 'none',
                    minWidth: '260px'
                  }}
                />
                <button type="submit" style={{
                  padding: '14px 24px',
                  borderRadius: '10px',
                  border: 'none',
                  background: '#0F172A',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-heading)'
                }}>
                  Send Audit Request
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="badge-glow" style={{ marginBottom: '16px' }}>
            <Mail size={14} color="#00A3FF" />
            <span>Direct Recipient: {TARGET_EMAIL}</span>
          </div>
          <h2 className="section-title">
            Let's Turn Your Ideas <span className="gradient-text">Into Impact</span>
          </h2>
          <p className="section-subtitle">
            Every submission on this page automatically sends an email to <strong>{TARGET_EMAIL}</strong>.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px'
        }}>
          {/* Left Contact Form */}
          <div className="glass-panel" style={{ padding: '36px', background: '#FFFFFF' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: '#E0F2FE',
                  border: '1px solid #00A3FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto'
                }}>
                  <CheckCircle2 size={36} color="#0284C7" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, marginBottom: '12px', color: '#0F172A' }}>
                  Inquiry Dispatched!
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
                  Your email has been dispatched to <strong>{TARGET_EMAIL}</strong>. Our senior team will reply within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="glow-btn-secondary"
                  style={{ display: 'inline-flex' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid rgba(56, 189, 248, 0.2)'
                }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: '#0F172A' }}>
                    Send Message
                  </h3>
                  <span style={{ fontSize: '0.78rem', color: '#0284C7', fontWeight: 700 }}>
                    To: {TARGET_EMAIL}
                  </span>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#334155', marginBottom: '8px', fontWeight: 600 }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: '#F8FAFC',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      color: '#0F172A',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#334155', marginBottom: '8px', fontWeight: 600 }}>
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: '#F8FAFC',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      color: '#0F172A',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#334155', marginBottom: '8px', fontWeight: 600 }}>
                    Select Required Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: '#F8FAFC',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      color: '#0F172A',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  >
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="DevOps & Cloud Services">DevOps & Cloud Services</option>
                    <option value="Web Application Development">Web Application Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="AI & Machine Learning">AI & Machine Learning</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="E-commerce Solutions">E-commerce Solutions</option>
                    <option value="Cloud Migration">Cloud Migration</option>
                    <option value="API Integration">API Integration</option>
                    <option value="Data Analytics & BI">Data Analytics & BI</option>
                  </select>
                </div>

                <div style={{ marginBottom: '28px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#334155', marginBottom: '8px', fontWeight: 600 }}>
                    Project Requirements / Details
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project requirements..."
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: '#F8FAFC',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      color: '#0F172A',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button type="submit" className="glow-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Send Mail to info@blueidealteck.com</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Right Corporate Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass-panel" style={{ padding: '32px', background: '#FFFFFF' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '24px', color: '#0F172A' }}>
                Corporate Contact Information
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: '#E0F2FE',
                    border: '1px solid rgba(0, 163, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Mail size={22} color="#0284C7" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#0284C7', textTransform: 'uppercase', fontWeight: 700 }}>Direct Target Email</div>
                    <a href={`mailto:${TARGET_EMAIL}`} style={{ color: '#0F172A', textDecoration: 'none', fontWeight: 800, fontSize: '1.05rem' }}>
                      {TARGET_EMAIL}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: '#E0F2FE',
                    border: '1px solid rgba(0, 163, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={22} color="#0284C7" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#0284C7', textTransform: 'uppercase', fontWeight: 700 }}>Call Us</div>
                    <a href="tel:+919789836077" style={{ color: '#0F172A', textDecoration: 'none', fontWeight: 800, fontSize: '1.05rem' }}>
                      +91 9789836077
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: '#E0F2FE',
                    border: '1px solid rgba(0, 163, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <MapPin size={22} color="#0284C7" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#0284C7', textTransform: 'uppercase', fontWeight: 700 }}>Registered Address</div>
                    <p style={{ color: '#0F172A', fontSize: '0.95rem', lineHeight: 1.5, marginTop: '4px', fontWeight: 600 }}>
                      SF/NO.139/1, ANNA NAGAR, MANGALAMPET,<br />
                      Karnatham, Vriddhachalam, Cuddalore,<br />
                      Tamil Nadu, India - 606104
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Support Card */}
            <div className="glass-panel" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px', background: '#FFFFFF' }}>
              <Clock size={28} color="#00A3FF" />
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#0F172A' }}>
                  Support & Email Routing Active
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  Emails are directly delivered to {TARGET_EMAIL} 24/7.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
