import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck, Zap, ArrowRight, Sparkles } from 'lucide-react';

const faqItems = [
  {
    q: 'Why choose custom software development by Blueidealteck over off-the-shelf platforms?',
    a: 'Off-the-shelf software forces your company to adapt its proven operational processes to fit rigid vendor limitations. At Blueidealteck, we engineer bespoke digital ecosystems built specifically around your unique workflow, offering 100% intellectual property ownership, zero recurring user license fees, and superior 10x scalability.'
  },
  {
    q: 'How fast can Blueidealteck build and deploy a custom web application or cloud microservice?',
    a: 'Using our modular React, Node.js, and automated CI/CD DevOps pipelines, typical custom MVP web applications are delivered within 4 to 8 weeks, complete with automated unit testing, bank-grade security audits, and zero-downtime cloud hosting.'
  },
  {
    q: 'Does Blueidealteck sign Non-Disclosure Agreements (NDAs) and grant complete IP ownership?',
    a: 'Yes, absolutely. We sign legally binding NDAs prior to technical discovery, and upon project completion, 100% of source code, intellectual property rights, database schemas, and cloud deployment scripts belong exclusively to your organization.'
  },
  {
    q: 'What cloud environments and databases do you support for enterprise migration?',
    a: 'We specialize in multi-cloud migration and architecture across AWS, Microsoft Azure, and Google Cloud Platform (GCP). Our database engineering covers PostgreSQL, MongoDB, Redis, MySQL, Apache Kafka, and BigQuery data lakes.'
  },
  {
    q: 'How do you ensure bank-grade security and zero-downtime maintenance after launch?',
    a: 'All software engineered by Blueidealteck incorporates built-in threat modeling, OWASP top 10 vulnerability prevention, DevSecOps pipelines, and 24/7 automated telemetry monitoring. We provide ongoing support warranties to guarantee 99.9% uptime.'
  },
  {
    q: 'How can we get an immediate project cost estimation and free infrastructure audit?',
    a: 'You can use our interactive Project Scope Estimator on this site or submit your email in our Free Audit section. Our senior engineering leads will review your architecture and send a comprehensive technical blueprint directly to your inbox within 24 hours.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="badge-glow" style={{ marginBottom: '16px' }}>
            <HelpCircle size={14} color="#00A3FF" />
            <span>SEO & Client FAQs</span>
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about partnering with Blueidealteck for custom software, cloud DevOps, and enterprise AI transformation.
          </p>
        </div>

        {/* FAQ Accordion Grid */}
        <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  background: '#FFFFFF',
                  border: isOpen ? '1px solid #00A3FF' : '1px solid rgba(56, 189, 248, 0.25)',
                  boxShadow: isOpen ? '0 10px 30px rgba(0, 163, 255, 0.15)' : '0 4px 15px rgba(2, 132, 199, 0.05)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <div
                  onClick={() => toggleFaq(idx)}
                  style={{
                    padding: '22px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: isOpen ? '#0284C7' : '#0F172A',
                    lineHeight: 1.4,
                    paddingRight: '16px'
                  }}>
                    {item.q}
                  </h3>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: isOpen ? '#E0F2FE' : '#F8FAFC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {isOpen ? <ChevronUp size={18} color="#00A3FF" /> : <ChevronDown size={18} color="#475569" />}
                  </div>
                </div>

                {isOpen && (
                  <div style={{
                    padding: '0 28px 24px 28px',
                    color: 'var(--text-muted)',
                    fontSize: '0.96rem',
                    lineHeight: 1.7,
                    borderTop: '1px solid rgba(56, 189, 248, 0.15)',
                    paddingTop: '16px'
                  }}>
                    <p style={{ margin: 0 }}>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Organic Lead Conversion Banner */}
        <div className="glass-panel" style={{
          marginTop: '60px',
          padding: '32px',
          background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)',
          border: '1px solid rgba(0, 163, 255, 0.3)',
          textAlign: 'center'
        }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
            Have a Unique Software Requirement?
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto 20px auto' }}>
            Our technical directors are ready to discuss your architecture roadmap and prepare a tailored execution plan.
          </p>
          <a href="#contact" className="glow-btn-primary" style={{ display: 'inline-flex' }}>
            <span>Consult Our Technical Leads</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
