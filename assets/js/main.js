/**
 * ZENITH VISION - Script d'interactivité & simulateur de supports
 * Agence de Communication Visuelle - Ouagadougou / Cissin
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. DONNÉES DU SIMULATEUR DE SUPPORTS (HERO)
  // =========================================================================
  const supportsData = {
    kakemono: {
      name: "Kakémono Grande Base",
      dims: "85 × 200 cm",
      price: "39 000 FCFA",
      badge: '<i class="fa-solid fa-star text-amber-500 mr-1"></i> Le N°1 des Ventes Salons & Conférences',
      material: "Bâche Dos Gris occultant 510g (anti-reflets)",
      structure: "Structure enrouleur aluminium lourd grande base + housse matelassée",
      image: "assets/images/portfolio/thumbs/kakemono_1_thumb.jpg",
      fullImage: "assets/images/portfolio/kakemono/kakemono_1.jpg",
      aspect: "aspect-[85/200]",
      waText: "Bonjour Zenith Vision, je souhaite commander un *Kakémono Grande Base (85x200cm)* à *39 000 FCFA* (conception + corrections + impression dos gris en 48H). Voici mon besoin :"
    },
    xbanner: {
      name: "X-Banner Économique",
      dims: "80 × 180 cm",
      price: "24 500 FCFA",
      badge: '<i class="fa-solid fa-rocket text-[#033B6E] mr-1"></i> Le Meilleur Rapport Qualité / Prix',
      material: "Bâche Dos Gris avec 4 œillets renforcés aux coins",
      structure: "Croisillon en X ultra-léger et stable + sac de transport noir",
      image: "assets/images/portfolio/thumbs/xbanner_1_thumb.jpg",
      fullImage: "assets/images/portfolio/xbanner/xbanner_1.jpeg",
      aspect: "aspect-[80/180]",
      waText: "Bonjour Zenith Vision, je souhaite commander un *X-Banner (80x180cm)* à *24 500 FCFA* (conception + corrections + impression dos gris en 48H). Voici mon besoin :"
    },
    doorbanner: {
      name: "Door-Banner Élite",
      dims: "80 × 180 cm",
      price: "29 000 FCFA",
      badge: '<i class="fa-solid fa-crown text-amber-500 mr-1"></i> Idéal Hall d\'Accueil, Showroom & Magasin',
      material: "Bâche Dos Gris tendue haute définition",
      structure: "Pied lourd haute stabilité + barres de fixation élégantes",
      image: "assets/images/portfolio/thumbs/doorbanner_1_thumb.jpg",
      fullImage: "assets/images/portfolio/doorbanner/doorbanner_1.png",
      aspect: "aspect-[80/180]",
      waText: "Bonjour Zenith Vision, je souhaite commander un *Door-Banner (80x180cm)* à *29 000 FCFA* (conception + corrections + impression dos gris en 48H). Voici mon besoin :"
    }
  };

  // Sélecteurs du Simulateur
  const simTabs = document.querySelectorAll('.sim-tab-btn');
  const simTitle = document.getElementById('sim-support-title');
  const simDims = document.getElementById('sim-support-dims');
  const simPrice = document.getElementById('sim-support-price');
  const simBadge = document.getElementById('sim-support-badge');
  const simMaterial = document.getElementById('sim-support-material');
  const simStructure = document.getElementById('sim-support-structure');
  const simImage = document.getElementById('sim-support-img');
  const simWaBtn = document.getElementById('sim-wa-btn');

  function updateSimulator(type) {
    const data = supportsData[type];
    if (!data) return;

    // Mise à jour visuelle des boutons
    simTabs.forEach(btn => {
      if (btn.dataset.support === type) {
        btn.classList.add('bg-[#033B6E]', 'text-white', 'shadow-md');
        btn.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
      } else {
        btn.classList.remove('bg-[#033B6E]', 'text-white', 'shadow-md');
        btn.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
      }
    });

    // Animation fondu de l'image
    if (simImage) {
      simImage.style.opacity = '0';
      setTimeout(() => {
        simImage.src = data.image;
        simImage.alt = data.name;
        simImage.style.opacity = '1';
      }, 150);
    }

    if (simTitle) simTitle.textContent = data.name;
    if (simDims) simDims.textContent = data.dims;
    if (simPrice) simPrice.textContent = data.price;
    if (simBadge) simBadge.innerHTML = data.badge;
    if (simMaterial) simMaterial.textContent = data.material;
    if (simStructure) simStructure.textContent = data.structure;
    if (simWaBtn) {
      simWaBtn.href = `https://wa.me/22665414899?text=${encodeURIComponent(data.waText)}`;
    }
  }

  simTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      updateSimulator(btn.dataset.support);
    });
  });

  // Initialisation sur le Kakemono
  updateSimulator('kakemono');


  // =========================================================================
  // 2. SWITCHER D'ONGLETS DE PRIX (PRICING TABS)
  // =========================================================================
  const pricingTabBtns = document.querySelectorAll('.pricing-tab-btn');
  const pricingTabPanels = document.querySelectorAll('.pricing-tab-panel');

  pricingTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      pricingTabBtns.forEach(b => {
        if (b === btn) {
          b.classList.add('bg-[#033B6E]', 'text-white', 'shadow-md');
          b.classList.remove('text-gray-600', 'hover:text-[#033B6E]');
        } else {
          b.classList.remove('bg-[#033B6E]', 'text-white', 'shadow-md');
          b.classList.add('text-gray-600', 'hover:text-[#033B6E]');
        }
      });

      pricingTabPanels.forEach(panel => {
        if (panel.id === `tab-panel-${target}`) {
          panel.classList.remove('hidden');
          panel.classList.add('grid');
        } else {
          panel.classList.add('hidden');
          panel.classList.remove('grid');
        }
      });
    });
  });


  // =========================================================================
  // 3. DONNÉES & GESTION DU PORTFOLIO (14 RÉALISATIONS RÉELLES)
  // =========================================================================
  const portfolioItems = [
    {
      id: 1,
      category: "kakemono",
      title: "Kakémono Grande Base - Événement Professionnel",
      dims: "85 × 200 cm",
      thumb: "assets/images/portfolio/thumbs/kakemono_1_thumb.jpg",
      full: "assets/images/portfolio/kakemono/kakemono_1.jpg",
      tag: "Finition Dos Gris 510g"
    },
    {
      id: 2,
      category: "kakemono",
      title: "Kakémono Grande Base - Conférence & Forum",
      dims: "85 × 200 cm",
      thumb: "assets/images/portfolio/thumbs/kakemono_2_thumb.jpg",
      full: "assets/images/portfolio/kakemono/kakemono_2.jpg",
      tag: "Délai 48H respecté"
    },
    {
      id: 3,
      category: "kakemono",
      title: "Kakémono Grande Base - Stand d'Exposition",
      dims: "85 × 200 cm",
      thumb: "assets/images/portfolio/thumbs/kakemono_3_thumb.jpg",
      full: "assets/images/portfolio/kakemono/kakemono_3.jpg",
      tag: "Enrouleur alu renforcé"
    },
    {
      id: 4,
      category: "kakemono",
      title: "Kakémono Grande Base - Marque & Institution",
      dims: "85 × 200 cm",
      thumb: "assets/images/portfolio/thumbs/kakemono_4_thumb.jpg",
      full: "assets/images/portfolio/kakemono/kakemono_4.jpg",
      tag: "Impression HD éclatante"
    },
    {
      id: 5,
      category: "kakemono",
      title: "Kakémono Grande Base - Promotion Produit",
      dims: "85 × 200 cm",
      thumb: "assets/images/portfolio/thumbs/kakemono_5_thumb.jpg",
      full: "assets/images/portfolio/kakemono/kakemono_5.jpg",
      tag: "Anti-reflet dos gris"
    },
    {
      id: 6,
      category: "kakemono",
      title: "Kakémono Grande Base - Salon Professionnel Ouaga",
      dims: "85 × 200 cm",
      thumb: "assets/images/portfolio/thumbs/kakemono_6_thumb.jpg",
      full: "assets/images/portfolio/kakemono/kakemono_6.jpg",
      tag: "Conception graphique Zenith"
    },
    {
      id: 7,
      category: "kakemono",
      title: "Kakémono Grande Base - Présentation Corporate",
      dims: "85 × 200 cm",
      thumb: "assets/images/portfolio/thumbs/kakemono_7_thumb.jpg",
      full: "assets/images/portfolio/kakemono/kakemono_7.jpg",
      tag: "Livré à Cissin"
    },
    {
      id: 8,
      category: "kakemono",
      title: "Kakémono Grande Base - Communication Visuelle",
      dims: "85 × 200 cm",
      thumb: "assets/images/portfolio/thumbs/kakemono_8_thumb.jpg",
      full: "assets/images/portfolio/kakemono/kakemono_8.jpg",
      tag: "Séries de corrections incluses"
    },
    {
      id: 9,
      category: "kakemono",
      title: "Kakémono Grande Base - Campagne Événementielle",
      dims: "85 × 200 cm",
      thumb: "assets/images/portfolio/thumbs/kakemono_9_thumb.jpg",
      full: "assets/images/portfolio/kakemono/kakemono_9.jpg",
      tag: "100% Satisfait"
    },
    {
      id: 10,
      category: "xbanner",
      title: "X-Banner Léger - Communication Boutique",
      dims: "80 × 180 cm",
      thumb: "assets/images/portfolio/thumbs/xbanner_1_thumb.jpg",
      full: "assets/images/portfolio/xbanner/xbanner_1.jpeg",
      tag: "Support X économique"
    },
    {
      id: 11,
      category: "xbanner",
      title: "X-Banner Mobile - Événement & Séminaire",
      dims: "80 × 180 cm",
      thumb: "assets/images/portfolio/thumbs/xbanner_2_thumb.jpg",
      full: "assets/images/portfolio/xbanner/xbanner_2.jpeg",
      tag: "Transport ultra-facile"
    },
    {
      id: 12,
      category: "xbanner",
      title: "X-Banner Déroulant - Lancement de Service",
      dims: "80 × 180 cm",
      thumb: "assets/images/portfolio/thumbs/xbanner_3_thumb.jpg",
      full: "assets/images/portfolio/xbanner/xbanner_3.jpeg",
      tag: "4 Œillets inox"
    },
    {
      id: 13,
      category: "xbanner",
      title: "X-Banner Showroom - Démonstration Produit",
      dims: "80 × 180 cm",
      thumb: "assets/images/portfolio/thumbs/xbanner_4_thumb.jpg",
      full: "assets/images/portfolio/xbanner/xbanner_4.jpeg",
      tag: "Tarif 24 500 F"
    },
    {
      id: 14,
      category: "doorbanner",
      title: "Door-Banner Élite - Entrée Boutique & Showroom",
      dims: "80 × 180 cm",
      thumb: "assets/images/portfolio/thumbs/doorbanner_1_thumb.jpg",
      full: "assets/images/portfolio/doorbanner/doorbanner_1.png",
      tag: "Format Porte d'Accueil"
    }
  ];

  const portfolioGrid = document.getElementById('portfolio-grid');
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');

  // Génération des cartes du Portfolio
  function renderPortfolio(items) {
    if (!portfolioGrid) return;
    portfolioGrid.innerHTML = '';

    items.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = "group relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer";
      card.dataset.index = index;

      card.innerHTML = `
        <div class="relative overflow-hidden bg-slate-100 aspect-[3/4] flex items-center justify-center">
          <img 
            src="${item.thumb}" 
            alt="${item.title}" 
            loading="lazy"
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#031B33]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
            <span class="inline-block px-2.5 py-1 bg-[#F0E60A] text-[#033B6E] text-xs font-bold rounded-full mb-2 w-max">
              <i class="fa-solid fa-magnifying-glass mr-1"></i> Cliquer pour agrandir
            </span>
            <p class="text-xs font-medium text-slate-200">Dimensions : ${item.dims}</p>
          </div>
          <span class="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur-md text-[#033B6E] shadow-sm">
            ${item.tag}
          </span>
        </div>
        <div class="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h4 class="font-bold text-sm text-slate-800 group-hover:text-[#033B6E] transition-colors line-clamp-1">${item.title}</h4>
            <p class="text-xs text-slate-500 mt-1">Délai express 48H • Ouagadougou</p>
          </div>
          <div class="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
            <span class="text-xs font-semibold text-[#033B6E]">${item.dims}</span>
            <span class="text-xs font-bold text-amber-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Voir en HD <i class="fa-solid fa-arrow-right text-xs"></i>
            </span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        openLightbox(item);
      });

      portfolioGrid.appendChild(card);
    });
  }

  // Filtrage du Portfolio
  let currentFilteredItems = portfolioItems;
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach(b => {
        if (b === btn) {
          b.classList.add('bg-[#033B6E]', 'text-white', 'shadow-sm');
          b.classList.remove('bg-white', 'text-slate-600', 'hover:bg-slate-100');
        } else {
          b.classList.remove('bg-[#033B6E]', 'text-white', 'shadow-sm');
          b.classList.add('bg-white', 'text-slate-600', 'hover:bg-slate-100');
        }
      });

      if (filter === 'all') {
        currentFilteredItems = portfolioItems;
      } else {
        currentFilteredItems = portfolioItems.filter(item => item.category === filter);
      }
      renderPortfolio(currentFilteredItems);
    });
  });

  // Premier rendu
  renderPortfolio(portfolioItems);


  // =========================================================================
  // 4. LIGHTBOX HD PLEIN ÉCRAN
  // =========================================================================
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDims = document.getElementById('lightbox-dims');
  const lightboxTag = document.getElementById('lightbox-tag');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const lightboxWaBtn = document.getElementById('lightbox-wa-btn');

  let currentLightboxItem = null;

  function openLightbox(item) {
    if (!lightboxModal) return;
    currentLightboxItem = item;

    lightboxImg.src = item.full;
    lightboxImg.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxDims.textContent = `Dimensions : ${item.dims}`;
    lightboxTag.textContent = item.tag;

    const waMsg = `Bonjour Zenith Vision, j'ai vu votre réalisation "${item.title}" (${item.dims}) sur votre site et j'aimerais commander un support similaire en 48H.`;
    lightboxWaBtn.href = `https://wa.me/22665414899?text=${encodeURIComponent(waMsg)}`;

    lightboxModal.classList.remove('hidden');
    lightboxModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.add('hidden');
    lightboxModal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  function navigateLightbox(direction) {
    if (!currentLightboxItem || currentFilteredItems.length === 0) return;
    const currentIndex = currentFilteredItems.findIndex(i => i.id === currentLightboxItem.id);
    let nextIndex = currentIndex + direction;

    if (nextIndex < 0) nextIndex = currentFilteredItems.length - 1;
    if (nextIndex >= currentFilteredItems.length) nextIndex = 0;

    openLightbox(currentFilteredItems[nextIndex]);
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
  if (lightboxNext) lightboxNext.addEventListener('click', () => navigateLightbox(1));

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // Raccourcis clavier
  document.addEventListener('keydown', (e) => {
    if (lightboxModal && !lightboxModal.classList.contains('hidden')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    }
  });


  // =========================================================================
  // 5. ACCORDÉON FAQ INTERACTIF
  // =========================================================================
  const faqToggles = document.querySelectorAll('.faq-toggle');

  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const parent = toggle.closest('.faq-item');
      const content = parent.querySelector('.faq-content');
      const icon = toggle.querySelector('.faq-icon');

      const isOpen = !content.classList.contains('hidden');

      // Fermer tous les autres
      document.querySelectorAll('.faq-item').forEach(item => {
        item.querySelector('.faq-content').classList.add('hidden');
        const ic = item.querySelector('.faq-icon');
        if (ic) ic.style.transform = 'rotate(0deg)';
      });

      if (!isOpen) {
        content.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });


  // =========================================================================
  // 6. CALCULATEUR / FORMULAIRE DE DEVIS RAPIDE VERS WHATSAPP
  // =========================================================================
  const quoteForm = document.getElementById('quote-form');
  const quoteServiceSelect = document.getElementById('quote-service');
  const quoteQtyInput = document.getElementById('quote-qty');
  const quoteDetailsInput = document.getElementById('quote-details');
  const quoteNameInput = document.getElementById('quote-name');
  const quoteEstimateDisplay = document.getElementById('quote-estimate');

  const servicePriceMap = {
    'kakemono': { name: "Kakémono Grande Base (85*200cm)", price: 39000 },
    'xbanner': { name: "X-Banner (80*180cm)", price: 24500 },
    'doorbanner': { name: "Door-Banner (80*180cm)", price: 29000 },
    'logo': { name: "Création de Logo", price: 20000 },
    'flyer': { name: "Flyer Publicitaire", price: 10000 },
    'catalogue': { name: "Catalogue Commercial", price: 25000 },
    'video_ia': { name: "Vidéos Publicitaires IA", price: 25000 }
  };

  function updateQuoteEstimate() {
    if (!quoteServiceSelect || !quoteQtyInput || !quoteEstimateDisplay) return;
    const selectedKey = quoteServiceSelect.value;
    const qty = parseInt(quoteQtyInput.value, 10) || 1;
    const item = servicePriceMap[selectedKey];

    if (item) {
      const total = item.price * qty;
      quoteEstimateDisplay.textContent = `${total.toLocaleString('fr-FR')} FCFA`;
    } else {
      quoteEstimateDisplay.textContent = "Sur devis personnalisé";
    }
  }

  if (quoteServiceSelect) quoteServiceSelect.addEventListener('change', updateQuoteEstimate);
  if (quoteQtyInput) quoteQtyInput.addEventListener('input', updateQuoteEstimate);
  updateQuoteEstimate();

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const selectedKey = quoteServiceSelect.value;
      const qty = quoteQtyInput.value || 1;
      const details = quoteDetailsInput ? quoteDetailsInput.value : '';
      const name = quoteNameInput ? quoteNameInput.value : '';
      const item = servicePriceMap[selectedKey] || { name: "Service Personnalisé", price: 0 };
      const total = item.price * qty;

      let msg = `Bonjour Zenith Vision, je m'appelle *${name || 'Client'}*.\n`;
      msg += `Je souhaite commander :\n`;
      msg += `• *Prestation :* ${item.name}\n`;
      msg += `• *Quantité :* ${qty}\n`;
      if (total > 0) {
        msg += `• *Estimation :* ${total.toLocaleString('fr-FR')} FCFA (Tout inclus en 48H)\n`;
      }
      if (details.trim()) {
        msg += `• *Détails / Besoins :* ${details}\n`;
      }
      msg += `\nPouvez-vous me confirmer la prise en charge et le délai ? Merci !`;

      const waUrl = `https://wa.me/22665414899?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }


  // =========================================================================
  // 7. MENU MOBILE & HEADER SCROLL
  // =========================================================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Header background on scroll
  const mainHeader = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (!mainHeader) return;
    if (window.scrollY > 40) {
      mainHeader.classList.add('shadow-md', 'bg-white/95');
      mainHeader.classList.remove('bg-white/80');
    } else {
      mainHeader.classList.remove('shadow-md', 'bg-white/95');
      mainHeader.classList.add('bg-white/80');
    }
  });

});
