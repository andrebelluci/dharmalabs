/**
 * DHARMA LABS - MAIN JAVASCRIPT (REFATORADO)
 * Sistema modular para todas as páginas
 * Funcionalidades compartilhadas entre index.html e precos.html
 */

// ===== CONFIGURAÇÕES GLOBAIS =====
const DHARMA_CONFIG = {
  // Configurações de animação
  animations: {
    enabled: !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    duration: {
      fast: 150,
      normal: 300,
      slow: 500
    },
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
  },

  // Configurações do código animado (apenas para index)
  codeAnimation: {
    lines: [
      "function createAwesome() { return magic; }",
      "const result = AI.enhance(userExperience);",
      "database.optimize() && performance.boost();",
      "if (client.happy) { success.achieved(); }",
      "system.deploy() && monitoring.start();",
      "const solution = await AI.solve(problem);",
      "function buildApp() { return innovation; }",
      "dashboard.render(realTimeData);",
      "const dharma = new TechSolution();",
      "ai.collaborate(developer) === future;",
      "async function transformIdeas() { return digital; }",
      "const website = await dharma.create(vision);",
      "performance.optimize() > competition.beat();",
      "client.satisfaction = Math.max(expectations);",
      "while(improving) { quality++; }"
    ],
    interval: 2000,
    duration: 12000
  },

  // Configurações de scroll
  scroll: {
    threshold: 100,
    debounceDelay: 16
  },

  // Configurações de intersection observer
  observer: {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  },

  // Seletores DOM
  selectors: {
    navbar: '#navbar',
    mobileMenuBtn: '#mobile-menu-btn',
    mobileMenu: '#mobile-menu',
    codeLines: '#codeLines',
    serviceCards: '.service-card',
    techItems: '.tech-item',
    explanations: '.explanation'
  }
};

// ===== CLASSE PRINCIPAL REFATORADA =====
class DharmaApp {
  constructor() {
    this.isLoaded = false;
    this.observers = new Map();
    this.timers = new Map();
    this.elements = new Map();
    this.currentPage = this.detectCurrentPage();

    this.init();
  }

  detectCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('precos.html') || path.includes('pricing')) {
      return 'pricing';
    }
    return 'index';
  }

  async init() {
    try {
      console.log(`🌸 Iniciando Dharma Labs (${this.currentPage})...`);

      // Aguardar DOM
      if (document.readyState === 'loading') {
        await new Promise(resolve => {
          document.addEventListener('DOMContentLoaded', resolve);
        });
      }

      // Inicializar componentes base (todas as páginas)
      this.cacheElements();
      this.setupEventListeners();
      this.initializeSharedComponents();

      // Inicializar componentes específicos da página
      if (this.currentPage === 'index') {
        this.initializeIndexComponents();
      }

      this.isLoaded = true;
      console.log('✨ Dharma Labs carregado com sucesso!');

    } catch (error) {
      console.error('❌ Erro ao inicializar:', error);
    }
  }

  cacheElements() {
    Object.entries(DHARMA_CONFIG.selectors).forEach(([key, selector]) => {
      const element = document.querySelector(selector);
      if (element) {
        this.elements.set(key, element);
      }
    });
  }

  setupEventListeners() {
    // Funcionalidades compartilhadas
    this.setupSmoothScroll();
    this.setupMobileMenu();
    this.setupNavbarScroll();
    this.setupBackToTop();
    this.setupKeyboardNavigation();
    this.setupPerformanceObservers();
  }

  initializeSharedComponents() {
    // Componentes que funcionam em todas as páginas
    this.setupScrollAnimations();
    this.setupClientLogos();
    this.preloadCriticalResources();
  }

  initializeIndexComponents() {
    // Componentes específicos da index.html
    this.setupCardEffects();
    this.startAnimations();
  }

  startAnimations() {
    if (DHARMA_CONFIG.animations.enabled && this.currentPage === 'index') {
      this.startCodeAnimation();
      this.startFloatingParticles();
    }
  }

  // ===== NAVEGAÇÃO (COMPARTILHADA) =====
  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // Calcular offset considerando altura do navbar fixo
          const navbar = this.elements.get('navbar');
          const navbarHeight = navbar ? navbar.offsetHeight : 80;
          const offsetTop = targetElement.offsetTop - navbarHeight + 140;

          window.scrollTo({
            top: Math.max(0, offsetTop),
            behavior: 'smooth'
          });

          this.trackEvent('navigation', 'anchor_click', targetId);
        }
      });
    });
  }

  setupMobileMenu() {
    const mobileMenuBtn = this.elements.get('mobileMenuBtn');
    const mobileMenu = this.elements.get('mobileMenu');

    if (!mobileMenuBtn || !mobileMenu) return;

    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');

      if (isOpen) {
        this.closeMobileMenu();
      } else {
        this.openMobileMenu();
      }
    });

    // Fechar menu ao clicar em link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        this.closeMobileMenu();
      });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
      if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        this.closeMobileMenu();
      }
    });
  }

  openMobileMenu() {
    const mobileMenu = this.elements.get('mobileMenu');
    if (!mobileMenu) return;

    mobileMenu.classList.remove('hidden');
    mobileMenu.style.opacity = '0';
    mobileMenu.style.transform = 'translateY(-10px)';

    requestAnimationFrame(() => {
      mobileMenu.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      mobileMenu.style.opacity = '1';
      mobileMenu.style.transform = 'translateY(0)';
    });

    this.trackEvent('ui', 'mobile_menu_open');
  }

  closeMobileMenu() {
    const mobileMenu = this.elements.get('mobileMenu');
    if (!mobileMenu) return;

    mobileMenu.style.opacity = '0';
    mobileMenu.style.transform = 'translateY(-10px)';

    setTimeout(() => {
      mobileMenu.classList.add('hidden');
    }, 300);
  }

  // ===== NAVBAR (COMPARTILHADA) =====
  setupNavbarScroll() {
    const navbar = this.elements.get('navbar');
    if (!navbar) return;

    // Configurar tabs de preços se existir
    this.setupPricingTabs();

    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = DHARMA_CONFIG.scroll.threshold;

      if (currentScrollY > scrollThreshold) {
        navbar.classList.add('bg-white/95', 'backdrop-blur-sm', 'border-b', 'border-gray-200');
      } else {
        navbar.classList.remove('bg-white/95', 'backdrop-blur-sm', 'border-b', 'border-gray-200');
        navbar.classList.add('bg-white/95');
      }

      // Hide/show navbar baseado na direção do scroll
      const isNavbarHidden = currentScrollY > lastScrollY && currentScrollY > scrollThreshold * 2;

      if (isNavbarHidden) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }

      // Atualizar tabs de preços
      this.updatePricingTabs(currentScrollY, isNavbarHidden);

      lastScrollY = currentScrollY;
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    }, { passive: true });
  }

  // ===== SISTEMA DE TABS DE PREÇOS =====
  setupPricingTabs() {
    const pricingTabs = document.querySelector('.pricing-navigation-tabs');
    if (!pricingTabs) return;

    // Salvar referência
    this.elements.set('pricingTabs', pricingTabs);

    // Configurar estado inicial
    pricingTabs.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
  }

  updatePricingTabs(currentScrollY, isNavbarHidden) {
    const pricingTabs = this.elements.get('pricingTabs');
    if (!pricingTabs) return;

    // Detectar seção de pricing content
    const pricingSection = document.querySelector('#precos, .pricing-content-section');
    const pricingContent = document.querySelector('.pricing-content, [class*="py-20"][class*="bg-gray-50"]');

    if (!pricingSection && !pricingContent) return;

    // Calcular posições
    const targetSection = pricingContent || pricingSection;
    const sectionTop = targetSection.offsetTop;
    const sectionBottom = sectionTop + targetSection.offsetHeight;
    const tabsHeight = pricingTabs.offsetHeight;
    const navbarHeight = 64; // altura do navbar

    // Determinar se está na seção de pricing
    const isInPricingSection = currentScrollY >= (sectionTop - navbarHeight - tabsHeight) &&
      currentScrollY <= (sectionBottom - window.innerHeight * 0.3);

    if (isInPricingSection) {
      // Mostrar tabs
      pricingTabs.style.opacity = '1';
      pricingTabs.style.pointerEvents = 'auto';
      pricingTabs.style.visibility = 'visible';

      // Posicionar baseado no estado do navbar
      if (isNavbarHidden) {
        // Navbar escondido: tabs sobem para o topo
        pricingTabs.style.top = '0px';
        pricingTabs.style.zIndex = '45'; // Abaixo do navbar mas acima do conteúdo
      } else {
        // Navbar visível: tabs ficam abaixo
        pricingTabs.style.top = `${navbarHeight}px`;
        pricingTabs.style.zIndex = '40';
      }
    } else {
      // Fora da seção: esconder tabs
      pricingTabs.style.opacity = '0';
      pricingTabs.style.pointerEvents = 'none';
      pricingTabs.style.visibility = 'hidden';
    }
  }

  // ===== BOTÃO VOLTAR AO TOPO (COMPARTILHADO) =====
  setupBackToTop() {
    // Criar botão dinamicamente
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'backToTop';
    backToTopBtn.innerHTML = `
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    `;

    // Estilos do botão
    backToTopBtn.className = `
      fixed bottom-6 right-4 z-50
      bg-gradient-to-r from-accent-500 to-primary-600
      text-white p-4 rounded-full shadow-lg
      transition-all duration-300 transform
      hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-400/30
      opacity-0 pointer-events-none
    `.replace(/\s+/g, ' ').trim();

    // Adicionar ao DOM
    document.body.appendChild(backToTopBtn);

    // Função para mostrar/esconder o botão
    let ticking = false;
    const toggleBackToTop = () => {
      const scrollY = window.scrollY;
      const showThreshold = 300;

      if (scrollY > showThreshold) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.pointerEvents = 'auto';
        backToTopBtn.style.transform = 'translateY(0) scale(1)';
      } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.pointerEvents = 'none';
        backToTopBtn.style.transform = 'translateY(10px) scale(0.8)';
      }

      ticking = false;
    };

    // Event listeners
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(toggleBackToTop);
        ticking = true;
      }
    }, { passive: true });

    // Click do botão
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();

      // Scroll suave para o topo
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

      // Analytics
      this.trackEvent('ui', 'back_to_top_click');

      // Efeito visual no clique
      backToTopBtn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        backToTopBtn.style.transform = 'scale(1)';
      }, 150);
    });

    // Logo scroll top (se existir)
    document.getElementById('logo-scroll-top')?.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

      // Analytics (opcional)
      if (typeof gtag !== 'undefined') {
        gtag('event', 'logo_click_scroll_top', {
          event_category: 'navigation'
        });
      }
    });

    // Salvar referência
    this.elements.set('backToTop', backToTopBtn);
  }

  // ===== ANIMAÇÕES COMPARTILHADAS =====
  setupScrollAnimations() {
    const observerOptions = {
      threshold: DHARMA_CONFIG.observer.threshold,
      rootMargin: DHARMA_CONFIG.observer.rootMargin
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateElement(entry.target);
        }
      });
    }, observerOptions);

    // Observar elementos animáveis
    const animatableElements = document.querySelectorAll(
      '.service-card, .tech-item, .animate-reveal, [data-animate], .pricing-card'
    );

    animatableElements.forEach((element, index) => {
      // Configurar estado inicial
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`;

      observer.observe(element);
    });

    this.observers.set('scroll', observer);
  }

  animateElement(element) {
    if (element.dataset.animated) return;

    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
    element.dataset.animated = 'true';
  }

  // ===== COMPONENTES ESPECÍFICOS DA INDEX =====
  setupCardEffects() {
    const cards = document.querySelectorAll(DHARMA_CONFIG.selectors.serviceCards);

    cards.forEach(card => {
      // Hover effects
      card.addEventListener('mouseenter', () => {
        if (!DHARMA_CONFIG.animations.enabled) return;

        card.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        card.style.transform = 'translateY(-12px) scale(1.02)';
        card.style.boxShadow = '0 20px 60px rgba(74, 222, 128, 0.3)';
      });

      card.addEventListener('mouseleave', () => {
        if (!DHARMA_CONFIG.animations.enabled) return;

        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '0 4px 20px rgba(74, 222, 128, 0.1)';
      });

      // Click analytics
      card.addEventListener('click', () => {
        const cardTitle = card.querySelector('h3')?.textContent || 'unknown';
        this.trackEvent('engagement', 'card_click', cardTitle);
      });
    });
  }

  startCodeAnimation() {
    const codeContainer = this.elements.get('codeLines');
    if (!codeContainer) return;

    const createCodeLine = () => {
      const lines = DHARMA_CONFIG.codeAnimation.lines;
      const randomLine = lines[Math.floor(Math.random() * lines.length)];

      const line = document.createElement('div');
      line.className = 'absolute pointer-events-none z-1';
      line.textContent = randomLine;

      // Estilos da linha
      line.style.top = `${Math.random() * 80 + 10}%`;
      line.style.left = '-200px';
      line.style.color = Math.random() > 0.5 ? '#4ade80' : '#a855f7';
      line.style.fontSize = `${Math.random() * 4 + 10}px`;
      line.style.opacity = Math.random() * 0.3 + 0.2;
      line.style.fontFamily = 'Monaco, Menlo, Ubuntu Mono, monospace';
      line.style.whiteSpace = 'nowrap';

      codeContainer.appendChild(line);

      // Animar
      requestAnimationFrame(() => {
        line.style.transition = `all ${DHARMA_CONFIG.codeAnimation.duration}ms linear`;
        line.style.left = `${window.innerWidth + 200}px`;
      });

      // Remover após animação
      setTimeout(() => {
        if (line.parentNode) {
          line.parentNode.removeChild(line);
        }
      }, DHARMA_CONFIG.codeAnimation.duration);
    };

    // Iniciar animação contínua
    const timer = setInterval(createCodeLine, DHARMA_CONFIG.codeAnimation.interval);
    this.timers.set('codeAnimation', timer);
  }

  startFloatingParticles() {
    const particles = document.querySelectorAll('.floating-particle');

    particles.forEach((particle, index) => {
      if (!DHARMA_CONFIG.animations.enabled) return;

      particle.style.animationDelay = `${index * 0.5}s`;
      particle.style.animationDuration = `${6 + Math.random() * 4}s`;
    });
  }

  // ===== ACESSIBILIDADE (COMPARTILHADA) =====
  setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });

    // Escape para fechar menu mobile
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeMobileMenu();
      }
    });
  }

  // ===== PERFORMANCE (COMPARTILHADA) =====
  setupPerformanceObservers() {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP:', entry.startTime);
            }
          });
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.warn('Performance Observer not supported');
      }
    }
  }

  preloadCriticalResources() {
    const criticalImages = [
      './assets/images/logos/dharma-labs-main.svg',
      './assets/images/logos/flower-of-life.svg',
      './assets/images/logos/metatron-cube.svg',
      './assets/images/logos/mandala-digital.svg',
      './assets/images/logos/sri-yantra.svg',
      './assets/images/logos/fibonacci-spiral.svg',
      './assets/images/logos/torus-quantum.svg'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }

  // ===== ANALYTICS (COMPARTILHADA) =====
  trackEvent(category, action, label = '') {
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: category,
        event_label: label,
        custom_parameter: 'dharma_labs'
      });
    }
    console.log(`📊 Event: ${category} > ${action} > ${label}`);
  }

  // ===== CLIENT LOGOS CAROUSEL =====
  setupClientLogos() {
    const clientLogosContainer = document.getElementById('client-logos-page');
    if (!clientLogosContainer) return;

    // Logos de clientes reais e mocks
    const clientLogos = [
      {
        name: 'ICI',
        logo: './assets/images/logos/clientes/ici.png',
        url: '/cases/ici.html',
        isCaseStudy: true
      },
      // Adicione mais logos reais aqui seguindo o padrão:
      // {
      //   name: 'NomeCliente',
      //   logo: './assets/images/portfolio/nome-arquivo.png',
      //   url: 'https://site-cliente.com', // OU '/cases/nome-cliente.html'
      //   isCaseStudy: false // true para cases, false para sites externos
      // },

      // Mocks temporários (remover quando tiver logos reais)
      { name: 'ICI', logo: './assets/images/logos/clientes/ici.png', url: '/cases/ici.html', isCaseStudy: true },
      { name: 'ICI', logo: './assets/images/logos/clientes/ici.png', url: '/cases/ici.html', isCaseStudy: true },
      { name: 'ICI', logo: './assets/images/logos/clientes/ici.png', url: '/cases/ici.html', isCaseStudy: true },
      { name: 'ICI', logo: './assets/images/logos/clientes/ici.png', url: '/cases/ici.html', isCaseStudy: true },
      { name: 'ICI', logo: './assets/images/logos/clientes/ici.png', url: '/cases/ici.html', isCaseStudy: true },
      { name: 'ICI', logo: './assets/images/logos/clientes/ici.png', url: '/cases/ici.html', isCaseStudy: true },
      { name: 'ICI', logo: './assets/images/logos/clientes/ici.png', url: '/cases/ici.html', isCaseStudy: true }
    ];

    // Duplicar logos para efeito infinito
    const duplicatedLogos = [...clientLogos, ...clientLogos];

    // Gerar HTML dos logos
    const logosHTML = duplicatedLogos.map((client) => `
      <a href="${client.url}"
         class="client-logo ${client.isCaseStudy ? 'case-study-logo' : ''}"
         data-client="${client.name}"
         data-is-case="${client.isCaseStudy || false}"
         title="${client.isCaseStudy ? 'Ver case: ' : 'Ver projeto: '}${client.name}"
         ${!client.isCaseStudy ? 'target="_blank" rel="noopener noreferrer"' : ''}>
        <div class="logo-container">
          <img src="${client.logo}" alt="${client.name}" loading="lazy" />
          ${client.isCaseStudy ? '<div class="case-badge">Ver Case</div>' : ''}
        </div>
      </a>
    `).join('');

    clientLogosContainer.innerHTML = logosHTML;

    // Adicionar event listeners para analytics
    clientLogosContainer.querySelectorAll('.client-logo').forEach(logo => {
      logo.addEventListener('click', (e) => {
        const clientName = e.currentTarget.getAttribute('data-client');
        this.trackEvent('portfolio', 'client_logo_click', clientName);
      });
    });

    console.log('🏢 Client logos carousel inicializado');
  }

  // ===== CLEANUP =====
  destroy() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
    this.timers.forEach(timer => clearInterval(timer));
    this.timers.clear();
    this.elements.clear();
    console.log('🧹 Dharma Labs cleanup completo');
  }
}

// ===== INICIALIZAÇÃO GLOBAL =====
let dharmaApp;

// Inicializar quando DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    dharmaApp = new DharmaApp();
  });
} else {
  dharmaApp = new DharmaApp();
}

// Exportar para uso global
window.DharmaApp = DharmaApp;

// Logs de inicialização
console.log('🌸 Dharma Labs - Tecnologia com Propósito');
console.log('⚡ JavaScript principal carregado com sucesso!');

// Configurar TailwindCSS se disponível
if (typeof tailwind !== 'undefined') {
  console.log('🎨 TailwindCSS configurado!');
}