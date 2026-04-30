# Astro Portfolio Project

Dies ist mein persönliches Portfolio-Projekt, erstellt mit dem **Astro Framework**. Es dient als zentrale Plattform, um meine Projekte vorzustellen und meine Fortschritte in der Webentwicklung zu dokumentieren.

## 🛠 Tech-Stack

*   **Framework:** [Astro](https://astro.build/) (Static Site Generation)
*   **UI-Bibliothek:** [React](https://reactjs.org/) (für interaktive Komponenten)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Deployment:** Vercel / Netlify (CI/CD via GitHub)

## 🚀 Features

- **Responsive Design:** Optimiert für Desktop, Tablet und Mobile.
- **Performance:** Hohe PageSpeed-Werte durch Astros "Island Architecture".
- **Dark Mode:** Unterstützung für helles und dunkles Design.
- **Projekt-Showcase:** Dynamische Darstellung von Repositories via GitHub API oder lokaler Konfiguration.

## 📁 Projektstruktur

Innerhalb des Projekts findest du folgende Ordnerstruktur:
```text
/
├── public/          # Statische Assets (Favicon, etc.)
├── src/
│   ├── assets/      # Bilder (PNG, JPG) und Vektorgrafiken (SVG)
│   ├── components/  # Astro- & React-Komponenten (.jsx & .astro)
│   ├── data/        # JSON oder JS-Dateien für Projektinhalte
│   ├── layouts/     # Basis-Templates (BaseLayout.astro)
│   ├── pages/       # Routen und dynamische Seiten ([slug].astro)
│   └── styles/      # Globale Styles (global.css)
├── astro.config.mjs # Konfiguration für Astro
└── package.json     # Projekt-Abhängigkeiten