/* ========================================
   DHARMA LABS - ANIMAÇÕES SCROLL PROFISSIONAIS
   Arquivo: animations-scroll.js
   ======================================== */

// ===== CONFIGURAÇÃO INICIAL =====
document.addEventListener('DOMContentLoaded', function () {

    // Registrar plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Configurações globais
    gsap.defaults({
        ease: "power2.out",
        duration: 0.8
    });

    initAnimations();
});

function initAnimations() {
    // Hero Section Animations
    heroAnimations();

    // Menu Sticky Active State
    menuActiveState();

    // Diferenciais Cards
    diferenciaisAnimation();

    // Serviços Cards
    servicosAnimation();

    // Timeline "Como Funciona"
    comoFuncionaTimeline();

    // Planos Comparativo
    planosAnimation();

    // FAQ Accordion
    faqAccordion();

    // Number Counters
    numberCounters();

    // Parallax Background
    parallaxBackground();

    // Hover Effects
    hoverEffects();

    // Refresh ScrollTrigger após todas as animações serem configuradas
    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 100);
}

// ===== 1. HERO SECTION =====
function heroAnimations() {
    const tl = gsap.timeline();

    tl.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    })
        .from(".hero-subtitle", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.6")
        .from(".hero-cta", {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2
        }, "-=0.4")
        .from(".hero-badge", {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            ease: "back.out(1.7)"
        }, "-=0.2");
}

// ===== 2. MENU STICKY ACTIVE STATE =====
function menuActiveState() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        ScrollTrigger.create({
            trigger: section,
            start: "top center",
            end: "bottom center",
            onEnter: () => updateActiveLink(section.id),
            onEnterBack: () => updateActiveLink(section.id)
        });
    });

    function updateActiveLink(id) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
            }
        });
    }
}

// ===== 4. DIFERENCIAIS CARDS =====
function diferenciaisAnimation() {
    const cards = document.querySelectorAll(".diferencial-card");
    const section = document.querySelector(".diferenciais-section");

    if (!section || cards.length === 0) return;

    // Definir estado inicial - elementos invisíveis
    gsap.set(cards, { opacity: 0, y: 80 });

    // Animação de entrada
    gsap.to(cards, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
            once: true
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
    });

    // Ícone animado
    const icons = document.querySelectorAll(".diferencial-icon");
    if (icons.length > 0) {
        gsap.set(icons, { opacity: 0, scale: 0, rotation: -180 });

        gsap.to(icons, {
            scrollTrigger: {
                trigger: section,
                start: "top 75%",
                toggleActions: "play none none reverse",
                once: true
            },
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(2)"
        });
    }
}

// ===== 5. SERVIÇOS CARDS =====
function servicosAnimation() {
    const cards = document.querySelectorAll('.servico-card');

    cards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    });
}

