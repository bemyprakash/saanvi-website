# Saanvi Website - Quick Start Guide

## 🚀 Quick Commands

### Development
```bash
npm install      # Install dependencies (only run once)
npm run dev      # Start dev server → localhost:5173
```

### Production
```bash
npm run build    # Create optimized build
npm run preview  # Preview production build
npm run deploy   # Build & deploy to GitHub Pages
```

## 📁 What's Inside

- **Hero Section**: Animated landing with gradient background
- **About Section**: Company mission & founder profiles  
- **Services Section**: 3 core services (Web, Apps, AI)
- **Portfolio Section**: 6 sample projects with emoji placeholders
- **Contact Section**: Contact form + social media links
- **Navigation**: Sticky header with smooth scroll
- **Footer**: Copyright and links

## 🎨 Design Features

✅ Dark theme with indigo/purple accents
✅ Fully responsive (mobile, tablet, desktop)
✅ Smooth Framer Motion animations
✅ Tailwind CSS styling
✅ Lucide React icons
✅ Fast with Vite

## 🌐 GitHub Pages Deployment

1. **Make sure your repo settings allow GitHub Pages from `gh-pages` branch**

2. **Deploy with one command**:
   ```bash
   npm run deploy
   ```

3. **Your site will be live at**:
   ```
   https://bemyprakash.github.io/saanvi-website/
   ```

## 🛠️ Customization

### Change Colors
Edit `tailwind.config.js` - update the `colors` object

### Change Content
Edit component files in `src/components/`:
- `Hero.jsx` - Main headline and tagline
- `About.jsx` - Company mission and founder info
- `Services.jsx` - Service descriptions
- `Portfolio.jsx` - Project cards
- `Contact.jsx` - Contact form and links

### Change Repo URL
If deploying to different repo:
1. Update `base` in `vite.config.js`
2. Update `homepage` in `package.json`

## 📦 Dependencies

- **React 18.2** - UI framework
- **Vite 5.0** - Build tool (super fast!)
- **Tailwind CSS 3.3** - Styling
- **Framer Motion 10.16** - Animations
- **Lucide React 0.294** - Beautiful icons
- **gh-pages 6.1** - Deploy to GitHub Pages

## 💡 Tips

- All animations are in the components - easy to customize
- Use Tailwind classes for styling (no CSS files needed)
- Scroll navigation is automatic with anchor links
- Form submission shows success message (front-end only)
- Mobile menu auto-closes when navigating

## ✨ Features

✅ Smooth scroll navigation
✅ Animated scroll-to-top button (appears after scrolling down)
✅ Mobile-responsive menu
✅ Contact form with validation
✅ Social media links
✅ Beautiful gradients and glows
✅ 60KB+ optimized final build

## 🚀 Ready to Deploy?

1. Commit your changes
   ```bash
   git add .
   git commit -m "Add Saanvi website"
   git push origin main
   ```

2. Deploy
   ```bash
   npm run deploy
   ```

3. Visit `https://bemyprakash.github.io/saanvi-website/` 🎉

---

For questions or issues, check the main README.md file!
