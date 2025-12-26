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
      // We don't need pre-extracted keywords anymore, we'll search raw text for better accuracy
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
   * BRAIN: Similarity Scoring v2 (Substring Search)
   */
  generateResponse(query) {
    const q = query.toLowerCase().trim();
    
    // 1. Direct Intents
    if (q.match(/price|cost|rate/)) return this.getPricing();
    if (q.match(/hello|hi |hey/)) return "Hello! I can explain anything on this page. Try asking about 'Services', 'Process', or specific technologies.";
    if (q.match(/contact|mail|phone|reach/)) return this.getContactInfo();

    // 2. Search Intelligence
    // Break query into significant terms (longer than 2 chars)
    const terms = q.split(/\s+/).filter(w => w.length > 2 && !['what', 'how', 'who', 'the', 'and', 'for', 'are', 'you'].includes(w));
    
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
    if (maxScore > 2) { // At least some relevance found
       return `**Regarding ${bestChunk.section}:**\n\n${bestChunk.content}\n\n*Is this what you were looking for?*`;
    }

    // 3. Last Resort: Fuzzy Match of entire query
    const fallbackChunk = this.knowledgeBase.find(c => c.raw.includes(q));
    if(fallbackChunk) {
        return `I found this reference: \n\n"...${fallbackChunk.content.substring(0, 150)}..."`; 
    }

    return "I'm reading the page, but I couldn't find a direct answer to that specific question. Try using keywords like 'Services', 'Stack', or 'About'.";
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
