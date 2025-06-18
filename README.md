# ThannxAI Particles Portfolio

Portfolio for Thanatsitt Santisamranwilai, Thai AI developer and cultural designer, co-founder of ThannxAI. Features a WebGL particle system with morphing shapes (Sphere, Cube, Pyramid, Torus, Galaxy, Wave, Mandala), built with Three.js, TailwindCSS, Alpine.js, and deployed as a PWA on Netlify.

## Features
- WebGL particle system with scroll/click-triggered shape morphing.
- Mobile-optimized (5,000 particles, 6,000 stars).
- EmailJS contact form.
- PWA with offline support.
- Open-source images from Unsplash, Pexels, and Wikimedia Commons.

## Tech Stack
- Frontend: HTML, TailwindCSS, Alpine.js
- WebGL: Three.js, Anime.js, Simplex Noise
- Backend: EmailJS
- PWA: Service Worker, Web App Manifest
- CDNs: Font Awesome, Google Fonts, Unsplash, Pexels

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Pigletpeakkung/thannxai-particles.git

   thannxai-particles/
├── index.html     # Updated with open-source image URLs
├── manifest.json  # PWA manifest with external icon URLs
├── sw.js          # Service worker caching external images
├── README.md      # Project overview and credits
├── LICENSE        # MIT License
├── .gitignore     # Ignore unnecessary files
└── package.json   # Optional: For local server