// ===== 6. TIMELINE "COMO FUNCIONA" =====
function comoFuncionaTimeline() {
    const timelineContainer = document.querySelector('.timeline-container');
    const timelineLine = document.querySelector('.timeline-line');
    const steps = document.querySelectorAll('.step-item');
    const section = document.querySelector('#como-funciona');

    if (!timelineContainer || !timelineLine || steps.length === 0) return;

    // Função para calcular posições
    function calculateLinePositions() {
        const containerRect = timelineContainer.getBoundingClientRect();
        const containerTop = containerRect.top + window.scrollY;

        // Calcular posição do primeiro step (centro do número)
        const firstStep = steps[0];
        const firstStepNumber = firstStep.querySelector('.step-number');
        const firstStepRect = firstStep.getBoundingClientRect();
        const firstStepNumberRect = firstStepNumber ? firstStepNumber.getBoundingClientRect() : firstStepRect;
        const lineStart = (firstStepNumberRect.top + window.scrollY + (firstStepNumberRect.height / 6)) - containerTop;

        // Calcular posição do último step
        const lastStep = steps[steps.length - 1];
        const lastStepNumber = lastStep.querySelector('.step-number');
        const lastStepRect = lastStep.getBoundingClientRect();
        const lastStepNumberRect = lastStepNumber ? lastStepNumber.getBoundingClientRect() : lastStepRect;
        const lineEnd = (lastStepNumberRect.top + window.scrollY + (lastStepNumberRect.height / 2)) - containerTop;

        return {
            start: lineStart,
            end: lineEnd,
            height: lineEnd - lineStart
        };
    }

    // Remover classes de animação conflitantes dos steps
    steps.forEach((step) => {
        step.classList.remove('scroll-fade-up');
        // Garantir que os steps estejam visíveis inicialmente
        gsap.set(step, { opacity: 1, x: 0 });
    });

    // Animar cada step individualmente
    steps.forEach((step, index) => {
        // Estado inicial
        gsap.set(step, {
            x: -100,
            opacity: 0
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: step,
                start: "top 85%",
                toggleActions: "play none none reverse",
                refreshPriority: -1, // Prioridade baixa para não interferir com scroll programático
                preventOverlaps: true, // Prevenir sobreposição
                // Desabilitar durante scroll programático
                onToggle: function (self) {
                    if (window.isProgrammaticScroll && self.isActive) {
                        this.disable();
                    }
                }
            }
        });

        tl.to(step, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
        })
            .from(step.querySelector('.step-number'), {
                scale: 0,
                rotation: 720,
                duration: 0.5,
                ease: "back.out(2)"
            }, "-=0.5")
            .from(step.querySelector('.step-content'), {
                y: 20,
                opacity: 0,
                duration: 0.5
            }, "-=0.3");
    });

    // Aguardar um frame para garantir que o layout está completo
    requestAnimationFrame(() => {
        // Calcular posições iniciais
        const positions = calculateLinePositions();

        // Configurar estado inicial da linha
        gsap.set(timelineLine, {
            height: 0,
            top: positions.start + "px"
        });

        // Animar altura da linha conforme o scroll usando ScrollTrigger
        // Aplicar soluções do fórum GSAP para evitar interferência com scroll programático
        const timelineTrigger = gsap.to(timelineLine, {
            height: positions.height,
            scrollTrigger: {
                trigger: section || timelineContainer,
                start: "top 80%",
                end: () => {
                    // Recalcular para garantir precisão
                    const newPositions = calculateLinePositions();
                    // Aumentar o espaço para fazer a linha descer mais devagar
                    // Quanto maior o valor, mais devagar a linha desce
                    return `+=${newPositions.height + 800}`;
                },
                scrub: 2, // Aumentado de 1 para 2 - torna mais lento e suave
                invalidateOnRefresh: true, // Recalcula em resize
                refreshPriority: -1, // Prioridade baixa para não interferir com scroll programático
                preventOverlaps: true, // Prevenir sobreposição
                anticipatePin: 1, // Antecipar pin para melhor performance
                // Desabilitar durante scroll programático
                onUpdate: function () {
                    // Não atualizar durante scroll programático
                    if (window.isProgrammaticScroll) {
                        this.disable();
                        return;
                    }
                    // Recalcular posições durante o scroll para manter precisão
                    const currentPositions = calculateLinePositions();
                    gsap.set(timelineLine, {
                        top: currentPositions.start + "px"
                    });
                },
                // Prevenir que o scrub interfira com scroll programático
                onEnter: function () {
                    if (window.isProgrammaticScroll) {
                        this.disable();
                    }
                },
                onLeave: function () {
                    if (window.isProgrammaticScroll) {
                        this.disable();
                    }
                },
                // Callback para quando o trigger é ativado/desativado
                onToggle: function (self) {
                    if (window.isProgrammaticScroll && self.isActive) {
                        this.disable();
                    }
                }
            },
            ease: "none"
        });

        // Armazenar referência para poder matar/reativar quando necessário
        window.timelineScrollTrigger = timelineTrigger.scrollTrigger;
    });
}

