/**
 * DHARMA LABS - PRICING CONFIG
 * Apenas funcionalidades específicas da página de preços
 */

// ===== DADOS DE PREÇOS =====
const PRICING_DATA = {
  "sites": {
    "landingPage": {
      "name": "Landing Page",
      "subtitle": "Página única de alta conversão",
      "originalPrice": 1250,
      "development": 850,
      "monthly": 35,
      "popular": true,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Captação rápida de leads com investimento justo",
      "deliveryTime": "7–15 dias úteis",
      "features": [
        { "title": "Design moderno e responsivo", "description": "Layout que se adapta perfeitamente a qualquer dispositivo" },
        { "title": "Formulário de contato/leads", "description": "Envio direto para seu e-mail — captura leads desde o primeiro dia" },
        { "title": "SEO básico + Google Analytics", "description": "Apareça no Google e acompanhe visitas com dados reais" },
        { "title": "Hospedagem com SSL e manutenção mensal", "description": "Tudo incluído, sem surpresas" },
        { "title": "5 contas de e-mail profissional (1GB total)", "description": "E-mails personalizados no seu domínio, sem custo adicional" }
      ],
      "marketPosition": "Até 60% mais barato que agências por entrega equivalente"
    },
    "siteInstitucional": {
      "name": "Site Institucional",
      "subtitle": "Presença online sólida para empresas",
      "originalPrice": 2250,
      "development": 1950,
      "monthly": 55,
      "popular": false,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Empresas que precisam apresentar serviços e manter comunicação constante",
      "deliveryTime": "15–30 dias úteis",
      "features": [
        { "title": "Tudo da anterior +", "description": "Mantém todos os recursos da Landing Page e adiciona novas funcionalidades" },
        { "title": "Até 5 páginas internas", "description": "Home, Sobre, Serviços, Contato e mais" },
        { "title": "Blog ou área de notícias", "description": "Publique conteúdos para atrair e engajar visitantes" },
        { "title": "Integração com Google Maps", "description": "Mostre a localização da sua empresa" },
        { "title": "Estrutura para atualizações periódicas", "description": "Facilidade para manter o conteúdo atualizado" }
      ],
      "marketPosition": "Investimento justo para empresas que valorizam presença online e comunicação constante"
    },
    "portalCorporativo": {
      "name": "Portal Corporativo",
      "subtitle": "Soluções completas para comunicação e gestão online",
      "originalPrice": 3250,
      "development": 2550,
      "monthly": 75,
      "popular": false,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Empresas que precisam de áreas restritas, gestão de conteúdo e alta personalização",
      "deliveryTime": "30–60 dias úteis",
      "features": [
        { "title": "Tudo da anterior +", "description": "Mantém todos os recursos do Site Institucional e adiciona recursos avançados" },
        { "title": "Áreas restritas para clientes ou equipe", "description": "Conteúdos e documentos protegidos por login" },
        { "title": "Sistema de busca interno", "description": "Facilita a navegação em grandes volumes de conteúdo" },
        { "title": "Painel de administração de conteúdo", "description": "Gerencie textos, imagens e arquivos sem depender de terceiros" },
        { "title": "Layout totalmente customizado", "description": "Design exclusivo alinhado à identidade visual" }
      ],
      "marketPosition": "Solução premium com custo acessível em relação a portais corporativos tradicionais"
    }
  },

  "biopages": {
    "bioBasic": {
      "name": "BioPage Básica",
      "subtitle": "Sua presença online em um só link",
      "development": 250,
      "monthly": 15,
      "popular": true,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Influenciadores e pequenos negócios que querem centralizar links",
      "deliveryTime": "1–2 dias úteis",
      "features": [
        { "title": "Design responsivo e otimizado", "description": "Funciona perfeitamente no celular e no computador" },
        { "title": "Hospedagem inclusa com SSL", "description": "Segurança e desempenho desde o primeiro dia" },
        { "title": "Links ilimitados", "description": "Adicione todos os links que precisar" },
        { "title": "5 contas de e-mail profissional (1GB total)", "description": "E-mails no seu domínio sem custo adicional" }
      ],
      "marketPosition": "Mais completo que Linktree gratuito, com domínio próprio e e-mail profissional"
    },
    "bioPro": {
      "name": "BioPage Pro",
      "subtitle": "Sua bio com recursos extras de conversão",
      "development": 450,
      "monthly": 25,
      "popular": false,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Profissionais e negócios que querem destacar marca e interações",
      "deliveryTime": "2–4 dias úteis",
      "features": [
        { "title": "Tudo da anterior +", "description": "Mantém todos os recursos do BioPage Básico e adiciona mais ferramentas" },
        { "title": "Botões personalizáveis", "description": "Cores e formatos para destacar seus links" },
        { "title": "Formulário de contato", "description": "Receba mensagens diretas sem precisar divulgar e-mail" },
        { "title": "Integração com Google Analytics", "description": "Monitore cliques e visitas" }
      ],
      "marketPosition": "Mais atrativo que opções gratuitas e ainda mais acessível que concorrentes premium"
    },
    "bioMax": {
      "name": "BioPage Max",
      "subtitle": "Presença digital com funcionalidades premium",
      "development": 750,
      "monthly": 35,
      "popular": false,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Negócios que precisam de automação e personalização total",
      "deliveryTime": "4–7 dias úteis",
      "features": [
        { "title": "Tudo da anterior +", "description": "Mantém todos os recursos do BioPage Pro e adiciona funcionalidades avançadas" },
        { "title": "Integração com formulários externos", "description": "Capture leads em CRMs ou planilhas" },
        { "title": "Seção de vídeos e galeria", "description": "Mostre produtos, serviços ou conteúdo multimídia" },
        { "title": "Layout totalmente customizado", "description": "Design único para sua marca" }
      ],
      "marketPosition": "O BioPage mais completo do mercado, com custo competitivo"
    }
  },

  "sistemas": {
    "appWebBasico": {
      "name": "App Web Básico",
      "subtitle": "Sistema online simples e funcional",
      "development": 1200,
      "monthly": 60,
      "popular": true,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Pequenas empresas que precisam digitalizar processos",
      "deliveryTime": "10–15 dias úteis",
      "features": [
        { "title": "Interface intuitiva e responsiva", "description": "Acesso por desktop, tablet e celular" },
        { "title": "Hospedagem inclusa com SSL", "description": "Segurança e estabilidade" },
        { "title": "5 contas de e-mail profissional (1GB total)", "description": "E-mails no domínio do sistema" }
      ],
      "marketPosition": "Preço reduzido comparado a sistemas sob medida tradicionais"
    },
    "appWebPro": {
      "name": "App Web Pro",
      "subtitle": "Sistema personalizado com automação",
      "development": 2800,
      "monthly": 120,
      "popular": false,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Empresas que precisam integrar processos e melhorar produtividade",
      "deliveryTime": "20–30 dias úteis",
      "features": [
        { "title": "Tudo da anterior +", "description": "Mantém todos os recursos do App Web Básico e adiciona novas funcionalidades" },
        { "title": "Painel administrativo completo", "description": "Controle total do sistema" },
        { "title": "Relatórios customizados", "description": "Visualize e exporte dados" },
        { "title": "Integração com APIs externas", "description": "Conecte o sistema a outros serviços" }
      ],
      "marketPosition": "Custo competitivo frente a ERPs e CRMs personalizados"
    },
    "ecommerceAvancado": {
      "name": "E-commerce Avançado",
      "subtitle": "Loja virtual com recursos premium",
      "development": 4500,
      "monthly": 180,
      "popular": false,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Lojas que precisam vender online com alto desempenho",
      "deliveryTime": "30–45 dias úteis",
      "features": [
        { "title": "Tudo da anterior +", "description": "Mantém todos os recursos do App Web Pro com foco em vendas" },
        { "title": "Carrinho e checkout seguro", "description": "Pagamentos via Pix, cartão e boleto" },
        { "title": "Controle de estoque", "description": "Gestão de produtos em tempo real" },
        { "title": "Otimização para SEO em produtos", "description": "Mais visibilidade nas buscas" }
      ],
      "marketPosition": "Uma loja de alta performance com custo reduzido frente a plataformas grandes"
    }
  },

  "dashboards": {
    "dashboardBasico": {
      "name": "Dashboard Básico",
      "subtitle": "Visualização simples e clara de dados",
      "development": 800,
      "monthly": 50,
      "popular": true,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Negócios que precisam acompanhar métricas essenciais",
      "deliveryTime": "5–7 dias úteis",
      "features": [
        { "title": "Visualização de dados estática", "description": "Gráficos e tabelas fixos com atualização manual" },
        { "title": "Interface intuitiva", "description": "Fácil leitura e compreensão" }
      ],
      "marketPosition": "Preço acessível para quem quer começar a acompanhar dados"
    },
    "dashboardPro": {
      "name": "Dashboard Pro",
      "subtitle": "Dados dinâmicos e atualizações automáticas",
      "development": 1800,
      "monthly": 90,
      "popular": false,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Empresas que precisam de relatórios em tempo real",
      "deliveryTime": "10–15 dias úteis",
      "features": [
        { "title": "Tudo da anterior +", "description": "Mantém os recursos do Básico com funcionalidades adicionais" },
        { "title": "Integração com banco de dados", "description": "Dados atualizados automaticamente" },
        { "title": "Filtros e segmentações", "description": "Análises personalizadas por período ou categoria" }
      ],
      "marketPosition": "Solução robusta e mais barata que ferramentas corporativas caras"
    },
    "dashboardIA": {
      "name": "Dashboard com IA",
      "subtitle": "Análises preditivas e insights inteligentes",
      "development": 3500,
      "monthly": 150,
      "popular": false,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Empresas que querem prever tendências e automatizar decisões",
      "deliveryTime": "15–25 dias úteis",
      "features": [
        { "title": "Tudo da anterior +", "description": "Mantém os recursos do Pro e adiciona Inteligência Artificial" },
        { "title": "Modelos preditivos", "description": "Previsão de vendas, demanda e comportamento" },
        { "title": "Geração automática de relatórios", "description": "IA cria análises resumidas" }
      ],
      "marketPosition": "Preço competitivo frente a soluções de BI com IA"
    }
  },

  "email": {
    "emailGratis": {
      "name": "E-mail Gratuito",
      "subtitle": "Incluso com hospedagem de Site, BioPage ou Sistema",
      "development": 0,
      "monthly": 0,
      "popular": true,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Clientes que já contratam outros serviços",
      "deliveryTime": "Imediato",
      "features": [
        { "title": "5 contas de e-mail profissional (1GB total)", "description": "Grátis com hospedagem ativa" }
      ],
      "marketPosition": "Bônus exclusivo para nossos clientes"
    },
    "email10gb": {
      "name": "E-mail Profissional 10GB",
      "subtitle": "Mais espaço para sua equipe",
      "development": 0,
      "monthly": 25,
      "popular": false,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Negócios que precisam armazenar mais mensagens e arquivos",
      "deliveryTime": "1 dia útil",
      "features": [
        { "title": "Tudo da anterior +", "description": "Mesmas funcionalidades, mas com 10GB de armazenamento" },
        { "title": "Painel de administração de contas", "description": "Gerencie usuários e senhas" }
      ],
      "marketPosition": "Mais barato que concorrentes com o mesmo espaço"
    },
    "googleWorkspace": {
      "name": "Google Workspace",
      "subtitle": "A solução de produtividade completa do Google",
      "development": 0,
      "monthly": 45,
      "popular": false,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Empresas que querem Gmail, Drive, Meet e muito mais",
      "deliveryTime": "1 dia útil",
      "features": [
        { "title": "Tudo da anterior +", "description": "Acesso ao ecossistema completo do Google" },
        { "title": "Colaboração em tempo real", "description": "Documentos, planilhas e apresentações compartilhadas" }
      ],
      "marketPosition": "Preço alinhado ao oficial, com suporte especializado"
    }
  },

  "consultoria": {
    "revitalizacaoSite": {
      "name": "Revitalização de Site",
      "subtitle": "Dê uma nova vida ao seu site",
      "development": 500,
      "monthly": 0,
      "popular": true,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Sites antigos que precisam de layout e performance atualizados",
      "deliveryTime": "3–7 dias úteis",
      "features": [
        { "title": "Análise de design e conteúdo", "description": "Identificação de melhorias visuais e de usabilidade" },
        { "title": "Aplicação de novas tendências visuais", "description": "Layout moderno e responsivo" }
      ],
      "marketPosition": "Mais acessível que criar um site novo"
    },
    "auditoriaSistema": {
      "name": "Auditoria de Sistema",
      "subtitle": "Descubra falhas e oportunidades",
      "development": 900,
      "monthly": 0,
      "popular": false,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Sistemas que precisam melhorar desempenho e segurança",
      "deliveryTime": "5–10 dias úteis",
      "features": [
        { "title": "Tudo da anterior +", "description": "Inclui auditoria técnica de back-end e banco de dados" },
        { "title": "Relatório com recomendações", "description": "Sugestões práticas para evolução do sistema" }
      ],
      "marketPosition": "Mais barato que manter um sistema ineficiente"
    },
    "qaCompleto": {
      "name": "Consultoria QA Completa",
      "subtitle": "Qualidade assegurada do início ao fim",
      "development": 1800,
      "monthly": 0,
      "popular": false,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Projetos que precisam de validação contínua",
      "deliveryTime": "10–20 dias úteis",
      "features": [
        { "title": "Tudo da anterior +", "description": "Acompanhamento durante o desenvolvimento" },
        { "title": "Testes automatizados", "description": "Cobertura máxima para evitar erros" }
      ],
      "marketPosition": "Protege seu investimento garantindo qualidade total"
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
      sites: service.popular ? 'border-highlight-500' : 'border-accent-500',
      biopages: service.popular ? 'border-accent-500' : 'border-primary-500',
      sistemas: service.popular ? 'border-primary-500' : 'border-highlight-500',
      dashboards: service.popular ? 'border-highlight-500' : 'border-accent-500',
      // apps: service.popular ? 'border-accent-500' : 'border-highlight-500',
      // automacao: service.popular ? 'border-accent-500' : 'border-highlight-500',
      email: service.popular ? 'border-accent-500' : 'border-primary-500',
      consultoria: service.popular ? 'border-primary-500' : 'border-highlight-500',
    };

    const bgColors = {
      sites: 'bg-highlight-500',
      biopages: 'bg-accent-500',
      sistemas: 'bg-primary-500',
      dashboards: 'bg-highlight-500',
      // apps: 'bg-accent-500',
      // automacao: 'bg-accent-500',
      email: 'bg-accent-500',
      consultoria: 'bg-primary-500'
    }

    const ctaColors = {
      sites: service.popular ? 'from-highlight-500 to-primary-600' : 'from-accent-500 to-primary-600',
      biopages: service.popular ? 'from-accent-500 to-highlight-600' : 'from-primary-500 to-highlight-600',
      sistemas: service.popular ? 'from-primary-500 to-accent-600' : 'from-highlight-500 to-accent-600',
      dashboards: service.popular ? 'from-highlight-500 to-primary-600' : 'from-accent-500 to-primary-600',
      // apps: service.popular ? 'from-accent-500 to-primary-600' : 'from-highlight-500 to-highlight-600',
      // automacao: service.popular ? 'from-accent-500 to-primary-600' : 'from-highlight-500 to-highlight-600',
      email: service.popular ? 'from-accent-500 to-highlight-600' : 'from-primary-500 to-highlight-600',
      consultoria: service.popular ? 'from-primary-500 to-accent-600' : 'from-highlight-500 to-accent-600',
    };

    return `
  <div class="pricing-card pricing-card-horizontal bg-white rounded-3xl p-6 shadow-lg border-t-4 ${borderColors[category]} relative overflow-hidden group snap-start">
    ${service.popular ? `
      <div class="absolute -top-0 left-1/2 transform -translate-x-1/2">
        <div class="${bgColors[category]} text-white px-4 py-1 rounded-full text-xs font-bold">
          🔥 MAIS POPULAR
        </div>
      </div>` : ''}

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

      <div class="mb-4">
        ${service.development > 0 ? `
          <div class="flex items-baseline mb-1">
            ${service.originalPrice && service.originalPrice > service.development
          ? `<span class="text-sm text-gray-500 line-through mr-2">De: R$ ${service.originalPrice.toLocaleString()}</span>`
          : ''}
            <span class="text-2xl font-bold text-primary-900 group-hover:scale-101 transition-transform transform origin-left duration-300">Por: R$ ${service.development.toLocaleString()}</span>
            <span class="text-gray-600 ml-2 text-sm">uma única vez</span>
          </div>` : ''}

        ${service.monthly > 0 ? `
          <div class="flex items-center text-accent-600 font-semibold group-hover:scale-125 transition-transform transform origin-left duration-300">
            <span class="text-base">+ R$ ${service.monthly}/mês</span>
            <span class="text-xs ml-2 bg-accent-100 px-2 py-1 rounded">manutenção</span>
          </div>` : ''}

        ${service.hourly ? `
          <div class="flex items-center text-primary-600 font-semibold mt-1">
            <span class="text-xl font-bold">R$ ${service.hourly}</span>
            <span class="text-sm ml-2">/hora</span>
          </div>` : ''}
      </div>

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

      <button class="w-full bg-gradient-to-r ${ctaColors[category]} text-white py-3 rounded-2xl font-semibold hover:shadow-lg group-hover:scale-105 transition-transform transform duration-300">
        Falar Agora
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

document.addEventListener("DOMContentLoaded", function () {
  const hash = window.location.hash.replace("#", "");
  if (hash) {
    const targetButton = document.querySelector(`.tab-button[data-tab="${hash}"]`);
    if (targetButton) {
      targetButton.click();
      if (pricingManager && typeof pricingManager.scrollTabsToActive === "function") {
        pricingManager.scrollTabsToActive();
      }
    }
  }
  const targetSection = document.querySelector("#pricing-content");
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
});


// Exportar para uso global
window.PricingManager = PricingManager;
window.PRICING_DATA = PRICING_DATA;

console.log('💰 Pricing config carregado!');