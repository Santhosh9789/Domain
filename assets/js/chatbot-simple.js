/**
 * BLUEIDEALTECK - BRANDED CHATBOT
 * Context-aware AI assistant for the homepage.
 */

class BlueidealteckChatbot {
  constructor() {
    this.isOpen = false;
    this.init();
  }

  init() {
    // Only run if the DOM is ready
    if (document.readyState === 'complete') {
      this.render();
    } else {
      window.addEventListener('load', () => this.render());
    }
  }

  render() {
    // 1. Create Floating Button
    const btn = document.createElement('div');
    btn.className = 'chat-btn';
    btn.innerHTML = '<i class="bi bi-chat-dots-fill"></i>';
    btn.title = 'Chat with us';
    document.body.appendChild(btn);

    // 2. Create Chat Window
    const win = document.createElement('div');
    win.className = 'chat-window';
    win.innerHTML = `
      <div class="chat-header">
        <h3><span class="status-dot"></span> Blueidealteck AI</h3>
        <button id="chat-close"><i class="bi bi-x"></i></button>
      </div>
      <div class="chat-body" id="chat-body" data-lenis-prevent>
        <div class="chat-msg bot">
          <div class="msg-avatar"><i class="bi bi-robot"></i></div>
          <div class="msg-content">
            <p>Hello! 👋 Welcome to Blueidealteck.<br>I can help you explore our services, tech stack, or get a quote. How can I assist you today?</p>
            <div class="quick-btns">
               <button class="quick-btn">Our Services</button>
               <button class="quick-btn">Request a Quote</button>
               <button class="quick-btn">Career Openings</button>
               <button class="quick-btn">Trending Tools & Tech</button>
               <button class="quick-btn">Contact Info</button>
            </div>
          </div>
        </div>
      </div>
      <div class="chat-input-box">
        <input type="text" id="chat-input" placeholder="Type a message..." autocomplete="off">
        <button id="chat-send"><i class="bi bi-send-fill"></i></button>
      </div>
    `;
    document.body.appendChild(win);

    // 3. Store References
    this.ui = {
      btn: btn,
      window: win,
      body: win.querySelector('#chat-body'),
      input: win.querySelector('#chat-input'),
      send: win.querySelector('#chat-send'),
      close: win.querySelector('#chat-close')
    };

    // 4. Attach Events
    this.attachEvents();
  }

  attachEvents() {
    // Toggle
    const toggle = () => {
      this.isOpen = !this.isOpen;
      this.ui.window.className = this.isOpen ? 'chat-window open' : 'chat-window';
      if (this.isOpen) this.ui.input.focus();
    };

    this.ui.btn.addEventListener('click', toggle);
    this.ui.close.addEventListener('click', toggle);

    // Send Message
    const sendMessage = () => {
      const text = this.ui.input.value.trim();
      if (!text) return;

      // User Message
      this.appendMessage('user', text);
      this.ui.input.value = '';

      // Bot Typing & Response
      this.showTyping();
      setTimeout(() => {
        this.hideTyping();
        const response = this.generateResponse(text);
        this.appendMessage('bot', response);
      }, 800);
    };

    this.ui.send.addEventListener('click', sendMessage);
    this.ui.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });

    // Quick Buttons
    this.ui.window.addEventListener('click', (e) => {
      if (e.target.classList.contains('quick-btn')) {
        const text = e.target.textContent;
        this.appendMessage('user', text);
        this.showTyping();
        setTimeout(() => {
            this.hideTyping();
            const response = this.generateResponse(text);
            this.appendMessage('bot', response);
        }, 800);
      }
    });
  }

  appendMessage(sender, text) {
    const div = document.createElement('div');
    div.className = `chat-msg ${sender}`;
    const avatar = sender === 'bot' ? '<div class="msg-avatar"><i class="bi bi-robot"></i></div>' : '';
    
    // Simple link detection
    const formattedText = text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" style="color:white;text-decoration:underline;">$1</a>');

    div.innerHTML = `
      ${avatar}
      <div class="msg-content">${formattedText}</div>
    `;
    this.ui.body.appendChild(div);
    this.ui.body.scrollTop = this.ui.body.scrollHeight;
  }

  showTyping() {
    const div = document.createElement('div');
    div.className = 'chat-msg bot typing';
    div.id = 'typing-indicator';
    div.innerHTML = `
      <div class="msg-avatar"><i class="bi bi-robot"></i></div>
      <div class="msg-content">
        <div class="typing-indicator"><span></span><span></span><span></span></div>
      </div>
    `;
    this.ui.body.appendChild(div);
    this.ui.body.scrollTop = this.ui.body.scrollHeight;
  }

  hideTyping() {
    const el = document.getElementById('typing-indicator');
    if (el) el.remove();
  }

  generateResponse(input) {
    const q = input.toLowerCase();
    
    if (q.includes('service')) return "We offer <strong>Custom Software Development</strong>, <strong>AI Solutions</strong>, <strong>Cloud/DevOps</strong>, and <strong>Mobile App Development</strong>. Which one interests you?";
    if (q.includes('quote') || q.includes('price') || q.includes('cost')) return "Our pricing is flexible! \n• Hourly: Starts at $25/hr\n• Fixed Project: Custom quote\n\nPlease <a href='#contact' style='color:#0d3c61;text-decoration:underline;fw:bold'>Contact Us</a> for a free estimate.";
    if (q.includes('career') || q.includes('job') || q.includes('hiring')) return "Yes, we are hiring! Check out our <a href='careers/' style='color:#0d3c61;text-decoration:underline;'>Careers Page</a> for current openings in Dev, Design, and Marketing.";
    if (q.includes('trending') || q.includes('tools') || q.includes('tech')) return "🔥 **Trending Tech We Use:**\n\n• **AI/ML:** Python, TensorFlow, OpenAI\n• **Cloud:** AWS, Azure, Google Cloud\n• **Dev:** React, Next.js, Flutter, Node.js\n\nWe build future-ready solutions with these stacks!";
    if (q.includes('migration') || q.includes('legacy') || q.includes('transform')) return "🚀 **Migration Services:**\n\nWe help modernize your business by:\n• **Legacy to Cloud:** Moving old apps to AWS/Azure/GCP.\n• **Database Migration:** Secure transfer of data (SQL/NoSQL).\n• **Tech Upgrade:** Rewriting legacy code in modern frameworks (e.g., React, Node.js).\n\nLet's future-proof your systems!";
    if (q.includes('contact') || q.includes('email') || q.includes('phone')) return "You can reach us at:\n📧 info@blueidealteck.com\n📞 +91 9789836077\n📍 Virudhachalam, TN.";
    if (q.includes('hello') || q.includes('hi')) return "Hello there! How can I help you build your next big project?";
    
    return "I'm here to help! You can ask about our **Services**, **Pricing**, or **Careers**. Or just say Hi!";
  }
}

// Initialize
new BlueidealteckChatbot();
