/**
 * DHARMA LABS - DARK MODE THREE.JS (RESPONSIVE)
 * Com texturas locais e tamanhos responsivos para mobile
 */

class DarkModeThreeJS {
  constructor() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.sun = null;
    this.moon = null;
    this.isDarkMode = false;
    this.isTransitioning = false;
    this.animationId = null;
    this.isInitialized = false;

    // URLs das texturas LOCAIS
    this.textureUrls = {
      sun: this.getBasePath() + 'assets/images/textures/sun.jpg',
      moon: this.getBasePath() + 'assets/images/textures/moon.jpg'
    };

    // CDNs de fallback para Three.js
    this.threejsCDNs = [
      'https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/three.js/r158/three.min.js',
      'https://unpkg.com/three@0.158.0/build/three.min.js',
      'https://cdn.skypack.dev/three@0.158.0'
    ];

    // *** CONFIGURAÇÕES RESPONSIVAS ***
    this.config = this.getResponsiveConfig();

    this.loadThreeJS();
  }

  getBasePath() {
    const path = window.location.pathname;
    const depth = (path.match(/\//g) || []).length - 1;
    return depth > 0 ? '../'.repeat(depth) : './';
  }

  getResponsiveConfig() {
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 1024 && window.innerWidth > 768;

    console.log(`📱 Detectado: ${isMobile ? 'Mobile' : isTablet ? 'Tablet' : 'Desktop'} (${window.innerWidth}px)`);

    if (isMobile) {
      return {
        container: null,
        // Mobile: Container e objetos menores
        containerSize: 70,
        camera: { fov: 60, near: 0.1, far: 1000, position: { x: 0, y: 0, z: 2.8 } },
        sun: { radius: 1.2, position: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0.002, z: 0 } },
        moon: { radius: 1.0, position: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0.008, z: 0 } },
        transition: { duration: 1500, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' },
        position: { top: 70, right: 3 }
      };
    } else if (isTablet) {
      return {
        container: null,
        // Tablet: Tamanho médio
        containerSize: 85,
        camera: { fov: 60, near: 0.1, far: 1000, position: { x: 0, y: 0, z: 2.6 } },
        sun: { radius: 1.15, position: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0.002, z: 0 } },
        moon: { radius: 0.9, position: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0.008, z: 0 } },
        transition: { duration: 1650, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' },
        position: { top: 70, right: 20 }
      };
    } else {
      return {
        container: null,
        // Desktop: Tamanho original
        containerSize: 100,
        camera: { fov: 60, near: 0.1, far: 1000, position: { x: 0, y: 0, z: 2.5 } },
        sun: { radius: 1.3, position: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0.002, z: 0 } },
        moon: { radius: 1.0, position: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0.008, z: 0 } },
        transition: { duration: 1800, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' },
        position: { top: 50, right: 20 }
      };
    }
  }

  async loadThreeJS() {
    console.log('🚀 Carregando Three.js...');

    if (typeof THREE !== 'undefined') {
      console.log('✅ Three.js já disponível!');
      this.init3D();
      return;
    }

    for (let i = 0; i < this.threejsCDNs.length; i++) {
      const cdnUrl = this.threejsCDNs[i];
      console.log(`🔄 Tentando CDN ${i + 1}/${this.threejsCDNs.length}`);

      try {
        await this.loadScript(cdnUrl);
        if (typeof THREE !== 'undefined') {
          console.log(`✅ Three.js carregado do CDN ${i + 1}!`);
          this.init3D();
          return;
        }
      } catch (error) {
        console.warn(`❌ CDN ${i + 1} falhou:`, error.message);
      }
    }

    console.log('⚠️ Todos os CDNs falharam, usando modo simples');
    this.initSimple();
  }

  loadScript(url) {
    return new Promise((resolve, reject) => {
      const existingScript = document.querySelector(`script[src="${url}"]`);
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.src = url;
      script.crossOrigin = 'anonymous';

      const timeout = setTimeout(() => {
        reject(new Error('Timeout loading script'));
      }, 5000);

      script.onload = () => {
        clearTimeout(timeout);
        resolve();
      };

      script.onerror = () => {
        clearTimeout(timeout);
        reject(new Error(`Failed to load ${url}`));
      };

      document.head.appendChild(script);
    });
  }

  async init3D() {
    try {
      console.log('🌙 Inicializando sistema 3D...');
      await this.setupScene();
      await this.loadTextures();
      this.createCelestialBodies();
      this.setupLighting();
      this.setupEventListeners();
      this.startAnimation();
      this.loadUserPreference();
      this.isInitialized = true;
      console.log('✨ Sistema 3D responsivo ativo!');
    } catch (error) {
      console.error('❌ Erro no 3D:', error);
      this.initSimple();
    }
  }

  initSimple() {
    console.log('🔄 Modo simples ativo...');
    this.createSimpleToggle();
    this.loadUserPreference();
    console.log('✅ Toggle simples funcionando!');
  }

  createSimpleToggle() {
    const toggle = document.createElement('div');
    toggle.id = 'simple-dark-toggle';

    toggle.innerHTML = `
      <div class="toggle-content">
        <div class="toggle-icon">${this.isDarkMode ? '🌙' : '☀️'}</div>
        <div class="toggle-glow"></div>
      </div>
    `;

    const isMobile = window.innerWidth <= 768;
    const size = isMobile ? 60 : 80;
    const fontSize = isMobile ? 24 : 32;

    const styles = `
      position: fixed;
      top: ${this.config.position.top}px;
      right: ${this.config.position.right}px;
      width: ${size}px;
      height: ${size}px;
      background: linear-gradient(135deg, #4ade80 0%, #a855f7 50%, #38bdf8 100%);
      border-radius: 50%;
      cursor: pointer;
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      overflow: hidden;
    `;

    toggle.style.cssText = styles;

    const content = toggle.querySelector('.toggle-content');
    content.style.cssText = `
      position: relative;
      font-size: ${fontSize}px;
      transition: transform 0.3s ease;
      z-index: 2;
    `;

    const glow = toggle.querySelector('.toggle-glow');
    glow.style.cssText = `
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    `;

    const hoverScale = isMobile ? 1.1 : 1.15;

    toggle.addEventListener('mouseenter', () => {
      toggle.style.transform = `scale(${hoverScale}) rotate(5deg)`;
      toggle.style.boxShadow = this.isDarkMode
        ? '0 8px 30px rgba(168, 85, 247, 0.6)'
        : '0 8px 30px rgba(74, 222, 128, 0.6)';
      glow.style.opacity = '1';
    });

    toggle.addEventListener('mouseleave', () => {
      toggle.style.transform = 'scale(1) rotate(0deg)';
      toggle.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
      glow.style.opacity = '0';
    });

    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleDarkMode();

      const icon = toggle.querySelector('.toggle-icon');

      content.style.transform = 'scale(0.7) rotate(180deg)';

      setTimeout(() => {
        icon.textContent = this.isDarkMode ? '🌙' : '☀️';
        content.style.transform = 'scale(1.2) rotate(360deg)';

        setTimeout(() => {
          content.style.transform = 'scale(1) rotate(0deg)';
        }, 200);
      }, 150);
    });

    document.body.appendChild(toggle);
    this.config.container = toggle;
  }

  async setupScene() {
    if (typeof THREE === 'undefined') {
      throw new Error('Three.js not available');
    }

    this.config.container = document.createElement('div');
    this.config.container.id = 'darkmode-threejs-container';

    const containerSize = this.config.containerSize;

    this.config.container.style.cssText = `
      position: fixed;
      top: ${this.config.position.top}px;
      right: ${this.config.position.right}px;
      width: ${containerSize}px;
      height: ${containerSize}px;
      z-index: 1000;
      border-radius: 50%;
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    `;

    document.body.appendChild(this.config.container);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      this.config.camera.fov,
      1,
      this.config.camera.near,
      this.config.camera.far
    );
    this.camera.position.set(
      this.config.camera.position.x,
      this.config.camera.position.y,
      this.config.camera.position.z
    );

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    this.renderer.setSize(containerSize, containerSize);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.config.container.appendChild(this.renderer.domElement);

    console.log(`📐 Container: ${containerSize}x${containerSize}px, Sol: ${this.config.sun.radius}, Lua: ${this.config.moon.radius}`);
  }

  async loadTextures() {
    const loader = new THREE.TextureLoader();

    try {
      console.log('🖼️ Carregando texturas locais...');

      const [sunTexture, moonTexture] = await Promise.all([
        this.loadTexture(loader, this.textureUrls.sun),
        this.loadTexture(loader, this.textureUrls.moon)
      ]);

      this.sunTexture = sunTexture;
      this.moonTexture = moonTexture;

      console.log('✅ Texturas locais carregadas com sucesso!');
    } catch (error) {
      console.warn('⚠️ Falha nas texturas locais, usando procedurais:', error);
      this.sunTexture = this.createUltraSunTexture();
      this.moonTexture = this.createUltraMoonTexture();
    }
  }

  loadTexture(loader, url) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error(`Timeout loading texture: ${url}`));
      }, 10000);

      loader.load(
        url,
        (texture) => {
          clearTimeout(timeout);
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.RepeatWrapping;
          texture.magFilter = THREE.LinearFilter;
          texture.minFilter = THREE.LinearMipmapLinearFilter;
          texture.generateMipmaps = true;
          resolve(texture);
        },
        undefined,
        (error) => {
          clearTimeout(timeout);
          console.warn(`Falha ao carregar ${url}:`, error);
          reject(error);
        }
      );
    });
  }

  createUltraSunTexture() {
    console.log('🎨 Criando textura procedural do sol...');
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    const centerGradient = ctx.createRadialGradient(512, 512, 0, 512, 512, 512);
    centerGradient.addColorStop(0, '#FFFFFF');
    centerGradient.addColorStop(0.1, '#FFFACD');
    centerGradient.addColorStop(0.3, '#FFE55C');
    centerGradient.addColorStop(0.5, '#FFA500');
    centerGradient.addColorStop(0.7, '#FF6347');
    centerGradient.addColorStop(0.85, '#FF4500');
    centerGradient.addColorStop(1, '#8B0000');

    ctx.fillStyle = centerGradient;
    ctx.fillRect(0, 0, 1024, 1024);

    // Manchas solares
    ctx.globalCompositeOperation = 'multiply';
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 1024;
      const radius = Math.random() * 30 + 10;

      const spotGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      spotGradient.addColorStop(0, `rgba(139, 69, 19, ${Math.random() * 0.6 + 0.2})`);
      spotGradient.addColorStop(1, 'rgba(139, 69, 19, 0)');

      ctx.fillStyle = spotGradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    return new THREE.CanvasTexture(canvas);
  }

  createUltraMoonTexture() {
    console.log('🎨 Criando textura procedural da lua...');
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    const lunarGradient = ctx.createRadialGradient(512, 512, 0, 512, 512, 512);
    lunarGradient.addColorStop(0, '#F8F8FF');
    lunarGradient.addColorStop(0.2, '#F0F0F0');
    lunarGradient.addColorStop(0.4, '#E6E6FA');
    lunarGradient.addColorStop(0.6, '#D3D3D3');
    lunarGradient.addColorStop(0.8, '#C0C0C0');
    lunarGradient.addColorStop(1, '#708090');

    ctx.fillStyle = lunarGradient;
    ctx.fillRect(0, 0, 1024, 1024);

    // Crateras
    ctx.globalCompositeOperation = 'multiply';
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 1024;
      const radius = Math.random() * 25 + 5;

      const craterGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      craterGradient.addColorStop(0, `rgba(105, 105, 105, ${Math.random() * 0.6 + 0.3})`);
      craterGradient.addColorStop(1, 'rgba(105, 105, 105, 0)');

      ctx.fillStyle = craterGradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    return new THREE.CanvasTexture(canvas);
  }

  createCelestialBodies() {
    // Geometria responsiva baseada no dispositivo
    const isMobile = window.innerWidth <= 768;
    const segments = isMobile ? 32 : 64; // Menos geometria no mobile para performance

    const sunGeometry = new THREE.SphereGeometry(this.config.sun.radius, segments, segments);
    const moonGeometry = new THREE.SphereGeometry(this.config.moon.radius, segments, segments);

    // Material do Sol - sempre o mesmo
    const sunMaterial = new THREE.MeshBasicMaterial({
      map: this.sunTexture,
      transparent: false
    });

    // Material da Lua - sempre o mesmo
    const moonMaterial = new THREE.MeshBasicMaterial({
      map: this.moonTexture,
      transparent: false
    });

    // Criar Sol
    this.sun = new THREE.Mesh(sunGeometry, sunMaterial);
    this.sun.position.copy(this.config.sun.position);
    this.scene.add(this.sun);

    // Criar Lua
    this.moon = new THREE.Mesh(moonGeometry, moonMaterial);
    this.moon.position.set(0, 20, 0);
    this.scene.add(this.moon);

    console.log(`🌞 Sol: raio ${this.config.sun.radius}, geometria ${segments}x${segments}`);
    console.log(`🌙 Lua: raio ${this.config.moon.radius}, geometria ${segments}x${segments}`);
  }

  setupLighting() {
    // Luz ambiente neutra
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    this.scene.add(ambientLight);
  }

  setupEventListeners() {
    this.config.container.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.toggleDarkMode();
    });

    const isMobile = window.innerWidth <= 768;
    const hoverScale = isMobile ? 1.2 : 1.3;

    this.config.container.addEventListener('mouseenter', () => {
      this.config.container.style.transform = `scale(${hoverScale}) rotate(8deg)`;
      this.config.container.style.boxShadow = this.isDarkMode
        ? '0 10px 50px rgba(168, 85, 247, 0.7)'
        : '0 10px 50px rgba(255, 165, 0, 0.7)';
    });

    this.config.container.addEventListener('mouseleave', () => {
      this.config.container.style.transform = 'scale(1) rotate(0deg)';
      this.config.container.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    });

    // Listener de redimensionamento responsivo
    window.addEventListener('resize', () => {
      this.handleResize();
    });
  }

  handleResize() {
    if (this.camera) {
      this.camera.aspect = 1;
      this.camera.updateProjectionMatrix();
    }

    // Recriar configuração responsiva se necessário
    const oldConfig = this.config;
    const newConfig = this.getResponsiveConfig();

    if (oldConfig.containerSize !== newConfig.containerSize) {
      console.log('📱 Redimensionamento detectado, atualizando...');

      // Atualizar tamanho do container se necessário
      if (this.config.container && this.renderer) {
        this.config = newConfig;

        const containerSize = this.config.containerSize;
        this.config.container.style.width = `${containerSize}px`;
        this.config.container.style.height = `${containerSize}px`;
        this.config.container.style.top = `${this.config.position.top}px`;
        this.config.container.style.right = `${this.config.position.right}px`;

        this.renderer.setSize(containerSize, containerSize);

        console.log(`📐 Redimensionado para: ${containerSize}x${containerSize}px`);
      }
    }
  }

  toggleDarkMode() {
    if (this.isTransitioning) return;

    this.isTransitioning = true;
    const newMode = !this.isDarkMode;

    console.log(`🔄 Alternando para modo ${newMode ? 'escuro' : 'claro'}`);

    if (this.isInitialized && this.sun && this.moon) {
      this.animateTransition(newMode);
    }

    this.setDarkMode(newMode, true);

    setTimeout(() => {
      this.isTransitioning = false;
    }, this.config.transition.duration);
  }

  animateTransition(toDarkMode) {
    const duration = this.config.transition.duration;
    const startTime = Date.now();

    console.log(`🎬 Iniciando transição para ${toDarkMode ? 'escuro' : 'claro'}`);

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = this.easeInOutCubic(progress);

      if (toDarkMode) {
        // MODO ESCURO: Sol sobe (sai), Lua desce (entra)
        this.sun.position.y = easeProgress * 20;
        this.moon.position.y = 20 - (easeProgress * 20);

        this.sun.rotation.z += 0.03;
        this.moon.rotation.y += 0.02;
      } else {
        // MODO CLARO: Lua sobe (sai), Sol desce (entra)
        this.moon.position.y = easeProgress * 20;
        this.sun.position.y = 20 - (easeProgress * 20);

        this.moon.rotation.z += 0.03;
        this.sun.rotation.y += 0.02;
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        console.log(`✅ Transição completa! Sol Y: ${this.sun.position.y.toFixed(1)}, Lua Y: ${this.moon.position.y.toFixed(1)}`);
      }
    };

    animate();
  }

  setDarkMode(enabled, savePreference = true) {
    this.isDarkMode = enabled;

    if (savePreference) {
      localStorage.setItem('dharma-dark-mode', enabled.toString());
    }

    const htmlEl = document.documentElement;
    const bodyEl = document.body;

    if (enabled) {
      htmlEl.classList.add('dark-mode');
      bodyEl.classList.add('dark-mode');
    } else {
      htmlEl.classList.remove('dark-mode');
      bodyEl.classList.remove('dark-mode');
    }

    window.dispatchEvent(new CustomEvent('darkModeToggle', {
      detail: { isDarkMode: enabled }
    }));

    console.log(`🌙 Modo ${enabled ? 'escuro' : 'claro'} aplicado - Sol Y: ${this.sun?.position.y || 'N/A'}, Lua Y: ${this.moon?.position.y || 'N/A'}`);
  }

  loadUserPreference() {
    const saved = localStorage.getItem('dharma-dark-mode');
    const systemPrefers = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    const shouldBeDark = saved !== null ? saved === 'true' : systemPrefers;

    console.log(`🔍 Preferência detectada: ${shouldBeDark ? 'escuro' : 'claro'} (salvo: ${saved}, sistema: ${systemPrefers})`);

    if (shouldBeDark && this.sun && this.moon) {
      console.log('🌙 Configurando posições iniciais para modo escuro');
      this.sun.position.y = 20;
      this.moon.position.y = 0;
    } else if (this.sun && this.moon) {
      console.log('☀️ Configurando posições iniciais para modo claro');
      this.sun.position.y = 0;
      this.moon.position.y = 20;
    }

    this.setDarkMode(shouldBeDark, false);
  }

  startAnimation() {
    if (!this.renderer || !this.scene || !this.camera) return;

    const animate = () => {
      this.animationId = requestAnimationFrame(animate);

      // Sol roda quando visível
      if (this.sun && this.sun.position.y < 15) {
        this.sun.rotation.y += this.config.sun.rotation.y;

        const time = Date.now() * 0.001;
        this.sun.position.x = Math.sin(time * 0.3) * 0.05;
        this.sun.position.z = Math.cos(time * 0.4) * 0.03;
      }

      // Lua roda quando visível
      if (this.moon && this.moon.position.y < 15) {
        this.moon.rotation.y += this.config.moon.rotation.y;

        const time = Date.now() * 0.001;
        this.moon.position.x = Math.sin(time * 0.2 + Math.PI) * 0.04;
        this.moon.position.z = Math.cos(time * 0.3 + Math.PI) * 0.02;
      }

      this.renderer.render(this.scene, this.camera);
    };

    animate();
  }

  easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }

    if (this.renderer) {
      this.renderer.dispose();
    }

    if (this.config.container && this.config.container.parentNode) {
      this.config.container.parentNode.removeChild(this.config.container);
    }

    console.log('🧹 Sistema destruído');
  }
}

// Inicialização global
console.log('🌙 Dharma Labs - Modo Escuro Responsivo carregando...');

function initDarkMode() {
  try {
    window.darkModeSystem = new DarkModeThreeJS();
  } catch (error) {
    console.error('❌ Erro na inicialização:', error);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDarkMode);
} else {
  initDarkMode();
}

window.DarkModeThreeJS = DarkModeThreeJS;