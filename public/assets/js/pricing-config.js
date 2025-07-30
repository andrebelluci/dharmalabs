// Dados de preços completos
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

// Função para criar cards de preços
function createPricingCard(service, category) {
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
        <div class="pricing-card bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-t-4 ${borderColors[category]} relative overflow-hidden group">
          ${service.popular ? `
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div class="bg-accent-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                🔥 MAIS POPULAR
              </div>
            </div>
          ` : ''}

          <div class="${service.popular ? 'pt-4' : ''}">
            <div class="flex items-center mb-6">
              <div class="p-3 bg-accent-100 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                <img src="./assets/images/logos/${service.icon}" alt="${service.name}" class="w-12 h-12"/>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-primary-900">${service.name}</h3>
                <p class="text-gray-600">${service.subtitle}</p>
              </div>
            </div>

            <div class="mb-8">
              ${service.development > 0 ? `
                <div class="flex items-baseline mb-2">
                  ${service.originalPrice > service.development ? `<span class="text-sm text-gray-500 line-through mr-2">R$ ${service.originalPrice.toLocaleString()}</span>` : ''}
                  <span class="text-4xl font-bold text-primary-900">R$ ${service.development.toLocaleString()}</span>
                  <span class="text-gray-600 ml-2">desenvolvimento</span>
                </div>
              ` : ''}

              ${service.monthly > 0 ? `
                <div class="flex items-center text-accent-600 font-semibold">
                  <span class="text-lg">+ R$ ${service.monthly}/mês</span>
                  <span class="text-sm ml-2 bg-accent-100 px-2 py-1 rounded">manutenção</span>
                </div>
              ` : ''}

              ${service.hourly ? `
                <div class="flex items-center text-primary-600 font-semibold">
                  <span class="text-3xl font-bold">R$ ${service.hourly}</span>
                  <span class="text-lg ml-2">por hora</span>
                </div>
              ` : ''}
            </div>

            <div class="space-y-4 mb-8">
              ${service.features.map(feature => `
                <div class="flex items-start space-x-3">
                  <i class="fas fa-check text-accent-500 mt-1"></i>
                  <span class="text-gray-700">${feature}</span>
                </div>
              `).join('')}
            </div>

            <a href="https://wa.link/suwtio" class="block w-full bg-gradient-to-r ${ctaColors[category]} text-white text-center py-4 rounded-2xl font-semibold hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1">
              ${service.development > 0 ? 'Solicitar Orçamento' : 'Contratar Serviço'}
            </a>
          </div>
        </div>
      `;
}

// Função para renderizar cards de uma categoria
function renderCategoryCards(category) {
  const container = document.getElementById(`${category}-cards`);
  if (!container || !PRICING_DATA[category]) return;

  const services = Object.values(PRICING_DATA[category]);
  container.innerHTML = services.map(service => createPricingCard(service, category)).join('');
}

// Função para alternar tabs
function setupTabs() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');

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
      button.classList.add('active', 'bg-primary-600', 'text-white');
      button.classList.remove('text-gray-600', 'hover:text-primary-600');

      const targetContent = document.getElementById(`tab-${targetTab}`);
      if (targetContent) {
        targetContent.classList.add('active');
        targetContent.classList.remove('hidden');
      }

      // Render cards for the active tab if not already rendered
      renderCategoryCards(targetTab);
    });
  });

  // Set initial active tab
  const initialButton = document.querySelector('.tab-button[data-tab="sites"]');
  if (initialButton) {
    initialButton.classList.add('active', 'bg-primary-600', 'text-white');
    initialButton.classList.remove('text-gray-600', 'hover:text-primary-600');
  }
}

// FAQ Functionality
function setupFAQ() {
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

// Mobile menu functionality
function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking on links
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('hidden');
      }
    });
  }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function () {
  setupTabs();
  setupFAQ();
  setupMobileMenu();

  // Render initial cards for sites tab
  renderCategoryCards('sites');

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: Math.max(0, offsetTop),
          behavior: 'smooth'
        });
      }
    });
  });

  // Animate pricing cards on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Function to observe cards
  const observeCards = () => {
    document.querySelectorAll('.pricing-card').forEach((card, index) => {
      if (!card.hasAttribute('data-observed')) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`;
        card.setAttribute('data-observed', 'true');
        observer.observe(card);
      }
    });
  };

  // Observe initial cards and re-observe when tabs change
  setTimeout(observeCards, 100);

  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
      setTimeout(observeCards, 200);
    });
  });

  // Add some visual feedback for loading
  console.log('🌸 Dharma Labs - Página de Preços carregada com sucesso!');
});

// Error handling
window.addEventListener('error', function (e) {
  console.error('Erro na página:', e.error);
});