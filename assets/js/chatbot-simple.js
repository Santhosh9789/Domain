class BlueidealteckChatbot{constructor(){this.isOpen=false;this.hasProvidedEmail=false;this.userEmail=null;this.userName=null;this.conversationHistory=[];this.init();}
init(){if(document.readyState==='complete'){this.render();}else{window.addEventListener('load',()=>this.render());}}
render(){const btn=document.createElement('div');btn.className='chat-btn';btn.innerHTML='<i class="bi bi-chat-dots-fill"></i><span class="chat-notification">1</span>';btn.title='Chat with us - Get instant quote!';document.body.appendChild(btn);const win=document.createElement('div');win.className='chat-window';win.innerHTML=`
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
            <p>I'm your AI assistant. I can help you with:</p>
            <div class="quick-btns">
               <button class="quick-btn"><i class="bi bi-code-square"></i> Our Services</button>
               <button class="quick-btn"><i class="bi bi-calculator"></i> Get a Quote</button>
               <button class="quick-btn"><i class="bi bi-briefcase"></i> Careers</button>
               <button class="quick-btn"><i class="bi bi-rocket"></i> Trending Tech</button>
               <button class="quick-btn"><i class="bi bi-folder"></i> View Portfolio</button>
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
        <small>Powered by Blueidealteck AI • <a href="privacy-policy.html" target="_blank">Privacy</a></small>
      </div>
    `;document.body.appendChild(win);this.ui={btn:btn,window:win,body:win.querySelector('#chat-body'),input:win.querySelector('#chat-input'),send:win.querySelector('#chat-send'),close:win.querySelector('#chat-close'),whatsapp:win.querySelector('#whatsapp-redirect'),notification:btn.querySelector('.chat-notification')};this.attachEvents();setTimeout(()=>this.pulseNotification(),5000);}
attachEvents(){const toggle=()=>{this.isOpen=!this.isOpen;this.ui.window.className=this.isOpen?'chat-window open':'chat-window';if(this.isOpen){this.ui.input.focus();this.hideNotification();}};this.ui.btn.addEventListener('click',toggle);this.ui.close.addEventListener('click',toggle);this.ui.whatsapp.addEventListener('click',()=>{const msg='Hello! I found your website and I\'d like to discuss a project.';window.open(`https://wa.me/919789836077?text=${encodeURIComponent(msg)}`,'_blank');});const sendMessage=()=>{const text=this.ui.input.value.trim();if(!text)return;this.appendMessage('user',text);this.conversationHistory.push({role:'user',message:text});this.ui.input.value='';if(!this.hasProvidedEmail&&this.shouldAskForEmail(text)){this.showTyping();setTimeout(()=>{this.hideTyping();this.askForEmail();},600);return;}
this.showTyping();setTimeout(()=>{this.hideTyping();const response=this.generateResponse(text);this.appendMessage('bot',response);this.conversationHistory.push({role:'bot',message:response});},800);};this.ui.send.addEventListener('click',sendMessage);this.ui.input.addEventListener('keypress',(e)=>{if(e.key==='Enter')sendMessage();});this.ui.window.addEventListener('click',(e)=>{if(e.target.classList.contains('quick-btn')||e.target.closest('.quick-btn')){const btn=e.target.classList.contains('quick-btn')?e.target:e.target.closest('.quick-btn');const text=btn.textContent.trim();this.appendMessage('user',text);this.showTyping();setTimeout(()=>{this.hideTyping();const response=this.generateResponse(text);this.appendMessage('bot',response);},800);}});}
shouldAskForEmail(text){const triggers=['quote','price','cost','hire','project','estimate','budget'];return triggers.some(trigger=>text.toLowerCase().includes(trigger));}
askForEmail(){this.appendMessage('bot',`
      <p>I'd love to help you get a personalized quote! 💼</p>
      <p>Could you please share your email so we can send you detailed pricing?</p>
      <div class="email-form">
        <input type="email" id="user-email-input" placeholder="your@email.com" required>
        <button id="submit-email-btn">Submit</button>
      </div>
    `);setTimeout(()=>{const emailInput=document.getElementById('user-email-input');const submitBtn=document.getElementById('submit-email-btn');if(submitBtn){submitBtn.addEventListener('click',()=>{const email=emailInput.value.trim();if(this.validateEmail(email)){this.userEmail=email;this.hasProvidedEmail=true;this.appendMessage('user',email);this.showTyping();setTimeout(()=>{this.hideTyping();this.appendMessage('bot',`Thank you! 🎉 I've saved your email: <strong>${email}</strong>. Our team will reach out within 24 hours with a custom quote. Meanwhile, how can I help you today?`);},600);}else{alert('Please enter a valid email address.');}});}},100);}
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
generateResponse(input){const q=input.toLowerCase();if(q.includes('service')||q.includes('what do you do')){return`We offer comprehensive software solutions:

<div class="service-list">
  • <strong>Custom Software Development</strong> - Tailored web & desktop apps
  • <strong>AI/ML Solutions</strong> - Chatbots, predictive analytics, NLP
  • <strong>Mobile App Development</strong> - iOS, Android, React Native, Flutter
  • <strong>Cloud & DevOps</strong> - AWS, Azure, GCP, CI/CD pipelines
  • <strong>UI/UX Design</strong> - Figma, Adobe XD, user research
  • <strong>E-commerce Solutions</strong> - Shopify, WooCommerce, custom platforms
</div>

Which service interests you most?`;}
if(q.includes('quote')||q.includes('price')||q.includes('cost')||q.includes('budget')){return`Our pricing is flexible based on your needs:

💰 **Pricing Models:**
• **Hourly Rate:** $25-$50/hr (based on complexity)
• **Fixed Project:** Custom quote after requirements analysis
• **Monthly Retainer:** $2,000-$10,000/month (ongoing support)

📋 **Free Consultation:** We offer a FREE 30-minute discovery call to understand your project.

👉 <a href="#contact" style="color:#4154f1;font-weight:bold;">Contact us now</a> or share your email above for a detailed quote!`;}
if(q.includes('career')||q.includes('job')||q.includes('hiring')||q.includes('work')){return`Yes! We're actively hiring talented professionals:

🚀 **Open Positions:**
• Full-Stack Developer (React, Node.js)
• Mobile App Developer (Flutter/React Native)
• UI/UX Designer (Figma expert)
• DevOps Engineer (AWS, Docker, K8s)
• Digital Marketing Specialist

📍 **Location:** Remote/Hybrid (Virudhachalam, TN)
💼 **Why Join Us?** Competitive salary, flexible hours, growth opportunities

👉 Check our <a href="careers/" style="color:#4154f1;font-weight:bold;">Careers Page</a> for details!`;}
if(q.includes('trending')||q.includes('tools')||q.includes('tech')||q.includes('stack')){return`🔥 **Our Tech Stack (2026):**

**Frontend:**
• React, Next.js, Vue.js
• Flutter, React Native (Mobile)
• TailwindCSS, Material UI

**Backend:**
• Node.js, Python (FastAPI, Django)
• Java, .NET, Go

**Cloud & DevOps:**
• AWS, Azure, Google Cloud
• Docker, Kubernetes
• Jenkins, GitHub Actions

**AI/ML:**
• TensorFlow, PyTorch
• OpenAI GPT, Hugging Face
• LangChain, n8n

We build with the latest, most reliable tech! 🚀`;}
if(q.includes('portfolio')||q.includes('project')||q.includes('work')||q.includes('example')){return`Check out our recent projects:

🎨 **Portfolio Highlights:**
• **AI Chatbot Platform** - Automated 70% of customer support
• **E-commerce Mobile App** - 50K+ downloads, 4.5⭐ rating
• **Cloud Migration** - Moved legacy system to AWS (60% cost reduction)
• **Custom CRM** - Streamlined sales for 100+ users

👉 Contact us to see our full portfolio!

Want to build something similar?`;}
if(q.includes('contact')||q.includes('email')||q.includes('phone')||q.includes('call')){return`📞 **Get in Touch:**

📧 Email: <a href="mailto:info@blueidealteck.com" style="color:#4154f1;">info@blueidealteck.com</a>
📱 Phone: <a href="tel:+919789836077">+91 9789836077</a>
💬 WhatsApp: Click the WhatsApp button above!
📍 Location: Virudhachalam, Tamil Nadu, India

We reply within 2 hours during business hours! ⚡`;}
if(q.includes('ai')||q.includes('machine learning')||q.includes('ml')){return`🤖 **AI/ML Services:**

We specialize in:
• **Custom Chatbots** (like this one!)
• **Predictive Analytics** - Sales forecasting, demand prediction
• **NLP** - Sentiment analysis, text classification
• **Computer Vision** - Image recognition, object detection
• **Recommendation Systems** - Personalized suggestions

**Tech:** Python, TensorFlow, PyTorch, OpenAI, Hugging Face

Ready to leverage AI for your business?`;}
if(q.includes('cloud')||q.includes('migration')||q.includes('aws')||q.includes('azure')){return`☁️ **Cloud & Migration Services:**

We help you move to the cloud:
• **Cloud Migration** - Legacy to AWS/Azure/GCP
• **Infrastructure as Code** - Terraform, CloudFormation
• **Cost Optimization** - Reduce cloud bills by 40-60%
• **DevOps Setup** - CI/CD, monitoring, auto-scaling

**Platforms:** AWS (certified), Azure, Google Cloud

Let's modernize your infrastructure!`;}
if(q.includes('mobile')||q.includes('app')||q.includes('android')||q.includes('ios')||q.includes('flutter')){return`📱 **Mobile App Development:**

We build native & cross-platform apps:
• **iOS** - Swift, SwiftUI
• **Android** - Kotlin, Jetpack Compose
• **Cross-Platform** - Flutter, React Native

**Features:** Push notifications, offline mode, payment integration, analytics

**Timeline:** 8-12 weeks for MVP
**Cost:** Starting at $5,000

Want to discuss your app idea?`;}
if(q.includes('hello')||q.includes('hi')||q.includes('hey')){return`Hello! 👋 Great to meet you!

I'm Blueidealteck AI, your personal assistant. I can help you:
• Explore our **Services**
• Get a **Quote** for your project
• Learn about **Career opportunities**
• Check our **Portfolio**

What interests you most?`;}
return`I'm here to help! 😊

You can ask me about:
• **Services** we offer
• **Pricing** for your project
• **Careers** at Blueidealteck
• **Tech Stack** we use
• **Portfolio** examples
• **Contact** information

Or just tell me about your project idea!`;}}
new BlueidealteckChatbot();