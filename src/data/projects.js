import pizDesktop from "../assets/piz-patty/piz-desktop-1.png";
import pizMobile from "../assets/piz-patty/piz-mobile-1.png";
import pizMobile2 from "../assets/piz-patty/piz-mobile-2.png";
import pizFeatures from "../assets/piz-patty/piz-desktop-2.png";
import pizMenu from "../assets/piz-patty/piz-desktop-menu.png";
import mobileMenu from "../assets/piz-patty/piz-mobile-menu.png";
import cms from "../assets/piz-cms.png";

import PizPattymockup from "../assets/piz-patty-mockup.webp";

export const projects = [
  {
    slug: "piz-patty",
    title: "Piz Patty",
    category: "Gastronomie",
    description:
      "Eine moderne Restaurant-Website mit Speisekarte, Reservierungsmöglichkeit und Google Maps-Integration. Das Besondere: Über eine einfache Verwaltungsoberfläche kann der Inhaber Texte und Preise jederzeit selbst anpassen - ganz ohne Hilfe und ohne eine Zeile Code zu schreiben.",
    tags: ["Astro", "Sanity CMS", "Responsive", "SEO"],
    liveUrl: "https://piz-patty.vercel.app",
    mockup: PizPattymockup,

    desktop: {
      images: [
        {
          src: pizDesktop,
          alt: "Startseite Desktop",
          description: [
            {
              title: "Navigationsleiste",
              text: "Dank der stets präsenten Navigationsleiste finden sich Besucher jederzeit zurecht. Alle Bereiche der Seite sind so mit nur einem Klick erreichbar.",
            },
            {
              title: "Hero-Sektion",
              text: "Ein emotionales, grossformatiges Titelbild, das sofort die Atmosphäre des Restaurants vermittelt und den Besucher willkommen heisst.",
            },
            {
              title: "Call-to-Action (CTA)",
              text: "Strategisch platzierte Buttons leiten den Besucher gezielt zu den wichtigsten Bereichen: der Speisekarte und der Tischreservierung. Das erhöht die Conversion-Rate spürbar.",
            },
            {
              title: "Öffnungszeiten",
              text: "Direkt im Sichtbereich platziert, damit Gäste die wichtigsten Informationen sofort finden, ohne suchen zu müssen.",
            },
          ],
          highlights: [
            { x: 55, y: -6, label: "Navigationsleiste", right: true },
            { x: 45, y: 41.5, label: "CTA Buttons" },
            { x: 50, y: 10, label: "Hero Bild" },
            { x: 10, y: 53, label: "Öffnungszeiten" },
          ],
        },
        {
          src: pizFeatures,
          alt: "Features Desktop",
          description: [
            {
              title: "Google Maps-Integration",
              text: "Unterhalb der Öffnungszeiten finden Ihre Kunden die Karte vom Restaurant. Wenn man da drauf klickt, kommt man direkt zu Google Maps und kann sogar eine Navigation starten.",
            },
            {
              title: "Just Eat / Uber Eats",
              text: "Dank der direkten Schnittstellen zu Lieferdiensten können Kunden mit wenigen Klicks Bestellungen aufgeben. Das steigert den Umsatz und macht den Bestellvorgang kinderleicht.",
            },
          ],
          highlights: [
            { x: 70, y: 28, label: "Google Maps" },
            { x: 23, y: 60, label: "Bestellservice" },
          ],
        },
        {
          src: pizMenu,
          alt: "Speisekarte Desktop",
          description: [
            {
              title: "Digitale Speisekarte",
              text: "Eine übersichtliche Menüseite, die Ihre Speisen perfekt in Szene setzt und alle relevanten Informationen für Ihre Gäste bereithält.",
            },
          ],
          highlights: [
            { x: 28, y: 25, label: "Preis" },
            { x: 3, y: 59, label: "Allergie Infos" },
            { x: 9, y: 82, label: "Zutaten" },
          ],
        },
        {
          src: cms,
          alt: "Content management system",
          description: [
            {
              title: "Einfache Inhaltsverwaltung (CMS)",
              text: "Über ein modernes Content Management System (CMS) können Sie Ihre Inhalte, wie Öffnungszeiten oder Speisekarten, jederzeit selbstständig anpassen, ergänzen oder löschen. Sie sind dadurch völlig unabhängig und benötigen für Aktualisierungen keine Programmierkenntnisse.",
            },
          ],
        },
      ],
    },

    mobile: {
      images: [
        {
          src: pizMobile,
          alt: "Startseite Mobile",
          description: [
            {
              title: "Mobile First Design",
              text: "Die Startseite ist für die Einhand-Bedienung optimiert. Alle wichtigen Infos sind sofort im Sichtbereich, damit Gäste auch von unterwegs schnell fündig werden.",
            },
            {
              title: "Intuitives Menü",
              text: "Um Platz zu sparen, wird die Navigation kompakt in einem 'Hamburger-Menü' zusammengefasst – Standard für moderne mobile Erlebnisse.",
            },
            {
              title: "Daumenfreundliche CTAs",
              text: "Die Buttons sind so platziert und dimensioniert, dass sie bequem mit dem Daumen erreichbar sind, um direkt zur Karte oder Reservierung zu springen.",
            },
            {
              title: "Schnell-Info",
              text: "Öffnungszeiten sind direkt präsent – kein langes Scrollen nötig, wenn man vor verschlossenen Türen steht.",
            },
          ],
          highlights: [
            { x: 59, y: -1, label: "Hamburger Menü", right: true },
            { x: 35, y: 45, label: "CTA Buttons" },
            { x: 35, y: 61, label: "Öffnungszeiten" },
          ],
        },
        {
          src: pizMobile2,
          alt: "Unterer Teil der Startseite",
          description: [
            {
              title: "Lokale Features",
              text: "Google Maps und Lieferdienste sind nativ integriert. Ein Klick startet direkt die Routenplanung in der Karten-App oder den Bestellvorgang bei Just Eat.",
            },
          ],
          highlights: [
            { x: 35, y: 12, label: "Google Maps", right: true },
            { x: 45, y: 65, label: "link zu Bestellservices" },
          ],
        },
        {
          src: mobileMenu,
          alt: "Mobile Ansicht des Menüs",
          description: [
            {
              title: "Responsive Speisekarte",
              text: "Kein mühsames Zoomen in PDF-Dateien. Die Karte passt sich flexibel an jede Bildschirmgrösse an und bleibt perfekt lesbar.",
            },
          ],
        },
      ],
    },
  },
];
