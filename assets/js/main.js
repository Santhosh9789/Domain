/**
 * Main JS file for Blueidealteck
 * Clean, non-minified version for reliability
 */

(function() {
  "use strict";

  // 1. HELPER: Toggle Scrolled Class
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader) return;
    
    const isSticky = selectHeader.classList.contains('scroll-up-sticky') || 
                     selectHeader.classList.contains('sticky-top') || 
                     selectHeader.classList.contains('fixed-top');
                     
    if (!isSticky) return;

    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  // 2. HELPER: Toggle Mobile Nav
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  function mobileNavToogle() {
    if (!mobileNavToggleBtn) return;
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }

  // 3. HELPER: Scroll Top
  let scrollTop = document.querySelector('.scroll-top');
  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }

  // 4. HELPER: Navmenu Scrollspy
  const scrollSpySections = [];
  function navmenuScrollspy() {
    let position = window.scrollY + 200;
    scrollSpySections.forEach(({ link, section }) => {
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // 5. HELPER: Throttle
  function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function() {
          if ((Date.now() - lastRan) >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    }
  }

  // 6. INITIALIZATION: Global Listeners
  window.addEventListener('load', () => {
    toggleScrolled();
    toggleScrollTop();
    
    // Build Scrollspy Sections
    document.querySelectorAll('.navmenu a').forEach(link => {
      if (!link.hash || link.hash.length <= 1) return; // Fix for empty '#' links
      try {
        const section = document.querySelector(link.hash);
        if (section) scrollSpySections.push({ link, section });
      } catch (err) {
        console.warn('Navigation: Invalid selector', link.hash);
      }
    });
    navmenuScrollspy();

    // Hide Services dropdown from mobile navigation
    document.querySelectorAll('.navmenu > ul > li.dropdown').forEach(function(item) {
      var span = item.querySelector('a > span');
      if (span && span.textContent.trim() === 'Services') {
        item.classList.add('desktop-nav-only');
      }
    });
  });

  const optimizedScroll = throttle(() => {
    toggleScrolled();
    toggleScrollTop();
    navmenuScrollspy();
  }, 20);

  document.addEventListener('scroll', optimizedScroll, { passive: true });

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  document.querySelectorAll('.navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', (e) => {
      // Don't close mobile nav if clicking a dropdown trigger (indicated by href="#" or .toggle-dropdown)
      const href = navmenu.getAttribute('href');
      if (href === '#' || navmenu.classList.contains('toggle-dropdown') || navmenu.querySelector('.toggle-dropdown')) {
        return;
      }

      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Mobile nav dropdowns activation
   */
  document.querySelectorAll('.navmenu .dropdown > a').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      if (document.querySelector('.mobile-nav-active')) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') {
          e.preventDefault();
        }
        
        const parentLi = this.parentNode;
        const nextUl = this.nextElementSibling;
        
        if (parentLi && nextUl) {
          parentLi.classList.toggle('active');
          nextUl.classList.toggle('dropdown-active');
          
          // Rotate icon if present
          const icon = this.querySelector('.toggle-dropdown');
          if (icon) {
            icon.classList.toggle('bi-chevron-up');
            icon.classList.toggle('bi-chevron-down');
          }
        }
        e.stopImmediatePropagation();
      }
    });
  });

  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      const parentA = this.parentNode;
      if (parentA) {
        parentA.click(); // Trigger the parent link click logic
      }
      e.stopImmediatePropagation();
    });
  });

  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 7. INITIALIZATION: Libraries
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      once: true,
      mirror: false,
      offset: 50,
      disable: 'mobile'
    });
  }

  if (typeof GLightbox !== 'undefined') {
    GLightbox({ selector: '.glightbox' });
  }

  if (typeof PureCounter !== 'undefined') {
    new PureCounter();
  }

  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let swiperConfig = swiperElement.querySelector(".swiper-config");
      if (!swiperConfig) return;
      let config = JSON.parse(swiperConfig.innerHTML.trim());
      new Swiper(swiperElement, config);
    });
  }
  window.addEventListener("load", initSwiper);

  // 8. CUSTOM: Blog Navigation & Origin Logic
  document.addEventListener('DOMContentLoaded', () => {
    // A. Detect Origin
    const currentHref = window.location.href.toLowerCase();
    console.log('Navigation: Initializing tracker on', currentHref);

    if (currentHref.includes('/blog') || currentHref.includes('blog/index.html') || currentHref.includes('/blog-details')) {
      sessionStorage.setItem('serviceOrigin', 'blog');
      console.log('Navigation: Origin set to BLOG');
    } else if (currentHref.endsWith('/') || currentHref.endsWith('index.html') || currentHref.includes('blueidealteck.com/#')) {
       // Only set home if not a service page
       if (!currentHref.includes('service-')) {
         sessionStorage.setItem('serviceOrigin', 'home');
         console.log('Navigation: Origin set to HOME');
       }
    }

    // B. Link Clicks Interception
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;

      const href = (link.href || "").toLowerCase();
      const text = (link.textContent || link.innerText || "").trim().toLowerCase();

      // Proactive Tagging for Service Links from Blog
      if (href.includes('service-')) {
        const currentUrl = window.location.href.toLowerCase();
        if (currentUrl.includes('/blog') || currentUrl.includes('blog-details')) {
          sessionStorage.setItem('serviceOrigin', 'blog');
          sessionStorage.setItem('blogReturnSection', 'services');
          console.log('Navigation: Proactively tagged BLOG origin');
        }
      }

      // Back to Services Handler
      if (text.includes('back to service')) {
        e.preventDefault();
        const origin = sessionStorage.getItem('serviceOrigin');
        console.log('Navigation: Back button clicked. Returning to:', origin || 'home (default)');

        // Resilient Pathing: industry/ and location/ are 2 levels deep
        let rootPrefix = "../";
        const lowUrl = window.location.href.toLowerCase();
        if (lowUrl.includes('/industry/') || lowUrl.includes('/location/')) {
          rootPrefix = "../../";
        }

        if (origin === 'blog') {
          window.location.href = rootPrefix + 'blog/index.html#services';
        } else {
          window.location.href = rootPrefix + 'index.html#services';
        }
      }
    });

    // C. Auto-Year Update
    document.querySelectorAll('.auto-year').forEach(span => {
      span.textContent = new Date().getFullYear();
    });

    // D. Global Chatbot Injection
    (function injectChatbot() {
      // Avoid double injection
      if (document.querySelector('link[href*="chatbot-simple.css"]') || 
          document.getElementById('chatbot-widget-container')) {
        return;
      }

      const mainScript = document.querySelector('script[src*="main.js"]');
      if (!mainScript) return;

      const mainSrc = mainScript.getAttribute('src');
      const basePath = mainSrc.split('assets/js/')[0]; // Gets "", "../", "../../" etc.
      window.chatbotBasePath = basePath; // Export for chatbot-simple.js if needed
      
      console.log('Chatbot: Global injection triggered via', mainSrc, '| BasePath:', basePath);

      // Inject CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = basePath + 'assets/css/chatbot-simple.css';
      document.head.appendChild(link);

      // Inject JS
      const script = document.createElement('script');
      script.src = basePath + 'assets/js/chatbot-simple.js';
      script.defer = true;
      document.body.appendChild(script);
    })();
  });

})();