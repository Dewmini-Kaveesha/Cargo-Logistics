# 🚚 SwiftCargo — Logistics & Cargo Solutions Website

A modern, fully responsive **React.js** single-page website for a Cargo & Shipping company.  
Built with **Vite** and **pure CSS** (no Tailwind dependency required).

---

## ✨ Features

| Section | Description |
|---|---|
| **Hero Banner** | Full-screen background, animated tagline, live stats badge |
| **About** | Company history, fleet stats, experience badge |
| **Services (8 cards)** | Air, Ocean, Land, Express, Warehousing, D2D, Cold Chain, Project Cargo with pricing |
| **Operational Features** | 8 feature cards: Tracking, Warehousing, Packaging, Customs Clearance, etc. |
| **Live Tracking (Mock UI)** | Interactive shipment tracker with demo tracking ID |
| **Fleet Gallery** | Masonry-style grid with 8 fleet photos and hover overlays |
| **Contact + WhatsApp Form** | Address, map embed, and WhatsApp pre-filled message booking |
| **Footer** | Links, socials, contact info |

---

## 🛠 Tech Stack

- **React.js 18** (Vite)
- **Pure CSS** with CSS custom properties (no Tailwind/Bootstrap needed)
- **Google Fonts**: Bebas Neue + Syne + DM Sans
- **SVG icons** (no icon library dependencies)

---

## 📂 Project Structure

```
src/
├── main.jsx                  # React entry point
├── App.jsx                   # Root component — assembles all sections
├── index.css                 # Global styles, design tokens, utilities
│
└── components/
    ├── Navbar.jsx / .css      # Sticky navbar with mobile hamburger menu
    ├── Hero.jsx / .css        # Full-screen hero section
    ├── About.jsx / .css       # Company profile section
    ├── Services.jsx / .css    # 8 shipping service cards
    ├── Features.jsx / .css    # Operational feature cards
    ├── Tracking.jsx / .css    # Mock real-time tracking UI
    ├── Fleet.jsx / .css       # Fleet photo gallery
    ├── Contact.jsx / .css     # Contact info + WhatsApp quote form
    └── Footer.jsx / .css      # Site footer
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+ and npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/swiftcargo-website.git
cd swiftcargo-website

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 📱 Responsiveness

| Breakpoint | Layout |
|---|---|
| Desktop (1240px+) | Full multi-column layouts |
| Tablet (768–1024px) | 2-column grids |
| Mobile (< 768px) | Single column, hamburger menu |

---

## 💬 WhatsApp Integration

The quote form in the **Contact** section:
1. Collects Name, Service Type, and Weight/Quantity
2. Generates a pre-filled WhatsApp message:  
   `"Hi, I'm [Name], I want to ship [Package] of [Quantity]."`
3. Opens WhatsApp Web / App via `https://wa.me/{phone}?text={message}`

**To configure your number**, update the `phone` variable in `src/components/Contact.jsx`:
```js
const phone = '94771234567'  // Replace with your WhatsApp number (no + or spaces)
```

---

## 📸 Images

All images are sourced from [Unsplash](https://unsplash.com) and loaded via CDN URLs.  
No local image assets required.

---

## 📜 License

This project is for educational/assignment purposes.
