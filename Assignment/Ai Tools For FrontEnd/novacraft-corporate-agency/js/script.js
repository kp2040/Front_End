/**
 * ==========================================================================
 * NovaCraft - Premium Corporate Agency & Tech Solutions
 * JavaScript Interactive Script (script.js)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --------------------------------------------------------------------------
     1. PRELOADER FADE OUT
     -------------------------------------------------------------------------- */
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('fade-out');
      }, 300);
    });
    // Fallback if load event fired earlier
    setTimeout(() => {
      if (!preloader.classList.contains('fade-out')) {
        preloader.classList.add('fade-out');
      }
    }, 1500);
  }

  /* --------------------------------------------------------------------------
     2. DARK / LIGHT THEME TOGGLE WITH LOCAL STORAGE
     -------------------------------------------------------------------------- */
  const desktopThemeToggle = document.getElementById('desktopThemeToggle');
  const mobileThemeToggle = document.getElementById('mobileThemeToggle');
  const htmlElement = document.documentElement;

  // Retrieve saved theme or system preference
  const savedTheme = localStorage.getItem('novacraft_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    setTheme(savedTheme);
  } else if (systemPrefersDark) {
    setTheme('dark');
  } else {
    setTheme('light');
  }

  function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('novacraft_theme', theme);
    updateThemeIcons(theme);
  }

  function updateThemeIcons(theme) {
    const isDark = theme === 'dark';
    const iconClass = isDark ? 'fa-sun' : 'fa-moon';
    
    [desktopThemeToggle, mobileThemeToggle].forEach(btn => {
      if (btn) {
        const icon = btn.querySelector('i');
        if (icon) {
          icon.className = `fa-solid ${iconClass}`;
        }
      }
    });
  }

  function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  if (desktopThemeToggle) desktopThemeToggle.addEventListener('click', toggleTheme);
  if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleTheme);

  /* --------------------------------------------------------------------------
     3. STICKY NAVBAR & SCROLLSPY ACTIVE LINK HIGHLIGHTING
     -------------------------------------------------------------------------- */
  const mainNavbar = document.getElementById('mainNavbar');
  const navLinks = document.querySelectorAll('.navbar-menu .nav-link');
  const sections = document.querySelectorAll('section[id]');

  function handleNavbarScroll() {
    if (window.scrollY > 50) {
      mainNavbar.classList.add('scrolled');
    } else {
      mainNavbar.classList.remove('scrolled');
    }

    // ScrollSpy active link update
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleNavbarScroll);

  // Close mobile navbar on menu item click
  const navbarContent = document.getElementById('navbarContent');
  if (navbarContent) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarContent.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarContent);
          if (bsCollapse) bsCollapse.hide();
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     4. HERO TYPING EFFECT
     -------------------------------------------------------------------------- */
  const typingText = document.getElementById('typing-text');
  if (typingText) {
    const words = [
      'Digital Web Apps',
      'AI & Cloud Systems',
      'Glassmorphic Interfaces',
      'Scalable Brands'
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const delayBetweenWords = 2000;

    function typeEffect() {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }

      let delta = isDeleting ? deleteSpeed : typeSpeed;

      if (!isDeleting && charIndex === currentWord.length) {
        delta = delayBetweenWords;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delta = 400;
      }

      setTimeout(typeEffect, delta);
    }

    typeEffect();
  }

  /* --------------------------------------------------------------------------
     5. ANIMATED STAT COUNTERS (INTERSECTION OBSERVER)
     -------------------------------------------------------------------------- */
  const statsContainer = document.getElementById('statsContainer');
  const counters = document.querySelectorAll('.counter');
  let countersAnimated = false;

  function animateCounters() {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 2000;
      const step = Math.ceil(target / (duration / 16));
      let current = 0;

      const updateCounter = () => {
        current += step;
        if (current >= target) {
          counter.textContent = target;
        } else {
          counter.textContent = current;
          requestAnimationFrame(updateCounter);
        }
      };

      updateCounter();
    });
  }

  if (statsContainer && counters.length > 0) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
          animateCounters();
          countersAnimated = true;
        }
      });
    }, { threshold: 0.3 });

    statsObserver.observe(statsContainer);
  }

  /* --------------------------------------------------------------------------
     6. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
     -------------------------------------------------------------------------- */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => revealObserver.observe(el));

  /* --------------------------------------------------------------------------
     7. PORTFOLIO CATEGORY FILTERING
     -------------------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.portfolio-filter .filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');

        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.9)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
     8. DYNAMIC SERVICE & PROJECT DETAIL MODALS
     -------------------------------------------------------------------------- */
  const serviceData = {
    web: {
      title: 'Custom Web Application Development',
      description: 'We craft scalable, enterprise-grade web applications with modern React, TypeScript, Node.js, and cloud native microservices.',
      features: [
        'Single Page Applications (SPA) & Server Side Rendering (SSR)',
        'GraphQL & RESTful API Architecture with Security Headers',
        'Real-time WebSocket Data Synchronization',
        'High performance state management & lazy loaded assets'
      ],
      tech: 'React, TypeScript, Express, PostgreSQL, Cloud Run'
    },
    mobile: {
      title: 'Mobile Application Engineering',
      description: 'Cross-platform iOS and Android mobile applications engineered with Flutter and React Native for zero-latency user experiences.',
      features: [
        'Native 60fps animations and gesture handling',
        'Offline-first SQLite/Realm database caching',
        'Push notifications & biometric authentication',
        'Automated App Store & Google Play distribution pipelines'
      ],
      tech: 'Flutter, React Native, Firebase, Swift, Kotlin'
    },
    uiux: {
      title: 'UI/UX & Product Design System',
      description: 'Human-centered design systems, interactive glassmorphic prototypes, and brand identities crafted in Figma.',
      features: [
        'Comprehensive Component UI Kits & Token Libraries',
        'Interactive High-Fidelity Prototypes with Motion',
        'WCAG AA Accessibility Compliance Audits',
        'User Journey Mapping & Usability Testing'
      ],
      tech: 'Figma, Rive Motion, Storybook, Tailwind CSS'
    },
    ai: {
      title: 'AI & Machine Learning Integration',
      description: 'Integrating Gemini AI, custom LLMs, automated retrieval augmented generation (RAG), and intelligent agents into business software.',
      features: [
        'Generative AI text, code, and vision processing',
        'Enterprise Knowledge Grounding & Vector Databases',
        'Automated Customer Support AI Assistants',
        'Predictive Analytics & Workflow Automation'
      ],
      tech: 'Gemini API, Python, LangChain, Pinecone, PyTorch'
    },
    cloud: {
      title: 'Cloud DevOps & Infrastructure',
      description: 'Automated container deployments, Kubernetes orchestration, and 24/7 cloud health monitoring.',
      features: [
        'Terraform Infrastructure as Code (IaC)',
        'Automated CI/CD Pipelines (GitHub Actions / GitLab)',
        'Zero Downtime Rolling Deployments',
        'DDoS protection and OWASP vulnerability scans'
      ],
      tech: 'AWS, Google Cloud, Docker, Kubernetes, Terraform'
    },
    growth: {
      title: 'Digital Strategy & Technical Growth',
      description: 'Data-driven growth hacking, conversion rate optimization (CRO), and technical SEO architecture.',
      features: [
        'Core Web Vitals Speed & Performance Optimization',
        'A/B Testing & Funnel Analytics Setup',
        'Structured Schema Markup for Search Engines',
        'Comprehensive Competitive Analysis'
      ],
      tech: 'Google Analytics 4, Mixpanel, Lighthouse, Semrush'
    }
  };

  const projectData = {
    finpulse: {
      title: 'FinPulse Analytics Platform',
      client: 'FinPulse Global Ltd.',
      duration: '8 Weeks',
      summary: 'Engineered a real-time financial intelligence dashboard for institutional traders, processing over 10,000 data ticks per second with zero UI lag.',
      results: ['342% Increase in User Conversion', '0.6s Average Page Load Speed', '99.99% Cloud Service Uptime']
    },
    aura: {
      title: 'Aura Health Mobile Assistant',
      client: 'Aura Health Inc.',
      duration: '10 Weeks',
      summary: 'Developed a cross-platform biometric wellness mobile application integrated with wearable sensors and personalized AI coaching routines.',
      results: ['500,000+ App Store Downloads', '4.9 Star Average Rating', '45% Monthly Active User Retention']
    },
    velour: {
      title: 'Velour Luxury Brand Redesign',
      client: 'Velour House Paris',
      duration: '6 Weeks',
      summary: 'Crafted a high-fashion e-commerce glassmorphism store featuring 3D product previews and instant express checkout.',
      results: ['180% Boost in Average Order Value', '55% Bounce Rate Reduction', 'Awarded Site of the Day 2026']
    },
    nexus: {
      title: 'Nexus Knowledge Agent',
      client: 'Nexus Enterprise Systems',
      duration: '7 Weeks',
      summary: 'Deployed an enterprise AI document assistant using Gemini API, enabling staff to query millions of internal files instantly.',
      results: ['85% Reduction in Document Search Time', '100% On-Premise Data Encryption', '20,000+ Daily Queries']
    },
    apex: {
      title: 'Apex Capital Investment Portal',
      client: 'Apex Financial',
      duration: '12 Weeks',
      summary: 'Built a sub-second WebSocket investment trading interface with live charting and automated compliance reporting.',
      results: ['$1.2B+ Volume Processed', 'Zero Security Incidents', 'Sub-100ms API Response Time']
    },
    skyline: {
      title: 'Skyline Cloud Manager',
      client: 'Skyline Cloud Ops',
      duration: '9 Weeks',
      summary: 'Designed a multi-cloud orchestration dashboard providing real-time cluster health, automated scaling, and cost tracking.',
      results: ['30% Average Cloud Cost Savings', 'Multi-Cloud AWS & GCP Sync', 'Unified Admin Controls']
    }
  };

  // Service Modal Handler
  const serviceModalTitle = document.getElementById('serviceModalTitle');
  const serviceModalContent = document.getElementById('serviceModalContent');
  const serviceTriggers = document.querySelectorAll('.service-modal-trigger');

  serviceTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-service');
      const data = serviceData[key];

      if (data && serviceModalTitle && serviceModalContent) {
        serviceModalTitle.textContent = data.title;
        serviceModalContent.innerHTML = `
          <p class="lead text-muted mb-4">${data.description}</p>
          <h6 class="fw-bold mb-3">Key Capabilities Included:</h6>
          <ul class="list-group list-group-flush mb-4">
            ${data.features.map(f => `<li class="list-group-item bg-transparent ps-0 border-0"><i class="fa-solid fa-circle-check text-success me-2"></i>${f}</li>`).join('')}
          </ul>
          <div class="glass-inner-card p-3 rounded-3">
            <small class="text-muted d-block fw-bold mb-1">RECOMMENDED TECH STACK:</small>
            <span class="badge bg-primary-subtle text-primary fs-6 fw-normal">${data.tech}</span>
          </div>
        `;

        const modal = new bootstrap.Modal(document.getElementById('serviceDetailModal'));
        modal.show();
      }
    });
  });

  // Project Modal Handler
  const projectModalTitle = document.getElementById('projectModalTitle');
  const projectModalContent = document.getElementById('projectModalContent');
  const projectTriggers = document.querySelectorAll('.project-detail-trigger');

  projectTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-project');
      const data = projectData[key];

      if (data && projectModalTitle && projectModalContent) {
        projectModalTitle.textContent = data.title;
        projectModalContent.innerHTML = `
          <div class="row g-3 mb-4">
            <div class="col-sm-6">
              <span class="text-muted small">CLIENT</span>
              <h6 class="fw-bold mb-0">${data.client}</h6>
            </div>
            <div class="col-sm-6">
              <span class="text-muted small">PROJECT DURATION</span>
              <h6 class="fw-bold mb-0">${data.duration}</h6>
            </div>
          </div>
          <p class="mb-4">${data.summary}</p>
          <h6 class="fw-bold mb-3">Measurable Impact & Results:</h6>
          <div class="row g-2 mb-3">
            ${data.results.map(r => `
              <div class="col-12">
                <div class="glass-inner-card p-3 rounded-3 d-flex align-items-center gap-3">
                  <i class="fa-solid fa-trophy text-warning fs-4"></i>
                  <span class="fw-semibold">${r}</span>
                </div>
              </div>
            `).join('')}
          </div>
        `;

        const modal = new bootstrap.Modal(document.getElementById('projectDetailModal'));
        modal.show();
      }
    });
  });

  /* --------------------------------------------------------------------------
     9. PRICING BILLING TOGGLE (MONTHLY / YEARLY 20% DISCOUNT)
     -------------------------------------------------------------------------- */
  const pricingToggle = document.getElementById('pricingToggle');
  const priceVals = document.querySelectorAll('.price-val');
  const billingCycles = document.querySelectorAll('.billing-cycle');

  if (pricingToggle) {
    pricingToggle.addEventListener('change', () => {
      const isYearly = pricingToggle.checked;

      priceVals.forEach(val => {
        const targetPrice = isYearly ? val.getAttribute('data-yearly') : val.getAttribute('data-monthly');
        val.style.opacity = '0';
        setTimeout(() => {
          val.textContent = `$${targetPrice}`;
          val.style.opacity = '1';
        }, 150);
      });

      billingCycles.forEach(cycle => {
        cycle.textContent = isYearly ? '/ project (Billed Annually)' : '/ project';
      });
    });
  }

  /* --------------------------------------------------------------------------
     10. FAQ LIVE SEARCH FILTER
     -------------------------------------------------------------------------- */
  const faqSearchInput = document.getElementById('faqSearchInput');
  const faqItems = document.querySelectorAll('.faq-item');

  if (faqSearchInput) {
    faqSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();

      faqItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     11. FORM VALIDATION & TOAST NOTIFICATIONS
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('contactForm');
  const newsletterForm = document.getElementById('newsletterForm');
  const liveToast = document.getElementById('liveToast');
  const toastTitle = document.getElementById('toastTitle');
  const toastMessage = document.getElementById('toastMessage');
  const toastIcon = document.getElementById('toastIcon');

  function showToast(title, message, isSuccess = true) {
    if (!liveToast) return;

    toastTitle.textContent = title;
    toastMessage.textContent = message;

    if (isSuccess) {
      toastIcon.className = 'fa-solid fa-circle-check text-success me-2 fs-5';
    } else {
      toastIcon.className = 'fa-solid fa-circle-exclamation text-danger me-2 fs-5';
    }

    const toast = new bootstrap.Toast(liveToast, { delay: 4000 });
    toast.show();
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!contactForm.checkValidity()) {
        e.stopPropagation();
        contactForm.classList.add('was-validated');
        showToast('Validation Error', 'Please complete all required fields correctly.', false);
        return;
      }

      const name = document.getElementById('contactName').value;
      
      // Simulate form submission
      showToast('Proposal Request Sent!', `Thank you ${name}. Our team will contact you within 24 hours.`);
      contactForm.reset();
      contactForm.classList.remove('was-validated');
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletterEmail');
      
      if (emailInput && emailInput.value) {
        showToast('Subscribed Successfully!', 'You will receive our latest digital insights monthly.');
        newsletterForm.reset();
      }
    });
  }

  /* --------------------------------------------------------------------------
     12. SCROLL TO TOP BUTTON
     -------------------------------------------------------------------------- */
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
      } else {
        scrollToTopBtn.classList.remove('show');
      }
    });

    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* --------------------------------------------------------------------------
     13. DYNAMIC COPYRIGHT YEAR
     -------------------------------------------------------------------------- */
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
