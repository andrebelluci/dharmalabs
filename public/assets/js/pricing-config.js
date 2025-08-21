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
      "originalPrice": 1050,
      "development": 750,
      "monthly": 70,
      "annual": 35,
      "popular": true,
      "orcamento": false,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Captação rápida de leads com investimento justo",
      "deliveryTime": "7–15 dias úteis",
      "features": [
        {
          "title": "Design moderno e responsivo",
          "description": "Layout que se adapta perfeitamente a qualquer dispositivo, otimizado para conversão"
        },
        {
          "title": "Formulário de contato integrado",
          "description": "Captura de leads enviados diretamente para seu e-mail, funcionando desde o primeiro dia"
        },
        {
          "title": "SEO básico + Google Analytics",
          "description": "Configuração para aparecer no Google + Analytics na conta do cliente com relatórios mensais"
        },
        {
          "title": "Hospedagem premium com SSL e manutenção",
          "description": "Hospedagem profissional com certificado de segurança e manutenção mensal incluída"
        },
        {
          "title": "5 contas de e-mail profissionais",
          "description": "E-mails personalizados no seu domínio (ex: contato@suaempresa.com.br)"
        }
      ],
      "marketPosition": "Até 60% mais barato que agências por entrega equivalente"
    },
    "siteInstitucional": {
      "name": "Site Institucional",
      "subtitle": "Presença online sólida para empresas",
      "originalPrice": 2250,
      "development": 1950,
      "monthly": 110,
      "annual": 55,
      "popular": false,
      "orcamento": false,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Empresas que precisam apresentar serviços e produtos de forma profissional",
      "deliveryTime": "15–30 dias úteis",
      "features": [
        {
          "title": "Todas as funcionalidades da Landing Page",
          "description": "Mantém todos os recursos anteriores e adiciona novas funcionalidades"
        },
        {
          "title": "Até 5 páginas estáticas",
          "description": "Home, Sobre, Serviços, Contato, Portfólio - páginas otimizadas para SEO"
        },
        {
          "title": "Galeria de imagens/produtos",
          "description": "Showcase visual dos seus trabalhos, produtos ou instalações da empresa"
        },
        {
          "title": "Integração com Google Maps",
          "description": "Localização da empresa integrada para facilitar visitas dos clientes"
        },
        {
          "title": "Formulários de contato avançados",
          "description": "Múltiplos formulários personalizados para diferentes serviços ou departamentos"
        }
      ],
      "marketPosition": "Investimento justo para empresas que valorizam presença online profissional"
    },
    "siteAvancado": {
      "name": "Site Avançado com CMS",
      "subtitle": "Solução completa para gestão de conteúdo e comunicação digital",
      "originalPrice": 0,
      "development": 2550,
      "monthly": 150,
      "annual": 75,
      "popular": false,
      "orcamento": true,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Empresas que precisam de gestão de conteúdo, áreas restritas e alta personalização",
      "deliveryTime": "30–60 dias úteis",
      "features": [
        {
          "title": "Todas as funcionalidades anteriores",
          "description": "Mantém todos os recursos do Site Institucional e adiciona recursos avançados"
        },
        {
          "title": "Sistema de gestão de conteúdo próprio",
          "description": "Painel administrativo customizado para gerenciar textos, imagens e documentos"
        },
        {
          "title": "Áreas restritas com controle de acesso",
          "description": "Conteúdos protegidos por login para clientes, equipe ou parceiros"
        },
        {
          "title": "Blog/sistema de notícias gerenciável",
          "description": "Publique conteúdos facilmente através do painel administrativo próprio"
        },
        {
          "title": "Funcionalidades sob medida",
          "description": "Sistema desenvolvido especificamente para suas necessidades de negócio"
        }
      ],
      "marketPosition": "Solução premium com CMS proprietário e custo acessível comparado a agências tradicionais",
      "whatsapp": "https://w.app/dharmalabs_siteavancado",
    }
  },

  "biopages": {
    "bioBasic": {
      "name": "BioPage Básica",
      "subtitle": "Sua presença online em um só link",
      "development": 250,
      "monthly": 30,
      "annual": 15,
      "popular": true,
      "orcamento": false,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Influenciadores e pequenos negócios que querem centralizar links com domínio próprio",
      "deliveryTime": "1–2 dias úteis",
      "features": [
        {
          "title": "Domínio personalizado incluso",
          "description": "Seu próprio domínio (ex: seunome.com.br) - não dependa de terceiros"
        },
        {
          "title": "Design responsivo 100% personalizado",
          "description": "Layout único para sua marca, otimizado para móbil e desktop"
        },
        {
          "title": "Links ilimitados + hospedagem premium",
          "description": "Adicione quantos links precisar com carregamento ultra-rápido"
        },
        {
          "title": "5 contas de e-mail profissionais",
          "description": "E-mails no seu domínio (ex: contato@seunome.com.br)"
        },
        {
          "title": "Sem taxas mensais de terceiros",
          "description": "Você paga apenas nossa manutenção, sem dependência de plataformas externas"
        }
      ],
      "marketPosition": "Até 75% mais barato que outras ferramentas + domínio próprio + e-mail profissional inclusos",
      "whatsapp": "https://w.app/dharmalabs_biopagebasica",
    },
    "bioPro": {
      "name": "BioPage Pro",
      "subtitle": "Sua bio com recursos de conversão e analytics",
      "development": 450,
      "monthly": 50,
      "annual": 25,
      "popular": false,
      "orcamento": false,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Profissionais e pequenos negócios que querem capturar leads e acompanhar resultados",
      "deliveryTime": "2–4 dias úteis",
      "features": [
        {
          "title": "Tudo da anterior + recursos de conversão",
          "description": "Mantém todos os recursos do BioPage Básico e adiciona ferramentas de marketing"
        },
        {
          "title": "Personalização visual avançada",
          "description": "Cores, fontes e layout personalizados para combinar com sua marca"
        },
        {
          "title": "Formulário de contato simples",
          "description": "Receba mensagens diretas por e-mail sem divulgar seu contato pessoal"
        },
        {
          "title": "Google Analytics integrado",
          "description": "Acompanhe cliques, visitantes e origem do tráfego com relatórios básicos"
        },
        {
          "title": "Botões de ação destacados",
          "description": "Destaque links principais com botões especiais e Call-to-Actions"
        }
      ],
      "marketPosition": "78% mais barato que ferramentas famosas, com domínio próprio e personalização total",
      "whatsapp": "https://w.app/dharmalabs_biopagepro",
    },
    "bioMax": {
      "name": "BioPage Max",
      "subtitle": "Soluções premium sob medida para seu negócio",
      "development": 750,
      "monthly": 70,
      "annual": 35,
      "popular": false,
      "orcamento": true,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Negócios que precisam de funcionalidades específicas e automações avançadas",
      "deliveryTime": "5–10 dias úteis",
      "features": [
        {
          "title": "Tudo da anterior + desenvolvimento customizado",
          "description": "Mantém todos os recursos da BioPage Pro e adiciona soluções sob medida"
        },
        {
          "title": "Formulários multi-etapas inteligentes",
          "description": "Questionários avançados, campos condicionais, integração com WhatsApp"
        },
        {
          "title": "Seção multimídia completa",
          "description": "Galerias interativas, vídeos embedados, catálogos de produtos visuais"
        },
        {
          "title": "Automações e agendamentos",
          "description": "Links programados, campanhas temporárias, redirecionamentos inteligentes"
        },
        {
          "title": "Funcionalidades específicas do seu negócio",
          "description": "Desenvolvemos recursos únicos conforme sua necessidade (calculadoras, catálogo com filtro, contador regressivo,etc.)"
        }
      ],
      "marketPosition": "Solução premium customizada a partir de R$750 - mais barato que desenvolver do zero",
      "whatsapp": "https://w.app/dharmalabs_biopagemax",
    }
  },

  "sistemas": {
    "appWebBasico": {
      "name": "App Web Básico",
      "subtitle": "Sistema online simples e funcional",
      "development": 3500,
      "monthly": 240,
      "annual": 120,
      "popular": true,
      "orcamento": false,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Pequenas empresas que precisam digitalizar processos básicos",
      "deliveryTime": "15–20 dias úteis",
      "features": [
        { "title": "Interface intuitiva e responsiva", "description": "Acesso por desktop, tablet e celular com design moderno" },
        { "title": "Até 5 usuários simultâneos", "description": "Controle de acesso para sua equipe" },
        { "title": "Hospedagem inclusa com SSL", "description": "Segurança e estabilidade garantidas" },
        { "title": "5 contas de e-mail profissional (5GB total)", "description": "E-mails no domínio do sistema" },
        { "title": "Backup automático semanal", "description": "Seus dados sempre protegidos" }
      ],
      "marketPosition": "Preço acessível comparado a sistemas sob medida tradicionais de R$ 15-30k",
      "whatsapp": "https://w.app/dharmalabs_appwebbasico",
    },
    "sistemaGestao": {
      "name": "Sistema de Gestão",
      "subtitle": "Automação completa de processos empresariais",
      "development": 6500,
      "monthly": 560,
      "annual": 280,
      "popular": false,
      "orcamento": false,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Empresas que precisam integrar e automatizar múltiplos processos",
      "deliveryTime": "30–45 dias úteis",
      "features": [
        { "title": "Tudo do anterior +", "description": "Mantém todos os recursos do App Web Básico" },
        { "title": "Usuários ilimitados", "description": "Sem limite de colaboradores" },
        { "title": "Painel administrativo avançado", "description": "Controle total com dashboard executivo" },
        { "title": "Relatórios personalizados", "description": "Gráficos e exportação em PDF/Excel" },
        { "title": "Integração com APIs externas", "description": "WhatsApp, sistemas bancários, ERPs" },
        { "title": "Automação de workflows", "description": "Processos automáticos por regras" },
        { "title": "Backup diário automatizado", "description": "Redundância total dos dados" }
      ],
      "marketPosition": "Solução completa com economia de 60% vs ERPs tradicionais de R$ 30-70k",
      "whatsapp": "https://w.app/dharmalabs_sistemadegestao",
    },
    "plataformaAvancada": {
      "name": "Plataforma Avançada",
      "subtitle": "Solução enterprise sob medida",
      "development": 8500,
      "monthly": 700,
      "annual": 350,
      "popular": false,
      "orcamento": true,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Empresas que precisam de soluções complexas e escaláveis",
      "deliveryTime": "45–60 dias úteis + orçamento",
      "features": [
        { "title": "Tudo do anterior +", "description": "Base do Sistema de Gestão com recursos enterprise" },
        { "title": "Módulos avançados", "description": "Vendas, Financeiro, Estoque, CRM integrados" },
        { "title": "Múltiplos usuários com permissões", "description": "Controle de acesso por função/departamento" },
        { "title": "Hospedagem Cloud inclusa", "description": "Performance superior com VPS dedicado" },
        { "title": "E-commerce nativo incluso", "description": "Venda online integrada ao sistema" },
        { "title": "Módulos especializados disponíveis", "description": "Personalização específica por setor" },
        { "title": "Treinamento e consultoria", "description": "Suporte na implementação e uso" }
      ],
      "marketPosition": "Solução enterprise com custo 70% menor que grandes fornecedores (R$ 100k+)",
      "whatsapp": "https://w.app/dharmalabs_plataformaavancada",
    }
  },

  "dashboards": {
    "dashboardBasico": {
      "name": "Dashboard Básico",
      "subtitle": "Visualização simples e clara de dados",
      "development": 1200,
      "monthly": 160,
      "annual": 80,
      "popular": true,
      "orcamento": false,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Negócios que precisam acompanhar métricas essenciais",
      "deliveryTime": "7–10 dias úteis",
      "features": [
        { "title": "Visualizações estáticas em Python", "description": "Gráficos profissionais com Matplotlib e Plotly" },
        { "title": "Interface web simples", "description": "Dashboard responsivo acessível de qualquer dispositivo" },
        { "title": "Importação de dados", "description": "Excel, CSV e planilhas Google Sheets" },
        { "title": "Até 10 gráficos diferentes", "description": "Barras, linhas, pizza, indicadores KPI" },
        { "title": "Exportação PDF automática", "description": "Relatórios gerados automaticamente" }
      ],
      "marketPosition": "Preço justo vs Power BI com melhor customização",
      "whatsapp": "https://w.app/dharmalabs_dashboardbasico",
    },
    "dashboardPro": {
      "name": "Dashboard Interativo",
      "subtitle": "Dados dinâmicos com atualizações automáticas",
      "development": 2300,
      "monthly": 300,
      "annual": 150,
      "popular": false,
      "orcamento": false,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Empresas que precisam de relatórios em tempo real",
      "deliveryTime": "15–20 dias úteis",
      "features": [
        { "title": "Tudo do anterior +", "description": "Mantém recursos do Básico com funcionalidades avançadas" },
        { "title": "Dashboard interativo com Streamlit", "description": "Filtros, seletores e navegação dinâmica" },
        { "title": "Conexão com banco de dados", "description": "MySQL, PostgreSQL ou APIs REST" },
        { "title": "Atualizações automáticas", "description": "Dados sincronizados em tempo real" },
        { "title": "Múltiplos usuários", "description": "Controle de acesso por login" },
        { "title": "Alertas e notificações", "description": "Email automático quando KPIs críticos" }
      ],
      "marketPosition": "Funcionalidades enterprise 60% mais barato que soluções tradicionais",
      "whatsapp": "https://w.app/dharmalabs_dashboardinterativo",
    },
    "dashboardIA": {
      "name": "Dashboard com IA",
      "subtitle": "Análises preditivas e insights inteligentes",
      "development": 4500,
      "monthly": 440,
      "annual": 220,
      "popular": false,
      "orcamento": true,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Empresas que querem prever tendências e automatizar decisões",
      "deliveryTime": "20–30 dias úteis",
      "features": [
        { "title": "Tudo do anterior +", "description": "Base do Dashboard Interativo com Inteligência Artificial" },
        { "title": "Modelos preditivos com Machine Learning", "description": "Previsão de vendas, demanda e comportamento" },
        { "title": "Análise de tendências automática", "description": "IA identifica padrões e anomalias nos dados" },
        { "title": "Relatórios inteligentes", "description": "IA gera insights e recomendações automáticas" },
        { "title": "Chat com dados", "description": "Pergunte aos seus dados em linguagem natural" },
        { "title": "Dashboards adaptativos", "description": "Interface muda conforme padrões de uso" },
        { "title": "APIs de IA integradas", "description": "ChatGPT, Claude ou Gemini para análises" }
      ],
      "marketPosition": "IA empresarial por 70% menos que grandes consultorias (R$ 15-50k)",
      "whatsapp": "https://w.app/dharmalabs_dashboardcomia",
    }
  },

  "email": {
    "emailGratis": {
      "name": "E-mail Gratuito",
      "subtitle": "Incluso com hospedagem de Site, BioPage, Sistema ou Dashboard",
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
        { "title": "1GB de armazenamento", "description": "Espaço básico para emails essenciais" },
        { "title": "Até 5 aliases de email", "description": "Receba e-mails por endereços diferentes" },
        { "title": "1 encaminhador de email", "description": "Redirecione emails automaticamente" },
        { "title": "Suporte POP3/IMAP", "description": "Configure no Outlook, Gmail ou celular" },
        { "title": "Até 15.000 mensagens", "description": "Limite de armazenamento de emails" },
        { "title": "100 emails por dia", "description": "Envio diário controlado" }
      ],
      "marketPosition": "Bônus exclusivo para clientes com hospedagem ativa"
    },
    "emailStarter": {
      "name": "E-mail Business Starter",
      "subtitle": "Profissional com recursos avançados",
      "development": 0,
      "monthly": 15.99,
      "annual": 5.49,
      "popular": true,
      "orcamento": false,
      "isEmail": true,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Profissionais e pequenas empresas que precisam de mais recursos",
      "deliveryTime": "3 dias úteis",
      "features": [
        { "title": "10GB de armazenamento", "description": "10x mais espaço que o plano gratuito" },
        { "title": "Até 50 aliases de email", "description": "Máxima flexibilidade de endereços" },
        { "title": "10 encaminhadores", "description": "Redirecione emails para múltiplas contas" },
        { "title": "Suporte POP3/IMAP", "description": "Configure em qualquer cliente de email" },
        { "title": "Até 100.000 mensagens", "description": "Armazenamento empresarial robusto" },
        { "title": "1.000 emails por dia", "description": "Envio profissional sem limitações" },
        { "title": "Antivírus integrado", "description": "Proteção contra anexos maliciosos" },
        { "title": "Anti-spam avançado", "description": "Filtros inteligentes de segurança" },
        { "title": "Infraestrutura em nuvem", "description": "Alta disponibilidade e performance" }
      ],
      "marketPosition": "Economia de 71% no plano anual vs mensal - melhor custo-benefício",
      "whatsapp": "https://w.app/dharmalabs_emailstarter",
    },
    "emailPremium": {
      "name": "E-mail Business Premium",
      "subtitle": "Solução corporativa completa",
      "development": 0,
      "monthly": 29.99,
      "annual": 12.99,
      "popular": false,
      "orcamento": false,
      "isEmail": true,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Empresas que precisam de máximo desempenho e capacidade",
      "deliveryTime": "3 diaa úteis",
      "features": [
        { "title": "50GB de armazenamento", "description": "Espaço premium para uso intenso" },
        { "title": "Até 50 aliases de email", "description": "Organização profissional completa" },
        { "title": "50 encaminhadores", "description": "Roteamento avançado de mensagens" },
        { "title": "Suporte POP3/IMAP", "description": "Compatibilidade total com clientes" },
        { "title": "Até 300.000 mensagens", "description": "Capacidade enterprise de armazenamento" },
        { "title": "3.000 emails por dia", "description": "Alto volume para campanhas e operações" },
        { "title": "Antivírus integrado", "description": "Segurança corporativa avançada" },
        { "title": "Anti-spam avançado", "description": "Proteção inteligente de nível empresarial" },
        { "title": "Infraestrutura em nuvem", "description": "Performance e confiabilidade máximas" }
      ],
      "marketPosition": "Economia de 60% no plano anual - solução enterprise acessível",
      "whatsapp": "https://api.whatsapp.com/send?phone=5517991446829&text=Ol%C3%A1%2C+%F0%9F%91%8B%21%0AGostaria+de+realizar+um+upgrade+do+meu+servi%C3%A7o+de+e-mail+Dharma+Labs+Business+Starter%2C+para+o+servi%C3%A7o%3A%0A%0A%60%60%60E-mail+Business+Premium%60%60%60"
    }
  },

  "consultoria": {
    "revitalizacaoSite": {
      "name": "Revitalização de Site",
      "subtitle": "Dê uma nova vida ao seu site",
      "development": 0,
      "monthly": 0,
      "popular": false,
      "orcamento": true,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Sites antigos que precisam de layout e performance atualizados",
      "deliveryTime": "15–30 dias úteis",
      "features": [
        { "title": "Análise de design e conteúdo", "description": "Identificação de melhorias visuais e de usabilidade" },
        { "title": "Aplicação de novas tendências visuais", "description": "Layout moderno e responsivo" },
        { "title": "Novas funcionalidades", "description": "Adição de recursos como formulários, links para redes sociais e mais" },
        { "title": "Otimização de SEO", "description": "Melhor posicionamento no Google" }
      ],
      "marketPosition": "Mais acessível que criar um site novo"
    },
    "auditoriaSistema": {
      "name": "Auditoria de Sistema",
      "subtitle": "Descubra falhas e oportunidades",
      "development": 0,
      "monthly": 0,
      "popular": false,
      "orcamento": true,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Sistemas que precisam melhorar desempenho e segurança",
      "deliveryTime": "20–60 dias úteis",
      "features": [
        { "title": "Verificamos melhorias no seu sistema atual", "description": "Inclui auditoria técnica de back-end e banco de dados" },
        { "title": "Novas funcionalidades", "description": "Sugestões de recursos que podem ser adicionados" },
        { "title": "Relatório com recomendações", "description": "Sugestões práticas para evolução do sistema" }
      ],
      "marketPosition": "Mais barato que manter um sistema ineficiente"
    },
    "qaCompleto": {
      "name": "Consultoria QA Completa",
      "subtitle": "Qualidade assegurada do início ao fim",
      "development": 0,
      "monthly": 0,
      "popular": false,
      "orcamento": true,
      "icon": "dharma-labs-main.svg",
      "idealFor": "Projetos que precisam de validação contínua",
      "deliveryTime": "30–120 dias úteis",
      "features": [
        { "title": "Análise completa do seu produto", "description": "Acompanhamento durante o desenvolvimento" },
        { "title": "Testes automatizados", "description": "Cobertura máxima para evitar erros" },
        { "title": "Testes web, API e mobile", "description": "Validação em todas as plataformas" },
        { "title": "Relatórios de execução", "description": "Documentação detalhada dos testes realizados" }
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

    const bgColors100 = {
      sites: 'bg-highlight-100',
      biopages: 'bg-accent-100',
      sistemas: 'bg-primary-100',
      dashboards: 'bg-highlight-100',
      // apps: 'bg-accent-500',
      // automacao: 'bg-accent-500',
      email: 'bg-accent-100',
      consultoria: 'bg-primary-100'
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

    const number = "5517991446829";

    const mensagemCodificada = encodeURIComponent(mensagem);

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
          <div class="p-2 ${bgColors100[category]} rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
            <img src="./assets/images/logos/${service.icon}" alt="${service.name}" class="w-11 h-11"/>
          </div>
          <div>
            <h3 class="text-lg font-bold text-primary-900">${service.name}</h3>
            <p class="text-gray-600 text-sm">${service.subtitle}</p>
          </div>
        </div>

        ${service.development > 0 ? `
        <div class="mb-4">
          <div class="flex flex-col sm:flex-row items-start sm:items-baseline mb-1">
            <div class="flex flex-col sm:flex-row sm:items-baseline">
            ${service.originalPrice && service.originalPrice > service.development ? `
              <span class="text-sm text-gray-500 line-through mr-2">R$ ${service.originalPrice.toLocaleString()}</span>
              ` : ''}
              <span class="text-base font-semibold text-primary-900">${orcamento.aPartir}
              </span>
            </div>
            <div class="flex items-baseline ml-0 sm:ml-2">
              <span class="ml-2 text-3xl  font-bold text-primary-800 group-hover:scale-101 transition-transform transform origin-left duration-300"> R$ ${service.development.toLocaleString()}</span>
              <span class="text-gray-600 ml-2 text-lg md:text-sm">${orcamento.tipoPagamento}</span>
            </div>
          </div>
        </div>
        ` : (service.orcamento ? `
          <div class="mb-4">
            <span class="text-2xl font-bold text-primary-800 drop-shadow-lg group-hover:scale-101 transition-transform transform origin-left duration-300">Valor sob consulta</span>
          </div>
        ` : '')}

        ${service.isEmail ? `
          ${service.monthly > 0 ? `
          <div class="mb-4 flex flex-row md:flex-col md:space-y-2">
            <div class="flex flex-col md:flex-row md:items-center items-center text-center font-semibold group-hover:scale-105 transition-transform transform origin-left duration-300 flex-1 mr-2 md:mr-0">
              <span class="text-base text-primary-600">R$ ${service.annual}/mês</span>
              <span class="text-xs mt-1 md:mt-0 md:ml-1 bg-primary-100 text-primary-600 px-2 py-1 rounded">plano anual</span>
              <span class="text-xs mt-1 md:mt-0 md:ml-1 bg-primary-600 text-primary-200 px-2 py-1 rounded">(por caixa)</span>
            </div>
            <div class="flex flex-col md:flex-row md:items-center items-center text-center font-semibold group-hover:scale-105 transition-transform transform origin-left duration-300 mr-2 md:mr-0 flex-none">
              <span class="text-[10px] mt-1 md:mt-0 md:ml-1 bg-highlight-100 text-highlight-600 px-2 py-1 rounded">ou</span>
            </div>
            <div class="flex flex-col md:flex-row md:items-center items-center text-center font-semibold group-hover:scale-105 transition-transform transform origin-left duration-300 flex-1">
              <span class="text-base text-accent-600">R$ ${service.monthly}/mês</span>
              <span class="text-xs mt-1 md:mt-0 md:ml-1 bg-accent-100 text-accent-600 px-2 py-1 rounded">plano mensal</span>
              <span class="text-xs mt-1 md:mt-0 md:ml-1 bg-accent-600 text-accent-200 px-2 py-1 rounded">(por caixa)</span>
            </div>
          </div>
          ` : `
          <div class="mb-4">
            <div class="flex items-center  font-semibold group-hover:scale-125 transition-transform transform origin-left duration-300">
              <span class="text-2xl text-primary-600">R$ ${service.monthly}/mês</span>
            </div>
          </div>
          `}` : `
          ${service.monthly > 0 ? `
          <div class="mb-4 flex flex-row md:flex-col md:space-y-2">
            <div class="flex flex-col md:flex-row md:items-center items-center text-center font-semibold md:group-hover:scale-125 group-hover:scale-105 transition-transform transform origin-left duration-300 flex-1 mr-2 md:mr-0">
              <span class="text-base text-primary-600">+ R$ ${service.annual}/mês</span>
              <span class="text-xs mt-1 md:mt-0 md:ml-1 bg-primary-100 text-primary-600 px-2 py-1 rounded">plano anual</span>
              <span class="text-xs mt-1 md:mt-0 md:ml-1 bg-primary-600 text-primary-200 px-2 py-1 rounded">(fixo)</span>
            </div>
            <div class="flex flex-col md:flex-row md:items-center items-center text-center font-semibold md:group-hover:scale-125 group-hover:scale-105 transition-transform transform origin-left duration-300 mr-2 md:mr-0 flex-none">
              <span class="text-[10px] mt-1 md:mt-0 md:ml-1 bg-highlight-100 text-highlight-600 px-2 py-1 rounded">ou</span>
            </div>
            <div class="flex flex-col md:flex-row md:items-center items-center text-center font-semibold md:group-hover:scale-125 group-hover:scale-105 transition-transform transform origin-left duration-300 flex-1">
              <span class="text-base text-accent-600">+ R$ ${service.monthly}/mês</span>
              <span class="text-xs mt-1 md:mt-0 md:ml-1 bg-accent-100 text-accent-600 px-2 py-1 rounded">plano mensal</span>
              <span class="text-xs mt-1 md:mt-0 md:ml-1 bg-accent-600 text-accent-200 px-2 py-1 rounded">(fixo)</span>
            </div>
          </div>
          ` : ''}
        `}

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

      ${service.isEmail && service.monthly == 0 ? ``: `
      <a href="https://api.whatsapp.com/send?phone=${number}&text=${mensagemCodificada}" target="_blank" class="w-full bg-gradient-to-r ${ctaColors[category]} text-white py-3 rounded-2xl font-semibold hover:shadow-lg group-hover:scale-105 transition-transform transform duration-300 text-center block">
        ${service.isEmail ? `Upgrade` : `${orcamento.tipoVenda}`}
      </a>
      `}
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
    
    // Only scroll to pricing-content if the hash specifically targets it
    if (hash === "pricing-content") {
      const targetSection = document.querySelector("#pricing-content");
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
});


// Exportar para uso global
window.PricingManager = PricingManager;
window.PRICING_DATA = PRICING_DATA;

console.log('💰 Pricing config carregado!');