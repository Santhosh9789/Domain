class BlueidealteckChatbot{constructor(){this.isOpen=false;this.hasProvidedEmail=false;this.userEmail=null;this.userName=null;this.conversationHistory=[];this.init();}
init(){if(document.readyState==='complete'){this.render();}else{window.addEventListener('load',()=>this.render());}}
render(){const btn=document.createElement('div');btn.className='chat-btn';btn.innerHTML='<i class="bi bi-chat-dots-fill"></i><span class="chat-notification">1</span>';btn.title='Chat with us - Get instant help!';document.body.appendChild(btn);const win=document.createElement('div');win.className='chat-window';win.innerHTML=`
      <div class="chat-header">
        <div class="header-content">
          <div class="avatar-status">
            <div class="chat-avatar">
              <i class="bi bi-robot"></i>
            </div>
            <span class="status-dot"></span>
          </div>
          <div class="header-info">
            <h3>Blueidealteck AI</h3>
            <p class="status-text">Online • Replies instantly</p>
          </div>
        </div>
        <div class="header-actions">
          <button id="whatsapp-redirect" title="Chat on WhatsApp"><i class="bi bi-whatsapp"></i></button>
          <button id="chat-close"><i class="bi bi-x"></i></button>
        </div>
      </div>
      <div class="chat-body" id="chat-body" data-lenis-prevent>
        <div class="chat-msg bot">
          <div class="msg-avatar"><i class="bi bi-robot"></i></div>
          <div class="msg-content">
            <p>👋 <strong>Welcome to Blueidealteck!</strong></p>
            <p>I'm your AI assistant. How can I help you today?</p>
            <div class="quick-btns">
               <button class="quick-btn"><i class="bi bi-code-square"></i> Our Services</button>
               <button class="quick-btn"><i class="bi bi-calculator"></i> Get a Quote</button>
               <button class="quick-btn"><i class="bi bi-briefcase"></i> Careers</button>
               <button class="quick-btn"><i class="bi bi-cpu"></i> AI & ML</button>
               <button class="quick-btn"><i class="bi bi-cloud"></i> Cloud & DevOps</button>
               <button class="quick-btn"><i class="bi bi-telephone"></i> Contact Info</button>
            </div>
          </div>
        </div>
      </div>
      <div class="chat-input-box">
        <input type="text" id="chat-input" placeholder="Type your message..." autocomplete="off">
        <button id="chat-send"><i class="bi bi-send-fill"></i></button>
      </div>
      <div class="chat-footer">
        <small>Powered by Blueidealteck AI • <a href="${window.chatbotBasePath || './'}privacy-policy.html" target="_blank">Privacy</a></small>
      </div>
    `;document.body.appendChild(win);this.ui={btn:btn,window:win,body:win.querySelector('#chat-body'),input:win.querySelector('#chat-input'),send:win.querySelector('#chat-send'),close:win.querySelector('#chat-close'),whatsapp:win.querySelector('#whatsapp-redirect'),notification:btn.querySelector('.chat-notification')};this.attachEvents();setTimeout(()=>this.pulseNotification(),5000);}
attachEvents(){const toggle=()=>{this.isOpen=!this.isOpen;this.ui.window.className=this.isOpen?'chat-window open':'chat-window';if(this.isOpen){this.ui.input.focus();this.hideNotification();}};this.ui.btn.addEventListener('click',toggle);this.ui.close.addEventListener('click',toggle);this.ui.whatsapp.addEventListener('click',()=>{const msg='Hello! I visited Blueidealteck\'s website and would like to discuss a project.';window.open(`https://wa.me/919789836077?text=${encodeURIComponent(msg)}`,'_blank');});const sendMessage=()=>{const text=this.ui.input.value.trim();if(!text)return;this.appendMessage('user',text);this.conversationHistory.push({role:'user',message:text});this.ui.input.value='';if(!this.hasProvidedEmail&&this.shouldAskForEmail(text)){this.showTyping();setTimeout(()=>{this.hideTyping();this.askForEmail();},600);return;}
this.showTyping();setTimeout(()=>{this.hideTyping();const response=this.generateResponse(text);this.appendMessage('bot',response);this.conversationHistory.push({role:'bot',message:response});},800);};this.ui.send.addEventListener('click',sendMessage);this.ui.input.addEventListener('keypress',(e)=>{if(e.key==='Enter')sendMessage();});this.ui.window.addEventListener('click',(e)=>{if(e.target.classList.contains('quick-btn')||e.target.closest('.quick-btn')){const btn=e.target.classList.contains('quick-btn')?e.target:e.target.closest('.quick-btn');const text=btn.textContent.trim();this.appendMessage('user',text);this.showTyping();setTimeout(()=>{this.hideTyping();const response=this.generateResponse(text);this.appendMessage('bot',response);},800);}});}
shouldAskForEmail(text){const triggers=['quote','price','cost','hire','project','estimate','budget','consult'];return triggers.some(trigger=>text.toLowerCase().includes(trigger));}
askForEmail(){this.appendMessage('bot',`
      <p>I'd love to get you a personalized quote! 💼</p>
      <p>Please share your email so our team can send you detailed pricing:</p>
      <div class="email-form">
        <input type="email" id="user-email-input" placeholder="your@email.com" required>
        <button id="submit-email-btn">Submit</button>
      </div>
    `);setTimeout(()=>{const emailInput=document.getElementById('user-email-input');const submitBtn=document.getElementById('submit-email-btn');if(submitBtn){submitBtn.addEventListener('click',()=>{const email=emailInput.value.trim();if(this.validateEmail(email)){this.userEmail=email;this.hasProvidedEmail=true;this.appendMessage('user',email);this.showTyping();setTimeout(()=>{this.hideTyping();this.appendMessage('bot',`Thank you! 🎉 We've saved your email: <strong>${email}</strong>. Our team will reach out within 24 hours with a custom quote tailored to your project!`);},600);}else{alert('Please enter a valid email address.');}});}},100);}
validateEmail(email){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);}
appendMessage(sender,text){const div=document.createElement('div');div.className=`chat-msg ${sender}`;const avatar=sender==='bot'?'<div class="msg-avatar"><i class="bi bi-robot"></i></div>':'';const formattedText=text.replace(/(https?:\/\/[^\s]+)/g,'<a href="$1" target="_blank" style="color:#4154f1;text-decoration:underline;">$1</a>').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>');div.innerHTML=`
      ${avatar}
      <div class="msg-content">${formattedText}</div>
    `;this.ui.body.appendChild(div);this.ui.body.scrollTop=this.ui.body.scrollHeight;}
showTyping(){const div=document.createElement('div');div.className='chat-msg bot typing';div.id='typing-indicator';div.innerHTML=`
      <div class="msg-avatar"><i class="bi bi-robot"></i></div>
      <div class="msg-content">
        <div class="typing-indicator"><span></span><span></span><span></span></div>
      </div>
    `;this.ui.body.appendChild(div);this.ui.body.scrollTop=this.ui.body.scrollHeight;}
hideTyping(){const el=document.getElementById('typing-indicator');if(el)el.remove();}
pulseNotification(){if(!this.isOpen&&this.ui.notification){this.ui.notification.style.display='flex';this.ui.btn.classList.add('pulse');}}
hideNotification(){if(this.ui.notification){this.ui.notification.style.display='none';this.ui.btn.classList.remove('pulse');}}
generateResponse(input){const q=input.toLowerCase();

// Greetings
if(q.includes('hello')||q.includes('hi')||q.includes('hey')||q.includes('vanakkam')){return`Hello! 👋 Welcome to Blueidealteck!

I'm your AI assistant. I can help you explore:
• Our **Services** — AI, Software, Web, Mobile, Cloud
• Get a **Quote** for your project
• **Career** opportunities at Blueidealteck
• **Contact** our team directly

What would you like to know?`;}

// Services
if(q.includes('service')||q.includes('what do you do')||q.includes('offer')){return`We are a full-service technology company offering:

<div class="service-list">
  • <strong>AI & Machine Learning</strong> — Chatbots, automation, predictive analytics
  • <strong>Custom Software Development</strong> — ERP, CRM, SaaS platforms
  • <strong>Web Development</strong> — Full-stack, React, Node.js, Next.js
  • <strong>Mobile App Development</strong> — iOS, Android, Flutter, React Native
  • <strong>Cloud & DevOps</strong> — AWS, Azure, GCP, CI/CD, Docker, Kubernetes
  • <strong>UI/UX Design</strong> — Figma, wireframes, prototypes
  • <strong>eCommerce</strong> — Shopify, WooCommerce, custom stores
  • <strong>Digital Transformation</strong> — Modernize legacy systems
  • <strong>Cybersecurity</strong> — Penetration testing, enterprise security
</div>

Which service are you interested in?`;}

// AI & ML
if(q.includes('ai')||q.includes('machine learning')||q.includes('ml')||q.includes('chatbot')||q.includes('automation')){return`🤖 **AI & Machine Learning Services:**

We build intelligent systems that work for your business:
• **Custom AI Chatbots** — Like this one you're using right now!
• **Business Process Automation** — Reduce manual work by 70%
• **Predictive Analytics** — Sales forecasting, churn prediction
• **Computer Vision** — Image recognition, quality inspection
• **NLP Solutions** — Sentiment analysis, text classification
• **AI-Powered Business Solutions** — End-to-end automation

**Tech Stack:** Python, TensorFlow, PyTorch, OpenAI, LangChain, n8n

Ready to automate your business with AI?`;}

// Cloud & DevOps
if(q.includes('cloud')||q.includes('devops')||q.includes('aws')||q.includes('azure')||q.includes('migration')||q.includes('docker')||q.includes('kubernetes')){return`☁️ **Cloud & DevOps Services:**

We help you scale securely and efficiently:
• **Cloud Migration** — Move legacy systems to AWS, Azure, or GCP
• **DevOps Automation** — CI/CD pipelines, automated testing
• **Containerization** — Docker, Kubernetes orchestration
• **Cloud Cost Optimization** — Cut cloud bills by 40–60%
• **Infrastructure as Code** — Terraform, CloudFormation
• **24/7 Monitoring** — Uptime, performance, alerts

**Certified in:** AWS, Microsoft Azure, Google Cloud

Let's modernize your infrastructure!`;}

// Mobile App
if(q.includes('mobile')||q.includes('app')||q.includes('android')||q.includes('ios')||q.includes('flutter')||q.includes('react native')){return`📱 **Mobile App Development:**

We build native and cross-platform mobile apps:
• **iOS** — Swift, SwiftUI (App Store optimized)
• **Android** — Kotlin, Jetpack Compose
• **Cross-Platform** — Flutter, React Native (one codebase, both platforms)

**Features we integrate:**
• Payment gateways (Razorpay, Stripe)
• Push notifications & offline mode
• Real-time chat & analytics
• GPS, camera, biometric authentication

**Timeline:** 8–14 weeks for MVP
Want to discuss your app idea?`;}

// Web Development
if(q.includes('web')||q.includes('website')||q.includes('portal')||q.includes('frontend')||q.includes('backend')||q.includes('full stack')){return`🌐 **Web Development Services:**

We design and build powerful web solutions:
• **Custom Web Applications** — React, Next.js, Vue.js
• **Backend APIs** — Node.js, Python FastAPI, Django, Java
• **SaaS Platform Development** — Scalable, multi-tenant architecture
• **Web Portals & Dashboards** — Admin panels, client portals
• **Progressive Web Apps (PWA)** — Fast, offline-capable apps
• **Responsive UI/UX** — Mobile-first, SEO-optimized

We build with performance, security, and scalability in mind!`;}

// eCommerce
if(q.includes('ecommerce')||q.includes('shop')||q.includes('shopify')||q.includes('woocommerce')||q.includes('store')){return`🛒 **eCommerce Development:**

We build stores that convert visitors into customers:
• **Custom eCommerce Platforms** — Tailored to your business
• **Shopify / WooCommerce** — Setup, customization, integrations
• **Payment Integrations** — Razorpay, Paytm, Stripe, PayPal
• **Inventory & Order Management** — Automated workflows
• **Mobile Commerce** — Optimized for mobile shoppers

Let's build your online store!`;}

// Pricing / Quote
if(q.includes('quote')||q.includes('price')||q.includes('cost')||q.includes('budget')||q.includes('rate')||q.includes('charge')){return`💰 **Our Pricing (INR):**

• **Small Projects** — Starting from ₹50,000
• **Medium Web/App Projects** — ₹1,50,000 – ₹5,00,000
• **Enterprise Solutions** — ₹5,00,000+ (custom quote)
• **Monthly Retainer** — ₹30,000 – ₹1,50,000/month
• **Hourly Consulting** — ₹2,000 – ₹4,000/hr

📋 **Free Discovery Call available!** Share your project details and we'll prepare a detailed quote within 24 hours.

👉 <a href="#contact" style="color:#4154f1;font-weight:bold;">Contact us now</a> for a free consultation!`;}

// Careers / Jobs
if(q.includes('career')||q.includes('job')||q.includes('hiring')||q.includes('vacancy')||q.includes('join')||q.includes('work with')){return`🚀 **Join the Blueidealteck Team!**

We're looking for passionate tech professionals:
• **Full-Stack Developer** — React, Node.js, Python
• **Mobile App Developer** — Flutter / React Native
• **AI/ML Engineer** — Python, TensorFlow, LangChain
• **DevOps Engineer** — AWS, Docker, Kubernetes
• **UI/UX Designer** — Figma, Prototyping
• **Digital Marketing Specialist** — SEO, Content, Ads

📍 **Location:** Remote / Hybrid (Virudhachalam, Tamil Nadu)
💼 **Perks:** Competitive salary, flexible hours, learning budget, growth

👉 Visit our <a href="careers/" style="color:#4154f1;font-weight:bold;">Careers Page</a> to apply!`;}

// About / Company
if(q.includes('about')||q.includes('company')||q.includes('who are you')||q.includes('blueidealteck')){return`🏢 **About Blueidealteck:**

We are a full-service digital technology company. We don't just write code — **we architect digital dominance.**

✅ **What makes us different:**
• Client-first mindset — your goals drive our decisions
• Security-first development — no compromises
• Scalable architectures built for long-term growth
• On-time delivery with full transparency
• Long-term partnerships, not one-time transactions

🌍 **We serve clients globally** — India, USA, UK, Canada, UAE

Our mission: **Empower businesses with technology that works.**

👉 <a href="about/" style="color:#4154f1;font-weight:bold;">Read Our Full Story</a>`;}

// Contact
if(q.includes('contact')||q.includes('email')||q.includes('phone')||q.includes('call')||q.includes('reach')||q.includes('whatsapp')){return`📞 **Get in Touch with Blueidealteck:**

📧 **Email:** <a href="mailto:info@blueidealteck.com" style="color:#4154f1;">info@blueidealteck.com</a>
📱 **Phone/WhatsApp:** <a href="tel:+919789836077">+91 97898 36077</a>
📍 **Location:** Virudhachalam, Tamil Nadu, India
🌐 **Website:** blueidealteck.com

💬 Click the **WhatsApp button** above to chat instantly!
⚡ We reply within 2 hours during business hours (Mon–Sat, 9AM–6PM IST).`;}

// Tech Stack
if(q.includes('tech')||q.includes('stack')||q.includes('technology')||q.includes('tools')||q.includes('framework')){return`🔧 **Our Technology Stack:**

**Frontend:**
React.js, Next.js, Vue.js, Angular, TailwindCSS

**Mobile:**
Flutter, React Native, Swift (iOS), Kotlin (Android)

**Backend:**
Node.js, Python (FastAPI, Django), Java Spring Boot, .NET, Go

**Databases:**
PostgreSQL, MySQL, MongoDB, Redis, Firebase

**Cloud & DevOps:**
AWS, Azure, GCP, Docker, Kubernetes, Terraform, GitHub Actions

**AI/ML:**
Python, TensorFlow, PyTorch, OpenAI GPT, LangChain, Hugging Face

We work with the best tools to build reliable, modern software! 🚀`;}

// Fallback
return`I'm here to help! 😊

You can ask me about:
• **Services** — AI, Software, Web, Mobile, Cloud, UI/UX
• **Pricing** — Get a custom quote
• **Careers** — Open positions at Blueidealteck
• **Technology** — Our tech stack
• **About** — Who we are & our mission
• **Contact** — Reach our team

Or describe your project and I'll point you in the right direction!`;}}
new BlueidealteckChatbot();