/**
 * DHARMA LABS - PRICING CONFIG
 * Apenas funcionalidades específicas da página de preços
 * Funcionalidades compartilhadas foram movidas para scripts.js
 */

// ===== DADOS DE PREÇOS =====
const PRICING_DATA = {
  sites: {
    landingPage: {
      name: "Landing Page",
      subtitle: "Página única de conversão",
      development: 890,
      originalPrice: 1500,
      monthly: 29,
      popular: false,
      icon: "flower-of-life.svg",
      features: [
        "1 página otimizada",
        "Design responsivo moderno",
        "Formulário de contato/leads",
        "Integração Google Analytics",
        "Otimização SEO básica",
        "Hospedagem + SSL inclusos",
        "Suporte via ticket"
      ]
    },
    siteVitrine: {
      name: "Site Vitrine",
      subtitle: "Perfeito para negócios locais",
      development: 1890,
      originalPrice: 3500,
      monthly: 39,
      popular: true,
      icon: "mandala-digital.svg",
      features: [
        "Até 5 páginas responsivas",
        "Design moderno e profissional",
        "Otimização SEO completa",
        "Formulário de contato avançado",
        "Blog integrado (opcional)",
        "Hospedagem + SSL inclusos",
        "Analytics e monitoramento",
        "Suporte via ticket"
      ]
    },
    siteCompleto: {
      name: "Site Completo",
      subtitle: "Solução empresarial robusta",
      development: 3490,
      originalPrice: 6000,
      monthly: 59,
      popular: false,
      icon: "sri-yantra.svg",
      features: [
        "Até 15 páginas + blog",
        "Design exclusivo premium",
        "SEO avançado + sitemap",
        "Múltiplos formulários",
        "Área de downloads/recursos",
        "Integração redes sociais",
        "Newsletter automatizada",
        "Suporte prioritário"
      ]
    }
  },
  sistemas: {
    crmSimples: {
      name: "CRM Simples",
      subtitle: "Gestão básica de clientes",
      development: 4890,
      originalPrice: 8500,
      monthly: 89,
      popular: true,
      icon: "metatron-cube.svg",
      features: [
        "Cadastro de clientes/leads",
        "Histórico de interações",
        "Controle de vendas básico",
        "Relatórios simples",
        "Usuários limitados (até 3)",
        "Backup automático",
        "Suporte via ticket"
      ]
    },
    sistemaGestao: {
      name: "Sistema de Gestão",
      subtitle: "ERP simplificado completo",
      development: 7890,
      originalPrice: 15000,
      monthly: 149,
      popular: false,
      icon: "torus-quantum.svg",
      features: [
        "Gestão completa de clientes",
        "Controle de estoque/produtos",
        "Financeiro (contas a pagar/receber)",
        "Relatórios avançados",
        "Múltiplos usuários (até 10)",
        "API para integrações",
        "Dashboard executivo",
        "Suporte prioritário"
      ]
    },
    plataformaPersonalizada: {
      name: "Plataforma Personalizada",
      subtitle: "Desenvolvimento sob medida",
      development: 12890,
      originalPrice: 25000,
      monthly: 249,
      popular: false,
      icon: "fibonacci-spiral.svg",
      features: [
        "Desenvolvimento 100% personalizado",
        "Integração com sistemas externos",
        "Workflow automatizado",
        "Relatórios customizados",
        "Usuários ilimitados",
        "API completa + documentação",
        "Mobile app integrado",
        "Suporte dedicado 24/7"
      ]
    }
  },
  dashboards: {
    dashboardBasico: {
      name: "Dashboard Básico",
      subtitle: "Visualização de dados simples",
      development: 2490,
      originalPrice: 4500,
      monthly: 49,
      popular: true,
      icon: "mandala-digital.svg",
      features: [
        "Até 5 fontes de dados",
        "Gráficos básicos (pizza, barra, linha)",
        "Filtros simples por período",
        "Exportação PDF/Excel",
        "Atualização manual de dados",
        "1 usuário de acesso",
        "Suporte via ticket"
      ]
    },
    biAvancado: {
      name: "BI Avançado",
      subtitle: "Business Intelligence completo",
      development: 4890,
      originalPrice: 9000,
      monthly: 99,
      popular: false,
      icon: "metatron-cube.svg",
      features: [
        "Fontes de dados ilimitadas",
        "Gráficos avançados e interativos",
        "Filtros dinâmicos complexos",
        "Alertas automáticos",
        "Agendamento de relatórios",
        "Até 5 usuários",
        "API para integração",
        "Suporte prioritário"
      ]
    },
    analisePreditiva: {
      name: "Análise Preditiva",
      subtitle: "IA e Machine Learning",
      development: 8890,
      originalPrice: 16000,
      monthly: 189,
      popular: false,
      icon: "torus-quantum.svg",
      features: [
        "Algoritmos de ML integrados",
        "Previsões e tendências",
        "Análise de padrões avançada",
        "Dashboards em tempo real",
        "Integração com big data",
        "Usuários ilimitados",
        "Consultoria estratégica inclusa",
        "Suporte dedicado"
      ]
    }
  },
  apps: {
    appBasico: {
      name: "App Básico",
      subtitle: "Aplicativo simples multiplataforma",
      development: 5890,
      originalPrice: 12000,
      monthly: 99,
      popular: true,
      icon: "sri-yantra.svg",
      features: [
        "Android + iOS (Flutter)",
        "Até 5 telas/funcionalidades",
        "Design responsivo nativo",
        "Integração com backend simples",
        "Push notifications básicas",
        "Publicação nas stores",
        "Suporte via ticket"
      ]
    },
    appComercial: {
      name: "App Comercial",
      subtitle: "Solução robusta para negócios",
      development: 9890,
      originalPrice: 18000,
      monthly: 159,
      popular: false,
      icon: "metatron-cube.svg",
      features: [
        "Funcionalidades avançadas",
        "Integração com sistemas web",
        "Login/cadastro de usuários",
        "Pagamentos integrados",
        "Analytics detalhado",
        "Notificações personalizadas",
        "Versionamento automático",
        "Suporte prioritário"
      ]
    },
    appPersonalizado: {
      name: "App Personalizado",
      subtitle: "Desenvolvimento sob medida",
      development: 15890,
      originalPrice: 30000,
      monthly: 249,
      popular: false,
      icon: "fibonacci-spiral.svg",
      features: [
        "Desenvolvimento 100% customizado",
        "Integração complexa com APIs",
        "Funcionalidades offline",
        "Geolocalização avançada",
        "Machine Learning integrado",
        "Múltiplas integrações",
        "Consultoria de UX/UI",
        "Suporte dedicado 24/7"
      ]
    }
  },
  automacao: {
    integracaoBasica: {
      name: "Integração Básica",
      subtitle: "Conecte seus sistemas",
      development: 1890,
      originalPrice: 3500,
      monthly: 39,
      popular: true,
      icon: "fibonacci-spiral.svg",
      features: [
        "Integração entre 2 sistemas",
        "Sincronização de dados básica",
        "Webhooks simples",
        "Logs de execução",
        "Execução agendada",
        "Tratamento de erros básico",
        "Suporte via ticket"
      ]
    },
    automacaoProcessos: {
      name: "Automação de Processos",
      subtitle: "Workflows inteligentes",
      development: 3490,
      originalPrice: 6500,
      monthly: 69,
      popular: false,
      icon: "torus-quantum.svg",
      features: [
        "Múltiplas integrações",
        "Workflows complexos",
        "Triggers automáticos",
        "Processamento de arquivos",
        "Notificações automáticas",
        "Dashboard de monitoramento",
        "API personalizada",
        "Suporte prioritário"
      ]
    },
    rpaAvancado: {
      name: "RPA Avançado",
      subtitle: "Robotic Process Automation",
      development: 6890,
      originalPrice: 12000,
      monthly: 129,
      popular: false,
      icon: "metatron-cube.svg",
      features: [
        "Automação de tarefas complexas",
        "Integração com sistemas legados",
        "IA para tomada de decisões",
        "Processamento de documentos",
        "Bots inteligentes",
        "Métricas de performance",
        "Escalabilidade automática",
        "Consultoria especializada"
      ]
    }
  },
  email: {
    emailSimples: {
      name: "Email Simples",
      subtitle: "Solução básica do provedor",
      development: 290,
      originalPrice: 500,
      monthly: 19,
      popular: true,
      icon: "flower-of-life.svg",
      features: [
        "Até 5 contas de email",
        "Domínio personalizado",
        "Webmail básico",
        "Configuração IMAP/POP3",
        "Antispam básico",
        "Suporte via ticket"
      ]
    },
    googleWorkspace: {
      name: "Google Workspace",
      subtitle: "Solução profissional completa",
      development: 490,
      originalPrice: 800,
      monthly: 35,
      popular: false,
      icon: "mandala-digital.svg",
      features: [
        "Gmail profissional",
        "Google Drive (30GB/usuário)",
        "Google Meet integrado",
        "Calendário compartilhado",
        "Docs, Planilhas, Apresentações",
        "Configuração completa",
        "Treinamento da equipe",
        "Suporte Google + nosso"
      ]
    },
    suitePremium: {
      name: "Suíte Premium",
      subtitle: "Microsoft 365 + extras",
      development: 690,
      originalPrice: 1200,
      monthly: 49,
      popular: false,
      icon: "sri-yantra.svg",
      features: [
        "Microsoft 365 completo",
        "Outlook + OneDrive",
        "Teams + SharePoint",
        "Office completo online",
        "Segurança avançada",
        "Backup automático",
        "Migração de dados",
        "Suporte especializado"
      ]
    }
  },
  consultoria: {
    consultoriaGeral: {
      name: "Consultoria Geral",
      subtitle: "Orientação tecnológica",
      development: 0,
      originalPrice: 0,
      monthly: 0,
      hourly: 120,
      popular: true,
      icon: "torus-quantum.svg",
      features: [
        "Análise de requisitos",
        "Arquitetura de sistemas",
        "Escolha de tecnologias",
        "Planejamento de projetos",
        "Code review e otimização",
        "Documentação técnica",
        "Suporte a decisões estratégicas"
      ]
    },
    testesAutomatizados: {
      name: "Testes Automatizados",
      subtitle: "QA e automação de testes",
      development: 2490,
      originalPrice: 4500,
      monthly: 79,
      hourly: 140,
      popular: false,
      icon: "metatron-cube.svg",
      features: [
        "Implementação de testes unitários",
        "Testes de integração",
        "Testes end-to-end (E2E)",
        "Automação com Selenium/Cypress",
        "CI/CD pipeline completo",
        "Relatórios de cobertura",
        "Treinamento da equipe QA",
        "Consultoria em QA"
      ]
    },
    auditoriaTecnica: {
      name: "Auditoria Técnica",
      subtitle: "Análise completa de sistemas",
      development: 1890,
      originalPrice: 3500,
      monthly: 0,
      hourly: 160,
      popular: false,
      icon: "fibonacci-spiral.svg",
      features: [
        "Auditoria de código fonte",
        "Análise de segurança",
        "Performance e otimização",
        "Conformidade com padrões",
        "Relatório detalhado",
        "Plano de melhorias",
        "Estimativas de correção",
        "Acompanhamento pós-auditoria"
      ]
    }
  }
};

