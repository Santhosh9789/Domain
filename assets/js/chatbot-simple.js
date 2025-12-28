/**
 * BLUEIDEALTECK - INTELLIGENT CONTEXT-AWARE CHATBOT
 * Dynamic RAG (Retrieval-Augmented Generation) running 100% in the browser.
 * It reads the DOM, chunks it by section, and uses keyword vector scoring to answer.
 */

class BlueidealteckChatbot {
  constructor() {
    this.userInfo = {
      country: 'IN',
      currency: 'INR',
      email: null,
      phone: null
    };
    this.conversationHistory = [];
    this.knowledgeBase = []; // Array of { section, content, keywords }
    this.isOpen = false;
    this.init();
  }

  async init() {
    await this.detectRegion();
    // Wait for DOM to be fully ready ensuring all dynamic content is loaded
    if (document.readyState === 'complete') {
      this.analyzeWebsite();
    } else {
      window.addEventListener('load', () => this.analyzeWebsite());
    }
    this.createChatbot();
    this.attachEvents();
  }

  async detectRegion() {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      this.userInfo.country = data.country_code;
      
      if (data.country_code === 'IN') {
        this.userInfo.currency = 'INR';
      } else if (['GB', 'DE', 'FR', 'IT', 'ES'].includes(data.country_code)) {
        this.userInfo.currency = 'EUR';
      } else {
        this.userInfo.currency = 'USD';
      }
    } catch (error) {
      this.userInfo.currency = 'INR';
    }
  }

  /**
   * CORE INTELLIGENCE: SEMANTIC CHUNKING
   * Scrapes the page and divides it into logical "Knowledge Chunks".
   */
  analyzeWebsite() {
    console.log('🧠 Neuromind: Indexing page content...');
    this.knowledgeBase = [];
    
    // 0. Global Context (Meta Description & Title)
    const metaDesc = document.querySelector('meta[name="description"]')?.content || "";
    const pageTitle = document.title || "";
    this.addChunk("Overview", `${pageTitle}. ${metaDesc}`);

    // 1. Chunk by Sections (H1-H6 as delimiters)
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, {
      acceptNode: function(node) {
        // Skip hidden/technical elements
        if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'IFRAME', 'SVG', 'PATH'].includes(node.tagName)) return NodeFilter.FILTER_REJECT;
        if (node.id === 'chat-window' || node.closest('.chat-window') || node.closest('.mobile-nav-toggle')) return NodeFilter.FILTER_REJECT;
        if (!getUserVisibility(node)) return NodeFilter.FILTER_REJECT;
        
        // Accepted text headers and containers
        if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(node.tagName)) return NodeFilter.FILTER_ACCEPT;
        // Text blocks
        if (['P', 'LI', 'TD', 'SPAN', 'DIV'].includes(node.tagName)) {
             // Only accept if it has direct text content (not just a container of other elements)
             if (node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE && node.textContent.trim().length > 10) {
                 return NodeFilter.FILTER_ACCEPT;
             }
        }
        return NodeFilter.FILTER_SKIP;
      }
    });

    let currentSection = "General Information";
    let currentContent = "";
    
    while(walker.nextNode()) {
      const node = walker.currentNode;
      const text = node.textContent.replace(/\s+/g, ' ').trim();
      
      if (!text || text.length < 5) continue;

      if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(node.tagName)) {
        // Save previous
        if (currentContent.length > 50) {
          this.addChunk(currentSection, currentContent);
        }
        currentSection = text;
        currentContent = "";
      } else {
        currentContent += text + " ";
      }
    }
    // Final chunk
    if (currentContent.length > 30) {
      this.addChunk(currentSection, currentContent);
    }

    // 2. Specific Metadata Extraction
    this.indexMetadata();

    console.log(`✅ Indexing Complete: ${this.knowledgeBase.length} chunks.`);
  }

  addChunk(section, content) {
    // Normalize
    content = content.replace(/\s+/g, ' ').trim();
    if(this.knowledgeBase.some(c => c.content === content)) return; // Avoid exact dupes

    this.knowledgeBase.push({
      section: section,
      content: content,
      raw: (section + " " + content).toLowerCase()
    });
  }

  indexMetadata() {
    // Hard-coded crucial info that might be missed by walker
    const services = document.querySelectorAll('.service-item h5, .service-item .title, .service-single-main-wrapper-five .title');
    services.forEach(s => {
        const desc = s.closest('div')?.querySelector('p')?.textContent || "";
        this.addChunk("Service: " + s.textContent, desc);
    });
    
    const contact = document.querySelector('#contact');
    if(contact) this.addChunk("Contact Us", contact.innerText);
  }

  /**
   * UI CREATION
   */
  createChatbot() {
    // 1. Create Floating Button
    // HARD GUARD: Do not render on mobile/tablet (< 992px)
    if (window.innerWidth < 992) return;

    const btn = document.createElement('div');
    btn.className = 'chat-btn';
    // Use the new image
    btn.innerHTML = '<img src="/assets/img/bot-logo.jpg" alt="AI" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">'; 
    btn.title = 'Chat with Blueidealteck AI';
    document.body.appendChild(btn);

    // 2. Create Chat Window
    const win = document.createElement('div');
    win.className = 'chat-window';
    // Add data-lenis-prevent to the scrollable container to stop Lenis from hijacking scroll
    win.innerHTML = `
      <div class="chat-header">
        <div class="chat-header-left">
          <h3>Blueidealteck AI</h3>
          <div class="chat-status"><span style="color:#00ff88">●</span> Online</div>
        </div>
        <button id="chat-close">×</button>
      </div>
      <div class="chat-body" id="chat-body" data-lenis-prevent>
        <div class="chat-msg">
          <div class="msg-avatar">
            <img src="/assets/img/bot-logo.jpg" alt="Bot" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">
          </div>
          <div class="msg-content">
            <p>Hello! I'm your AI assistant. I can answer questions about our <strong>services</strong>, <strong>pricing</strong>, and <strong>technology</strong>. How can I help you today?</p>
            <div class="quick-btns">
               <button class="quick-btn">Services?</button>
               <button class="quick-btn">Pricing?</button>
               <button class="quick-btn">Contact Sales</button>
            </div>
          </div>
        </div>
      </div>
      <div class="chat-input-box">
        <input type="text" id="chat-input" placeholder="Ask me anything..." autocomplete="off">
        <button id="chat-send">➤</button>
      </div>
    `;
    document.body.appendChild(win);

    this.ui = {
      btn: btn,
      window: win,
      body: win.querySelector('#chat-body'),
      input: win.querySelector('#chat-input'),
      send: win.querySelector('#chat-send'),
      close: win.querySelector('#chat-close')
    };

    // FIX SCROLLING: Stop propagation of scroll events to preventing parent scrolling
    this.ui.body.addEventListener('wheel', (e) => {
      e.stopPropagation(); 
    }, { passive: false });
    
    this.ui.body.addEventListener('touchmove', (e) => {
       e.stopPropagation();
    }, { passive: false });

    // 3. Mobile/Tablet Visibility Handler (Dynamic Resize)
    this.handleResize();
    window.addEventListener('resize', () => this.handleResize());
  }

  handleResize() {
     if (window.innerWidth < 992) {
         // Force Hide
         this.ui.btn.style.setProperty('display', 'none', 'important');
         this.ui.window.style.setProperty('display', 'none', 'important');
         this.ui.window.classList.remove('open'); // Close if open
         this.isOpen = false;
     } else {
         // Show (restore default display)
         this.ui.btn.style.display = 'flex';
         // Window stays closed unless it was open, but for now just hide/show btn
         if (!this.isOpen) {
             this.ui.window.style.display = 'none';
         } else {
            this.ui.window.style.display = 'flex';
         }
     }
  }

  attachEvents() {
    // Toggle Window
    const toggle = () => {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.ui.window.classList.add('open');
        this.ui.input.focus();
      } else {
        this.ui.window.classList.remove('open');
      }
    };

    this.ui.btn.addEventListener('click', toggle);
    this.ui.close.addEventListener('click', toggle);

    // Send Message
    const sendMessage = async () => {
      const text = this.ui.input.value.trim();
      if (!text) return;

      this.appendMessage('user', text);
      this.ui.input.value = '';
      
      this.showTyping();
      
      // Simulate think time
      setTimeout(() => {
        this.hideTyping();
        const response = this.generateResponse(text);
        this.appendMessage('bot', response);
      }, 600 + Math.random() * 800);
    };

    this.ui.send.addEventListener('click', sendMessage);
    this.ui.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });

    // Quick Buttons
    this.ui.body.addEventListener('click', (e) => {
      if (e.target.classList.contains('quick-btn')) {
        this.ui.input.value = e.target.textContent;
        sendMessage();
      }
    });
  }

  appendMessage(sender, text) {
    const div = document.createElement('div');
    div.className = `chat-msg ${sender}`;
    // Use proper avatar for bot
    const avatarHTML = sender === 'user' 
        ? '👤' 
        : '<img src="/assets/img/bot-logo.jpg" alt="Bot" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">';
        
    div.innerHTML = `
      <div class="msg-avatar">${avatarHTML}</div>
      <div class="msg-content"><p>${this.formatText(text)}</p></div>
    `;
    this.ui.body.appendChild(div);
    this.ui.body.scrollTop = this.ui.body.scrollHeight;
  }

  showTyping() {
    const div = document.createElement('div');
    div.className = 'chat-msg bot typing';
    div.id = 'typing-indicator';
    div.innerHTML = `
      <div class="msg-avatar">
        <img src="/assets/img/bot-logo.jpg" alt="Bot" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">
      </div>
      <div class="msg-content" style="padding: 12px 16px;">
        <div class="typing-indicator">
          <span></span><span></span><span></span>
        </div>
      </div>
    `;
    this.ui.body.appendChild(div);
    this.ui.body.scrollTop = this.ui.body.scrollHeight;
  }

  hideTyping() {
    const el = document.getElementById('typing-indicator');
    if (el) el.remove();
  }

  formatText(text) {
    // Basic Markdown support
    return text
      .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
      .replace(/\n/g, '<br>');
  }

  /**
   * BRAIN: Similarity Scoring v2 (Substring Search)
   */
  generateResponse(query) {
    const q = query.toLowerCase().trim();
    
    // 1. Direct Intents
    if (q.match(/price|cost|rate/)) return this.getPricing();
    if (q.match(/hello|hi |hey/)) return "Hello! I can explain anything on this page. Try asking about 'Services', 'Process', or specific technologies.";
    if (q.match(/contact|mail|phone|reach/)) return this.getContactInfo();

    // 2. Search Intelligence
    // Break query into significant terms
    const terms = q.split(/\s+/).filter(w => w.length > 2 && !['what', 'how', 'who', 'the', 'and', 'for', 'are', 'you', 'can', 'please'].includes(w));
    
    if (terms.length === 0) return "I'm not sure what you mean. Could you ask about our services, pricing, or stack?";

    let bestChunk = null;
    let maxScore = 0;

    this.knowledgeBase.forEach(chunk => {
      let score = 0;
      const sectionMatch = chunk.section.toLowerCase();
      const contentMatch = chunk.raw;
      
      terms.forEach(term => {
         // Header match is very important (5x)
         if (sectionMatch.includes(term)) score += 15;
         // Content match (1x)
         const regex = new RegExp(term, 'g');
         const matches = (contentMatch.match(regex) || []).length;
         score += matches; 
      });

      if (score > maxScore) {
        maxScore = score;
        bestChunk = chunk;
      }
    });

    // Threshold logic
    if (maxScore > 1) { // At least some relevance found
       return `**Regarding ${bestChunk.section}:**\n${this.truncate(bestChunk.content, 300)}`;
    }

    // 3. Last Resort: Fuzzy Match of entire query
    const fallbackChunk = this.knowledgeBase.find(c => c.raw.includes(q.substring(0, 5))); // Weak match
    if(fallbackChunk) {
        return `I found this reference in **${fallbackChunk.section}**: \n\n"...${this.truncate(fallbackChunk.content, 150)}..."`; 
    }

    return "I'm reading the page, but I couldn't find a direct answer to that. Try using keywords like 'Services', 'Stack', or 'About'.";
  }

  truncate(str, n){
    return (str.length > n) ? str.substr(0, n-1) + '...' : str;
  }

  getPricing() {
    const symbol = this.userInfo.currency === 'INR' ? '₹' : this.userInfo.currency === 'EUR' ? '€' : '$';
    const rate = this.userInfo.currency === 'INR' ? '1,00,000' : '1,500';
    return `Based on your location, our pricing starts at approx **${symbol}${rate}** for basic projects. \n\nWe offer:\n• Hourly Hiring\n• Fixed Cost Projects\n• Dedicated Teams\n\nContact us for a precise quote!`;
  }

  getContactInfo() {
      // Find dynamic contact info if possible
      const email = this.knowledgeBase.find(c => c.content.includes('@'))?.content.match(/[\w.-]+@[\w.-]+\.\w+/)?.[0] || 'info@blueidealteck.com';
      return `You can reach us at **${email}** or call us directly. Check the Contact section below!`;
  }
}

// Simple Helper for Visibility
function getUserVisibility(node) {
    // Basic check if element is visible
    return node.offsetWidth > 0 && node.offsetHeight > 0;
}

// Initialize - DEFERRED FOR PERFORMANCE
// Wait until the main thread is idle so we don't block page load
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    new BlueidealteckChatbot();
  }, { timeout: 5000 });
} else {
  // Fallback for Safari/Older browsers
  setTimeout(() => {
    new BlueidealteckChatbot();
  }, 2000);
}