// ===== 7. PLANOS COMPARATIVO =====
function planosAnimation() {
    const planos = document.querySelectorAll('.plano-card');
    const section = document.querySelector(".planos-section");

    if (!section || planos.length === 0) return;

    // Definir estado inicial - elementos invisíveis
    gsap.set(planos, { opacity: 0, y: 100 });

    // Animação de entrada
    gsap.to(planos, {
        scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
            once: true
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Destaque do plano popular
    const popular = document.querySelector(".plano-popular");
    if (popular) {
        gsap.set(popular, { scale: 0.9, opacity: 0 });

        gsap.to(popular, {
            scrollTrigger: {
                trigger: section,
                start: "top 70%",
                toggleActions: "play none none reverse",
                once: true
            },
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(1.5)"
        });
    }
}

// ===== 8. FAQ ACCORDION =====
function faqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    const section = document.querySelector(".faq-section");

    if (!section || faqItems.length === 0) return;

    // Definir estado inicial - elementos invisíveis
    gsap.set(faqItems, { opacity: 0, x: -50 });

    // Animação de entrada
    gsap.to(faqItems, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
            once: true
        },
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
    });

    // Funcionalidade de accordion
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (!question || !answer) return;

        // Inicialmente fechado
        gsap.set(answer, { height: 0, opacity: 0, overflow: "hidden" });

        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');

            // Fechar todos
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    if (otherAnswer) {
                        gsap.to(otherAnswer, {
                            height: 0,
                            opacity: 0,
                            duration: 0.3,
                            ease: "power2.in"
                        });
                    }
                }
            });

            // Toggle atual
            if (isOpen) {
                item.classList.remove('active');
                gsap.to(answer, {
                    height: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in"
                });
            } else {
                item.classList.add('active');
                gsap.to(answer, {
                    height: "auto",
                    opacity: 1,
                    duration: 0.4,
                    ease: "power2.out"
                });
            }
        });
    });
}

// ===== 9. NUMBER COUNTERS =====
function numberCounters() {
    const counters = document.querySelectorAll('.counter-number');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));

        gsap.to(counter, {
            scrollTrigger: {
                trigger: counter,
                start: "top 80%"
            },
            textContent: target,
            duration: 2,
            ease: "power1.inOut",
            snap: { textContent: 1 },
            onUpdate: function () {
                counter.textContent = Math.ceil(counter.textContent);
            }
        });
    });
}

// ===== 10. PARALLAX BACKGROUND =====
function parallaxBackground() {
    gsap.to(".parallax-bg", {
        scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true
        },
        y: 300,
        opacity: 0.3,
        ease: "none"
    });

    // Elementos flutuantes
    gsap.to(".float-element", {
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        },
        y: -100,
        rotation: 15,
        ease: "none"
    });
}

// ===== 11. HOVER EFFECTS =====
function hoverEffects() {
    // Cards lift effect
    const cards = document.querySelectorAll('.card-hover-lift');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 60px rgba(74, 222, 128, 0.3)",
                duration: 0.3,
                ease: "power2.out"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                boxShadow: "0 4px 20px rgba(74, 222, 128, 0.1)",
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    // Botões com pulse
    const ctaButtons = document.querySelectorAll('.cta-button');

    ctaButtons.forEach(button => {
        gsap.to(button, {
            scale: 1.05,
            duration: 0.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });
}

// ===== 12. SMOOTH SCROLL PARA ÂNCORAS =====
// Variável global para rastrear scroll programático
let isProgrammaticScroll = false;

// Aguardar DOM estar pronto
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopImmediatePropagation(); // Prevenir qualquer outro handler

            // Extrair apenas o hash do href (ex: planos.html#indicacao -> #indicacao)
            let href = this.getAttribute('href');
            let hash = href;

            // Se o href contém #, extrair apenas a parte do hash
            if (href.includes('#')) {
                const hashIndex = href.indexOf('#');
                hash = href.substring(hashIndex); // Pega tudo após o #
            }

            // Se não começa com #, adicionar
            if (!hash.startsWith('#')) {
                hash = '#' + hash;
            }

            const target = document.querySelector(hash);

            if (target) {
                // Marcar como scroll programático (globalmente acessível)
                window.isProgrammaticScroll = true;
                isProgrammaticScroll = true;

                // Desabilitar TODOS os ScrollTriggers, especialmente os com scrub
                // Usar abordagem mais suave baseada nas soluções do fórum GSAP
                const allTriggers = ScrollTrigger.getAll();
                const triggerStates = [];

                allTriggers.forEach(trigger => {
                    triggerStates.push({
                        trigger: trigger,
                        enabled: trigger.enabled,
                        kill: false,
                        vars: trigger.vars
                    });

                    // Para triggers com scrub, apenas desabilitar (não matar)
                    // Matar pode causar problemas de recriação
                    if (trigger.vars && trigger.vars.scrub) {
                        // Desabilitar e pausar a animação
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

                // Calcular posição final absoluta usando offsetTop para maior precisão
                const targetTop = target.offsetTop;
                const finalPosition = Math.max(0, targetTop - offsetY);

                // Verificar se há seção #como-funciona que pode interferir
                const comoFunciona = document.querySelector('#como-funciona');
                const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

                // Desabilitar ScrollTrigger globalmente durante o scroll
                ScrollTrigger.config({ autoRefreshEvents: "none" });

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
                                isProgrammaticScroll = false;

                                // Reativar ScrollTrigger
                                ScrollTrigger.config({ autoRefreshEvents: "resize,visibilitychange,DOMContentLoaded" });

                                // Reativar todos os triggers
                                triggerStates.forEach(({ trigger, enabled }) => {
                                    if (enabled) {
                                        trigger.enable();
                                        if (trigger.animation && trigger.animation.paused()) {
                                            trigger.animation.resume();
                                        }
                                    }
                                });

                                ScrollTrigger.refresh();
                            }, 1500);
                        });
                    });
                } else {
                    // Se não precisa passar pela seção problemática, usar mesma lógica que funciona para #contato
                    // Fazer scroll instantâneo primeiro
                    window.scrollTo(0, finalPosition);

                    // Aguardar um frame
                    requestAnimationFrame(() => {
                        // Agora fazer scroll suave
                        window.scrollTo({
                            top: finalPosition,
                            behavior: 'smooth'
                        });

                        // Reativar tudo após o scroll completar
                        setTimeout(() => {
                            window.isProgrammaticScroll = false;
                            isProgrammaticScroll = false;

                            // Reativar ScrollTrigger
                            ScrollTrigger.config({ autoRefreshEvents: "resize,visibilitychange,DOMContentLoaded" });

                            // Reativar todos os triggers
                            triggerStates.forEach(({ trigger, enabled }) => {
                                if (enabled) {
                                    trigger.enable();
                                    if (trigger.animation && trigger.animation.paused()) {
                                        trigger.animation.resume();
                                    }
                                }
                            });

                            ScrollTrigger.refresh();
                        }, 1200);
                    });
                }
            }
        }, { passive: false });
    });
});

