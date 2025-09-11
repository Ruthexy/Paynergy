# Paynergy - One Click. Every Bill. Paid.

A modern, high-converting single-page website for Paynergy, a utility-FinTech platform that consolidates energy bills into one simple payment. Built with React 18, Tailwind CSS, and Framer Motion for smooth animations.

## 🚀 Features

- **Modern Design**: Clean, professional layout with electric-lime accent colors
- **Mobile-First**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion powered scroll animations and transitions
- **SEO Optimized**: Complete meta tags, Open Graph, and JSON-LD schema
- **Fast Performance**: Optimized images, lazy loading, and efficient code
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels
- **Lead Generation**: Early access signup form with validation
- **Interactive Elements**: Smooth scroll navigation, accordions, and hover effects

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks and concurrent features
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Helmet Async** - SEO and meta tag management
- **Heroicons** - Beautiful SVG icons
- **Vite** - Fast build tool and dev server

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd paynergy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build & Deploy

### Development
```bash
npm start
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel (One-Click)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

### Deploy to Netlify (One-Click)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=<your-repo-url>)

## 📁 Project Structure

```
paynergy/
├── public/                 # Static assets
│   ├── img/               # Images
│   ├── robots.txt         # SEO robots file
│   └── sitemap.xml        # SEO sitemap
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Button.jsx     # Custom button component
│   │   ├── Navbar.jsx     # Navigation component
│   │   └── Footer.jsx     # Footer component
│   ├── sections/          # Page sections
│   │   ├── Hero.jsx       # Hero section
│   │   ├── HowItWorks.jsx # How it works section
│   │   ├── Features.jsx   # Features section
│   │   ├── CaseStudies.jsx # Case studies section
│   │   ├── Testimonials.jsx # Testimonials section
│   │   ├── FAQ.jsx        # FAQ accordion section
│   │   └── EarlyAccess.jsx # Early access signup
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the brand colors:
```javascript
colors: {
  'electric-lime': '#ACE153',
  'deep-evergreen': '#0D513A',
  'off-white': '#F5F5F5',
  'charcoal': '#111111',
}
```

### Content
- **Hero Section**: Edit `src/sections/Hero.jsx`
- **Features**: Update `src/sections/Features.jsx`
- **Testimonials**: Modify `src/sections/Testimonials.jsx`
- **Case Studies**: Edit `src/sections/CaseStudies.jsx`

### SEO Meta Tags
Update the meta information in `src/App.jsx`:
```javascript
<title>Paynergy - One Click. Every Bill. Paid.</title>
<meta name="description" content="Your description here" />
```

## 📱 Responsive Breakpoints

- `sm`: 640px and up
- `md`: 768px and up  
- `lg`: 1024px and up
- `xl`: 1280px and up
- `2xl`: 1536px and up

## 🔧 Configuration
