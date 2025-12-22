/**
 * DHARMA LABS - PRICING CONFIG
 * Apenas funcionalidades específicas da página de preços
 */

// ===== DADOS DE PREÇOS =====
const PRICING_DATA = {
  // Sites sem suporte (apenas desenvolvimento)
  "sitesSemSuporte": {
    "landingPage": {
      "name": "Landing Page",
      "subtitle": "Página única de alta conversão - Apenas desenvolvimento",
      "originalPrice": 0,
      "development": 1200,
      "monthly": 0,
      "annual": 0,
      "popular": true,
      "orcamento": true,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Quem quer apenas o código e gerencia por conta própria",
      "deliveryTime": "7–15 dias úteis, mediante aprovação de estratégia e conteúdo",
      "features": [
        {
          "title": "Design moderno e responsivo",
          "description": "Layout que se adapta perfeitamente a qualquer dispositivo, otimizado para conversão"
        },
        {
          "title": "Formulário de contato integrado + Botão WhatsApp",
          "description": "Captura de leads enviados diretamente para seu e-mail/whatsapp, funcionando desde o primeiro dia"
        },
        {
          "title": "SEO + Google Analytics",
          "description": "Configuração para aparecer no Google + Analytics na conta do cliente"
        },
        {
          "title": "Código-fonte completo",
          "description": "Todo o código entregue para você hospedar onde quiser"
        },
        {
          "title": "Documentação técnica",
          "description": "Guia completo para instalação e personalização"
        },
      ],
      "support": [],
      "marketPosition": "Desenvolvimento completo sem compromisso mensal"
    },
    "siteInstitucional": {
      "name": "Site Institucional",
      "subtitle": "Presença online sólida - Apenas desenvolvimento",
      "originalPrice": 0,
      "development": 2800,
      "monthly": 0,
      "annual": 0,
      "popular": false,
      "orcamento": true,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Empresas que querem autonomia total sobre o projeto",
      "deliveryTime": "15–30 dias úteis, mediante aprovação de estratégia e conteúdo",
      "features": [
        {
          "title": "Todas as funcionalidades da Landing Page",
          "description": "Mantém todos os recursos anteriores e adiciona novas funcionalidades"
        },
        {
          "title": "Páginas otimizadas",
          "description": "Home, Sobre, Serviços, Contato, Portfólio - páginas otimizadas para SEO"
        },
        {
          "title": "Galeria de imagens/produtos",
          "description": "Showcase visual dos seus trabalhos, produtos, colaboradores ou instalações da empresa"
        },
        {
          "title": "Integração com Google Maps",
          "description": "Localização da empresa integrada para facilitar visitas dos clientes"
        },
        {
          "title": "Formulários de contato avançados + Botão WhatsApp",
          "description": "Múltiplas formas de captar leads, com formulários personalizados para diferentes serviços ou departamentos e botão que leva diretamente para o WhatsApp"
        },
        {
          "title": "Código-fonte completo",
          "description": "Todo o código entregue para você hospedar onde quiser"
        },
        {
          "title": "Documentação técnica",
          "description": "Guia completo para instalação e personalização"
        },
      ],
      "support": [],
      "marketPosition": "Desenvolvimento completo sem compromisso mensal"
    }
  },
  // Sites com suporte (desenvolvimento + hospedagem + suporte)
  "sitesSuporte": {
    "landingPage": {
      "name": "Landing Page",
      "subtitle": "Página única de alta conversão + Suporte",
      "originalPrice": 0,
      "development": 750,
      "monthly": 70,
      "annual": 0,
      "popular": true,
      "orcamento": true,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Captação rápida de leads com investimento justo",
      "deliveryTime": "7–15 dias úteis, mediante aprovação de estratégia e conteúdo",
      "features": [
        {
          "title": "Design moderno e responsivo",
          "description": "Layout que se adapta perfeitamente a qualquer dispositivo, otimizado para conversão"
        },
        {
          "title": "Formulário de contato integrado + Botão WhatsApp",
          "description": "Captura de leads enviados diretamente para seu e-mail/whatsapp, funcionando desde o primeiro dia"
        },
        {
          "title": "SEO + Google Analytics",
          "description": "Configuração para aparecer no Google + Analytics na conta do cliente com relatórios mensais"
        },
        {
          "title": "Hospedagem premium com SSL e manutenção",
          "description": "Hospedagem profissional com certificado de segurança e manutenção mensal incluída"
        },
        {
          "title": "5 contas de e-mail profissionais",
          "description": "E-mails personalizados no seu domínio (ex: contato@suaempresa.com.br)"
        },
      ],
      "support": [
        {
          "title": "Suporte técnico mensal (3 tickets)",
          "description": "Pequenos ajustes funcionais, correções e atualizações de conteúdo"
        }
      ],
      "marketPosition": "Até 60% mais barato que agências por entrega equivalente"
    },
    "siteInstitucional": {
      "name": "Site Institucional",
      "subtitle": "Presença online sólida para empresas + Suporte",
      "originalPrice": 0,
      "development": 1950,
      "monthly": 110,
      "annual": 0,
      "popular": false,
      "orcamento": true,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Empresas que precisam apresentar serviços e produtos de forma profissional",
      "deliveryTime": "15–30 dias úteis, mediante aprovação de estratégia e conteúdo",
      "features": [
        {
          "title": "Todas as funcionalidades da Landing Page",
          "description": "Mantém todos os recursos anteriores e adiciona novas funcionalidades"
        },
        {
          "title": "Páginas otimizadas",
          "description": "Home, Sobre, Serviços, Contato, Portfólio - páginas otimizadas para SEO"
        },
        {
          "title": "Galeria de imagens/produtos",
          "description": "Showcase visual dos seus trabalhos, produtos, colaboradores ou instalações da empresa"
        },
        {
          "title": "Integração com Google Maps",
          "description": "Localização da empresa integrada para facilitar visitas dos clientes"
        },
        {
          "title": "Formulários de contato avançados + Botão WhatsApp",
          "description": "Múltiplas formas de captar leads, com formulários personalizados para diferentes serviços ou departamentos e botão que leva diretamente para o WhatsApp"
        },
      ],
      "support": [
        {
          "title": "Suporte técnico mensal (5 tickets)",
          "description": "Pequenos ajustes funcionais, correções e atualizações de conteúdo"
        }
      ],
      "marketPosition": "Investimento justo para empresas que valorizam presença online profissional"
    }
  },
  // Sistemas sem suporte (apenas desenvolvimento)
  "sistemasSemSuporte": {
    "sistemaPersonalizado": {
      "name": "Sistema Personalizado",
      "subtitle": "Sistema web feito sob medida - Apenas desenvolvimento",
      "development": 5500,
      "monthly": 0,
      "annual": 0,
      "popular": false,
      "orcamento": true,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Empresas que querem autonomia total sobre o sistema",
      "deliveryTime": "30–60 dias úteis, mediante aprovação de estratégia e conteúdo",
      "features": [
        {
          "title": "Sistema desenvolvido especificamente para sua empresa",
          "description": "Cada funcionalidade pensada para resolver seus problemas únicos"
        },
        {
          "title": "Painel de controle simples e intuitivo",
          "description": "Interface amigável que qualquer pessoa da equipe consegue usar"
        },
        {
          "title": "Automatiza tarefas repetitivas do dia a dia",
          "description": "Elimina trabalho manual e reduz erros humanos"
        },
        {
          "title": "Importa dados de planilhas existentes",
          "description": "Migração dos dados atuais sem perda de informações"
        },
        {
          "title": "Exporta relatórios quando precisar",
          "description": "Relatórios customizados em PDF ou Excel"
        },
        {
          "title": "Banco de dados seguro e confiável",
          "description": "MySQL com estrutura completa e documentada"
        },
        {
          "title": "Código-fonte completo",
          "description": "Todo o código entregue para você hospedar onde quiser"
        },
        {
          "title": "Documentação técnica completa",
          "description": "Guia completo para instalação, configuração e manutenção"
        }
      ],
      "support": [],
      "marketPosition": "Desenvolvimento completo sem compromisso mensal"
    },
  },
  // Sistemas com suporte (desenvolvimento + hospedagem + suporte)
  "sistemasSuporte": {
    "sistemaPersonalizado": {
      "name": "Sistema Personalizado",
      "subtitle": "Sistema web feito sob medida para seu negócio + Suporte",
      "development": 3500,
      "monthly": 200,
      "annual": 0,
      "popular": false,
      "orcamento": true,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Empresas que precisam eliminar planilhas e automatizar processos",
      "deliveryTime": "30–60 dias úteis, mediante aprovação de estratégia e conteúdo",
      "features": [
        {
          "title": "Sistema desenvolvido especificamente para sua empresa",
          "description": "Cada funcionalidade pensada para resolver seus problemas únicos"
        },
        {
          "title": "Painel de controle simples e intuitivo",
          "description": "Interface amigável que qualquer pessoa da equipe consegue usar"
        },
        {
          "title": "Automatiza tarefas repetitivas do dia a dia",
          "description": "Elimina trabalho manual e reduz erros humanos"
        },
        {
          "title": "Importa dados de planilhas existentes",
          "description": "Migração dos dados atuais sem perda de informações"
        },
        {
          "title": "Exporta relatórios quando precisar",
          "description": "Relatórios customizados em PDF ou Excel"
        },
        {
          "title": "Banco de dados seguro e confiável",
          "description": "MySQL com backup automático e criptografia"
        },
        {
          "title": "Hospedagem premium com 5 contas de email profissionais",
          "description": "E-mails no domínio do sistema (1GB cada)"
        }
      ],
      "support": [
        {
          "title": "Suporte técnico mensal (8 horas)",
          "description": "Ajustes, melhorias e correções ilimitadas de bugs"
        }
      ],
      "marketPosition": "Solução personalizada 60% mais barata que desenvolvimento tradicional"
    },
  },

  // Dashboards sem suporte (apenas desenvolvimento)
  "dashboardsSemSuporte": {
    "dashboardWeb": {
      "name": "Dashboard Web",
      "subtitle": "Visualização inteligente dos seus dados - Apenas desenvolvimento",
      "development": 3500,
      "monthly": 0,
      "annual": 0,
      "popular": false,
      "orcamento": true,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Negócios que querem autonomia total sobre o dashboard",
      "deliveryTime": "15–30 dias úteis, mediante aprovação de estratégia e conteúdo",
      "features": [
        {
          "title": "Dashboard interativo desenvolvido em Python",
          "description": "Gráficos profissionais e relatórios automáticos"
        },
        {
          "title": "Conecta com qualquer fonte de dados",
          "description": "Excel, Google Sheets, MySQL, PostgreSQL ou APIs"
        },
        {
          "title": "Acesso web seguro com login",
          "description": "Visualize de qualquer dispositivo com segurança"
        },
        {
          "title": "Relatórios executivos automáticos",
          "description": "PDFs gerados automaticamente e enviados por email"
        },
        {
          "title": "Filtros e período personalizáveis",
          "description": "Analise dados por dia, semana, mês ou período específico"
        },
        {
          "title": "Alertas automáticos configuráveis",
          "description": "Receba notificações quando métricas importantes mudam"
        },
        {
          "title": "Código-fonte completo",
          "description": "Todo o código entregue para você hospedar onde quiser"
        },
        {
          "title": "Documentação técnica completa",
          "description": "Guia completo para instalação, configuração e manutenção"
        }
      ],
      "support": [],
      "marketPosition": "Desenvolvimento completo sem compromisso mensal"
    },
  },
  // Dashboards com suporte (desenvolvimento + hospedagem + suporte)
  "dashboardsSuporte": {
    "dashboardWeb": {
      "name": "Dashboard Web",
      "subtitle": "Visualização inteligente dos seus dados + Suporte",
      "development": 2200,
      "monthly": 200,
      "annual": 0,
      "popular": false,
      "orcamento": true,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Negócios que precisam transformar dados em decisões inteligentes",
      "deliveryTime": "15–30 dias úteis, mediante aprovação de estratégia e conteúdo",
      "features": [
        {
          "title": "Dashboard interativo desenvolvido em Python",
          "description": "Gráficos profissionais e relatórios automáticos"
        },
        {
          "title": "Conecta com qualquer fonte de dados",
          "description": "Excel, Google Sheets, MySQL, PostgreSQL ou APIs"
        },
        {
          "title": "Acesso web seguro com login",
          "description": "Visualize de qualquer dispositivo com segurança"
        },
        {
          "title": "Relatórios executivos automáticos",
          "description": "PDFs gerados automaticamente e enviados por email"
        },
        {
          "title": "Filtros e período personalizáveis",
          "description": "Analise dados por dia, semana, mês ou período específico"
        },
        {
          "title": "Alertas automáticos configuráveis",
          "description": "Receba notificações quando métricas importantes mudam"
        },
        {
          "title": "Hospedagem VPS dedicada inclusa",
          "description": "Servidor exclusivo para performance e segurança máxima"
        }
      ],
      "support": [
        {
          "title": "Suporte técnico mensal (6 horas)",
          "description": "Ajustes nos relatórios, novos gráficos e correções"
        }
      ],
      "marketPosition": "Funcionalidades enterprise 50% mais barato que Power BI Premium"
    },
  },
  "email": {
    "emailGratis": {
      "name": "E-mail Gratuito",
      "subtitle": "Incluso com hospedagem de Sites, Sistemas ou Dashboards",
      "development": 0,
      "monthly": 0,
      "annual": 0,
      "popular": false,
      "orcamento": false,
      "isEmail": true,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Clientes que já contratam outros serviços com hospedagem",
      "deliveryTime": "Entregue junto com o projeto",
      "features": [
        { "title": "5 contas de e-mail profissionais", "description": "E-mails personalizados no seu domínio (ex: contato@suaempresa.com.br)" },
        { "title": "1GB de armazenamento", "description": "Espaço básico para emails essenciais" },
        { "title": "Até 5 aliases de email", "description": "Receba e-mails por endereços diferentes" },
        { "title": "1 encaminhador de email", "description": "Redirecione emails automaticamente" },
        { "title": "Suporte POP3/IMAP", "description": "Configure no Outlook, Gmail ou celular" },
        { "title": "Até 15.000 mensagens", "description": "Limite de armazenamento de emails" },
        { "title": "100 emails por dia", "description": "Envio diário controlado" }
      ],
      "support": [
        {
          "title": "Configuração assistida inclusa", "description": "Te ajudamos a configurar em qualquer cliente de email"
        }
      ],
      "marketPosition": "Bônus exclusivo para clientes com hospedagem ativa"
    },
  }
};

