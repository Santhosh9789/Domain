import React, { useState } from 'react';
import { Newspaper, Search, ArrowRight, Calendar, User, Sparkles, ArrowLeft, Home } from 'lucide-react';
import ArticleModal from './ArticleModal';
import TrendingTools from './TrendingTools';

const all15BlogArticles = [
  {
    id: 1,
    title: 'Top AI Innovations Transforming Businesses in 2026',
    category: 'Artificial Intelligence',
    date: 'July 2026',
    author: 'AI Engineering Lead',
    desc: 'Explore the top artificial intelligence innovations defining 2026. From generative models to predictive analytics, learn how enterprises leverage custom LLMs to 10x operational efficiency.'
  },
  {
    id: 2,
    title: 'Cloud Cost Optimization: Maximize Your AWS/Azure ROI',
    category: 'Cloud & DevOps',
    date: 'July 2026',
    author: 'Cloud Solutions Architect',
    desc: 'Stop overpaying for cloud infrastructure. Learn actionable strategies to optimize your AWS and Azure costs securely, right-sizing workloads and eliminating idle resources.'
  },
  {
    id: 3,
    title: 'Why CI/CD DevOps Automation is Crucial in 2026',
    category: 'DevOps & CI/CD',
    date: 'June 2026',
    author: 'DevOps Lead Engineer',
    desc: 'Discover why Continuous Integration and Continuous Deployment (CI/CD) pipelines are essential for agile software development, enabling zero-downtime releases.'
  },
  {
    id: 4,
    title: 'Monolith vs Microservices: Choosing Your Architecture',
    category: 'Architecture',
    date: 'June 2026',
    author: 'Principal Systems Architect',
    desc: 'Struggling to scale your legacy application? Learn the structural differences between Monolith and Microservices architectures and when to execute a decomposition strategy.'
  },
  {
    id: 5,
    title: 'Top 5 Custom Software Trends in 2026',
    category: 'Custom Software',
    date: 'June 2026',
    author: 'Software Engineering Director',
    desc: 'From AI-First Engineering to Green Computing, discover the 5 critical trends defining the future of digital transformation and enterprise software agility.'
  },
  {
    id: 6,
    title: 'React vs Vue vs Angular: 2026 Comparison',
    category: 'Frontend Development',
    date: 'May 2026',
    author: 'Frontend Engineering Specialist',
    desc: 'The battle of the frontend frameworks continues. Which one offers the best performance, server-side rendering, and scalability for your next enterprise application?'
  },
  {
    id: 7,
    title: '5 Strategies for Seamless Cloud Migration',
    category: 'Cloud Migration',
    date: 'May 2026',
    author: 'Cloud Migration Consultant',
    desc: 'Move to AWS or Azure without downtime. Learn the "Rehost, Replatform, Refactor" strategies used by top global enterprises to minimize disruption.'
  },
  {
    id: 8,
    title: 'Why Your Business Needs a Native Mobile App',
    category: 'Mobile Apps',
    date: 'May 2026',
    author: 'Mobile Development Lead',
    desc: 'Boost customer retention and sales with a dedicated iOS and Android app. Unlock the power of push notifications, offline access, and native device performance.'
  },
  {
    id: 9,
    title: 'How AI Chatbots Are Revolutionizing Customer Service',
    category: 'AI & Automation',
    date: 'April 2026',
    author: 'Conversational AI Specialist',
    desc: 'Automate 70% of support queries and provide 24/7 instant responses with custom AI-powered chatbots built by our dedicated AI solutions team.'
  },
  {
    id: 10,
    title: 'The Importance of UI/UX Design in Modern App Development',
    category: 'UI/UX Design',
    date: 'April 2026',
    author: 'Head of UI/UX Design',
    desc: 'Great code fails with bad design. Learn how superior UI/UX drives user retention, reduces friction, and dramatically increases conversion rates.'
  },
  {
    id: 11,
    title: 'Cybersecurity Essentials for Small Businesses in 2026',
    category: 'Cybersecurity',
    date: 'March 2026',
    author: 'Cybersecurity Specialist',
    desc: '43% of cyberattacks target small businesses. Discover the essential cybersecurity steps to protect your data and reputation with enterprise-grade Zero Trust measures.'
  },
  {
    id: 12,
    title: 'Digital Marketing vs Traditional Marketing: What Works Best?',
    category: 'Digital Strategy',
    date: 'March 2026',
    author: 'Growth & Strategy Consultant',
    desc: 'Stop wasting money on billboards. Learn why Digital Marketing offers superior targeting, real-time ROI tracking, and deeper engagement for modern B2B businesses.'
  },
  {
    id: 13,
    title: 'Why AI is the Future of Business Scaling',
    category: 'Artificial Intelligence',
    date: 'February 2026',
    author: 'Enterprise AI Consultant',
    desc: "Artificial Intelligence isn't just a buzzword; it's the engine of modern growth. Discover how automated workflows and predictive analytics can 10x your team efficiency."
  },
  {
    id: 14,
    title: 'The Strategic Advantage of Cloud Migration',
    category: 'Cloud Migration',
    date: 'January 2026',
    author: 'Cloud Infrastructure Lead',
    desc: 'Moving legacy systems to the cloud reduces operational overhead and improves security posture. Learn the top strategies for a seamless transition to AWS or Azure.'
  },
  {
    id: 15,
    title: 'Top Custom Software Trends for 2025',
    category: 'Custom Software',
    date: 'December 2025',
    author: 'Tech Research Team',
    desc: 'From low-code platforms to microservices architecture, stay ahead of the curve with these critical software development trends dominating the industry.'
  }
];

