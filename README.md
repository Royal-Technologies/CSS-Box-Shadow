# 🌟 BoxShadow Studio — Modern CSS Box Shadow Generator

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="License: MIT" />
  <img src="https://img.shields.io/badge/Version-1.0.0-indigo.svg?style=for-the-badge" alt="Version 1.0.0" />
  <img src="https://img.shields.io/badge/Pure-Vanilla_JS-yellow.svg?style=for-the-badge" alt="Pure Vanilla JS" />
  <img src="https://img.shields.io/badge/Tailwind-Supported-06B6D4.svg?style=for-the-badge" alt="Tailwind CSS Supported" />
  <img src="https://img.shields.io/badge/GitHub_Pages-Ready-2ea44f.svg?style=for-the-badge" alt="GitHub Pages Ready" />
</p>

<p align="center">
  A sleek, next-generation <b>CSS Box Shadow Generator</b> crafted for developers and UI/UX designers. Design realistic multi-layer shadows, explore curated presets, intuitively direct light with a 2D interactive joystick pad, and export directly to <b>CSS</b>, <b>Tailwind CSS arbitrary values</b>, or <b>CSS variables</b> with a single click.
</p>

<p align="center">
  <b>🌐 Live Demo:</b> <a href="https://royal-technologies.github.io/CSS-Box-Shadow/">https://royal-technologies.github.io/CSS-Box-Shadow/</a>
</p>

---

## ✨ Why BoxShadow Studio?

Traditional shadow generators only offer single-layer drop shadows and basic sliders. **BoxShadow Studio** brings modern developer workflow enhancements:

- 🎮 **2D Interactive Light Joystick**: Direct your light source dynamically by dragging inside a radar pad instead of fumbling with X/Y sliders.
- 🥞 **Multi-Layer Stacking Engine**: Stack unlimited shadow layers. Reorder layers, duplicate, mute/unmute visibility, and toggle between Outset and Inset shadows independently.
- ⚡ **Instant Tailwind CSS Export**: Produces ready-to-paste Tailwind CSS arbitrary classes (`shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),...]`) alongside standard multi-line CSS and CSS Custom Properties.
- 🪞 **Real-World Component Preview**: Test your shadows on interactive UI elements including Cards, Action Buttons, Avatars, and Geometric boxes.
- 🕹️ **3D Perspective Tilt**: Move your cursor over the canvas to see realistic 3D perspective elevation and lighting response.
- 🎨 **Canvas Customizer**: Test your shadows against different real-world backdrops (Dark, Mesh Gradient, Dot Matrix, Blueprint Grid, Checkerboard Transparency, or Light Mode).
- 🔗 **Shareable URL Hash**: Easily share your custom shadow design with teammates by clicking **Share**—the entire layer configuration is serialized directly into the URL!
- 🎲 **Smart Randomizer**: Generate aesthetic shadows on demand using harmonious lighting algorithms.
- 🚀 **100% Client-Side & Zero Dependencies**: Built with modern Vanilla JS and CSS3. No Node.js build step, no npm packages, no bloat.

---

## 🎨 Curated Preset Library

BoxShadow Studio includes 14+ handcrafted presets ready to inspect and customize:

| Category | Presets Included |
| :--- | :--- |
| **Minimal & Clean** | *Subtle Card, Modern SaaS Elevation, Apple Float* |
| **Material 3** | *Material Elevation 1, Elevation 3, Floating Dialog* |
| **Glow & Neon** | *Cyberpunk Cyan Glow, Purple Velvet Dream, Sunset Radiance* |
| **Neumorphism** | *Neumorphic Soft Dual, Neumorphic Inset Pressed* |
| **Retro & Brutalist** | *Brutalist 90s Pop, Retro Multi-Step 3D* |
| **Natural Physics** | *Natural 5-Layer Diffusion (Exponential power-curve smooth shadow)* |

---

## 📁 Project Structure

```text
CSS-Box-Shadow/
├── index.html              # Main application markup & SEO metadata
├── assets/
│   ├── css/
│   │   └── style.css       # Design system tokens, themes & layout
│   └── js/
│       └── app.js          # Reactive state, joystick math & exporters
├── .gitignore              # Git ignore rules
├── LICENSE                 # MIT Open Source License
└── README.md               # Documentation & deployment guide
```

---

## 🚀 Quick Start

### Option 1: Run Locally

Because BoxShadow Studio has zero build dependencies, you can run it immediately in any browser:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Royal-Technologies/CSS-Box-Shadow.git
   cd CSS-Box-Shadow
   ```

2. **Open in your browser:**
   - On Windows: Double-click `index.html` or run:
     ```bash
     start index.html
     ```
   - On macOS:
     ```bash
     open index.html
     ```
   - On Linux:
     ```bash
     xdg-open index.html
     ```
   - Or serve with your local environment (e.g. Laragon, VS Code Live Server, Python `python -m http.server 3000`).

---

## 📤 How to Push to GitHub

To push this repository to [https://github.com/Royal-Technologies/CSS-Box-Shadow/](https://github.com/Royal-Technologies/CSS-Box-Shadow/):

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Add all files
git add .

# 3. Commit changes
git commit -m "feat: complete modern CSS box shadow generator studio"

# 4. Set main branch
git branch -M main

# 5. Connect remote repository
git remote add origin https://github.com/Royal-Technologies/CSS-Box-Shadow.git

# 6. Push to GitHub
git push -u origin main
```

---

## 🌐 Deploy to GitHub Pages (Free Hosting)

1. Go to your repository on GitHub: `https://github.com/Royal-Technologies/CSS-Box-Shadow`
2. Click on **Settings** > **Pages** (in the left sidebar).
3. Under **Branch**, select `main` and root folder `/ (root)`.
4. Click **Save**.
5. Your live app will be accessible at:
   `https://royal-technologies.github.io/CSS-Box-Shadow/`

---

## 🗺️ Roadmap & Future Additions

This project is the foundation for an upcoming suite of modern developer tools by <a href="https://www.royaltechbd.com/" target="_blank" rel="noopener noreferrer"><b>Royal Technologies</b></a>:

- [x] Multi-layer CSS Box Shadow Generator
- [x] 2D Light Controller & Tailwind arbitrary exporter
- [x] URL Hash sharing & 3D perspective tilt
- [ ] CSS Gradient & Mesh Gradient Generator
- [ ] CSS Border Radius / Fancy Border Shapes Generator
- [ ] CSS Text Shadow & Glow Generator
- [ ] Glassmorphism & Backdrop Filter Generator

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/Royal-Technologies/CSS-Box-Shadow/issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

---

<p align="center">
  Crafted with ❤️ by <a href="https://www.royaltechbd.com/" target="_blank" rel="noopener noreferrer"><b>Royal Technologies</b></a>
</p>
