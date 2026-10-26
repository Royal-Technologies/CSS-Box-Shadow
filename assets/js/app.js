/**
 * BoxShadow Studio - Modern CSS Box Shadow Generator
 * High-performance, multi-layer CSS box-shadow designer
 * Open Source - MIT License
 */

(function () {
  'use strict';

  // --- Initial Presets Collection (26 Handcrafted Modern Presets) ---
  const PRESETS = [
    // 1. Minimal & Clean (6 presets)
    {
      id: 'subtle-card',
      name: 'Subtle Card',
      category: 'minimal',
      layers: [
        { inset: false, x: 0, y: 1, blur: 3, spread: 0, color: '#000000', opacity: 0.12, active: true },
        { inset: false, x: 0, y: 1, blur: 2, spread: -1, color: '#000000', opacity: 0.15, active: true }
      ]
    },
    {
      id: 'modern-saas',
      name: 'Modern SaaS Elevation',
      category: 'minimal',
      layers: [
        { inset: false, x: 0, y: 10, blur: 25, spread: -5, color: '#000000', opacity: 0.16, active: true },
        { inset: false, x: 0, y: 8, blur: 10, spread: -6, color: '#000000', opacity: 0.12, active: true }
      ]
    },
    {
      id: 'apple-float',
      name: 'Apple Float',
      category: 'minimal',
      layers: [
        { inset: false, x: 0, y: 20, blur: 40, spread: -10, color: '#0f172a', opacity: 0.22, active: true },
        { inset: false, x: 0, y: 1, blur: 3, spread: 0, color: '#0f172a', opacity: 0.1, active: true }
      ]
    },
    {
      id: 'cloud-feather',
      name: 'Ultra Soft Cloud',
      category: 'minimal',
      layers: [
        { inset: false, x: 0, y: 25, blur: 50, spread: -12, color: '#000000', opacity: 0.22, active: true },
        { inset: false, x: 0, y: 4, blur: 12, spread: 0, color: '#000000', opacity: 0.08, active: true }
      ]
    },
    {
      id: 'saas-hover',
      name: 'Clean Card Hover',
      category: 'minimal',
      layers: [
        { inset: false, x: 0, y: 20, blur: 25, spread: -5, color: '#000000', opacity: 0.14, active: true },
        { inset: false, x: 0, y: 8, blur: 10, spread: -6, color: '#000000', opacity: 0.12, active: true }
      ]
    },
    {
      id: 'ambient-deep',
      name: 'Deep Ambient Occlusion',
      category: 'minimal',
      layers: [
        { inset: false, x: 0, y: 30, blur: 60, spread: 0, color: '#000000', opacity: 0.25, active: true },
        { inset: false, x: 0, y: 10, blur: 20, spread: 0, color: '#000000', opacity: 0.15, active: true }
      ]
    },

    // 2. Material Design 3 (4 presets)
    {
      id: 'material-l1',
      name: 'Material Elevation 1',
      category: 'material',
      layers: [
        { inset: false, x: 0, y: 2, blur: 1, spread: -1, color: '#000000', opacity: 0.22, active: true },
        { inset: false, x: 0, y: 1, blur: 1, spread: 0, color: '#000000', opacity: 0.16, active: true },
        { inset: false, x: 0, y: 1, blur: 3, spread: 0, color: '#000000', opacity: 0.14, active: true }
      ]
    },
    {
      id: 'material-l3',
      name: 'Material Elevation 3',
      category: 'material',
      layers: [
        { inset: false, x: 0, y: 5, blur: 5, spread: -3, color: '#000000', opacity: 0.22, active: true },
        { inset: false, x: 0, y: 8, blur: 10, spread: 1, color: '#000000', opacity: 0.16, active: true },
        { inset: false, x: 0, y: 3, blur: 14, spread: 2, color: '#000000', opacity: 0.14, active: true }
      ]
    },
    {
      id: 'material-l5',
      name: 'Material Floating Dialog',
      category: 'material',
      layers: [
        { inset: false, x: 0, y: 11, blur: 15, spread: -7, color: '#000000', opacity: 0.28, active: true },
        { inset: false, x: 0, y: 24, blur: 38, spread: 3, color: '#000000', opacity: 0.2, active: true },
        { inset: false, x: 0, y: 9, blur: 46, spread: 8, color: '#000000', opacity: 0.16, active: true }
      ]
    },
    {
      id: 'material-modal',
      name: 'Material 3 Modal',
      category: 'material',
      layers: [
        { inset: false, x: 0, y: 12, blur: 17, spread: 2, color: '#000000', opacity: 0.18, active: true },
        { inset: false, x: 0, y: 5, blur: 22, spread: 4, color: '#000000', opacity: 0.14, active: true },
        { inset: false, x: 0, y: 7, blur: 8, spread: -4, color: '#000000', opacity: 0.22, active: true }
      ]
    },

    // 3. Neon & Glow (6 presets)
    {
      id: 'neon-cyan',
      name: 'Cyberpunk Cyan Glow',
      category: 'glow',
      layers: [
        { inset: false, x: 0, y: 0, blur: 15, spread: 2, color: '#06b6d4', opacity: 0.7, active: true },
        { inset: false, x: 0, y: 0, blur: 35, spread: 8, color: '#0891b2', opacity: 0.45, active: true },
        { inset: false, x: 0, y: 0, blur: 70, spread: 15, color: '#0e7490', opacity: 0.3, active: true }
      ]
    },
    {
      id: 'neon-violet',
      name: 'Purple Velvet Dream',
      category: 'glow',
      layers: [
        { inset: false, x: 0, y: 10, blur: 30, spread: -5, color: '#a855f7', opacity: 0.6, active: true },
        { inset: false, x: 0, y: 0, blur: 15, spread: 3, color: '#c084fc', opacity: 0.5, active: true },
        { inset: false, x: 0, y: 25, blur: 60, spread: 5, color: '#7e22ce', opacity: 0.35, active: true }
      ]
    },
    {
      id: 'sunset-bloom',
      name: 'Sunset Radiance',
      category: 'glow',
      layers: [
        { inset: false, x: 0, y: 12, blur: 24, spread: -4, color: '#f97316', opacity: 0.55, active: true },
        { inset: false, x: 0, y: 24, blur: 48, spread: 2, color: '#ef4444', opacity: 0.38, active: true }
      ]
    },
    {
      id: 'emerald-matrix',
      name: 'Emerald Matrix Glow',
      category: 'glow',
      layers: [
        { inset: false, x: 0, y: 0, blur: 20, spread: 3, color: '#10b981', opacity: 0.7, active: true },
        { inset: false, x: 0, y: 0, blur: 45, spread: 8, color: '#059669', opacity: 0.45, active: true }
      ]
    },
    {
      id: 'cyber-pink',
      name: 'Magenta Cyber Aura',
      category: 'glow',
      layers: [
        { inset: false, x: 0, y: 0, blur: 20, spread: 2, color: '#ec4899', opacity: 0.75, active: true },
        { inset: false, x: 0, y: 10, blur: 40, spread: 6, color: '#be185d', opacity: 0.5, active: true }
      ]
    },
    {
      id: 'golden-sun',
      name: 'Solar Flare Gold',
      category: 'glow',
      layers: [
        { inset: false, x: 0, y: 0, blur: 25, spread: 4, color: '#f59e0b', opacity: 0.75, active: true },
        { inset: false, x: 0, y: 8, blur: 45, spread: 8, color: '#d97706', opacity: 0.45, active: true }
      ]
    },

    // 4. Neumorphism (4 presets)
    {
      id: 'neumorphic-soft',
      name: 'Neumorphic Soft Dual',
      category: 'neumorphism',
      layers: [
        { inset: false, x: 8, y: 8, blur: 16, spread: 0, color: '#000000', opacity: 0.35, active: true },
        { inset: false, x: -8, y: -8, blur: 16, spread: 0, color: '#ffffff', opacity: 0.85, active: true }
      ]
    },
    {
      id: 'neumorphic-pressed',
      name: 'Neumorphic Inset Pressed',
      category: 'neumorphism',
      layers: [
        { inset: true, x: 6, y: 6, blur: 12, spread: 0, color: '#000000', opacity: 0.4, active: true },
        { inset: true, x: -6, y: -6, blur: 12, spread: 0, color: '#ffffff', opacity: 0.85, active: true }
      ]
    },
    {
      id: 'neumorphic-convex',
      name: 'Neumorphic Floating Pill',
      category: 'neumorphism',
      layers: [
        { inset: false, x: 10, y: 10, blur: 20, spread: 0, color: '#000000', opacity: 0.38, active: true },
        { inset: false, x: -10, y: -10, blur: 20, spread: 0, color: '#ffffff', opacity: 0.9, active: true }
      ]
    },
    {
      id: 'neumorphic-concave',
      name: 'Neumorphic Carved Well',
      category: 'neumorphism',
      layers: [
        { inset: true, x: 8, y: 8, blur: 14, spread: 0, color: '#000000', opacity: 0.45, active: true },
        { inset: true, x: -8, y: -8, blur: 14, spread: 0, color: '#ffffff', opacity: 0.9, active: true }
      ]
    },

    // 5. Retro & Brutalism (4 presets)
    {
      id: 'brutalist-solid',
      name: 'Brutalist 90s Pop',
      category: 'retro',
      layers: [
        { inset: false, x: 8, y: 8, blur: 0, spread: 0, color: '#000000', opacity: 1, active: true }
      ]
    },
    {
      id: 'retro-stacked',
      name: 'Retro Multi-Step 3D',
      category: 'retro',
      layers: [
        { inset: false, x: 4, y: 4, blur: 0, spread: 0, color: '#6366f1', opacity: 1, active: true },
        { inset: false, x: 8, y: 8, blur: 0, spread: 0, color: '#ec4899', opacity: 1, active: true },
        { inset: false, x: 12, y: 12, blur: 0, spread: 0, color: '#eab308', opacity: 1, active: true }
      ]
    },
    {
      id: 'comic-edge',
      name: 'Comic Double Offset',
      category: 'retro',
      layers: [
        { inset: false, x: 5, y: 5, blur: 0, spread: 0, color: '#000000', opacity: 1, active: true },
        { inset: false, x: 10, y: 10, blur: 0, spread: 0, color: '#3b82f6', opacity: 1, active: true }
      ]
    },
    {
      id: 'synthwave-80s',
      name: '80s Synthwave Dual',
      category: 'retro',
      layers: [
        { inset: false, x: 6, y: 6, blur: 0, spread: 0, color: '#ec4899', opacity: 1, active: true },
        { inset: false, x: 12, y: 12, blur: 0, spread: 0, color: '#06b6d4', opacity: 1, active: true }
      ]
    },

    // 6. Natural Physics Curves (2 presets)
    {
      id: 'physics-smooth',
      name: 'Natural 5-Layer Diffusion',
      category: 'physics',
      layers: [
        { inset: false, x: 0, y: 1, blur: 2, spread: 0, color: '#000000', opacity: 0.08, active: true },
        { inset: false, x: 0, y: 2, blur: 4, spread: 0, color: '#000000', opacity: 0.08, active: true },
        { inset: false, x: 0, y: 4, blur: 8, spread: 0, color: '#000000', opacity: 0.08, active: true },
        { inset: false, x: 0, y: 8, blur: 16, spread: 0, color: '#000000', opacity: 0.08, active: true },
        { inset: false, x: 0, y: 16, blur: 32, spread: 0, color: '#000000', opacity: 0.08, active: true }
      ]
    },
    {
      id: 'smooth-exponential',
      name: 'Josh Comeau 6-Layer Curve',
      category: 'physics',
      layers: [
        { inset: false, x: 0, y: 1, blur: 1, spread: 0, color: '#000000', opacity: 0.07, active: true },
        { inset: false, x: 0, y: 2, blur: 2, spread: 0, color: '#000000', opacity: 0.07, active: true },
        { inset: false, x: 0, y: 4, blur: 4, spread: 0, color: '#000000', opacity: 0.07, active: true },
        { inset: false, x: 0, y: 8, blur: 8, spread: 0, color: '#000000', opacity: 0.07, active: true },
        { inset: false, x: 0, y: 16, blur: 16, spread: 0, color: '#000000', opacity: 0.07, active: true },
        { inset: false, x: 0, y: 28, blur: 28, spread: 0, color: '#000000', opacity: 0.07, active: true }
      ]
    }
  ];

  // --- Application State ---
  const state = {
    layers: [
      { id: 1, inset: false, x: 0, y: 14, blur: 28, spread: -5, color: '#000000', opacity: 0.35, active: true },
      { id: 2, inset: false, x: 0, y: 4, blur: 10, spread: -2, color: '#000000', opacity: 0.2, active: true }
    ],
    selectedLayerId: 1,
    activeTab: 'css', // 'css', 'tailwind', 'vars', 'rules'
    canvasBg: 'bg-dots',
    boxShape: 'card', // 'card', 'box', 'button', 'circle'
    boxColor: '#1e293b',
    borderRadius: 20,
    boxWidth: 240,
    boxHeight: 240,
    tiltEnabled: true,
    filterCategory: 'all'
  };

  let nextLayerId = 3;

  // --- DOM Element References ---
  const els = {
    targetBox: document.getElementById('targetBox'),
    canvasViewport: document.getElementById('canvasViewport'),
    layersList: document.getElementById('layersList'),
    addLayerBtn: document.getElementById('addLayerBtn'),
    layerCountBadge: document.getElementById('layerCountBadge'),
    
    // Active Layer Inputs
    activeLayerTitle: document.getElementById('activeLayerTitle'),
    insetToggle: document.getElementById('insetToggle'),
    offsetXSlider: document.getElementById('offsetXSlider'),
    offsetXNum: document.getElementById('offsetXNum'),
    offsetYSlider: document.getElementById('offsetYSlider'),
    offsetYNum: document.getElementById('offsetYNum'),
    blurSlider: document.getElementById('blurSlider'),
    blurNum: document.getElementById('blurNum'),
    spreadSlider: document.getElementById('spreadSlider'),
    spreadNum: document.getElementById('spreadNum'),
    colorPicker: document.getElementById('colorPicker'),
    colorHex: document.getElementById('colorHex'),
    opacitySlider: document.getElementById('opacitySlider'),
    opacityNum: document.getElementById('opacityNum'),
    
    // Joystick
    joystickPad: document.getElementById('joystickPad'),
    joystickHandle: document.getElementById('joystickHandle'),
    joystickCoords: document.getElementById('joystickCoords'),

    // Code Output
    codeSnippet: document.getElementById('codeSnippet'),
    copyCodeBtn: document.getElementById('copyCodeBtn'),
    codeTabButtons: document.querySelectorAll('.code-tab-btn'),
    shareBtn: document.getElementById('shareBtn'),
    resetBtn: document.getElementById('resetBtn'),
    randomizeBtn: document.getElementById('randomizeBtn'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),

    // Box Customizers
    boxColorPicker: document.getElementById('boxColorPicker'),
    borderRadiusSlider: document.getElementById('borderRadiusSlider'),
    borderRadiusVal: document.getElementById('borderRadiusVal'),
    shapeButtons: document.querySelectorAll('[data-shape]'),
    canvasBgButtons: document.querySelectorAll('[data-canvas-bg]'),
    tiltToggleBtn: document.getElementById('tiltToggleBtn'),

    // Presets
    presetsGrid: document.getElementById('presetsGrid'),
    presetChips: document.querySelectorAll('.preset-chip'),

    // Toast
    toastContainer: document.getElementById('toastContainer')
  };

  // --- Helper: Convert HEX to RGBA ---
  function hexToRgba(hex, alpha) {
    let cleanHex = hex.replace('#', '');
    if (cleanHex.length === 3) {
      cleanHex = cleanHex.split('').map(c => c + c).join('');
    }
    const r = parseInt(cleanHex.substring(0, 2), 16) || 0;
    const g = parseInt(cleanHex.substring(2, 4), 16) || 0;
    const b = parseInt(cleanHex.substring(4, 6), 16) || 0;
    const a = Math.round(alpha * 100) / 100;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  // --- Helper: Get active layer object ---
  function getSelectedLayer() {
    return state.layers.find(l => l.id === state.selectedLayerId) || state.layers[0];
  }

  // --- Render Layer Items List ---
  function renderLayersList() {
    els.layersList.innerHTML = '';
    els.layerCountBadge.textContent = state.layers.length;

    state.layers.forEach((layer, index) => {
      const isSelected = layer.id === state.selectedLayerId;
      const rgba = hexToRgba(layer.color, layer.opacity);
      const summary = `${layer.inset ? 'inset ' : ''}${layer.x}px ${layer.y}px ${layer.blur}px ${layer.spread}px`;

      const item = document.createElement('div');
      item.className = `layer-item ${isSelected ? 'active' : ''} ${!layer.active ? 'disabled' : ''}`;
      item.innerHTML = `
        <div class="layer-info" data-layer-id="${layer.id}">
          <div class="layer-preview-dot" style="background-color: ${rgba};"></div>
          <div class="layer-labels">
            <span class="layer-name">Layer #${state.layers.length - index} ${layer.inset ? '(Inset)' : ''}</span>
            <span class="layer-summary">${summary}</span>
          </div>
        </div>
        <div class="layer-actions">
          <button class="layer-btn btn-up" title="Move Up" data-action="up" data-id="${layer.id}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m18 15-6-6-6 6"/></svg>
          </button>
          <button class="layer-btn btn-down" title="Move Down" data-action="down" data-id="${layer.id}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <button class="layer-btn btn-toggle" title="${layer.active ? 'Hide Layer' : 'Show Layer'}" data-action="toggle" data-id="${layer.id}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              ${layer.active 
                ? '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>' 
                : '<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/>'}
            </svg>
          </button>
          <button class="layer-btn btn-duplicate" title="Duplicate Layer" data-action="duplicate" data-id="${layer.id}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="13" height="13" x="9" y="9" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          </button>
          <button class="layer-btn btn-delete" title="Delete Layer" data-action="delete" data-id="${layer.id}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
          </button>
        </div>
      `;

      item.querySelector('.layer-info').addEventListener('click', () => {
        state.selectedLayerId = layer.id;
        syncInputsWithSelectedLayer();
        renderLayersList();
      });

      els.layersList.appendChild(item);
    });
  }

  // --- Synchronize UI Inputs with Current Selected Layer ---
  function syncInputsWithSelectedLayer() {
    const layer = getSelectedLayer();
    if (!layer) return;

    const layerIndex = state.layers.findIndex(l => l.id === layer.id);
    els.activeLayerTitle.textContent = `Layer #${state.layers.length - layerIndex} Settings`;

    els.insetToggle.checked = layer.inset;

    els.offsetXSlider.value = layer.x;
    els.offsetXNum.value = layer.x;

    els.offsetYSlider.value = layer.y;
    els.offsetYNum.value = layer.y;

    els.blurSlider.value = layer.blur;
    els.blurNum.value = layer.blur;

    els.spreadSlider.value = layer.spread;
    els.spreadNum.value = layer.spread;

    els.colorPicker.value = layer.color;
    els.colorHex.value = layer.color.toUpperCase();

    els.opacitySlider.value = Math.round(layer.opacity * 100);
    els.opacityNum.value = Math.round(layer.opacity * 100);

    updateJoystickPosition(layer.x, layer.y);
  }

  // --- Compute CSS String ---
  function generateCssValue(multiline = false) {
    const activeLayers = state.layers.filter(l => l.active);
    if (activeLayers.length === 0) {
      return 'none';
    }

    const shadowStrings = activeLayers.map(l => {
      const inset = l.inset ? 'inset ' : '';
      const rgba = hexToRgba(l.color, l.opacity);
      return `${inset}${l.x}px ${l.y}px ${l.blur}px ${l.spread}px ${rgba}`;
    });

    if (multiline) {
      return '\n  ' + shadowStrings.join(',\n  ');
    }
    return shadowStrings.join(', ');
  }

  // --- Compute Tailwind CSS Arbitrary Value ---
  function generateTailwindValue() {
    const activeLayers = state.layers.filter(l => l.active);
    if (activeLayers.length === 0) return 'shadow-none';

    const shadowParts = activeLayers.map(l => {
      const inset = l.inset ? 'inset_' : '';
      const rgba = hexToRgba(l.color, l.opacity).replace(/\s+/g, '');
      return `${inset}${l.x}px_${l.y}px_${l.blur}px_${l.spread}px_${rgba}`;
    });

    return `shadow-[${shadowParts.join(',')}]`;
  }

  // --- Update Live Box Shadow on Preview Box ---
  function updatePreview() {
    const cssVal = generateCssValue(false);
    els.targetBox.style.boxShadow = cssVal;
    renderCodeOutput();
  }

  // --- Render Formatted Code in Output Panel ---
  function renderCodeOutput() {
    const cssSingle = generateCssValue(false);
    const cssMulti = generateCssValue(true);
    let output = '';

    switch (state.activeTab) {
      case 'tailwind':
        output = `<span class="css-val">${generateTailwindValue()}</span>`;
        break;
      case 'vars':
        output = `<span class="css-prop">--box-shadow</span>: <span class="css-val">${cssSingle}</span>;`;
        break;
      case 'rules':
        output = `<span class="css-prop">.shadow-card</span> {\n  <span class="css-prop">box-shadow</span>: <span class="css-val">${cssMulti}</span>;\n}`;
        break;
      case 'css':
      default:
        output = `<span class="css-prop">box-shadow</span>: <span class="css-val">${cssMulti}</span>;`;
        break;
    }

    els.codeSnippet.innerHTML = output;
  }

  // --- Get Raw Code for Copying ---
  function getRawCode() {
    const cssSingle = generateCssValue(false);
    const cssMulti = generateCssValue(true);

    switch (state.activeTab) {
      case 'tailwind':
        return generateTailwindValue();
      case 'vars':
        return `--box-shadow: ${cssSingle};`;
      case 'rules':
        return `.shadow-card {\n  box-shadow: ${cssMulti};\n}`;
      case 'css':
      default:
        return `box-shadow: ${cssMulti};`;
    }
  }

  // --- Joystick Controller Logic ---
  function updateJoystickPosition(x, y) {
    // Coordinate range: -100 to +100
    // Pad dimensions: 100% width, height 120px
    const rect = els.joystickPad.getBoundingClientRect();
    const halfW = (rect.width || 340) / 2;
    const halfH = 60; // 120 / 2

    const posX = (x / 100) * halfW;
    const posY = (y / 100) * halfH;

    els.joystickHandle.style.transform = `translate(calc(-50% + ${posX}px), calc(-50% + ${posY}px))`;
    els.joystickCoords.textContent = `X: ${x}px | Y: ${y}px`;
  }

  function handleJoystickPointer(e) {
    const rect = els.joystickPad.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const clientX = e.clientX ?? (e.touches && e.touches[0].clientX);
    const clientY = e.clientY ?? (e.touches && e.touches[0].clientY);

    let dx = clientX - centerX;
    let dy = clientY - centerY;

    const maxW = rect.width / 2;
    const maxH = rect.height / 2;

    // Clamp
    dx = Math.max(-maxW, Math.min(maxW, dx));
    dy = Math.max(-maxH, Math.min(maxH, dy));

    const mappedX = Math.round((dx / maxW) * 100);
    const mappedY = Math.round((dy / maxH) * 100);

    const layer = getSelectedLayer();
    if (layer) {
      layer.x = mappedX;
      layer.y = mappedY;
      els.offsetXSlider.value = mappedX;
      els.offsetXNum.value = mappedX;
      els.offsetYSlider.value = mappedY;
      els.offsetYNum.value = mappedY;
      updateJoystickPosition(mappedX, mappedY);
      updatePreview();
      renderLayersList();
    }
  }

  let isJoystickDragging = false;
  els.joystickPad.addEventListener('pointerdown', (e) => {
    isJoystickDragging = true;
    els.joystickPad.setPointerCapture(e.pointerId);
    handleJoystickPointer(e);
  });

  els.joystickPad.addEventListener('pointermove', (e) => {
    if (isJoystickDragging) {
      handleJoystickPointer(e);
    }
  });

  els.joystickPad.addEventListener('pointerup', (e) => {
    if (isJoystickDragging) {
      isJoystickDragging = false;
      try { els.joystickPad.releasePointerCapture(e.pointerId); } catch(err){}
    }
  });

  // --- Layer Inputs Synchronizers ---
  function attachControlListeners() {
    // Inset Toggle
    els.insetToggle.addEventListener('change', (e) => {
      const layer = getSelectedLayer();
      if (layer) {
        layer.inset = e.target.checked;
        updatePreview();
        renderLayersList();
      }
    });

    // Offset X
    function setX(val) {
      const num = parseInt(val, 10) || 0;
      const clamped = Math.max(-100, Math.min(100, num));
      const layer = getSelectedLayer();
      if (layer) {
        layer.x = clamped;
        els.offsetXSlider.value = clamped;
        els.offsetXNum.value = clamped;
        updateJoystickPosition(layer.x, layer.y);
        updatePreview();
        renderLayersList();
      }
    }
    els.offsetXSlider.addEventListener('input', (e) => setX(e.target.value));
    els.offsetXNum.addEventListener('input', (e) => setX(e.target.value));

    // Offset Y
    function setY(val) {
      const num = parseInt(val, 10) || 0;
      const clamped = Math.max(-100, Math.min(100, num));
      const layer = getSelectedLayer();
      if (layer) {
        layer.y = clamped;
        els.offsetYSlider.value = clamped;
        els.offsetYNum.value = clamped;
        updateJoystickPosition(layer.x, layer.y);
        updatePreview();
        renderLayersList();
      }
    }
    els.offsetYSlider.addEventListener('input', (e) => setY(e.target.value));
    els.offsetYNum.addEventListener('input', (e) => setY(e.target.value));

    // Blur Radius
    function setBlur(val) {
      const num = parseInt(val, 10) || 0;
      const clamped = Math.max(0, Math.min(150, num));
      const layer = getSelectedLayer();
      if (layer) {
        layer.blur = clamped;
        els.blurSlider.value = clamped;
        els.blurNum.value = clamped;
        updatePreview();
        renderLayersList();
      }
    }
    els.blurSlider.addEventListener('input', (e) => setBlur(e.target.value));
    els.blurNum.addEventListener('input', (e) => setBlur(e.target.value));

    // Spread Radius
    function setSpread(val) {
      const num = parseInt(val, 10) || 0;
      const clamped = Math.max(-50, Math.min(50, num));
      const layer = getSelectedLayer();
      if (layer) {
        layer.spread = clamped;
        els.spreadSlider.value = clamped;
        els.spreadNum.value = clamped;
        updatePreview();
        renderLayersList();
      }
    }
    els.spreadSlider.addEventListener('input', (e) => setSpread(e.target.value));
    els.spreadNum.addEventListener('input', (e) => setSpread(e.target.value));

    // Color Picker & Hex
    function setColor(hex) {
      if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
        const layer = getSelectedLayer();
        if (layer) {
          layer.color = hex;
          els.colorPicker.value = hex;
          els.colorHex.value = hex.toUpperCase();
          updatePreview();
          renderLayersList();
        }
      }
    }
    els.colorPicker.addEventListener('input', (e) => setColor(e.target.value));
    els.colorHex.addEventListener('input', (e) => {
      let val = e.target.value;
      if (!val.startsWith('#')) val = '#' + val;
      if (val.length === 7) setColor(val);
    });

    // Opacity
    function setOpacity(val) {
      const num = parseInt(val, 10) || 0;
      const clamped = Math.max(0, Math.min(100, num));
      const layer = getSelectedLayer();
      if (layer) {
        layer.opacity = clamped / 100;
        els.opacitySlider.value = clamped;
        els.opacityNum.value = clamped;
        updatePreview();
        renderLayersList();
      }
    }
    els.opacitySlider.addEventListener('input', (e) => setOpacity(e.target.value));
    els.opacityNum.addEventListener('input', (e) => setOpacity(e.target.value));
  }

  // --- Layer Actions Delegation (Move, Delete, Duplicate, Toggle) ---
  els.layersList.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;

    const action = btn.dataset.action;
    const id = parseInt(btn.dataset.id, 10);
    const index = state.layers.findIndex(l => l.id === id);
    if (index === -1) return;

    switch (action) {
      case 'toggle':
        state.layers[index].active = !state.layers[index].active;
        updatePreview();
        renderLayersList();
        break;

      case 'duplicate':
        const original = state.layers[index];
        const clone = { ...original, id: nextLayerId++ };
        state.layers.splice(index + 1, 0, clone);
        state.selectedLayerId = clone.id;
        syncInputsWithSelectedLayer();
        updatePreview();
        renderLayersList();
        showToast('Layer duplicated successfully');
        break;

      case 'delete':
        if (state.layers.length <= 1) {
          showToast('You must keep at least one shadow layer', 'warning');
          return;
        }
        state.layers.splice(index, 1);
        if (state.selectedLayerId === id) {
          state.selectedLayerId = state.layers[0].id;
        }
        syncInputsWithSelectedLayer();
        updatePreview();
        renderLayersList();
        showToast('Layer deleted');
        break;

      case 'up':
        if (index > 0) {
          const temp = state.layers[index];
          state.layers[index] = state.layers[index - 1];
          state.layers[index - 1] = temp;
          updatePreview();
          renderLayersList();
        }
        break;

      case 'down':
        if (index < state.layers.length - 1) {
          const temp = state.layers[index];
          state.layers[index] = state.layers[index + 1];
          state.layers[index + 1] = temp;
          updatePreview();
          renderLayersList();
        }
        break;
    }
  });

  // Add Layer Button
  els.addLayerBtn.addEventListener('click', () => {
    const newLayer = {
      id: nextLayerId++,
      inset: false,
      x: 0,
      y: 10,
      blur: 20,
      spread: 0,
      color: '#000000',
      opacity: 0.15,
      active: true
    };
    state.layers.unshift(newLayer);
    state.selectedLayerId = newLayer.id;
    syncInputsWithSelectedLayer();
    updatePreview();
    renderLayersList();
    showToast('New layer added');
  });

  // --- Code Tabs Switching ---
  els.codeTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      els.codeTabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeTab = btn.dataset.tab;
      renderCodeOutput();
    });
  });

  // --- Copy Code to Clipboard ---
  function copyToClipboard(text, successMsg = 'Copied to clipboard!') {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg, 'success');
      }).catch(() => fallbackCopy(text, successMsg));
    } else {
      fallbackCopy(text, successMsg);
    }
  }

  function fallbackCopy(text, successMsg) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(successMsg, 'success');
    } catch (err) {
      showToast('Failed to copy', 'error');
    }
    document.body.removeChild(textArea);
  }

  els.copyCodeBtn.addEventListener('click', () => {
    copyToClipboard(getRawCode(), 'Code copied to clipboard! ✨');
  });

  // --- Presets Rendering & Applying ---
  function renderPresets() {
    els.presetsGrid.innerHTML = '';
    const filtered = state.filterCategory === 'all' 
      ? PRESETS 
      : PRESETS.filter(p => p.category === state.filterCategory);

    filtered.forEach(preset => {
      // Determine optimal contrast stage background & mini-box appearance
      let stageClass = 'stage-light';
      let boxBg = '#ffffff';
      let boxBorder = '1px solid rgba(0, 0, 0, 0.06)';

      if (preset.category === 'neumorphism') {
        stageClass = 'stage-neumorphic';
        boxBg = '#e2e8f0';
        boxBorder = 'none';
      } else if (preset.category === 'glow') {
        stageClass = 'stage-dark';
        boxBg = '#0f172a';
        boxBorder = '1px solid rgba(255, 255, 255, 0.12)';
      } else if (preset.category === 'retro') {
        stageClass = 'stage-light';
        boxBg = '#ffffff';
        boxBorder = '2px solid #0f172a';
      }

      // Compute crisp, visible preview shadow
      const shadowVal = preset.layers.map(l => {
        const inset = l.inset ? 'inset ' : '';
        const blur = l.blur === 0 ? 0 : Math.max(1, Math.round(l.blur * 0.75));
        const x = Math.round(l.x * 0.75);
        const y = Math.round(l.y * 0.75);
        const spread = Math.round(l.spread * 0.75);
        
        // Ensure faint shadows remain clearly discernible on the card thumbnail
        let opacity = l.opacity;
        if (stageClass === 'stage-light' && opacity < 0.15 && l.color === '#000000') {
          opacity = Math.min(0.24, opacity * 1.6);
        }

        const rgba = hexToRgba(l.color, opacity);
        return `${inset}${x}px ${y}px ${blur}px ${spread}px ${rgba}`;
      }).join(', ');

      const card = document.createElement('div');
      card.className = 'preset-card';
      card.setAttribute('data-preset-id', preset.id);
      card.innerHTML = `
        <div class="preset-preview-stage ${stageClass}">
          <div class="preset-mini-box" style="background-color: ${boxBg}; border: ${boxBorder}; box-shadow: ${shadowVal};"></div>
        </div>
        <div class="preset-info">
          <div class="preset-header-row">
            <span class="preset-name">${preset.name}</span>
            <span class="preset-layers-badge">${preset.layers.length}L</span>
          </div>
          <div class="preset-meta-row">
            <span class="preset-category-tag">${preset.category}</span>
            <span class="preset-apply-hint">Click to Apply</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        applyPreset(preset);
        document.querySelectorAll('.preset-card').forEach(c => c.classList.remove('active-preset'));
        card.classList.add('active-preset');
      });

      els.presetsGrid.appendChild(card);
    });
  }

  function applyPreset(preset) {
    state.layers = preset.layers.map((l, idx) => ({
      ...l,
      id: nextLayerId++
    }));
    state.selectedLayerId = state.layers[0].id;
    syncInputsWithSelectedLayer();
    updatePreview();
    renderLayersList();
    showToast(`Loaded "${preset.name}" preset (${preset.layers.length} layers) ✨`);
  }

  // Preset category filters
  els.presetChips.forEach(chip => {
    chip.addEventListener('click', () => {
      els.presetChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.filterCategory = chip.dataset.category;
      renderPresets();
    });
  });

  // --- Target Box & Canvas Viewport Customizations ---
  // Canvas Background
  els.canvasBgButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      els.canvasBgButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const bgClass = btn.dataset.canvasBg;
      els.canvasViewport.className = `canvas-viewport ${bgClass}`;
      state.canvasBg = bgClass;
    });
  });

  // Box Shape & Content
  els.shapeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      els.shapeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const shape = btn.dataset.shape;
      state.boxShape = shape;
      applyBoxShape();
    });
  });

  function applyBoxShape() {
    switch (state.boxShape) {
      case 'circle':
        els.targetBox.style.width = '120px';
        els.targetBox.style.height = '120px';
        els.targetBox.style.borderRadius = '50%';
        els.targetBox.innerHTML = `
          <div class="box-avatar" style="width: 40px; height: 40px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
        `;
        break;

      case 'button':
        els.targetBox.style.width = '150px';
        els.targetBox.style.height = '44px';
        els.targetBox.style.borderRadius = '9999px';
        els.targetBox.innerHTML = `
          <span style="font-weight: 600; font-size: 0.82rem; display: flex; align-items: center; gap: 6px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            Interactive Button
          </span>
        `;
        break;

      case 'box':
        els.targetBox.style.width = '140px';
        els.targetBox.style.height = '130px';
        els.targetBox.style.borderRadius = `${state.borderRadius}px`;
        els.targetBox.innerHTML = `
          <div style="font-weight: 600; font-size: 0.9rem; opacity: 0.8;">Box Target</div>
        `;
        break;

      case 'card':
      default:
        els.targetBox.style.width = '145px';
        els.targetBox.style.height = '130px';
        els.targetBox.style.borderRadius = `${state.borderRadius}px`;
        els.targetBox.innerHTML = `
          <div class="box-content-card" style="gap: 6px;">
            <div class="box-avatar" style="width: 32px; height: 32px;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            </div>
            <div class="box-title" style="font-size: 0.88rem;">Modern Card</div>
            <span class="box-pill-badge" style="font-size: 0.65rem; padding: 2px 8px;">Active</span>
          </div>
        `;
        break;
    }
  }

  // Box Color
  els.boxColorPicker.addEventListener('input', (e) => {
    state.boxColor = e.target.value;
    els.targetBox.style.backgroundColor = state.boxColor;
  });

  // Border Radius Slider
  els.borderRadiusSlider.addEventListener('input', (e) => {
    state.borderRadius = parseInt(e.target.value, 10);
    els.borderRadiusVal.textContent = `${state.borderRadius}px`;
    if (state.boxShape !== 'circle' && state.boxShape !== 'button') {
      els.targetBox.style.borderRadius = `${state.borderRadius}px`;
    }
  });

  // 3D Tilt Hover Interactive Effect
  els.tiltToggleBtn.addEventListener('click', () => {
    state.tiltEnabled = !state.tiltEnabled;
    els.tiltToggleBtn.classList.toggle('active', state.tiltEnabled);
    if (!state.tiltEnabled) {
      els.targetBox.style.transform = 'none';
    }
    showToast(`3D Tilt hover ${state.tiltEnabled ? 'enabled' : 'disabled'}`);
  });

  els.canvasViewport.addEventListener('mousemove', (e) => {
    if (!state.tiltEnabled) return;
    const rect = els.canvasViewport.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotX = (-y / (rect.height / 2)) * 12;
    const rotY = (x / (rect.width / 2)) * 12;

    els.targetBox.style.transform = `perspective(800px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.03, 1.03, 1.03)`;
  });

  els.canvasViewport.addEventListener('mouseleave', () => {
    if (state.tiltEnabled) {
      els.targetBox.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
  });

  // --- Randomize Feature ---
  els.randomizeBtn.addEventListener('click', () => {
    const isGlow = Math.random() > 0.6;
    const randomColors = ['#6366f1', '#ec4899', '#06b6d4', '#10b981', '#f59e0b', '#8b5cf6'];
    const chosenColor = randomColors[Math.floor(Math.random() * randomColors.length)];

    if (isGlow) {
      state.layers = [
        { id: nextLayerId++, inset: false, x: 0, y: 0, blur: 15, spread: 2, color: chosenColor, opacity: 0.6, active: true },
        { id: nextLayerId++, inset: false, x: 0, y: 0, blur: 40, spread: 8, color: chosenColor, opacity: 0.35, active: true }
      ];
    } else {
      const offsetX = Math.floor(Math.random() * 20) - 10;
      const offsetY = Math.floor(Math.random() * 30) + 5;
      state.layers = [
        { id: nextLayerId++, inset: false, x: offsetX, y: offsetY, blur: Math.floor(Math.random() * 30) + 15, spread: -5, color: '#000000', opacity: 0.2, active: true },
        { id: nextLayerId++, inset: false, x: Math.round(offsetX * 0.3), y: Math.round(offsetY * 0.4), blur: 8, spread: -2, color: '#000000', opacity: 0.12, active: true }
      ];
    }

    state.selectedLayerId = state.layers[0].id;
    syncInputsWithSelectedLayer();
    updatePreview();
    renderLayersList();
    showToast('Generated random aesthetic shadow ✨');
  });

  // --- Reset to Default ---
  els.resetBtn.addEventListener('click', () => {
    state.layers = [
      { id: nextLayerId++, inset: false, x: 0, y: 14, blur: 28, spread: -5, color: '#000000', opacity: 0.35, active: true },
      { id: nextLayerId++, inset: false, x: 0, y: 4, blur: 10, spread: -2, color: '#000000', opacity: 0.2, active: true }
    ];
    state.selectedLayerId = state.layers[0].id;
    syncInputsWithSelectedLayer();
    updatePreview();
    renderLayersList();
    showToast('Reset to default shadow configuration');
  });

  // --- Share URL Generator (Serialization) ---
  els.shareBtn.addEventListener('click', () => {
    try {
      const payload = {
        l: state.layers.map(l => [l.inset ? 1 : 0, l.x, l.y, l.blur, l.spread, l.color.replace('#', ''), Math.round(l.opacity * 100)]),
        b: state.boxColor.replace('#', ''),
        r: state.borderRadius
      };
      const json = JSON.stringify(payload);
      const encoded = btoa(json);
      const shareUrl = `${window.location.origin}${window.location.pathname}#s=${encoded}`;

      copyToClipboard(shareUrl, 'Shareable shadow URL copied to clipboard! 🔗');
      window.history.replaceState(null, '', `#s=${encoded}`);
    } catch (err) {
      showToast('Could not generate share link', 'error');
    }
  });

  // --- Load State from URL Hash if present ---
  function loadFromUrlHash() {
    if (!window.location.hash || !window.location.hash.startsWith('#s=')) return;
    try {
      const encoded = window.location.hash.replace('#s=', '');
      const json = atob(encoded);
      const payload = JSON.parse(json);

      if (payload && Array.isArray(payload.l)) {
        state.layers = payload.l.map(arr => ({
          id: nextLayerId++,
          inset: Boolean(arr[0]),
          x: arr[1],
          y: arr[2],
          blur: arr[3],
          spread: arr[4],
          color: '#' + arr[5],
          opacity: arr[6] / 100,
          active: true
        }));
        if (payload.b) {
          state.boxColor = '#' + payload.b;
          els.targetBox.style.backgroundColor = state.boxColor;
          els.boxColorPicker.value = state.boxColor;
        }
        if (typeof payload.r === 'number') {
          state.borderRadius = payload.r;
          els.borderRadiusSlider.value = payload.r;
          els.borderRadiusVal.textContent = `${payload.r}px`;
        }
        state.selectedLayerId = state.layers[0].id;
        showToast('Shared shadow loaded successfully! 🚀');
      }
    } catch (err) {
      console.warn('Could not parse share hash', err);
    }
  }

  // --- Theme Toggle (Dark / Light) ---
  els.themeToggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('boxshadow-theme', next);
    showToast(`Switched to ${next} mode`);
  });

  // Restore saved theme
  const savedTheme = localStorage.getItem('boxshadow-theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  // --- Toast Notification Utility ---
  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let iconSvg = '';
    if (type === 'success') {
      iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>';
    } else if (type === 'warning') {
      iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>';
    } else {
      iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>';
    }

    toast.innerHTML = `${iconSvg}<span>${message}</span>`;
    els.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'toastOut 0.25s forwards cubic-bezier(0.16, 1, 0.3, 1)';
      setTimeout(() => toast.remove(), 250);
    }, 2800);
  }

  // --- Keyboard Shortcuts ---
  window.addEventListener('keydown', (e) => {
    // Ctrl+C / Cmd+C when not inside an input copies shadow code
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'c' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      copyToClipboard(getRawCode(), 'Copied active shadow code! ✨');
    }
  });

  // --- Initialization ---
  function init() {
    loadFromUrlHash();
    renderPresets();
    syncInputsWithSelectedLayer();
    renderLayersList();
    applyBoxShape();
    updatePreview();
    attachControlListeners();
  }

  // Run on page ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
