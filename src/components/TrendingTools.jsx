import React from 'react';
import { 
  Globe, Code, Server, Cloud, Cpu, Box, Terminal, Database, 
  Smartphone, Shield, Flame, Activity, Layers, PenTool, Zap, 
  CheckCircle2, Sparkles, Workflow, Monitor, FileCode 
} from 'lucide-react';

export const expanded48Tools = [
  // Frontend
  { name: 'React.js', subtitle: 'Frontend Powerhouse', category: 'Frontend', icon: Globe },
  { name: 'Next.js', subtitle: 'SSR & Static React', category: 'Frontend', icon: Code },
  { name: 'Vue.js', subtitle: 'Progressive JS Framework', category: 'Frontend', icon: Code },
  { name: 'Angular', subtitle: 'Enterprise Web Platform', category: 'Frontend', icon: Code },
  { name: 'TypeScript', subtitle: 'Typed JavaScript Engine', category: 'Frontend', icon: FileCode },
  { name: 'Tailwind CSS', subtitle: 'Utility-First Styling', category: 'Frontend', icon: PenTool },
  { name: 'Svelte', subtitle: 'Compiler Frontend Engine', category: 'Frontend', icon: Globe },
  { name: 'Three.js / WebGL', subtitle: '3D Interactive Canvas', category: 'Frontend', icon: Box },

  // Backend & APIs
  { name: 'Node.js', subtitle: 'Event-Driven Runtime', category: 'Backend', icon: Server },
  { name: 'Express.js', subtitle: 'Microservices Framework', category: 'Backend', icon: Server },
  { name: 'NestJS', subtitle: 'Scalable Node.js Server', category: 'Backend', icon: Layers },
  { name: 'Python', subtitle: 'AI & Data Engineering', category: 'Backend', icon: Terminal },
  { name: 'Django', subtitle: 'High-Level Python Web', category: 'Backend', icon: Terminal },
  { name: 'FastAPI', subtitle: 'Async High-Speed API', category: 'Backend', icon: Zap },
  { name: 'Java', subtitle: 'Enterprise Banking Core', category: 'Backend', icon: Server },
  { name: 'Spring Boot', subtitle: 'Java Microservices', category: 'Backend', icon: Layers },
  { name: '.NET Core', subtitle: 'Cross-Platform Enterprise', category: 'Backend', icon: Layers },
  { name: 'Go (Golang)', subtitle: 'High-Throughput Systems', category: 'Backend', icon: Zap },
  { name: 'GraphQL', subtitle: 'Typed Query Language', category: 'Backend', icon: Cpu },
  { name: 'gRPC', subtitle: 'Low-Latency RPC Protocol', category: 'Backend', icon: Cpu },

  // Cloud & DevOps
  { name: 'AWS', subtitle: 'Cloud Infrastructure', category: 'Cloud & DevOps', icon: Cloud },
  { name: 'Azure', subtitle: 'Microsoft Enterprise Cloud', category: 'Cloud & DevOps', icon: Cloud },
  { name: 'GCP', subtitle: 'Google Cloud Platform', category: 'Cloud & DevOps', icon: Cloud },
  { name: 'Docker', subtitle: 'Container Virtualization', category: 'Cloud & DevOps', icon: Box },
  { name: 'Kubernetes', subtitle: 'Cluster Orchestration', category: 'Cloud & DevOps', icon: Box },
  { name: 'Terraform', subtitle: 'Infrastructure as Code', category: 'Cloud & DevOps', icon: Shield },
  { name: 'Jenkins', subtitle: 'CI/CD Build Automation', category: 'Cloud & DevOps', icon: Flame },
  { name: 'GitHub Actions', subtitle: 'Automated Workflows', category: 'Cloud & DevOps', icon: Zap },
  { name: 'Ansible', subtitle: 'Configuration Management', category: 'Cloud & DevOps', icon: Shield },
  { name: 'Cloud Migration Tools', subtitle: 'Zero-Downtime Migration', category: 'Cloud & DevOps', icon: Cloud },

  // Databases & Data
  { name: 'PostgreSQL', subtitle: 'ACID Relational Core', category: 'Databases', icon: Database },
  { name: 'MongoDB', subtitle: 'Document NoSQL Database', category: 'Databases', icon: Database },
  { name: 'Redis', subtitle: 'In-Memory Cache & Queue', category: 'Databases', icon: Flame },
  { name: 'MySQL', subtitle: 'Scalable Relational DB', category: 'Databases', icon: Database },
  { name: 'Apache Kafka', subtitle: 'Event Stream Processing', category: 'Databases', icon: Workflow },
  { name: 'BigQuery', subtitle: 'Serverless Data Warehouse', category: 'Databases', icon: Database },

  // AI & Machine Learning
  { name: 'TensorFlow', subtitle: 'Deep Neural Networks', category: 'AI & ML', icon: Cpu },
  { name: 'PyTorch', subtitle: 'AI Research & NLP', category: 'AI & ML', icon: Cpu },
  { name: 'OpenAI API & GenAI', subtitle: 'LLM & Intelligent Bots', category: 'AI & ML', icon: Sparkles },
  { name: 'LangChain', subtitle: 'LLM Orchestration', category: 'AI & ML', icon: Sparkles },

  // Mobile Engineering
  { name: 'Flutter', subtitle: 'Google UI Toolkit', category: 'Mobile', icon: Smartphone },
  { name: 'React Native', subtitle: 'Cross-Platform React', category: 'Mobile', icon: Smartphone },
  { name: 'Swift (iOS)', subtitle: 'Native Apple Development', category: 'Mobile', icon: Smartphone },
  { name: 'Kotlin (Android)', subtitle: 'Native Android Development', category: 'Mobile', icon: Smartphone },

  // Design & Prototyping
  { name: 'Figma', subtitle: 'UI/UX Design Platform', category: 'Design', icon: PenTool },
  { name: 'Adobe XD', subtitle: 'Interactive Prototyping', category: 'Design', icon: PenTool },
  { name: 'Storybook', subtitle: 'Component UI Workshop', category: 'Design', icon: PenTool },

  // QA, Testing & Monitoring
  { name: 'Selenium', subtitle: 'Cross-Browser Automation', category: 'QA & Testing', icon: CheckCircle2 },
  { name: 'Jest', subtitle: 'JS Unit & Integration', category: 'QA & Testing', icon: Code },
  { name: 'Cypress', subtitle: 'E2E Web App Testing', category: 'QA & Testing', icon: CheckCircle2 },
  { name: 'Prometheus', subtitle: 'Real-Time Server Metrics', category: 'Monitoring', icon: Activity },
  { name: 'Grafana', subtitle: 'Telemetry Dashboards', category: 'Monitoring', icon: Activity },

  // Automation & Workflows
  { name: 'n8n', subtitle: 'Fair-Code Automation', category: 'Automation', icon: Zap },
  { name: 'Zapier', subtitle: '5,000+ Cloud Integrations', category: 'Automation', icon: Zap },
  { name: 'Make', subtitle: 'Visual Workflow Builder', category: 'Automation', icon: Layers }
];

export default function TrendingTools() {
  return (
    <section id="trending-tools" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="badge-glow" style={{ marginBottom: '16px' }}>
            <Cpu size={14} color="#00A3FF" />
            <span>Complete Engineering Ecosystem</span>
          </div>
          <h2 className="section-title">
            Trending Tools <span className="gradient-text">& Tech Catalog</span>
          </h2>
          <p className="section-subtitle">
            The comprehensive stack powering modern enterprises. We leverage 50+ battle-tested frameworks, databases, cloud tools, and AI automation engines.
          </p>
        </div>

        {/* 48+ Tools Responsive Grid */}
        <div className="grid-responsive-4" style={{ gap: '18px' }}>
          {expanded48Tools.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '18px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  transition: 'var(--transition-smooth)'
                }}
              >
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
                  <Icon size={22} color="#0284C7" />
                </div>
                <div>
                  <h4 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    fontWeight: 800,
                    color: '#0F172A',
                    marginBottom: '2px'
                  }}>
                    {tool.name}
                  </h4>
                  <div style={{ fontSize: '0.78rem', color: '#0284C7', fontWeight: 600 }}>
                    {tool.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