// ===== CLASSE PARA GERENCIAR PREÇOS =====
class PricingManager {
  constructor() {
    this.activeTab = 'sites';
    this.init();
  }

  init() {
    console.log('💰 Inicializando sistema de preços...');

    // Aguardar DOM se necessário
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.setupPricingComponents();
      });
    } else {
      this.setupPricingComponents();
    }
  }

  setupPricingComponents() {
    this.setupTabs();
    this.setupTabIndicator();
    this.setupFAQ();
    this.renderInitialCards();
    this.setupCardAnimations();
    this.setupScrollIndicators();

    console.log('✨ Sistema de preços ativo!');

  }

  // ===== SISTEMA DE TABS =====
  setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        this.switchTab(targetTab, tabButtons, tabContents);
      });
    });

    // Set initial active tab
    const initialButton = document.querySelector('.tab-button[data-tab="sites"]');
    if (initialButton) {
      this.setActiveTab(initialButton);
    }
  }

  setupTabIndicator() {
    const tabsContainer = document.getElementById('tabs-container');
    const indicator = document.getElementById('tab-indicator');

    if (!tabsContainer || !indicator) return;

    const getActiveButton = () => document.querySelector('.tab-button.active');

    const updateIndicator = () => {
      const activeButton = getActiveButton();
      if (!activeButton) return;

      // Usa posição absoluta do botão dentro do container
      const buttonOffsetLeft = activeButton.offsetLeft;
      const buttonWidth = activeButton.offsetWidth;

      indicator.style.width = `${buttonWidth}px`;
      indicator.style.left = `${buttonOffsetLeft - tabsContainer.scrollLeft}px`;
    };

    // Atualiza posição inicial
    setTimeout(updateIndicator, 100);

    // Atualiza ao trocar de aba
    document.addEventListener('tabChanged', () => {
      updateIndicator();
    });

    // Atualiza ao rolar o container
    tabsContainer.addEventListener('scroll', () => {
      requestAnimationFrame(updateIndicator);
    });
  }



  switchTab(targetTab, tabButtons, tabContents) {
    // Remove active class from all buttons and contents
    tabButtons.forEach(btn => {
      btn.classList.remove('active', 'bg-primary-600', 'text-white');
      btn.classList.add('text-gray-600', 'hover:text-primary-600');
    });

    tabContents.forEach(content => {
      content.classList.remove('active');
      content.classList.add('hidden');
    });

    // Add active class to clicked button and corresponding content
    const activeButton = document.querySelector(`[data-tab="${targetTab}"]`);
    if (activeButton) {
      this.setActiveTab(activeButton);
    }

    const targetContent = document.getElementById(`tab-${targetTab}`);
    if (targetContent) {
      targetContent.classList.add('active');
      targetContent.classList.remove('hidden');
    }

    document.dispatchEvent(new CustomEvent('tabChanged', {
      detail: { activeTab: targetTab }
    }));

    // Render cards for the active tab
    this.renderCategoryCards(targetTab);
    this.activeTab = targetTab;

    // Re-setup animations for new cards
    setTimeout(() => {
      this.setupCardAnimations();
    }, 100);
  }

  setupScrollIndicators() {
    Object.keys(PRICING_DATA).forEach(category => {
      this.createScrollIndicators(category);
    });
  }

  createScrollIndicators(category) {
    const cardsContainer = document.getElementById(`${category}-cards`);
    const indicatorsContainer = document.getElementById(`${category}-indicators`);

    if (!cardsContainer || !indicatorsContainer) return;

    const services = Object.values(PRICING_DATA[category]);

    // Criar indicadores
    indicatorsContainer.innerHTML = services.map((_, index) =>
      `<div class="scroll-indicator ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`
    ).join('');

    // Configurar scroll listeners
    cardsContainer.addEventListener('scroll', () => {
      this.updateScrollIndicators(category);
    });

    // Configurar click nos indicadores
    indicatorsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('scroll-indicator')) {
        const index = parseInt(e.target.dataset.index);
        const cardWidth = 320; // Largura do card + gap
        cardsContainer.scrollTo({
          left: index * (cardWidth + 16),
          behavior: 'smooth'
        });
      }
    });
  }

  updateScrollIndicators(category) {
    const cardsContainer = document.getElementById(`${category}-cards`);
    const indicators = document.querySelectorAll(`#${category}-indicators .scroll-indicator`);

    if (!cardsContainer || !indicators.length) return;

    const cardWidth = 336; // 320px + 16px gap
    const scrollLeft = cardsContainer.scrollLeft;
    const activeIndex = Math.round(scrollLeft / cardWidth);

    indicators.forEach((indicator, index) => {
      if (index === activeIndex) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }

  setActiveTab(button) {
    button.classList.add('active', 'bg-primary-600', 'text-white');
    button.classList.remove('text-gray-600', 'hover:text-primary-600');
  }

  // ===== GERAÇÃO DE CARDS =====
  createPricingCard(service, category) {
    const borderColors = {
      sites: service.popular ? 'border-accent-500' : 'border-primary-500',
      sistemas: service.popular ? 'border-highlight-500' : 'border-primary-500',
      dashboards: service.popular ? 'border-primary-500' : 'border-accent-500',
      apps: service.popular ? 'border-accent-500' : 'border-highlight-500',
      automacao: service.popular ? 'border-accent-500' : 'border-highlight-500',
      email: service.popular ? 'border-primary-500' : 'border-accent-500',
      consultoria: service.popular ? 'border-accent-500' : 'border-primary-500'
    };

    const ctaColors = {
      sites: service.popular ? 'from-accent-500 to-primary-600' : 'from-primary-500 to-primary-600',
      sistemas: service.popular ? 'from-highlight-500 to-highlight-600' : 'from-primary-500 to-primary-600',
      dashboards: service.popular ? 'from-primary-500 to-primary-600' : 'from-accent-500 to-accent-600',
      apps: service.popular ? 'from-accent-500 to-primary-600' : 'from-highlight-500 to-highlight-600',
      automacao: service.popular ? 'from-accent-500 to-primary-600' : 'from-highlight-500 to-highlight-600',
      email: service.popular ? 'from-primary-500 to-primary-600' : 'from-accent-500 to-accent-600',
      consultoria: service.popular ? 'from-accent-500 to-primary-600' : 'from-primary-500 to-primary-600'
    };

    return `
    <div class="pricing-card pricing-card-horizontal bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-t-4 ${borderColors[category]} relative overflow-hidden group snap-start">
      ${service.popular ? `
        <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div class="bg-accent-500 text-white px-4 py-1 rounded-full text-xs font-bold">
            🔥 MAIS POPULAR
          </div>
        </div>
      ` : ''}

      <div class="${service.popular ? 'pt-2' : ''}">
        <div class="flex items-center mb-6">
          <div class="p-2 bg-accent-100 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
            <img src="./assets/images/logos/${service.icon}" alt="${service.name}" class="w-8 h-8"/>
          </div>
          <div>
            <h3 class="text-lg font-bold text-primary-900">${service.name}</h3>
            <p class="text-gray-600 text-sm">${service.subtitle}</p>
          </div>
        </div>

        <div class="mb-6">
          ${service.development > 0 ? `
            <div class="flex items-baseline mb-2">
              ${service.originalPrice > service.development ? `<span class="text-sm text-gray-500 line-through mr-2">R$ ${service.originalPrice.toLocaleString()}</span>` : ''}
              <span class="text-2xl font-bold text-primary-900">R$ ${service.development.toLocaleString()}</span>
              <span class="text-gray-600 ml-2 text-sm">desenvolvimento</span>
            </div>
          ` : ''}

          ${service.monthly > 0 ? `
            <div class="flex items-center text-accent-600 font-semibold">
              <span class="text-base">+ R$ ${service.monthly}/mês</span>
              <span class="text-xs ml-2 bg-accent-100 px-2 py-1 rounded">manutenção</span>
            </div>
          ` : ''}

          ${service.hourly ? `
            <div class="flex items-center text-primary-600 font-semibold">
              <span class="text-2xl font-bold">R$ ${service.hourly}</span>
              <span class="text-sm ml-2">por hora</span>
            </div>
          ` : ''}
        </div>

        <div class="space-y-3 mb-6">
          ${service.features.map(feature => `
            <div class="flex items-start space-x-2">
              <i class="fas fa-check text-accent-500 mt-1 text-sm"></i>
              <span class="text-gray-700 text-sm">${feature}</span>
            </div>
          `).join('')}
        </div>

        <button class="w-full bg-gradient-to-r ${ctaColors[category]} text-white py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300" onclick="window.open('https://wa.link/suwtio', '_blank')">
          ${service.development > 0 ? 'Solicitar Orçamento' : 'Contratar Serviço'}
        </button>
      </div>
    </div>
  `;
  }

  renderCategoryCards(category) {
    const container = document.getElementById(`${category}-cards`);
    if (!container || !PRICING_DATA[category]) return;

    const services = Object.values(PRICING_DATA[category]);
    container.innerHTML = services.map(service => this.createPricingCard(service, category)).join('');
  }

  renderInitialCards() {
    // Render cards for the initial active tab
    this.renderCategoryCards(this.activeTab);
  }

  // ===== FAQ FUNCTIONALITY =====
  setupFAQ() {
    const faqButtons = document.querySelectorAll('.faq-button');

    faqButtons.forEach(button => {
      button.addEventListener('click', function () {
        const faqId = this.getAttribute('data-faq');
        const content = document.getElementById(`faq-${faqId}`);
        const icon = this.querySelector('i');

        // Close all other FAQs
        faqButtons.forEach(otherButton => {
          if (otherButton !== this) {
            const otherFaqId = otherButton.getAttribute('data-faq');
            const otherContent = document.getElementById(`faq-${otherFaqId}`);
            const otherIcon = otherButton.querySelector('i');

            if (otherContent) otherContent.classList.add('hidden');
            if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
          }
        });

        // Toggle current FAQ
        if (content && content.classList.contains('hidden')) {
          content.classList.remove('hidden');
          if (icon) icon.style.transform = 'rotate(180deg)';
        } else if (content) {
          content.classList.add('hidden');
          if (icon) icon.style.transform = 'rotate(0deg)';
        }
      });
    });
  }

  // ===== ANIMAÇÕES DE CARDS =====
  setupCardAnimations() {
    // Esta função será chamada pelo observer do scripts.js
    // Apenas garantimos que os cards novos sejam observados
    if (window.dharmaApp && window.dharmaApp.observers) {
      const scrollObserver = window.dharmaApp.observers.get('scroll');
      if (scrollObserver) {
        document.querySelectorAll('.pricing-card').forEach((card, index) => {
          if (!card.hasAttribute('data-observed')) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`;
            card.setAttribute('data-observed', 'true');
            scrollObserver.observe(card);
          }
        });
      }
    }
  }

  // ===== UTILITIES =====
  trackEvent(category, action, label = '') {
    if (window.dharmaApp && typeof window.dharmaApp.trackEvent === 'function') {
      window.dharmaApp.trackEvent(category, action, label);
    }
  }
}

// ===== INICIALIZAÇÃO =====
let pricingManager;

// Inicializar o sistema de preços
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    pricingManager = new PricingManager();
  });
} else {
  pricingManager = new PricingManager();
}

// Exportar para uso global
window.PricingManager = PricingManager;
window.PRICING_DATA = PRICING_DATA;

console.log('💰 Pricing config carregado!');