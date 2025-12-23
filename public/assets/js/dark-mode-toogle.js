/**
 * DHARMA LABS - DARK MODE TOGGLE (ANIMATION FIXED)
 * Corrigindo a sequência de animação e cores
 */

class DarkModeToggle {
  constructor() {
    // Verificar localStorage primeiro, padrão é modo escuro
    const savedMode = localStorage.getItem('dharma-dark-mode');
    this.isDarkMode = savedMode === null ? true : savedMode === 'true';
    this.toggleElement = null;
    this.isAnimating = false;
    this.init();
  }

  init() {
    console.log('🌙 Inicializando toggle modo escuro...');

    // Aplicar o modo salvo (ou padrão)
    if (this.isDarkMode) {
      this.applyDarkMode();
    } else {
      this.applyLightMode();
    }

    // Criar o botão toggle
    this.createToggle();

    // Configurar event listeners
    this.setupEventListeners();

    console.log('✅ Toggle modo escuro pronto!');
  }

  applyDarkMode() {
    document.documentElement.classList.add('dark-mode');
    document.body.classList.add('dark-mode');
    localStorage.setItem('dharma-dark-mode', 'true');
  }

  applyLightMode() {
    document.documentElement.classList.remove('dark-mode');
    document.body.classList.remove('dark-mode');
    localStorage.setItem('dharma-dark-mode', 'false');
  }

  createToggle() {
    // Verificar se já existe
    if (document.getElementById('darkmode-toggle')) {
      this.toggleElement = document.getElementById('darkmode-toggle');
      return;
    }

    const toggle = document.createElement('button');
    toggle.id = 'darkmode-toggle';
    toggle.setAttribute('aria-label', 'Alternar modo claro/escuro');
    toggle.innerHTML = `
            <div class="toggle-content">
                <i class="fas fa-moon"></i>
            </div>
        `;

    // Estilos base
    const isMobile = window.innerWidth <= 768;
    const fontSize = isMobile ? 20 : 28;

    toggle.style.cssText = `
            background: none;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            color: #f8fafc;
            font-size: ${fontSize}px;
            width: ${isMobile ? '32px' : '50px'};
            height: ${isMobile ? '32px' : '50px'};
        `;

    // Posicionamento baseado no dispositivo
    if (isMobile) {
      this.placeToggleInHeader(toggle);
    } else {
      this.placeToggleAsFixed(toggle);
    }

    this.toggleElement = toggle;
    this.updateToggleIcon();
  }

  placeToggleInHeader(toggle) {
    const headerContainer = document.querySelector('#navbar .container');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');

    if (headerContainer && mobileMenuBtn) {
      headerContainer.querySelector('.flex').insertBefore(toggle, mobileMenuBtn);
      toggle.style.marginRight = '16px';
    } else {
      this.placeToggleAsFixed(toggle);
    }
  }

  placeToggleAsFixed(toggle) {
    const isMobile = window.innerWidth <= 768;
    const topPosition = isMobile ? 25 : 20;
    const rightPosition = isMobile ? 10 : 20;

    toggle.style.position = 'fixed';
    toggle.style.top = `${topPosition}px`;
    toggle.style.right = `${rightPosition}px`;
    toggle.style.zIndex = '1000';

    document.body.appendChild(toggle);
  }

  setupEventListeners() {
    if (!this.toggleElement) return;

    this.toggleElement.addEventListener('click', (e) => {
      e.preventDefault();
      if (!this.isAnimating) {
        this.toggle();
      }
    });

    this.toggleElement.addEventListener('mouseenter', () => {
      if (!this.isAnimating) {
        this.toggleElement.style.transform = 'scale(1.2) rotate(0deg)';
      }
    });

    this.toggleElement.addEventListener('mouseleave', () => {
      if (!this.isAnimating) {
        this.toggleElement.style.transform = 'scale(1) rotate(0deg)';
      }
    });

    window.addEventListener('resize', () => this.handleResize());
  }

  handleResize() {
    if (!this.toggleElement) return;

    const isMobile = window.innerWidth <= 768;
    const fontSize = isMobile ? 20 : 28;

    this.toggleElement.style.fontSize = `${fontSize}px`;
    this.toggleElement.style.width = isMobile ? '35px' : '50px';
    this.toggleElement.style.height = isMobile ? '35px' : '50px';

    const currentParent = this.toggleElement.parentElement;
    const isInHeader = currentParent && currentParent.closest('#navbar');

    if (isMobile && !isInHeader) {
      this.placeToggleInHeader(this.toggleElement);
    } else if (!isMobile && isInHeader) {
      this.placeToggleAsFixed(this.toggleElement);
    }
  }

  toggle() {
    if (this.isAnimating) return;

    this.isAnimating = true;
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      this.applyDarkMode();
    } else {
      this.applyLightMode();
    }

    this.animateToggle();
  }

  animateToggle() {
    if (!this.toggleElement) return;

    const content = this.toggleElement.querySelector('.toggle-content');
    const icon = this.toggleElement.querySelector('i');

    // FASE 1: Animação de saída (encolher e girar)
    content.style.transform = 'scale(0.7) rotate(180deg)';
    content.style.opacity = '0.5';

    setTimeout(() => {
      // FASE 2: Trocar ícone e cor ANTES de expandir
      this.updateToggleIcon();

      // FASE 3: Animação de entrada (expandir e completar rotação)
      content.style.transform = 'scale(1.1) rotate(360deg)';
      content.style.opacity = '1';

      setTimeout(() => {
        // FASE 4: Voltar ao normal
        content.style.transform = 'scale(1) rotate(0deg)';
        this.isAnimating = false;
      }, 200);

    }, 150); // Tempo da fase de saída
  }

  updateToggleIcon() {
    if (!this.toggleElement) return;

    const icon = this.toggleElement.querySelector('i');
    if (icon) {
      if (this.isDarkMode) {
        // Modo escuro: lua BRANCA
        icon.className = 'fas fa-moon';
        icon.style.color = '#f8fafc'; // branco
      } else {
        // Modo claro: sol AMARELO
        icon.className = 'fas fa-sun';
        icon.style.color = '#fbbf24'; // amarelo
      }
    }
  }
}

// Inicialização imediata
console.log('🌙 Carregando toggle modo escuro...');

function initDarkMode() {
  // Verificar localStorage antes de aplicar qualquer modo
  const savedMode = localStorage.getItem('dharma-dark-mode');
  const isDarkMode = savedMode === null ? true : savedMode === 'true';

  // Aplicar o modo salvo (ou padrão) imediatamente para evitar flash
  if (isDarkMode) {
    document.documentElement.classList.add('dark-mode');
    document.body.classList.add('dark-mode');
  } else {
    document.documentElement.classList.remove('dark-mode');
    document.body.classList.remove('dark-mode');
  }

  setTimeout(() => {
    window.darkModeToggle = new DarkModeToggle();
  }, 100);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDarkMode);
} else {
  initDarkMode();
}