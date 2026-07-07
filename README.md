# 🚀 Mouleeshwaran G — Angular Portfolio

A modern, fully responsive portfolio website built with **Angular 17 (Standalone Components)**.

---

## 📁 Project Structure

```
mouli-portfolio/
├── src/
│   ├── app/
│   │   ├── app.component.ts          ← Root component (dark mode toggle, layout)
│   │   └── components/
│   │       ├── navbar/
│   │       │   └── navbar.component.ts    ← Sidebar nav, mobile menu, active section
│   │       ├── home/
│   │       │   └── home.component.ts      ← Hero section, typing animation
│   │       ├── about/
│   │       │   └── about.component.ts     ← Info, skills, education, experience
│   │       ├── services/
│   │       │   └── services.component.ts  ← 6 service cards with hover animations
│   │       ├── portfolio/
│   │       │   └── portfolio.component.ts ← Project cards with overlay links
│   │       └── contact/
│   │           └── contact.component.ts   ← Contact info + reactive form
│   ├── styles.css      ← Global CSS variables, layout, dark mode
│   ├── main.ts         ← Bootstrap entry point
│   └── index.html      ← HTML shell
├── angular.json
├── package.json
├── tsconfig.json
└── tsconfig.app.json
```

---

## ⚡ Features

- ✅ **Angular 17 Standalone Components** — no NgModules needed
- ✅ **Dark / Light Mode Toggle** — CSS variable-based theming
- ✅ **Typing Animation** — cycles through professions
- ✅ **Skill Progress Bars** — animated on load
- ✅ **Timeline** — education & experience
- ✅ **Portfolio Cards** — hover/click overlay with Live Demo + GitHub
- ✅ **Contact Form** — two-way binding with `ngModel`
- ✅ **Fully Responsive** — mobile, tablet, desktop
- ✅ **Smooth Animations** — fade-in, float, slide-up

---

## 🛠️ Getting Started

### Prerequisites
- Node.js ≥ 18
- Angular CLI 17: `npm install -g @angular/cli`

### Install & Run

```bash
# 1. Extract the project folder
cd mouli-portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
ng serve

# 4. Open browser
# → http://localhost:4200
```

### Build for Production

```bash
ng build
# Output in dist/mouli-portfolio/
```

---

## 🖼️ Assets

Place your images in `src/assets/`:
- `src/assets/Background.jpeg`  — Hero section photo
- `src/assets/About.jpeg`       — About section photo
- `src/assets/Resume_Update.pdf` — CV download

---

## 🎨 Customization

All content is in each component's TypeScript file as arrays/objects — no external API needed:

| Component | What to edit |
|-----------|-------------|
| `home.component.ts` | Name, description, professions list |
| `about.component.ts` | personalInfo[], skills[], education[], experience[] |
| `services.component.ts` | services[] array |
| `portfolio.component.ts` | projects[] array (add GitHub URLs, titles, tech) |
| `contact.component.ts` | contactInfo[] array |
| `styles.css` | `--skin-color` to change accent color |

---

## 🔄 Update Experience

The content already reflects **1+ year experience**:
- Experience section shows "Java Full Stack Developer — Boon Software Solution (2024 – Present)"
- Home description updated to "1+ year of experience"
- Angular added to skills list

---

## 📞 Contact

**G Mouleeshwaran** · mouleeshslm26@gmail.com · [LinkedIn](https://www.linkedin.com/in/mouleeshwaran-g)