export default function BlogPage({ onNavigateHome }) {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Artificial Intelligence', 'Cloud & DevOps', 'Architecture', 'Custom Software', 'Frontend Development', 'Mobile Apps', 'Cybersecurity'];

  const filteredArticles = all15BlogArticles.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) || art.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ paddingTop: '100px', position: 'relative' }}>
      {/* Blog Page Banner */}
      <section style={{
        padding: '60px 24px 40px 24px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #E0F2FE 0%, #F0F9FF 100%)',
        borderBottom: '1px solid rgba(56, 189, 248, 0.2)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Back to Home Button */}
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
            <Newspaper size={14} color="#00A3FF" />
            <span>Dedicated Knowledge Portal</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)',
            fontWeight: 900,
            color: '#0F172A',
            marginBottom: '16px'
          }}>
            Blueidealteck <span className="gradient-text">Blog & Insights</span>
          </h1>

          <p style={{
            color: 'var(--text-muted)',
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto 32px auto',
            lineHeight: 1.6
          }}>
            Expert perspectives on Technology, AI, Cloud Infrastructure, and Digital Transformation. Empowering businesses with actionable insights.
          </p>

          {/* Search Box */}
          <div style={{ maxWidth: '560px', margin: '0 auto', position: 'relative' }}>
            <Search size={20} color="#0284C7" style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search 15+ engineering articles, AI trends, cloud guides..."
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
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '24px',
                border: selectedCategory === cat ? '1px solid #00A3FF' : '1px solid rgba(56, 189, 248, 0.25)',
                background: selectedCategory === cat ? '#00A3FF' : '#FFFFFF',
                color: selectedCategory === cat ? '#FFFFFF' : '#334155',
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

        {/* 15 Articles Grid */}
        <div className="grid-responsive-3" style={{ gap: '28px', marginBottom: '60px' }}>
          {filteredArticles.map(article => (
            <div 
              key={article.id}
              className="glass-panel" 
              style={{
                padding: '28px',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(56, 189, 248, 0.25)'
              }}
            >
              <div>
                <div style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  background: '#E0F2FE',
                  color: '#0284C7',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  marginBottom: '14px'
                }}>
                  {article.category}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  marginBottom: '12px',
                  color: '#0F172A',
                  lineHeight: 1.4
                }}>
                  {article.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {article.desc}
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '16px',
                borderTop: '1px solid rgba(56, 189, 248, 0.2)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                  <Calendar size={14} color="#0284C7" />
                  <span>{article.date}</span>
                </div>

                <button
                  onClick={() => setSelectedArticle(article)}
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
          ))}
        </div>

        {/* Trending Tools Catalog inside Blog Page */}
        <TrendingTools />
      </div>

      {/* Article Detail Modal */}
      <ArticleModal
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
        article={selectedArticle}
      />
    </div>
  );
}
