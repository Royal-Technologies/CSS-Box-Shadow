/**
 * BoxShadow Studio - Curated Library of 105+ Modern CSS Box Shadows
 * Inspired by DigitalDevTools, CSS Scan, Stripe, Tailwind, Apple, and Material Design 3.
 * Open Source - MIT License
 */

const PRESETS = [
  // =========================================================================
  // 1. Minimal, Modern SaaS & Tech Leaders (#1 to #25)
  // =========================================================================
  {
    id: 'subtle-card',
    name: 'Subtle Card Minimal',
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
      { inset: false, x: 0, y: 10, blur: 25, spread: -5, color: '#000000', opacity: 0.14, active: true },
      { inset: false, x: 0, y: 8, blur: 10, spread: -6, color: '#000000', opacity: 0.1, active: true }
    ]
  },
  {
    id: 'stripe-card',
    name: 'Stripe Classic Card',
    category: 'minimal',
    layers: [
      { inset: false, x: 0, y: 13, blur: 27, spread: -5, color: '#32325d', opacity: 0.25, active: true },
      { inset: false, x: 0, y: 8, blur: 16, spread: -8, color: '#000000', opacity: 0.3, active: true },
      { inset: false, x: 0, y: -6, blur: 16, spread: -6, color: '#000000', opacity: 0.03, active: true }
    ]
  },
  {
    id: 'stripe-hover',
    name: 'Stripe Lift Hover',
    category: 'minimal',
    layers: [
      { inset: false, x: 0, y: 30, blur: 60, spread: -12, color: '#32325d', opacity: 0.25, active: true },
      { inset: false, x: 0, y: 18, blur: 36, spread: -18, color: '#000000', opacity: 0.3, active: true }
    ]
  },
  {
    id: 'apple-float',
    name: 'Apple Floating Glass',
    category: 'minimal',
    layers: [
      { inset: false, x: 0, y: 20, blur: 40, spread: -10, color: '#0f172a', opacity: 0.2, active: true },
      { inset: false, x: 0, y: 1, blur: 3, spread: 0, color: '#0f172a', opacity: 0.08, active: true }
    ]
  },
  {
    id: 'apple-ambient',
    name: 'Apple Soft Ambient',
    category: 'minimal',
    layers: [
      { inset: false, x: 0, y: 8, blur: 28, spread: 0, color: '#000000', opacity: 0.08, active: true }
    ]
  },
  {
    id: 'tailwind-sm',
    name: 'Tailwind Shadow SM',
    category: 'minimal',
    layers: [
      { inset: false, x: 0, y: 1, blur: 2, spread: 0, color: '#000000', opacity: 0.06, active: true }
    ]
  },
  {
    id: 'tailwind-base',
    name: 'Tailwind Shadow Base',
    category: 'minimal',
    layers: [
      { inset: false, x: 0, y: 1, blur: 3, spread: 0, color: '#000000', opacity: 0.1, active: true },
      { inset: false, x: 0, y: 1, blur: 2, spread: -1, color: '#000000', opacity: 0.1, active: true }
    ]
  },
  {
    id: 'tailwind-md',
    name: 'Tailwind Shadow MD',
    category: 'minimal',
    layers: [
      { inset: false, x: 0, y: 4, blur: 6, spread: -1, color: '#000000', opacity: 0.1, active: true },
      { inset: false, x: 0, y: 2, blur: 4, spread: -2, color: '#000000', opacity: 0.1, active: true }
    ]
  },
  {
    id: 'tailwind-lg',
    name: 'Tailwind Shadow LG',
    category: 'minimal',
    layers: [
      { inset: false, x: 0, y: 10, blur: 15, spread: -3, color: '#000000', opacity: 0.1, active: true },
      { inset: false, x: 0, y: 4, blur: 6, spread: -4, color: '#000000', opacity: 0.1, active: true }
    ]
  },
  {
    id: 'tailwind-xl',
    name: 'Tailwind Shadow XL',
    category: 'minimal',
    layers: [
      { inset: false, x: 0, y: 20, blur: 25, spread: -5, color: '#000000', opacity: 0.1, active: true },
      { inset: false, x: 0, y: 8, blur: 10, spread: -6, color: '#000000', opacity: 0.1, active: true }
    ]
  },
  {
    id: 'tailwind-2xl',
    name: 'Tailwind Shadow 2XL',
    category: 'minimal',
    layers: [
      { inset: false, x: 0, y: 25, blur: 50, spread: -12, color: '#000000', opacity: 0.25, active: true }
    ]
  },
  {
    id: 'cloud-feather',
    name: 'Ultra Feather Cloud',
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
      { inset: false, x: 0, y: 30, blur: 60, spread: 0, color: '#000000', opacity: 0.22, active: true },
      { inset: false, x: 0, y: 10, blur: 20, spread: 0, color: '#000000', opacity: 0.14, active: true }
    ]
  },
  {
    id: 'vercel-clean',
    name: 'Vercel Clean Border',
    category: 'minimal',
    layers: [
      { inset: false, x: 0, y: 0, blur: 0, spread: 1, color: '#000000', opacity: 0.08, active: true },
      { inset: false, x: 0, y: 2, blur: 4, spread: 0, color: '#000000', opacity: 0.06, active: true }
    ]
  },
  {
    id: 'vercel-hover',
    name: 'Vercel Float Hover',
    category: 'minimal',
    layers: [
      { inset: false, x: 0, y: 0, blur: 0, spread: 1, color: '#000000', opacity: 0.08, active: true },
      { inset: false, x: 0, y: 12, blur: 30, spread: 0, color: '#000000', opacity: 0.12, active: true }
    ]
  },
  {
    id: 'linear-card',
    name: 'Linear Dark Minimal',
    category: 'minimal',
    layers: [
      { inset: false, x: 0, y: 1, blur: 2, spread: 0, color: '#000000', opacity: 0.4, active: true },
      { inset: false, x: 0, y: 8, blur: 24, spread: -4, color: '#000000', opacity: 0.35, active: true }
    ]
  },
  {
    id: 'linear-lift',
    name: 'Linear High Elevation',
    category: 'minimal',
    layers: [
      { inset: false, x: 0, y: 20, blur: 40, spread: -12, color: '#000000', opacity: 0.45, active: true }
    ]
  },
  {
    id: 'github-card',
    name: 'GitHub Elevation',
    category: 'minimal',
    layers: [
      { inset: false, x: 0, y: 3, blur: 6, spread: 0, color: '#1b1f23', opacity: 0.08, active: true },
      { inset: false, x: 0, y: 1, blur: 1, spread: 0, color: '#1b1f23', opacity: 0.04, active: true }
    ]
  },
  {
    id: 'github-dropdown',
    name: 'GitHub Dropdown Menu',
    category: 'minimal',
    layers: [
      { inset: false, x: 0, y: 8, blur: 24, spread: 0, color: '#8c959f', opacity: 0.2, active: true }
    ]
  },
  {
    id: 'airbnb-search',
    name: 'Airbnb Pill Search',
    category: 'minimal',
    layers: [
      { inset: false, x: 0, y: 1, blur: 2, spread: 0, color: '#000000', opacity: 0.08, active: true },
      { inset: false, x: 0, y: 4, blur: 12, spread: 0, color: '#000000', opacity: 0.06, active: true }
    ]
  },
  {
    id: 'airbnb-card',
    name: 'Airbnb Card Float',
    category: 'minimal',
    layers: [
      { inset: false, x: 0, y: 6, blur: 16, spread: 0, color: '#000000', opacity: 0.12, active: true }
    ]
  },
  {
    id: 'notion-panel',
    name: 'Notion Menu Float',
    category: 'minimal',
    layers: [
      { inset: false, x: 0, y: 0, blur: 0, spread: 1, color: '#0f0f0f', opacity: 0.06, active: true },
      { inset: false, x: 0, y: 4, blur: 16, spread: -2, color: '#0f0f0f', opacity: 0.1, active: true }
    ]
  },
  {
    id: 'dribbble-shot',
    name: 'Dribbble Showcase Hover',
    category: 'minimal',
    layers: [
      { inset: false, x: 0, y: 12, blur: 24, spread: -4, color: '#000000', opacity: 0.16, active: true },
      { inset: false, x: 0, y: 4, blur: 8, spread: -2, color: '#000000', opacity: 0.08, active: true }
    ]
  },

  // =========================================================================
  // 2. Material Design 3 Elevation Hierarchy (#26 to #45)
  // =========================================================================
  {
    id: 'material-l1',
    name: 'Material 3 Elevation 1',
    category: 'material',
    layers: [
      { inset: false, x: 0, y: 1, blur: 2, spread: 0, color: '#000000', opacity: 0.18, active: true },
      { inset: false, x: 0, y: 1, blur: 3, spread: 1, color: '#000000', opacity: 0.12, active: true }
    ]
  },
  {
    id: 'material-l2',
    name: 'Material 3 Elevation 2',
    category: 'material',
    layers: [
      { inset: false, x: 0, y: 1, blur: 2, spread: 0, color: '#000000', opacity: 0.2, active: true },
      { inset: false, x: 0, y: 2, blur: 6, spread: 2, color: '#000000', opacity: 0.15, active: true }
    ]
  },
  {
    id: 'material-l3',
    name: 'Material 3 Elevation 3',
    category: 'material',
    layers: [
      { inset: false, x: 0, y: 1, blur: 3, spread: 0, color: '#000000', opacity: 0.22, active: true },
      { inset: false, x: 0, y: 4, blur: 8, spread: 3, color: '#000000', opacity: 0.15, active: true }
    ]
  },
  {
    id: 'material-l4',
    name: 'Material 3 Elevation 4',
    category: 'material',
    layers: [
      { inset: false, x: 0, y: 2, blur: 3, spread: 0, color: '#000000', opacity: 0.22, active: true },
      { inset: false, x: 0, y: 6, blur: 10, spread: 4, color: '#000000', opacity: 0.15, active: true }
    ]
  },
  {
    id: 'material-l5',
    name: 'Material 3 Elevation 5',
    category: 'material',
    layers: [
      { inset: false, x: 0, y: 4, blur: 4, spread: 0, color: '#000000', opacity: 0.24, active: true },
      { inset: false, x: 0, y: 8, blur: 12, spread: 6, color: '#000000', opacity: 0.15, active: true }
    ]
  },
  {
    id: 'material-modal',
    name: 'Material 3 Modal Dialog',
    category: 'material',
    layers: [
      { inset: false, x: 0, y: 11, blur: 15, spread: -7, color: '#000000', opacity: 0.28, active: true },
      { inset: false, x: 0, y: 24, blur: 38, spread: 3, color: '#000000', opacity: 0.2, active: true },
      { inset: false, x: 0, y: 9, blur: 46, spread: 8, color: '#000000', opacity: 0.16, active: true }
    ]
  },
  {
    id: 'material-fab',
    name: 'Material FAB Rest',
    category: 'material',
    layers: [
      { inset: false, x: 0, y: 3, blur: 5, spread: -1, color: '#000000', opacity: 0.2, active: true },
      { inset: false, x: 0, y: 6, blur: 10, spread: 0, color: '#000000', opacity: 0.14, active: true },
      { inset: false, x: 0, y: 1, blur: 18, spread: 0, color: '#000000', opacity: 0.12, active: true }
    ]
  },
  {
    id: 'material-fab-hover',
    name: 'Material FAB Hover',
    category: 'material',
    layers: [
      { inset: false, x: 0, y: 7, blur: 8, spread: -4, color: '#000000', opacity: 0.25, active: true },
      { inset: false, x: 0, y: 12, blur: 17, spread: 2, color: '#000000', opacity: 0.18, active: true },
      { inset: false, x: 0, y: 5, blur: 22, spread: 4, color: '#000000', opacity: 0.14, active: true }
    ]
  },
  {
    id: 'material-sheet',
    name: 'Material Bottom Sheet',
    category: 'material',
    layers: [
      { inset: false, x: 0, y: -4, blur: 16, spread: 0, color: '#000000', opacity: 0.16, active: true },
      { inset: false, x: 0, y: -1, blur: 4, spread: 0, color: '#000000', opacity: 0.1, active: true }
    ]
  },
  {
    id: 'material-drawer',
    name: 'Material Navigation Drawer',
    category: 'material',
    layers: [
      { inset: false, x: 8, y: 0, blur: 16, spread: 0, color: '#000000', opacity: 0.18, active: true }
    ]
  },
  {
    id: 'material-chip',
    name: 'Material Chip Lift',
    category: 'material',
    layers: [
      { inset: false, x: 0, y: 1, blur: 2, spread: 0, color: '#000000', opacity: 0.2, active: true }
    ]
  },
  {
    id: 'material-card-rest',
    name: 'Material Card Rest',
    category: 'material',
    layers: [
      { inset: false, x: 0, y: 2, blur: 1, spread: -1, color: '#000000', opacity: 0.2, active: true },
      { inset: false, x: 0, y: 1, blur: 1, spread: 0, color: '#000000', opacity: 0.14, active: true },
      { inset: false, x: 0, y: 1, blur: 3, spread: 0, color: '#000000', opacity: 0.12, active: true }
    ]
  },
  {
    id: 'material-card-picked',
    name: 'Material Card Picked Up',
    category: 'material',
    layers: [
      { inset: false, x: 0, y: 8, blur: 10, spread: -5, color: '#000000', opacity: 0.2, active: true },
      { inset: false, x: 0, y: 16, blur: 24, spread: 2, color: '#000000', opacity: 0.14, active: true },
      { inset: false, x: 0, y: 6, blur: 30, spread: 5, color: '#000000', opacity: 0.12, active: true }
    ]
  },
  {
    id: 'material-menu',
    name: 'Material Menu Popup',
    category: 'material',
    layers: [
      { inset: false, x: 0, y: 5, blur: 5, spread: -3, color: '#000000', opacity: 0.2, active: true },
      { inset: false, x: 0, y: 8, blur: 10, spread: 1, color: '#000000', opacity: 0.14, active: true },
      { inset: false, x: 0, y: 3, blur: 14, spread: 2, color: '#000000', opacity: 0.12, active: true }
    ]
  },
  {
    id: 'material-snackbar',
    name: 'Material SnackBar Notice',
    category: 'material',
    layers: [
      { inset: false, x: 0, y: 3, blur: 5, spread: -1, color: '#000000', opacity: 0.2, active: true },
      { inset: false, x: 0, y: 6, blur: 10, spread: 0, color: '#000000', opacity: 0.14, active: true }
    ]
  },
  {
    id: 'material-appbar',
    name: 'Material Scrolled Top Bar',
    category: 'material',
    layers: [
      { inset: false, x: 0, y: 2, blur: 4, spread: -1, color: '#000000', opacity: 0.2, active: true },
      { inset: false, x: 0, y: 4, blur: 5, spread: 0, color: '#000000', opacity: 0.14, active: true }
    ]
  },
  {
    id: 'material-tooltip',
    name: 'Material Tooltip Lift',
    category: 'material',
    layers: [
      { inset: false, x: 0, y: 2, blur: 4, spread: 0, color: '#000000', opacity: 0.24, active: true }
    ]
  },
  {
    id: 'material-banner',
    name: 'Material Banner Bar',
    category: 'material',
    layers: [
      { inset: false, x: 0, y: 1, blur: 3, spread: 0, color: '#000000', opacity: 0.15, active: true }
    ]
  },
  {
    id: 'material-search',
    name: 'Material Search Active',
    category: 'material',
    layers: [
      { inset: false, x: 0, y: 4, blur: 8, spread: 0, color: '#000000', opacity: 0.18, active: true }
    ]
  },
  {
    id: 'material-button',
    name: 'Material Contained Button',
    category: 'material',
    layers: [
      { inset: false, x: 0, y: 2, blur: 2, spread: 0, color: '#000000', opacity: 0.16, active: true },
      { inset: false, x: 0, y: 1, blur: 5, spread: 0, color: '#000000', opacity: 0.12, active: true }
    ]
  },

  // =========================================================================
  // 3. Vibrant Glow, Cyberpunk & Neon (#46 to #65)
  // =========================================================================
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
    name: 'Sunset Radiance Bloom',
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
      { inset: false, x: 0, y: 0, blur: 20, spread: 3, color: '#10b981', opacity: 0.75, active: true },
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
  {
    id: 'ice-blue',
    name: 'Blizzard Ice Glow',
    category: 'glow',
    layers: [
      { inset: false, x: 0, y: 0, blur: 20, spread: 3, color: '#38bdf8', opacity: 0.75, active: true },
      { inset: false, x: 0, y: 8, blur: 40, spread: 6, color: '#0284c7', opacity: 0.45, active: true }
    ]
  },
  {
    id: 'plasma-violet',
    name: 'Plasma Violet Burst',
    category: 'glow',
    layers: [
      { inset: false, x: 0, y: 0, blur: 18, spread: 2, color: '#8b5cf6', opacity: 0.8, active: true },
      { inset: false, x: 0, y: 10, blur: 36, spread: 5, color: '#6d28d9', opacity: 0.4, active: true }
    ]
  },
  {
    id: 'blood-moon',
    name: 'Blood Moon Crimson',
    category: 'glow',
    layers: [
      { inset: false, x: 0, y: 0, blur: 20, spread: 4, color: '#ef4444', opacity: 0.75, active: true },
      { inset: false, x: 0, y: 12, blur: 50, spread: 6, color: '#b91c1c', opacity: 0.5, active: true }
    ]
  },
  {
    id: 'acid-lime',
    name: 'Acid Toxic Lime',
    category: 'glow',
    layers: [
      { inset: false, x: 0, y: 0, blur: 18, spread: 3, color: '#84cc16', opacity: 0.8, active: true },
      { inset: false, x: 0, y: 0, blur: 42, spread: 8, color: '#4d7c0f', opacity: 0.45, active: true }
    ]
  },
  {
    id: 'ocean-indigo',
    name: 'Deep Ocean Indigo',
    category: 'glow',
    layers: [
      { inset: false, x: 0, y: 12, blur: 28, spread: -2, color: '#4338ca', opacity: 0.65, active: true },
      { inset: false, x: 0, y: 24, blur: 50, spread: 4, color: '#312e81', opacity: 0.4, active: true }
    ]
  },
  {
    id: 'neon-underglow',
    name: 'Hot Pink Underglow',
    category: 'glow',
    layers: [
      { inset: false, x: 0, y: 14, blur: 25, spread: 0, color: '#f43f5e', opacity: 0.7, active: true },
      { inset: false, x: 0, y: 28, blur: 50, spread: 8, color: '#9f1239', opacity: 0.4, active: true }
    ]
  },
  {
    id: 'synthwave-horizon',
    name: 'Synthwave Horizon',
    category: 'glow',
    layers: [
      { inset: false, x: 0, y: 8, blur: 20, spread: 0, color: '#ec4899', opacity: 0.6, active: true },
      { inset: false, x: 0, y: 18, blur: 40, spread: 4, color: '#06b6d4', opacity: 0.4, active: true }
    ]
  },
  {
    id: 'laser-mint',
    name: 'Laser Mint Neon',
    category: 'glow',
    layers: [
      { inset: false, x: 0, y: 0, blur: 16, spread: 2, color: '#14b8a6', opacity: 0.75, active: true },
      { inset: false, x: 0, y: 0, blur: 36, spread: 6, color: '#0f766e', opacity: 0.45, active: true }
    ]
  },
  {
    id: 'golden-sunbeam',
    name: 'Golden Sunbeam Burst',
    category: 'glow',
    layers: [
      { inset: false, x: 0, y: 10, blur: 25, spread: -2, color: '#eab308', opacity: 0.7, active: true },
      { inset: false, x: 0, y: 20, blur: 50, spread: 5, color: '#ca8a04', opacity: 0.4, active: true }
    ]
  },
  {
    id: 'cosmic-nebula',
    name: 'Cosmic Dual Nebula',
    category: 'glow',
    layers: [
      { inset: false, x: -10, y: 0, blur: 25, spread: 2, color: '#3b82f6', opacity: 0.5, active: true },
      { inset: false, x: 10, y: 0, blur: 25, spread: 2, color: '#ec4899', opacity: 0.5, active: true }
    ]
  },
  {
    id: 'cyber-rim',
    name: 'Cyber Rim Light',
    category: 'glow',
    layers: [
      { inset: false, x: 0, y: -2, blur: 10, spread: 1, color: '#38bdf8', opacity: 0.65, active: true },
      { inset: false, x: 0, y: 8, blur: 20, spread: 0, color: '#6366f1', opacity: 0.4, active: true }
    ]
  },
  {
    id: 'vaporwave-aura',
    name: 'Vaporwave Pastel Aura',
    category: 'glow',
    layers: [
      { inset: false, x: 0, y: 10, blur: 30, spread: 2, color: '#d946ef', opacity: 0.45, active: true },
      { inset: false, x: 0, y: 20, blur: 50, spread: 5, color: '#06b6d4', opacity: 0.3, active: true }
    ]
  },
  {
    id: 'hyperdrive-white',
    name: 'Hyperdrive Soft Halo',
    category: 'glow',
    layers: [
      { inset: false, x: 0, y: 0, blur: 20, spread: 4, color: '#ffffff', opacity: 0.6, active: true },
      { inset: false, x: 0, y: 0, blur: 45, spread: 10, color: '#818cf8', opacity: 0.35, active: true }
    ]
  },
  {
    id: 'toxic-radioactive',
    name: 'Radioactive Neon',
    category: 'glow',
    layers: [
      { inset: false, x: 0, y: 0, blur: 25, spread: 5, color: '#22c55e', opacity: 0.8, active: true },
      { inset: false, x: 0, y: 0, blur: 55, spread: 12, color: '#15803d', opacity: 0.45, active: true }
    ]
  },

  // =========================================================================
  // 4. Neumorphism & Soft UI (#66 to #80)
  // =========================================================================
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
  {
    id: 'neumorphic-plate',
    name: 'Neumorphic Flat Plate',
    category: 'neumorphism',
    layers: [
      { inset: false, x: 5, y: 5, blur: 10, spread: 0, color: '#000000', opacity: 0.28, active: true },
      { inset: false, x: -5, y: -5, blur: 10, spread: 0, color: '#ffffff', opacity: 0.75, active: true }
    ]
  },
  {
    id: 'neumorphic-disc',
    name: 'Neumorphic Elevated Disc',
    category: 'neumorphism',
    layers: [
      { inset: false, x: 12, y: 12, blur: 24, spread: 0, color: '#000000', opacity: 0.32, active: true },
      { inset: false, x: -12, y: -12, blur: 24, spread: 0, color: '#ffffff', opacity: 0.8, active: true }
    ]
  },
  {
    id: 'neumorphic-toggle',
    name: 'Neumorphic Toggle Switch',
    category: 'neumorphism',
    layers: [
      { inset: true, x: 4, y: 4, blur: 8, spread: 0, color: '#000000', opacity: 0.35, active: true },
      { inset: true, x: -4, y: -4, blur: 8, spread: 0, color: '#ffffff', opacity: 0.8, active: true }
    ]
  },
  {
    id: 'neumorphic-button',
    name: 'Neumorphic Square Button',
    category: 'neumorphism',
    layers: [
      { inset: false, x: 6, y: 6, blur: 12, spread: 0, color: '#000000', opacity: 0.3, active: true },
      { inset: false, x: -6, y: -6, blur: 12, spread: 0, color: '#ffffff', opacity: 0.8, active: true }
    ]
  },
  {
    id: 'neumorphic-well-deep',
    name: 'Neumorphic Sunken Basin',
    category: 'neumorphism',
    layers: [
      { inset: true, x: 10, y: 10, blur: 18, spread: 0, color: '#000000', opacity: 0.5, active: true },
      { inset: true, x: -10, y: -10, blur: 18, spread: 0, color: '#ffffff', opacity: 0.85, active: true }
    ]
  },
  {
    id: 'neumorphic-card-light',
    name: 'Neumorphic Card Light',
    category: 'neumorphism',
    layers: [
      { inset: false, x: 9, y: 9, blur: 18, spread: 0, color: '#a3b1c6', opacity: 0.6, active: true },
      { inset: false, x: -9, y: -9, blur: 18, spread: 0, color: '#ffffff', opacity: 1, active: true }
    ]
  },
  {
    id: 'neumorphic-dark-soft',
    name: 'Neumorphic Dark Dual',
    category: 'neumorphism',
    layers: [
      { inset: false, x: 8, y: 8, blur: 16, spread: 0, color: '#000000', opacity: 0.8, active: true },
      { inset: false, x: -8, y: -8, blur: 16, spread: 0, color: '#ffffff', opacity: 0.08, active: true }
    ]
  },
  {
    id: 'neumorphic-dark-inset',
    name: 'Neumorphic Dark Inset',
    category: 'neumorphism',
    layers: [
      { inset: true, x: 6, y: 6, blur: 12, spread: 0, color: '#000000', opacity: 0.85, active: true },
      { inset: true, x: -6, y: -6, blur: 12, spread: 0, color: '#ffffff', opacity: 0.08, active: true }
    ]
  },
  {
    id: 'neumorphic-dark-disc',
    name: 'Neumorphic Dark Disc',
    category: 'neumorphism',
    layers: [
      { inset: false, x: 10, y: 10, blur: 20, spread: 0, color: '#000000', opacity: 0.85, active: true },
      { inset: false, x: -10, y: -10, blur: 20, spread: 0, color: '#ffffff', opacity: 0.1, active: true }
    ]
  },
  {
    id: 'neumorphic-rim-dual',
    name: 'Neumorphic Rim Highlight',
    category: 'neumorphism',
    layers: [
      { inset: false, x: 4, y: 4, blur: 8, spread: 0, color: '#000000', opacity: 0.35, active: true },
      { inset: false, x: -4, y: -4, blur: 8, spread: 0, color: '#ffffff', opacity: 0.7, active: true }
    ]
  },
  {
    id: 'neumorphic-dial',
    name: 'Neumorphic Audio Dial',
    category: 'neumorphism',
    layers: [
      { inset: false, x: 7, y: 7, blur: 14, spread: 0, color: '#000000', opacity: 0.35, active: true },
      { inset: false, x: -7, y: -7, blur: 14, spread: 0, color: '#ffffff', opacity: 0.85, active: true }
    ]
  },

  // =========================================================================
  // 5. Retro, Brutalism & Pop Art (#81 to #95)
  // =========================================================================
  {
    id: 'brutalist-solid',
    name: 'Brutalist 90s Pop Hard',
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
  {
    id: 'pop-yellow-offset',
    name: 'Pop Yellow Hard Offset',
    category: 'retro',
    layers: [
      { inset: false, x: 6, y: 6, blur: 0, spread: 0, color: '#eab308', opacity: 1, active: true },
      { inset: false, x: 12, y: 12, blur: 0, spread: 0, color: '#000000', opacity: 1, active: true }
    ]
  },
  {
    id: 'brutalist-heavy-black',
    name: 'Neo-Brutalist Thick Ink',
    category: 'retro',
    layers: [
      { inset: false, x: 10, y: 10, blur: 0, spread: 0, color: '#000000', opacity: 1, active: true }
    ]
  },
  {
    id: 'pop-pink-cyan',
    name: 'Pop Art Cyan & Magenta',
    category: 'retro',
    layers: [
      { inset: false, x: -6, y: 6, blur: 0, spread: 0, color: '#06b6d4', opacity: 1, active: true },
      { inset: false, x: 6, y: 6, blur: 0, spread: 0, color: '#ec4899', opacity: 1, active: true }
    ]
  },
  {
    id: 'isometric-3d-step',
    name: 'Isometric 3D Step Box',
    category: 'retro',
    layers: [
      { inset: false, x: 3, y: 3, blur: 0, spread: 0, color: '#1e293b', opacity: 1, active: true },
      { inset: false, x: 6, y: 6, blur: 0, spread: 0, color: '#334155', opacity: 1, active: true },
      { inset: false, x: 9, y: 9, blur: 0, spread: 0, color: '#475569', opacity: 1, active: true }
    ]
  },
  {
    id: 'arcade-cabinet',
    name: 'Arcade Pixel Drop',
    category: 'retro',
    layers: [
      { inset: false, x: 4, y: 4, blur: 0, spread: 0, color: '#10b981', opacity: 1, active: true },
      { inset: false, x: 8, y: 8, blur: 0, spread: 0, color: '#000000', opacity: 1, active: true }
    ]
  },
  {
    id: 'memphis-geometric',
    name: 'Memphis Geometric Angle',
    category: 'retro',
    layers: [
      { inset: false, x: 7, y: 7, blur: 0, spread: 0, color: '#a855f7', opacity: 1, active: true },
      { inset: false, x: 14, y: 14, blur: 0, spread: 0, color: '#000000', opacity: 1, active: true }
    ]
  },
  {
    id: 'vintage-poster',
    name: 'Vintage Screenprint Drop',
    category: 'retro',
    layers: [
      { inset: false, x: 5, y: 5, blur: 0, spread: 0, color: '#f97316', opacity: 1, active: true },
      { inset: false, x: 10, y: 10, blur: 0, spread: 0, color: '#1e1b4b', opacity: 1, active: true }
    ]
  },
  {
    id: 'sticker-diecut',
    name: 'Diecut Sticker Edge',
    category: 'retro',
    layers: [
      { inset: false, x: 0, y: 4, blur: 0, spread: 2, color: '#ffffff', opacity: 1, active: true },
      { inset: false, x: 0, y: 6, blur: 10, spread: 0, color: '#000000', opacity: 0.25, active: true }
    ]
  },
  {
    id: 'monochrome-hard',
    name: 'Monochrome Sharp Edge',
    category: 'retro',
    layers: [
      { inset: false, x: 4, y: 4, blur: 0, spread: 0, color: '#000000', opacity: 1, active: true }
    ]
  },
  {
    id: 'high-contrast-pop',
    name: 'High Contrast Bold Drop',
    category: 'retro',
    layers: [
      { inset: false, x: 6, y: 6, blur: 0, spread: 0, color: '#6366f1', opacity: 1, active: true },
      { inset: false, x: 12, y: 12, blur: 0, spread: 0, color: '#000000', opacity: 1, active: true }
    ]
  },
  {
    id: 'retro-four-step',
    name: 'Retro 4-Step Rainbow',
    category: 'retro',
    layers: [
      { inset: false, x: 3, y: 3, blur: 0, spread: 0, color: '#ef4444', opacity: 1, active: true },
      { inset: false, x: 6, y: 6, blur: 0, spread: 0, color: '#f59e0b', opacity: 1, active: true },
      { inset: false, x: 9, y: 9, blur: 0, spread: 0, color: '#10b981', opacity: 1, active: true },
      { inset: false, x: 12, y: 12, blur: 0, spread: 0, color: '#3b82f6', opacity: 1, active: true }
    ]
  },

  // =========================================================================
  // 6. Physics Smooth Curves & Inset Depth (#96 to #105)
  // =========================================================================
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
  },
  {
    id: 'studio-ambient',
    name: 'Studio Lighting 4-Layer',
    category: 'physics',
    layers: [
      { inset: false, x: 0, y: 2, blur: 4, spread: -1, color: '#000000', opacity: 0.1, active: true },
      { inset: false, x: 0, y: 6, blur: 12, spread: -2, color: '#000000', opacity: 0.09, active: true },
      { inset: false, x: 0, y: 16, blur: 28, spread: -4, color: '#000000', opacity: 0.08, active: true },
      { inset: false, x: 0, y: 32, blur: 60, spread: -8, color: '#000000', opacity: 0.06, active: true }
    ]
  },
  {
    id: 'philipp-brumm-curve',
    name: 'Philipp Brumm Smooth Drop',
    category: 'physics',
    layers: [
      { inset: false, x: 0, y: 1, blur: 2, spread: 0, color: '#000000', opacity: 0.06, active: true },
      { inset: false, x: 0, y: 3, blur: 6, spread: 0, color: '#000000', opacity: 0.06, active: true },
      { inset: false, x: 0, y: 7, blur: 14, spread: 0, color: '#000000', opacity: 0.06, active: true },
      { inset: false, x: 0, y: 15, blur: 30, spread: 0, color: '#000000', opacity: 0.06, active: true },
      { inset: false, x: 0, y: 25, blur: 50, spread: 0, color: '#000000', opacity: 0.05, active: true }
    ]
  },
  {
    id: 'deep-studio-occlusion',
    name: 'Deep Studio Occlusion 6L',
    category: 'physics',
    layers: [
      { inset: false, x: 0, y: 1, blur: 1, spread: 0, color: '#000000', opacity: 0.1, active: true },
      { inset: false, x: 0, y: 3, blur: 3, spread: 0, color: '#000000', opacity: 0.08, active: true },
      { inset: false, x: 0, y: 6, blur: 6, spread: 0, color: '#000000', opacity: 0.08, active: true },
      { inset: false, x: 0, y: 12, blur: 12, spread: 0, color: '#000000', opacity: 0.07, active: true },
      { inset: false, x: 0, y: 24, blur: 24, spread: 0, color: '#000000', opacity: 0.06, active: true },
      { inset: false, x: 0, y: 48, blur: 48, spread: 0, color: '#000000', opacity: 0.05, active: true }
    ]
  },
  {
    id: 'inset-sunken-field',
    name: 'Inset Sunken Field',
    category: 'inset',
    layers: [
      { inset: true, x: 0, y: 2, blur: 4, spread: 0, color: '#000000', opacity: 0.15, active: true },
      { inset: true, x: 0, y: 1, blur: 2, spread: 0, color: '#000000', opacity: 0.1, active: true }
    ]
  },
  {
    id: 'inset-dashboard-well',
    name: 'Inset Deep Dashboard Well',
    category: 'inset',
    layers: [
      { inset: true, x: 0, y: 4, blur: 10, spread: 0, color: '#000000', opacity: 0.2, active: true },
      { inset: true, x: 0, y: 1, blur: 3, spread: 0, color: '#000000', opacity: 0.15, active: true }
    ]
  },
  {
    id: 'inset-pill-groove',
    name: 'Inset Pill Groove',
    category: 'inset',
    layers: [
      { inset: true, x: 0, y: 3, blur: 6, spread: 0, color: '#000000', opacity: 0.25, active: true }
    ]
  },
  {
    id: 'inset-top-bevel',
    name: 'Inset Top Lip Bevel',
    category: 'inset',
    layers: [
      { inset: true, x: 0, y: 3, blur: 3, spread: 0, color: '#000000', opacity: 0.2, active: true },
      { inset: true, x: 0, y: -2, blur: 2, spread: 0, color: '#ffffff', opacity: 0.8, active: true }
    ]
  },
  {
    id: 'inset-dual-emboss',
    name: 'Dual Inset & Outset Carve',
    category: 'inset',
    layers: [
      { inset: true, x: 0, y: 2, blur: 4, spread: 0, color: '#000000', opacity: 0.2, active: true },
      { inset: false, x: 0, y: 1, blur: 0, spread: 0, color: '#ffffff', opacity: 0.8, active: true }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.PRESETS = PRESETS;
}