// Interceptar eventos de scroll para prevenir interferência durante scroll programático
let scrollTimeout;
window.addEventListener('scroll', function () {
    if (isProgrammaticScroll) {
        // Durante scroll programático, prevenir atualizações de ScrollTrigger
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            // Permitir atualizações apenas após scroll completar
        }, 100);
    }
}, { passive: true });

// ===== 13. REFRESH SCROLLTRIGGER NO RESIZE =====
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});

// ===== 14. MOBILE OPTIMIZATION =====
if (window.innerWidth < 768) {
    // Reduzir intensidade das animações em mobile
    gsap.defaults({
        duration: 0.5
    });

    // Desabilitar parallax em mobile para performance
    ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.scrub) {
            trigger.kill();
        }
    });
}

/* ========================================
   USO NO HTML
   ========================================

   1. Incluir GSAP + ScrollTrigger no head:

   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js"></script>

   2. Incluir este arquivo antes do </body>:

   <script src="./assets/js/animations-scroll.js"></script>

   3. Estrutura HTML de exemplo:

   <!-- Hero Section -->
   <section id="hero" class="hero-section">
       <h1 class="hero-title">Sua Presença Digital Completa</h1>
       <p class="hero-subtitle">Transparência total, resultados garantidos</p>
       <div class="hero-cta">
           <button class="cta-button primary">Começar Agora</button>
           <button class="cta-button secondary">Ver Como Funciona</button>
       </div>
       <span class="hero-badge">🎁 Domínio grátis + Garantia 7 dias</span>
   </section>

   <!-- Diferenciais -->
   <section id="diferenciais" class="diferenciais-section">
       <div class="diferencial-card card-hover-lift">
           <span class="diferencial-icon">🔓</span>
           <h3>100% Transparente</h3>
           <p>Sem taxas ocultas...</p>
       </div>
       <!-- Repetir para outros cards -->
   </section>

   <!-- Como Funciona -->
   <section id="como-funciona" class="como-funciona-section">
       <div class="timeline-line"></div>
       <div class="step-item">
           <div class="step-number">1</div>
           <div class="step-content">
               <h3 class="step-title">Conversa Inicial</h3>
               <p class="step-description">Você nos conta sua ideia...</p>
           </div>
       </div>
       <!-- Repetir para outros steps -->
   </section>

   <!-- FAQ -->
   <section id="faq" class="faq-section">
       <div class="faq-item">
           <div class="faq-question">Quanto tempo leva?</div>
           <div class="faq-answer">Sites simples: 2-3 semanas...</div>
       </div>
       <!-- Repetir para outras perguntas -->
   </section>

   ======================================== */
