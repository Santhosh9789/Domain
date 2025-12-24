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
    this.init();
  }

  async init() {
    await this.detectRegion();
    // Wait for DOM to be fully ready ensuring all dynamic content (like seasonal effects) is loaded
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
   * Scrapes the page and divides it into logical "Knowledge Chunks" based on headings.
   */
  analyzeWebsite() {
    console.log('🧠 Neuromind: Indexing page content...');
    this.knowledgeBase = [];
    
    // 1. Chunk by Sections (H1/H2/H3 as delimiters)
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, {
      acceptNode: function(node) {
        // Skip hidden elements, scripts, styles, and the chatbot itself
        if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'IFRAME'].includes(node.tagName)) return NodeFilter.FILTER_REJECT;
        if (node.id === 'chat-window' || node.classList.contains('chat-btn')) return NodeFilter.FILTER_REJECT;
        if (getUserVisibility(node) === false) return NodeFilter.FILTER_REJECT;
        
        if (['H1', 'H2', 'H3', 'H4', 'H5', 'P', 'LI', 'TD'].includes(node.tagName)) {
          return NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_SKIP;
      }
    });

    let currentSection = "General Information";
    let currentContent = "";
    
    while(walker.nextNode()) {
      const node = walker.currentNode;
      const text = node.textContent.trim();
      
      if (!text || text.length < 3) continue;

      if (['H1', 'H2', 'H3', 'H4', 'H5'].includes(node.tagName)) {
        // Save previous chunk if it has content
        if (currentContent.length > 20) {
          this.addChunk(currentSection, currentContent);
        }
        // Start new section
        currentSection = text;
        currentContent = "";
      } else {
        // Accumulate text to current section
        currentContent += text + ". ";
      }
    }
    // Add final chunk
    if (currentContent.length > 20) {
      this.addChunk(currentSection, currentContent);
    }

    // 2. Add Special Metadata (Contact, Stats)
    this.indexMetadata();

    console.log(`✅ Indexing Complete: ${this.knowledgeBase.length} knowledge chunks created.`);
  }

  addChunk(section, content) {
    // Clean text
    content = content.replace(/\s+/g, ' ').trim();
    // Keywords for vector matching (simple bag-of-words)
    const keywords = this.extractKeywords(content + " " + section);
    
    this.knowledgeBase.push({
      section: section,
      content: content,
      keywords: keywords
    });
  }

  indexMetadata() {
    // Services specific indexing
    document.querySelectorAll('.service-item, .service-single-main-wrapper-five').forEach(el => {
      const title = el.querySelector('h5, .title')?.textContent.trim();
      const desc = el.querySelector('p, .disc')?.textContent.trim();
      if(title && desc) {
        this.addChunk(title, desc + " We offer this service.");
      }
    });

    // Contact info hard-indexing
    const contactInfo = document.querySelector('#contact')?.textContent || "";
    if (contactInfo) {
      this.addChunk("Contact Information", contactInfo);
    }
  }

  extractKeywords(text) {
    return text.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(w => w.length > 3 && !['this', 'that', 'with', 'from', 'have', 'your'].includes(w));
  }

  /**
   * UI CREATION
   */
  createChatbot() {
    const html = `
      <div id="chat-btn" class="chat-btn">💬</div>
      <div id="chat-window" class="chat-window">
        <div class="chat-header">
          <div class="chat-header-left">
            <h3>Blueidealteck AI</h3>
            <span class="chat-status">● Analyzing Page...</span>
          </div>
          <button id="chat-close">×</button>
        </div>
        <div id="chat-body" class="chat-body" data-lenis-prevent>
          <div class="chat-msg bot">
            <div class="msg-avatar">🤖</div>
            <div class="msg-content">
              <p>Hello! I've read this entire page and I'm ready to help. 🧠</p>
              <p>Ask me about our services, pricing, or anything you see on the screen!</p>
              <div class="quick-btns">
                <button class="quick-btn" data-msg="What services do you offer?">Services</button>
                <button class="quick-btn" data-msg="How much does it cost?">Pricing</button>
                <button class="quick-btn" data-msg="Show me your projects">Projects</button>
                <button class="quick-btn" data-msg="How do I contact you?">Contact</button>
              </div>
            </div>
          </div>
        </div>
        <div class="chat-input-box">
          <input type="text" id="chat-input" placeholder="Ask about this page...">
          <button id="chat-send">➤</button>
        </div>
      </div>
    `;
    if(!document.getElementById('chat-window')) {
      document.body.insertAdjacentHTML('beforeend', html);
    }
    
    setTimeout(() => {
        document.querySelector('.chat-status').innerText = "● Online";
    }, 2000);
  }

  attachEvents() {
    document.getElementById('chat-btn').onclick = () => this.openChat();
    document.getElementById('chat-close').onclick = () => this.closeChat();
    document.getElementById('chat-send').onclick = () => this.sendMsg();
    document.getElementById('chat-input').onkeypress = (e) => {
      if (e.key === 'Enter') this.sendMsg();
    };
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('quick-btn')) {
        this.sendMsg(e.target.dataset.msg);
      }
    });
  }

  openChat() { document.getElementById('chat-window').classList.add('open'); }
  closeChat() { document.getElementById('chat-window').classList.remove('open'); }

  sendMsg(text = null) {
    const input = document.getElementById('chat-input');
    const msg = text || input.value.trim();
    if (!msg) return;

    this.addMsg(msg, 'user');
    input.value = '';
    this.conversationHistory.push({role: 'user', msg, time: new Date()});

    // Simulate "thinking"
    const thinkingId = this.addMsg("Analyzing...", 'bot', true);

    setTimeout(() => {
      // Remove thinking indicator
      document.getElementById(thinkingId).remove();
      
      const reply = this.generateResponse(msg);
      this.addMsg(reply, 'bot');
      this.conversationHistory.push({role: 'bot', msg: reply, time: new Date()});
    }, 800);
  }

  addMsg(text, type, isThinking=false) {
    const body = document.getElementById('chat-body');
    const div = document.createElement('div');
    const id = 'msg-' + Date.now();
    div.id = id;
    div.className = `chat-msg ${type}`;
    
    if (type === 'bot') {
       div.innerHTML = `
        <div class="msg-avatar">🤖</div>
        <div class="msg-content"><p>${isThinking ? '<span class="typing-indicator"><span></span><span></span><span></span></span>' : this.formatMsg(text)}</p></div>
      `;
    } else {
      div.innerHTML = `
        <div class="msg-content"><p>${this.formatMsg(text)}</p></div>
        <div class="msg-avatar">👤</div>
      `;
    }
    
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
    return id;
  }

  formatMsg(text) {
    return text.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
  }

  /**
   * BRAIN: Similarity Scoring
   */
  generateResponse(query) {
    const q = query.toLowerCase();
    
    // 1. Direct Intent Matching (Hardcoded common flows)
    if (q.includes('price') || q.includes('cost')) return this.getPricing();
    if (q.includes('hello') || q.includes('hi ')) return "Hello! How can I help you with our services today?";
    if (q.match(/email|phone|call|contact/)) return this.getContactInfo();

    // 2. Knowledge Base Search (Vector-like Scoring)
    const queryKeywords = this.extractKeywords(q);
    
    let bestChunk = null;
    let maxScore = 0;

    this.knowledgeBase.forEach(chunk => {
      let score = 0;
      queryKeywords.forEach(k => {
        if (chunk.keywords.includes(k)) score += 1; // Content match
        if (chunk.section.toLowerCase().includes(k)) score += 3; // Input matches Section Title (Higher weight)
      });
      
      // Normalize by length to prevent long chunks from winning just by size
      // but keep it simple for now
      if (score > maxScore) {
        maxScore = score;
        bestChunk = chunk;
      }
    });

    if (maxScore > 0) {
      return `Here is what I found regarding **"${bestChunk.section}"**:\n\n${this.truncate(bestChunk.content, 200)}\n\nWould you like more details?`;
    }

    // 3. Fallback
    return "I'm not sure about that based on this page's content. Can you try asking about our services, pricing, or projects?";
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

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new BlueidealteckChatbot());
} else {
  new BlueidealteckChatbot();
}
