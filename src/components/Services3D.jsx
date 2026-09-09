import React, { useState } from 'react';
import { 
  Code, Cloud, Globe, Palette, Cpu, Smartphone, ShoppingCart, 
  CloudLightning, Link, BarChart2, ArrowRight, CheckCircle2 
} from 'lucide-react';
import ArticleModal from './ArticleModal';

const fullServicesList = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    category: 'Bespoke Software',
    icon: Code,
    desc: 'Bespoke digital ecosystems designed to outperform off-the-shelf limitations. We build custom software that scales with your ambition as a leading bespoke software development company.'
  },
  {
    id: 'devops-cloud',
    title: 'DevOps & Cloud Services',
    category: 'Cloud Engineering',
    icon: Cloud,
    desc: 'Optimize your infrastructure with CI/CD pipelines, containerization (Docker and Kubernetes), cloud deployment (AWS, Azure, GCP), and real-time monitoring.'
  },
  {
    id: 'web-apps',
    title: 'Web Application Development',
    category: 'Full-Stack Web',
    icon: Globe,
    desc: 'We build secure, fast, and responsive web applications tailored to your specific business needs — from internal tools to customer-facing platforms.'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    category: 'Design & Experience',
    icon: Palette,
    desc: 'We design interfaces that are not only visually appealing but also intuitive and conversion-focused, providing users with a smooth and delightful user experience.'
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    category: 'AI & Automation',
    icon: Cpu,
    desc: 'Predictive intelligence and automation that puts your business years ahead. Unlock insights and build smarter applications.'
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    category: 'Mobile Engineering',
    icon: Smartphone,
    desc: 'Native iOS, Android, and Cross-Platform (Flutter) apps designed for high performance and user retention.'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    category: 'E-Commerce',
    icon: ShoppingCart,
    desc: 'Custom Shopify, WooCommerce, and Headless stores built to maximize conversions and sales.'
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Migration',
    category: 'Cloud Strategy',
    icon: CloudLightning,
    desc: 'Zero-downtime migration to AWS, Azure, or GCP. Optimize costs and improve scalability.'
  },
  {
    id: 'api-integration',
    title: 'API Integration',
    category: 'System Integration',
    icon: Link,
    desc: 'Connect your disparate systems (CRM, ERP, Payment Gateways) with secure, custom API bridges.'
  },
  {
    id: 'data-bi',
    title: 'Data Analytics & BI',
    category: 'Business Intelligence',
    icon: BarChart2,
    desc: 'Turn raw data into actionable insights with Power BI, Tableau, and custom predictive models.'
  }
];

export default function Services3D() {
  const [activeId, setActiveId] = useState(fullServicesList[0].id);
  const [modalArticle, setModalArticle] = useState(null);

  return (
    <section id="services" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="badge-glow" style={{ marginBottom: '16px' }}>
            <span>Full-Service Expertise</span>
          </div>
          <h2 className="section-title">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle">
            At Blueidealteck, we offer a complete suite of technology services to help your business thrive in the digital era. Whether you're launching a new product, scaling operations, or modernizing legacy systems — we have the expertise to make it happen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid-responsive-3" style={{ marginBottom: '40px' }}>
          {fullServicesList.map(service => {
            const Icon = service.icon;
            const isActive = service.id === activeId;
            return (
              <div 
                key={service.id}
                onClick={() => setActiveId(service.id)}
                className="glass-panel"
                style={{
                  padding: '24px',
                  cursor: 'pointer',
                  borderColor: isActive ? '#00A3FF' : 'rgba(56, 189, 248, 0.25)',
                  boxShadow: isActive ? '0 10px 30px rgba(0, 163, 255, 0.2)' : 'none',
                  background: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.85)',
                  transform: isActive ? 'translateY(-4px)' : 'none',
                  transition: 'var(--transition-smooth)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
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
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    marginBottom: '10px',
                    color: isActive ? '#0F172A' : '#334155'
                  }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {service.desc}
                  </p>
                </div>

                <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(56, 189, 248, 0.2)' }}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalArticle(service);
                    }}
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
        isOpen={!!modalArticle}
        onClose={() => setModalArticle(null)}
        article={modalArticle}
      />
    </section>
  );
}
