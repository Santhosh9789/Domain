import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, ArrowRight, CheckCircle2 } from 'lucide-react';

const presetBotAnswers = {
  services: "Blueidealteck provides 10 full-suite enterprise services: Custom Software Development, DevOps & Cloud Services, Web Application Development, UI/UX Design, AI & Machine Learning, Mobile App Development, E-commerce, Cloud Migration, API Integration, and Data Analytics.",
  audit: "You can request a Free Infrastructure & Architecture Audit right on our homepage or by emailing info@blueidealteck.com. Our senior technical leads will send a complete blueprint within 24 hours!",
  tech: "We leverage 50+ battle-tested technologies including React, Next.js, Node.js, Python, AWS, Azure, Docker, Kubernetes, Flutter, PostgreSQL, MongoDB, and OpenAI API.",
  contact: "You can reach out directly via email at info@blueidealteck.com or call our engineering office at +91 9789836077. Registered Address: SF/NO.139/1, ANNA NAGAR, MANGALAMPET, Cuddalore, TN 606104.",
  cost: "Custom software development projects are tailored to your exact business requirements. We offer 100% IP ownership, transparent milestone pricing, and zero recurring vendor license fees!"
};

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! I am Blueidealteck AI Assistant. How can I help you scale your software, cloud, or AI architecture today?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  useEffect(() => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    // Add User Message
    const userMsg = { sender: 'user', text: query };
    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputValue('');

    // Trigger AI Typing Indicator
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "Thank you for reaching out! Our senior engineering team is ready to assist you. Please send your detailed project requirement directly to info@blueidealteck.com or call +91 9789836077.";
      
      const lower = query.toLowerCase();
      if (lower.includes('service') || lower.includes('what do you do') || lower.includes('build')) {
        botResponse = presetBotAnswers.services;
      } else if (lower.includes('audit') || lower.includes('free') || lower.includes('review')) {
        botResponse = presetBotAnswers.audit;
      } else if (lower.includes('tech') || lower.includes('stack') || lower.includes('tool') || lower.includes('language')) {
        botResponse = presetBotAnswers.tech;
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('address')) {
        botResponse = presetBotAnswers.contact;
      } else if (lower.includes('cost') || lower.includes('price') || lower.includes('quote') || lower.includes('rate')) {
        botResponse = presetBotAnswers.cost;
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0284C7 0%, #00A3FF 100%)',
            border: '2px solid #FFFFFF',
            color: '#FFFFFF',
            boxShadow: '0 10px 30px rgba(0, 163, 255, 0.4)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            position: 'relative'
          }}
        >
          <Bot size={28} />
          {/* Notification Glow Dot */}
          <span style={{
            position: 'absolute',
            top: '4px',
            right: '4px',
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            background: '#22C55E',
            border: '2px solid #FFFFFF'
          }} />
        </button>
      )}

      {/* AI Chatbot Window Drawer */}
      {isOpen && (
        <div style={{
          width: '360px',
          maxHeight: '520px',
          height: '80vh',
          background: '#FFFFFF',
          borderRadius: '20px',
          boxShadow: '0 20px 50px rgba(2, 132, 199, 0.25)',
          border: '1px solid rgba(0, 163, 255, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'fadeInUp 0.3s ease'
        }}>
          {/* Chat Header */}
          <div style={{
            padding: '16px 20px',
            background: 'linear-gradient(135deg, #0284C7 0%, #00A3FF 100%)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Bot size={22} color="#FFF" />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1rem' }}>
                  Blueidealteck AI
                </div>
                <div style={{ fontSize: '0.72rem', opacity: 0.9, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E' }} />
                  <span>Online 24/7</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: '#FFFFFF',
                cursor: 'pointer',
                padding: '4px'
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Quick Option Chips */}
          <div style={{
            padding: '10px 14px',
            background: '#F0F9FF',
            borderBottom: '1px solid rgba(56, 189, 248, 0.2)',
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            whiteSpace: 'nowrap'
          }}>
            <button onClick={() => handleSend('What services do you offer?')} className="chat-chip">Services</button>
            <button onClick={() => handleSend('How to get a free audit?')} className="chat-chip">Free Audit</button>
            <button onClick={() => handleSend('What tech stack do you use?')} className="chat-chip">Tech Stack</button>
            <button onClick={() => handleSend('How to contact sales?')} className="chat-chip">Contact Us</button>
          </div>

          {/* Messages Body */}
          <div style={{
            flex: 1,
            padding: '16px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            background: '#F8FAFC'
          }}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  gap: '8px'
                }}
              >
                {msg.sender === 'bot' && (
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: '#00A3FF',
                    color: '#FFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    flexShrink: 0
                  }}>
                    AI
                  </div>
                )}
                <div style={{
                  maxWidth: '78%',
                  padding: '10px 14px',
                  borderRadius: msg.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                  background: msg.sender === 'user' ? '#00A3FF' : '#FFFFFF',
                  color: msg.sender === 'user' ? '#FFFFFF' : '#0F172A',
                  fontSize: '0.86rem',
                  lineHeight: 1.5,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                  border: msg.sender === 'bot' ? '1px solid rgba(56, 189, 248, 0.2)' : 'none'
                }}>
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#0284C7', fontSize: '0.8rem', fontWeight: 600 }}>
                <span>AI is typing...</span>
              </div>
            )}
            <div ref={chatBottomRef} />
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            style={{
              padding: '12px 16px',
              background: '#FFFFFF',
              borderTop: '1px solid rgba(56, 189, 248, 0.2)',
              display: 'flex',
              gap: '8px',
              alignItems: 'center'
            }}
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask AI anything..."
              style={{
                flex: 1,
                padding: '10px 14px',
                borderRadius: '20px',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                fontSize: '0.86rem',
                outline: 'none',
                color: '#0F172A'
              }}
            />
            <button
              type="submit"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#00A3FF',
                color: '#FFFFFF',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <style>{`
        .chat-chip {
          padding: 4px 10px;
          border-radius: 12px;
          background: #FFFFFF;
          border: 1px solid rgba(0, 163, 255, 0.3);
          color: #0284C7;
          font-size: 0.75rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .chat-chip:hover {
          background: #00A3FF;
          color: #FFFFFF;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