// ===== CLASSE PARA GERENCIAR PREÇOS =====
class PricingManager {
  constructor() {
    this.activeTab = 'sitesSuporte';
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
    const initialButton = document.querySelector('.tab-button[data-tab="sitesSuporte"]');
    if (initialButton) {
      this.setActiveTab(initialButton);
    } else {
      // Fallback para primeira aba disponível
      const firstButton = document.querySelector('.tab-button');
      if (firstButton) {
        this.setActiveTab(firstButton);
      }
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

  scrollTabsToActive() {
    const tabsContainer = document.getElementById('tabs-container');
    const activeTab = document.querySelector('.tab-button.active');
    if (!tabsContainer || !activeTab) return;

    const containerRect = tabsContainer.getBoundingClientRect();
    const activeRect = activeTab.getBoundingClientRect();

    if (activeRect.left < containerRect.left) {
      // Tab está à esquerda do container visível — rolar para esquerda
      tabsContainer.scrollBy({
        left: activeRect.left - containerRect.left - 16, // margem extra
        behavior: 'smooth'
      });
    } else if (activeRect.right > containerRect.right) {
      // Tab está à direita do container visível — rolar para direita
      tabsContainer.scrollBy({
        left: activeRect.right - containerRect.right + 16, // margem extra
        behavior: 'smooth'
      });
    }
  }

  // ===== GERAÇÃO DE CARDS =====
  createPricingCard(service, category) {
    const borderColors = {
      sitesSemSuporte: service.popular ? 'border-highlight-500' : 'border-accent-500',
      sitesSuporte: service.popular ? 'border-highlight-500' : 'border-accent-500',
      biocards: service.popular ? 'border-accent-500' : 'border-primary-500',
      sistemasSemSuporte: service.popular ? 'border-primary-500' : 'border-highlight-500',
      sistemasSuporte: service.popular ? 'border-primary-500' : 'border-highlight-500',
      dashboardsSemSuporte: service.popular ? 'border-highlight-500' : 'border-accent-500',
      dashboardsSuporte: service.popular ? 'border-highlight-500' : 'border-accent-500',
      // apps: service.popular ? 'border-accent-500' : 'border-highlight-500',
      // automacao: service.popular ? 'border-accent-500' : 'border-highlight-500',
      email: service.popular ? 'border-accent-500' : 'border-primary-500',
      consultoria: service.popular ? 'border-primary-500' : 'border-highlight-500',
    };

    const bgColors = {
      sitesSemSuporte: 'bg-highlight-500',
      sitesSuporte: 'bg-highlight-500',
      biocards: 'bg-accent-500',
      sistemasSemSuporte: 'bg-primary-500',
      sistemasSuporte: 'bg-primary-500',
      dashboardsSemSuporte: 'bg-highlight-500',
      dashboardsSuporte: 'bg-highlight-500',
      // apps: 'bg-accent-500',
      // automacao: 'bg-accent-500',
      email: 'bg-accent-500',
      consultoria: 'bg-primary-500'
    }

    const bgColors100 = {
      sitesSemSuporte: 'bg-highlight-100',
      sitesSuporte: 'bg-highlight-100',
      biocards: 'bg-accent-100',
      sistemasSemSuporte: 'bg-primary-100',
      sistemasSuporte: 'bg-primary-100',
      dashboardsSemSuporte: 'bg-highlight-100',
      dashboardsSuporte: 'bg-highlight-100',
      // apps: 'bg-accent-500',
      // automacao: 'bg-accent-500',
      email: 'bg-accent-100',
      consultoria: 'bg-primary-100'
    }

    const ctaColors = {
      sitesSemSuporte: service.popular ? 'from-highlight-500 to-primary-600' : 'from-accent-500 to-primary-600',
      sitesSuporte: service.popular ? 'from-highlight-500 to-primary-600' : 'from-accent-500 to-primary-600',
      biocards: service.popular ? 'from-accent-500 to-highlight-600' : 'from-primary-500 to-highlight-600',
      sistemasSemSuporte: service.popular ? 'from-primary-500 to-accent-600' : 'from-highlight-500 to-accent-600',
      sistemasSuporte: service.popular ? 'from-primary-500 to-accent-600' : 'from-highlight-500 to-accent-600',
      dashboardsSemSuporte: service.popular ? 'from-highlight-500 to-primary-600' : 'from-accent-500 to-primary-600',
      dashboardsSuporte: service.popular ? 'from-highlight-500 to-primary-600' : 'from-accent-500 to-primary-600',
      // apps: service.popular ? 'from-accent-500 to-primary-600' : 'from-highlight-500 to-highlight-600',
      // automacao: service.popular ? 'from-accent-500 to-primary-600' : 'from-highlight-500 to-highlight-600',
      email: service.popular ? 'from-accent-500 to-highlight-600' : 'from-primary-500 to-highlight-600',
      consultoria: service.popular ? 'from-primary-500 to-accent-600' : 'from-highlight-500 to-accent-600',
    };

    const orcamento = {
      tipoVenda: service.orcamento ? 'Solicitar orçamento' : 'Falar Agora',
      aPartir: service.orcamento ? 'A partir de:' : '',
      tipoPagamento: service.orcamento ? '' : 'uma única vez',

    }

    const mensagem = service.isEmail ? `
          Olá 👋!
          Gostaria de falar sobre um upgrade de produto:
          \`\`\`${service.name}\`\`\`
          ` : service.orcamento ? `
          Olá 👋!
          Gostaria de solicitar um orçamento sobre um de seus serviços:
          \`\`\`${service.name}\`\`\`
          ` : `
          Olá 👋!
          Gostaria de falar sobre um de seus serviços:
          \`\`\`${service.name}\`\`\`
          `;

    const number = "5517996276236";

    const mensagemCodificada = encodeURIComponent(mensagem);

    return `
  <div class="pricing-card pricing-card-horizontal bg-white rounded-3xl p-6 shadow-lg border-t-4 ${borderColors[category]} relative overflow-hidden group snap-start">
    ${service.popular ? `
      <div class="absolute -top-0 left-1/2 transform -translate-x-1/2">
        <div class="${bgColors[category]} text-white px-4 py-1 rounded-full text-xs font-bold">
          <i class="fa-solid fa-fire text-orange-500"></i> MAIS POPULAR
        </div>
      </div>` : ''}

    <div class="${service.popular ? 'pt-2' : ''}">
        <div class="flex items-center mb-6">
          <div class="p-2 ${bgColors100[category]} rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
            <img src="./assets/images/logos/${service.icon}" alt="${service.name}" class="w-11 h-11"/>
          </div>
          <div>
            <h3 class="text-lg font-bold text-primary-900">${service.name}</h3>
            <p class="text-gray-600 text-sm">${service.subtitle}</p>
          </div>
        </div>

        ${service.development > 0 ? `
        <div class="mb-0">
          <div class="flex justify-center flex-row flex-wrap items-baseline mb-1">

          <div class="flex flex-row items-baseline">
            ${service.originalPrice && service.originalPrice > service.development ? `
              <span class="text-sm text-gray-500 line-through">
                R$ ${service.originalPrice.toLocaleString()}
              </span>
            ` : ''}
            <span class="text-base font-semibold text-primary-900">
              ${orcamento.aPartir}
            </span>
          </div>

          <div class="flex flex-row items-baseline">
            <span class="ml-2 text-3xl font-bold text-primary-800">
              R$ ${service.development.toLocaleString()}
            </span>
            <span class="text-gray-600 ml-2 text-lg md:text-sm">
              ${orcamento.tipoPagamento}
            </span>
          </div>

        </div>
    </div>
      ${service.monthly > 0 ? `
      <span class="flex justify-center text-2xl font-semibold text-primary-900 mb-2">
        +
      </span>
      ` : ''}
        ` : (service.orcamento ? `
          <div class="mb-4">
            <span class="text-2xl font-bold text-primary-800 drop-shadow-lg group-hover:scale-101 transition-transform transform origin-left duration-300">Valor sob consulta</span>
          </div>
        ` : '')}

          ${service.monthly > 0 ? `
          <div class="mb-4 p-4 bg-primary-50 rounded-2xl border border-primary-500 text-center">
            <div class="flex justify-center items-baseline space-x-2 mb-1">
              <span class="text-sm text-gray-500 line-through">De: R$ ${service.monthly.toFixed(2).replace(".", ",")}/mês</span>
              <span class="text-lg font-bold text-accent-600">Por: R$ ${(service.monthly - (service.monthly * 0.25)).toFixed(2).replace(".", ",")}/mês</span>
            </div>

            <div class="text-2xs text-highlight-600 font-medium mb-1 bg-highlight-100 inline-block px-2 py-0.5 rounded-full">
              25% OFF no 1º ano
            </div>

            <p class="text-xs text-gray-500 mb-0">Pagamento mensal</p>
            <p class="text-xs text-gray-700 font-medium mb-0">Renove o plano anual para manter o desconto</p>
          </div>
          ` : ''}


        ${service.hourly ? `
        <div class="mb-4">
          <div class="flex items-center text-primary-600 font-semibold mt-1">
            <span class="text-xl font-bold">R$ ${service.hourly}</span>
            <span class="text-sm ml-2">/hora</span>
          </div>
        </div>
        ` : ''}

      <div class="mb-4">
        <p class="text-sm text-gray-700 italic mb-2">${service.idealFor}</p>
        <p class="text-xs text-gray-500 mb-4">Entrega: ${service.deliveryTime}</p>
        ${service.marketPosition ? `<p class="text-xs text-green-600 mb-4">${service.marketPosition}</p>` : ''}
      </div>

      <div class="space-y-3 mb-6">
        ${service.features.map(f => `
          <div class="flex flex-col">
            <div class="flex items-start space-x-2">
              <i class="fas fa-check text-accent-500 mt-1 text-sm"></i>
              <span class="font-medium text-gray-800 text-sm">${f.title}</span>
            </div>
            ${f.description ? `<span class="ml-5 text-gray-600 text-xs">${f.description}</span>` : ''}
          </div>
        `).join('')}
      </div>

      ${service.support && service.support.length > 0 ? `
      <div class="bg-gradient-to-l from-accent-50/70 to-primary-50/70 rounded-2xl p-4 mb-6 border border-accent-500">
      ${service.isEmail || category == 'consultoria' ? '' : `<a href=#support-explanation>`}
        <div class="flex items-center mb-3">
          <i class="fas fa-headset text-accent-600 mr-2 text-sm"></i>
          <span class="font-bold text-accent-700 text-sm uppercase tracking-wide">${category == 'consultoria' ? 'Suporte à Combinar' : 'Suporte Incluso'}</span>
        </div>
        <div class="space-y-3">
          ${service.support.map(s => `
            <div class="flex flex-col">
              <div class="flex items-start space-x-2">
                <i class="fas fa-check text-accent-500 mt-1 text-sm"></i>
                <span class="font-medium text-gray-800 text-sm">${s.title}</span>
              </div>
              ${s.description ? `<span class="ml-5 text-gray-600 text-xs">${s.description}</span>` : ''}
            </div>
          `).join('')}
        </div>
      ${service.isEmail || category == 'consultoria' ? '' : `</a>`}
      </div>
      ` : ''}


      <a href="https://api.whatsapp.com/send?phone=${number}&text=${mensagemCodificada}" target="_blank" class="w-full bg-gradient-to-r ${ctaColors[category]} text-white py-3 rounded-2xl font-semibold hover:shadow-lg group-hover:scale-105 transition-transform transform duration-300 text-center block">
        ${service.isEmail ? `Realizar upgrade` : `${orcamento.tipoVenda}`}
      </a>

    </div>
  </div>
  `;
  }

  renderCategoryCards(category) {
    const container = document.getElementById(`${category}-cards`);
    if (!container || !PRICING_DATA[category]) return;

    const services = Object.values(PRICING_DATA[category]);
    container.innerHTML = services.map(service => this.createPricingCard(service, category)).join('');

    container.classList.remove('justify-center', 'flex-wrap', 'overflow-x-auto', 'md:justify-center', 'md:flex-wrap');

    // Ajusta layout no desktop se poucos cards
    if (services.length === 1) {
      // 1 card: centraliza sempre
      container.classList.add('justify-center');
    } else if (services.length === 2 || services.length === 3) {
      // 2 ou 3 cards: rolagem no mobile, centraliza no desktop
      container.classList.add('overflow-x-auto', 'md:justify-center', 'md:flex-wrap');
    } else {
      // 4 ou mais cards: rolagem horizontal sempre
      container.classList.add('overflow-x-auto');
    }
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

// Função para fazer scroll suave para uma seção, desabilitando ScrollTriggers temporariamente
// Usa a mesma lógica do animations-scroll.js para evitar problemas com #como-funciona
function scrollToSectionWithHash(hash) {
  if (!hash) return;

  // Limpar hash de qualquer caminho de arquivo (ex: planos.html#indicacao -> #indicacao)
  let cleanHash = hash;
  if (hash.includes("#")) {
    const hashIndex = hash.indexOf("#");
    cleanHash = hash.substring(hashIndex);
  }
  if (!cleanHash.startsWith("#")) {
    cleanHash = "#" + cleanHash;
  }

  const target = document.querySelector(cleanHash);
  if (!target) return;

  // Marcar como scroll programático
  window.isProgrammaticScroll = true;

  // Desabilitar ScrollTriggers temporariamente (especialmente os com scrub)
  const allTriggers = typeof ScrollTrigger !== 'undefined' ? ScrollTrigger.getAll() : [];
  const triggerStates = [];

  allTriggers.forEach(trigger => {
    triggerStates.push({
      trigger: trigger,
      enabled: trigger.enabled,
      kill: false,
      vars: trigger.vars
    });

    // Para triggers com scrub, apenas desabilitar (não matar)
    if (trigger.vars && trigger.vars.scrub) {
      trigger.disable();
      if (trigger.animation) {
        trigger.animation.pause();
      }
    } else {
      trigger.disable();
    }
  });

  // Calcular offset dinâmico
  let offsetY = 20;
  const pricingTabs = document.getElementById('pricingtabs');
  if (pricingTabs) {
    const rect = pricingTabs.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(pricingTabs);
    if (computedStyle.position === 'sticky') {
      offsetY = rect.height + 20;
    }
  }

  // Calcular posição final
  const targetTop = target.offsetTop;
  const finalPosition = Math.max(0, targetTop - offsetY);

  // Verificar se há seção #como-funciona que pode interferir
  const comoFunciona = document.querySelector('#como-funciona');
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Desabilitar ScrollTrigger globalmente durante o scroll
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.config({ autoRefreshEvents: "none" });
  }

  // Se a seção como-funciona está entre a posição atual e o destino,
  // fazer scroll para além dela primeiro
  if (comoFunciona &&
      comoFunciona.offsetTop < targetTop &&
      comoFunciona.offsetTop + comoFunciona.offsetHeight > currentScroll) {

    // Primeiro: passar completamente pela seção problemática
    const passPosition = comoFunciona.offsetTop + comoFunciona.offsetHeight + 100;
    window.scrollTo(0, passPosition);

    // Aguardar dois frames para garantir que passou
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // Agora fazer scroll suave até o destino final
        window.scrollTo({
          top: finalPosition,
          behavior: 'smooth'
        });

        // Reativar tudo após o scroll completar
        setTimeout(() => {
          window.isProgrammaticScroll = false;

          // Reabilitar ScrollTriggers
          triggerStates.forEach(state => {
            if (state.enabled) {
              state.trigger.enable();
              if (state.trigger.animation) {
                state.trigger.animation.resume();
              }
            }
          });

          if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.config({ autoRefreshEvents: "visibilitychange,DOMContentLoaded,load" });
            ScrollTrigger.refresh();
          }
        }, 1000);
      });
    });
  } else {
    // Fazer scroll normal se não há interferência
    window.scrollTo({
      top: finalPosition,
      behavior: 'smooth'
    });

    // Reativar tudo após o scroll completar
    setTimeout(() => {
      window.isProgrammaticScroll = false;

      // Reabilitar ScrollTriggers
      triggerStates.forEach(state => {
        if (state.enabled) {
          state.trigger.enable();
          if (state.trigger.animation) {
            state.trigger.animation.resume();
          }
        }
      });

      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.config({ autoRefreshEvents: "visibilitychange,DOMContentLoaded,load" });
        ScrollTrigger.refresh();
      }
    }, 1000);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Extrair apenas o hash, removendo qualquer caminho de arquivo (ex: planos.html#indicacao -> indicacao)
  let hash = window.location.hash.replace("#", "");
  // Se o hash contém um ponto (.), provavelmente tem caminho de arquivo, extrair apenas a parte após #
  if (hash.includes(".")) {
    const hashParts = hash.split("#");
    hash = hashParts.length > 1 ? hashParts[hashParts.length - 1] : hash.split(".").pop();
  }
  // Remover qualquer caractere inválido
  hash = hash.replace(/[^a-zA-Z0-9-]/g, "");

  if (hash) {
    // Lista de hashes que correspondem às tabs de pricing
    const pricingTabs = ["sitesSemSuporte", "sitesSuporte", "biocards", "sistemasSemSuporte", "sistemasSuporte", "dashboardsSemSuporte", "dashboardsSuporte", "apps", "automacao", "email", "consultoria"];

    const targetButton = document.querySelector(`.tab-button[data-tab="${hash}"]`);
    if (targetButton) {
      targetButton.click();
      if (pricingManager && typeof pricingManager.scrollTabsToActive === "function") {
        pricingManager.scrollTabsToActive();
      }
    }

    // Fazer scroll para pricing-content se o hash for uma tab de pricing ou "pricing-content"
    if (hash === "pricing-content" || pricingTabs.includes(hash)) {
      // Função para tentar fazer o scroll
      const scrollToPricing = () => {
        const targetSection = document.querySelector("#pricing-content");
        if (targetSection) {
          scrollToSectionWithHash("#pricing-content");
          return true;
        }
        return false;
      };

      // Tentar imediatamente
      if (!scrollToPricing()) {
        // Se não conseguir, aguardar um pouco mais
        setTimeout(() => {
          if (!scrollToPricing()) {
            // Última tentativa após mais tempo
            setTimeout(scrollToPricing, 300);
          }
        }, 100);
      }
    } else {
      // Para outros hashes (como #indicacao, #faq, #como-funciona, etc), usar a função de scroll suave
      // Aguardar um pouco para garantir que a página carregou completamente
      setTimeout(() => {
        scrollToSectionWithHash("#" + hash);
      }, 100);

      // Tentar novamente após mais tempo caso a primeira tentativa falhe
      setTimeout(() => {
        scrollToSectionWithHash("#" + hash);
      }, 500);
    }
  }
});

// Tratar mudanças de hash (quando o usuário navega dentro da página)
window.addEventListener("hashchange", function() {
  const hash = window.location.hash;
  if (hash) {
    setTimeout(() => {
      scrollToSectionWithHash(hash);
    }, 100);
  }
});


// Exportar para uso global
window.PricingManager = PricingManager;
window.PRICING_DATA = PRICING_DATA;

console.log('💰 Pricing config carregado!');