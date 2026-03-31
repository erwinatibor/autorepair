# Apex Moto — Auto Repair Landing Page

A complete, production-grade landing page for an auto repair business.

---

## 📁 Project Structure

```
apexmoto/
│
├── index.html                  ← Main landing page (entry point)
│
├── css/
│   ├── variables.css           ← Design tokens, CSS custom properties
│   ├── reset.css               ← CSS reset, base styles, utility classes
│   ├── components.css          ← Buttons, cards, badges, forms, accordion, pricing
│   └── layout.css              ← Nav, hero, sections, footer, responsive grid
│
├── js/
│   ├── main.js                 ← Navigation, scroll reveal, accordion, counter, form
│   └── data.js                 ← All site content (services, team, reviews, FAQs, pricing)
│
├── pages/
│   ├── services.html           ← Full services listing page
│   ├── about.html              ← About us page
│   ├── contact.html            ← Contact & booking page
│   └── reviews.html            ← Reviews page
│
├── components/
│   ├── nav.html                ← Navigation HTML snippet (for reference)
│   ├── footer.html             ← Footer HTML snippet (for reference)
│   ├── hero.html               ← Hero section snippet
│   └── service-card.html       ← Service card component snippet
│
├── images/
│   ├── README.md               ← Image specs and naming guide
│   └── (place your images here)
│
└── README.md                   ← This file
```

---

## 🚀 Getting Started

### Quick Start
Simply open `index.html` in a browser — no build tools required.

```bash
# Option 1: Direct open
open index.html

# Option 2: Local server (recommended)
npx serve .
# or
python3 -m http.server 8080
```

### Dependencies
All fonts are loaded from Google Fonts (CDN). No npm packages required.

- **Barlow Condensed** — Display / headlines
- **Barlow** — Body text

---

## 🎨 Design System

### Color Palette
| Token         | Hex       | Usage                        |
|---------------|-----------|------------------------------|
| `--ink`       | `#0c0b09` | Page background              |
| `--steel`     | `#161512` | Alternate section background |
| `--plate`     | `#1e1c18` | Card backgrounds             |
| `--zinc`      | `#27261f` | Elevated surfaces            |
| `--amber`     | `#F5A623` | Primary brand accent         |
| `--rust`      | `#C94208` | Secondary accent / urgency   |
| `--chrome`    | `#c4bfb5` | Body text                    |
| `--fog`       | `#8a8679` | Muted / secondary text       |
| `--white`     | `#f2eee6` | High contrast text           |

### Typography
```css
--font-display: 'Barlow Condensed', sans-serif;  /* Headlines, labels, nav */
--font-body:    'Barlow', sans-serif;             /* Body text, descriptions */
```

### Spacing Scale
```css
--space-xs: 4px  |  --space-sm: 8px  |  --space-md: 16px
--space-lg: 24px |  --space-xl: 40px |  --space-2xl: 64px
--space-3xl: 96px | --space-4xl: 128px
```

---

## 📋 Sections (index.html)

| Section        | ID              | Description                              |
|----------------|-----------------|------------------------------------------|
| Navigation     | `.nav`          | Sticky nav with mobile hamburger         |
| Hero           | `#hero`         | Split-screen with 4 checkpoints          |
| Stat Strip     | `#stats`        | 5 animated stat counters                 |
| Services       | `#services`     | 9-service grid with pricing              |
| About          | `#about`        | 2-col layout with feature list           |
| Team           | `#team`         | 4-member team cards                      |
| Reviews        | `#reviews`      | 6 review cards + overall rating          |
| Pricing        | `#pricing`      | 3-tier pricing cards                     |
| FAQ            | `#faq`          | Accordion FAQ                            |
| Contact        | `#contact`      | Booking form + contact info + map        |
| CTA Banner     | —               | Full-width amber CTA                     |
| Footer         | `.footer`       | 4-col footer with links                  |

---

## 🔧 Customization

### Updating Content
All site content lives in `js/data.js`. Update the `APEXMOTO_DATA` object:

```js
// Change business info
APEXMOTO_DATA.business.name = 'Your Shop Name';
APEXMOTO_DATA.business.phone = '(555) 123-4567';

// Add a service
APEXMOTO_DATA.services.push({
  icon: '🔦',
  title: 'Lighting Service',
  description: 'Headlight restoration, bulb replacement...',
  price: 'From $49',
  tags: ['Headlights', 'LEDs', 'Fog Lights'],
});
```

### Changing Colors
Edit `css/variables.css`:
```css
:root {
  --amber: #F5A623;   /* Change primary accent */
  --rust:  #C94208;   /* Change secondary accent */
  --ink:   #0c0b09;   /* Change background */
}
```

### Adding Google Analytics
Add before `</head>` in index.html:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 📱 Responsive Breakpoints

| Breakpoint  | Width      | Changes                                  |
|-------------|------------|------------------------------------------|
| Desktop     | > 1100px   | Full layout                              |
| Tablet L    | ≤ 1100px   | Hero 2-col, team 2-col                   |
| Tablet      | ≤ 900px    | Hero 1-col, services 2-col, nav hidden   |
| Mobile      | ≤ 640px    | Everything single column, hamburger menu |

---

## ✅ Features

- [x] Sticky navigation with scroll effects
- [x] Mobile hamburger menu
- [x] 4-checkpoint split-screen hero
- [x] Animated stat counters (IntersectionObserver)
- [x] Scroll reveal animations on all sections
- [x] 9 service cards with hover effects
- [x] About section with floating badge
- [x] Team profiles with certifications
- [x] Review cards with author details
- [x] 3-tier pricing cards
- [x] Accordion FAQ component
- [x] Booking / contact form with validation
- [x] Map placeholder with animated pin
- [x] CTA banner section
- [x] Complete footer with 4 columns
- [x] Fully responsive (mobile-first)
- [x] No build tools required
- [x] All content externalized to data.js

---

## 📸 Image Guidelines (images/)

Recommended images to add:
- `hero-bg.jpg` — 1920×1080px, workshop/garage atmosphere
- `team-mike.jpg` — 400×400px, headshot
- `team-sofia.jpg` — 400×400px, headshot
- `team-derek.jpg` — 400×400px, headshot
- `team-luis.jpg` — 400×400px, headshot
- `shop-exterior.jpg` — 800×600px, shop front
- `shop-interior.jpg` — 800×600px, workshop
- `logo.svg` — Vector logo file

---

## 📄 License
Free to use and customize for your auto repair business.
