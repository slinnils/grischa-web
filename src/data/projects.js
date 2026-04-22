import pizDesktop from "../assets/piz-patty/piz-desktop-1.png";
import pizMobile from "../assets/piz-patty/piz-mobile-1.png";
import pizMobile2 from "../assets/piz-patty/piz-mobile-2.png";
import pizFeatures from "../assets/piz-patty/piz-desktop-2.png";
import pizMenu from "../assets/piz-patty/piz-desktop-menu.png";

import PizPattymockup from "../assets/piz-patty-mockup.webp";

export const projects = [
  {
    slug: "piz-patty",
    title: "Piz Patty",
    category: "Gastronomie",
    description:
      "Eine Restaurant-Website mit Speisekarte, Reservierungsmöglichkeit und Google Maps Einbindung. Die Inhalte können vom Betreiber selbst gepflegt werden, ohne technische Vorkenntnisse.",
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
              text: "Die Navigationsleiste ist von der ganzen Website aus erreichbar und sorgt für eine einfache Navigation zu allen Sektionen der Website.",
            },
            {
              title: "Hero Bild",
              text: "Grosses Hero-Bild mit zwei CTA-Buttons.",
            },
            {
              title: "CTA Buttons",
              text: 'CTA steht für "Call to action", also Aufruf zu einer Aktion. Die Buttons lenken Besucher direkt zum Menü und zum Kontaktformular.',
            },
            {
              title: "Öffunungszeiten",
              text: "Unter dem Hero befinden sich die Öffnungszeiten.",
            },
          ],
          highlights: [
            { x: 40, y: -7, label: "Navigationsleiste", right: true },
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
              title: "Google Maps",
              text: "Unterhalb der Öffnungszeiten finden Ihre Kunden die Karte vom Restaurant. Wenn man da drauf klickt, kommt man direkt zu Google Maps und kann sogar eine Navigation starten.",
            },
            {
              title: "Just Eat/ Uber Eats",
              text: "Dank den Just Eat und Uber Eats Buttons, welche mit ihrer Restaurantseite verlinkt werden, können Kunden in wenigen klicks eine Bestellung aufgeben.",
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
              title: "Menüseite",
              text: "Menüseite mit allen relevanten Informationen zu Ihren leckeren Speisen.",
            },
            {
              title: "CTA Buttons",
              text: "Die Buttons lenken Besucher direkt zum Menü und zum Kontaktformular.",
            },
          ],
          highlights: [
            { x: 28, y: 25, label: "Preis" },
            { x: 3, y: 59, label: "Allergie Infos" },
            { x: 9, y: 82, label: "Zutaten" },
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
              title: "Startseite",
              text: "Die Startseite ist so aufgebaut, dass Ihre Kunden alle wichtigen Informationen möglichst schnell finden.",
            },
            {
              title: "Hamburger Menü",
              text: "In der Mobile Ansicht verschwindet die Navigationsleiste in einem sogenannten Hamburger Menü.",
            },
            {
              title: "CTA Buttons",
              text: "Die Buttons im Hero lenken Besucher direkt zum Menü und zum Kontaktformular.",
            },
            {
              title: "Öffnungszeiten",
              text: "Auf der Startseite kann man auch direkt die Öffnungszeiten einsehen.",
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
              title: "Google Maps und Food Order einbindung",
              text: "Auch in der Mobilen ansicht sind die Einbindungen für Google Maps und die Bestellservices leicht zu finden.",
            },
          ],
          highlights: [
            { x: 35, y: 12, label: "Google Maps", right: true },
            { x: 45, y: 65, label: "link zu Bestellservices" },
          ],
        },
      ],
    },
  },
];
