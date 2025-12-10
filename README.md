# Saanvi

Official website for **Saanvi** — a tech solutions startup by Prakash Kumbhakar & Mrunal Kulkarni.

Building Tomorrow's Tech, Today.

## Overview

Saanvi is a modern, responsive, and beautifully animated portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. The site showcases our services, portfolio, and provides a way for potential clients to get in touch.

## Features

✨ **Modern & Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
🎨 **Smooth Animations** - Engaging Framer Motion animations throughout
⚡ **Fast Performance** - Built with Vite for lightning-fast development and production builds
🌐 **GitHub Pages Ready** - Pre-configured for easy deployment to GitHub Pages
🎯 **SEO Optimized** - Clean HTML structure with semantic markup
📱 **Mobile First** - Optimized mobile experience with touch-friendly interactions
🌙 **Dark Theme** - Modern dark theme with beautiful gradient accents

## Tech Stack

- **Frontend Framework**: React 18.2
- **Build Tool**: Vite 5.0
- **Styling**: Tailwind CSS 3.3
- **Animations**: Framer Motion 10.16
- **Icons**: Lucide React 0.294
- **Deployment**: GitHub Pages
- **Package Manager**: npm

## Sections

1. **Hero** - Eye-catching landing section with animated background
2. **About** - Company mission and founder bios
3. **Services** - 3 core service offerings (Web, Apps, AI)
4. **Portfolio** - Showcase of 6 featured projects
5. **Contact** - Contact form and social media links
6. **Navigation** - Sticky header with smooth scroll navigation
7. **Footer** - Copyright and quick links

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/bemyprakash/saanvi-website.git
   cd saanvi-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

## Development

### Project Structure

```
saanvi-website/
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Hero section with animations
│   │   ├── About.jsx          # About section with founders
│   │   ├── Services.jsx       # Services cards
│   │   ├── Portfolio.jsx      # Portfolio grid
│   │   ├── Contact.jsx        # Contact form
│   │   ├── Navigation.jsx     # Header and navigation
│   │   └── Footer.jsx         # Footer
│   ├── styles/
│   │   └── globals.css        # Global styles
│   ├── App.jsx                # Main app component
│   └── main.jsx               # React entry point
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS config
├── postcss.config.js          # PostCSS configuration
└── README.md                  # This file
```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (creates `dist/` folder)
- `npm run preview` - Preview production build locally
- `npm run deploy` - Build and deploy to GitHub Pages

## Customization

### Colors & Branding

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  'navy-dark': '#0B132B',
  'navy-light': '#1C2541',
  'accent': '#6366F1',
}
```

### Content

All content is in the component files under `src/components/`. Simply edit the JSX to update text, links, and information.

### Animations

Animations are powered by Framer Motion. Adjust animation props in each component to customize timing and effects.

## Deployment to GitHub Pages

### Prerequisites

- GitHub account and the repository already pushed
- `gh-pages` package (included in dependencies)

### Deploy Steps

1. **Update `vite.config.js`** (if needed)
   - Ensure `base: '/saanvi-website/'` matches your repo name
   - For a custom domain, set `base: '/'`

2. **Update `package.json`** (if needed)
   - Update `"homepage"` with your GitHub Pages URL
   - Syntax: `"https://[username].github.io/[repo-name]/"`

3. **Build and Deploy**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll to "GitHub Pages" section
   - Select `gh-pages` branch as source
   - Save and your site will be live!

### View Your Site

Visit: `https://bemyprakash.github.io/saanvi-website/`

## Performance Optimization

The website is optimized for performance:
- **Code Splitting**: Automatic code splitting with Vite
- **Asset Optimization**: Images and assets are optimized
- **Fast Refresh**: Hot module replacement for development
- **Production Build**: Minified and optimized for production

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile, etc.)

## SEO

The website includes:
- Semantic HTML structure
- Descriptive page title and meta tags
- Fast page load times
- Mobile-friendly responsive design

## Contact & Support

For questions or suggestions, reach out:
- 📧 Email: hello@saanvi.tech
- 🔗 LinkedIn: [Prakash](https://linkedin.com/in/prakash) | [Mrunal](https://linkedin.com/in/mrunal)
- 🐙 GitHub: [@bemyprakash](https://github.com/bemyprakash)

## License

© 2025 Saanvi. All rights reserved.

---

**Made with ❤️ by Prakash Kumbhakar & Mrunal Kulkarni**
