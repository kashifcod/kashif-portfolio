# portfolio

Modern, responsive, professional portfolio built with **React + Bootstrap
(react-bootstrap)**. Fully self-contained — no external image files
required, so it runs immediately after install.

## Sections included
Nav Bar → Hero (Home) → About → Skills → Projects → Education →
Achievements → Testimonials → Contact → Footer

---

## 1. Install (Node.js required)

Make sure **Node.js (v16 or newer)** is installed on your computer:
https://nodejs.org

Unzip this project, open a terminal inside the `portfolio-react` folder,
then run this **one command** to install every dependency at once:

```bash
npm install
```

That single command reads `package.json` and installs everything: React,
React Bootstrap, Bootstrap, React Icons, Animate.css, and React On Screen.

## 2. Run it locally

```bash
npm start
```

This opens the site at **http://localhost:3000** with live reload — save
any file and the browser updates automatically.

## 3. Build for production (when ready to deploy)

```bash
npm run build
```

This creates an optimized `/build` folder you can upload to Netlify,
Vercel, GitHub Pages, or any static host.

---

## 4. How to customize (everything is marked `EDIT ME`)

| What to change              | File                                |
|------------------------------|--------------------------------------|
| Your name, role, bio         | `src/components/Banner.js`, `About.js` |
| Colors, fonts, spacing       | `src/theme.js` (single source of truth) |
| Skills / tech stack          | `src/components/Skills.js`          |
| Projects                     | `src/components/Projects.js`        |
| Education history            | `src/components/Education.js`       |
| Achievements                 | `src/components/Achievements.js`    |
| Testimonials                 | `src/components/Testimonials.js`    |
| Contact info & socials       | `src/components/Contact.js`, `NavBar.js`, `Footer.js` |
| Site title / meta description| `public/index.html`                 |

Search for the comment `// EDIT ME` in each file — that marks exactly what
you should personalize.

### Adding your resume
Drop your PDF into the `public/` folder as `resume.pdf`. The "Download CV"
button in `Banner.js` already points to `/resume.pdf`.

### Making the contact form actually send emails
Right now the contact form (`Contact.js`) just confirms submission on the
front end — there's no backend yet. To make it functional, the easiest
options are:
- **EmailJS** (https://www.emailjs.com) — free tier, works entirely from
  the browser, no server needed.
- **Formspree** (https://formspree.io) — point the form's `action` at
  your Formspree endpoint.

### Project thumbnails
Projects currently use colored gradient placeholders (no image files
needed to get started). Once you have real screenshots, just replace the
placeholder `<div>` in `ProjectCard.js` with an `<img src="..." />`.

---

## 5. Project structure

```
portfolio-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── NavBar.js
│   │   ├── Banner.js        (Hero)
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── ProjectCard.js
│   │   ├── Education.js
│   │   ├── Achievements.js
│   │   ├── Testimonials.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── theme.js             (design tokens: colors/fonts/shadows)
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```

## Design system
- **Colors**: navy ink `#0B1220`, paper `#F7F8FA`, signal accent `#0F9D74`
- **Type**: Space Grotesk (headings), Inter (body), JetBrains Mono (labels/tags)
- Sections alternate light/white/dark backgrounds for visual rhythm
- Cards use a consistent hover-lift + soft shadow
- Fully responsive: stacks cleanly on mobile, tablet, and desktop
