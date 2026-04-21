import pizDesktop from "../assets/piz-patty/piz-desktop-1.png";
import pizMobile from "../assets/piz-patty/piz-mobile-1.png";
import pizFeatures from "../assets/piz-patty/piz-desktop-2.png";
import pizMenu from "../assets/piz-patty/piz-desktop-menu.png";

export const projects = [
  {
    slug: "piz-patty",
    title: "Piz Patty",
    category: "Gastronomie",
    description:
      "Eine Restaurant-Website mit Speisekarte, Reservierungsmöglichkeit und Google Maps Einbindung. Die Inhalte können vom Betreiber selbst gepflegt werden, ohne technische Vorkenntnisse.",
    tags: ["Astro", "Sanity CMS", "Responsive", "SEO"],
    liveUrl: "https://piz-patty.vercel.app",

    desktop: {
      images: [
        {
          src: pizDesktop,
          alt: "Startseite Desktop",
          description: [
            "Grosses Hero-Bild mit zwei CTA-Buttons.",
            "Die Buttons lenken Besucher direkt zum Menü und zum Kontaktformular.",
            "Darunter befinden sich die Öffnungszeiten.",
          ],
          highlights: [
            { x: 76, y: -5, label: "Navigationsleiste" },
            { x: 45, y: 41.5, label: "CTA Buttons" },
            { x: 50, y: 10, label: "Hero Bild" },
            { x: 10, y: 53, label: "Öffnungszeiten" },
          ],
        },
        {
          src: pizFeatures,
          alt: "Features Desktop",
          description: [
            "Unterhalb der Öffnungszeiten finden Ihre Kunden die Karte vom Restaurant. Wenn man da drauf klickt, kommt man direkt zu Google Maps und kann sogar eine Navigation starten.",
            "Dank den Just Eat und Uber Eats Buttons, welche mit ihrer Restaurantseite verlinkt werden, können Kunden mit wenigen klicks eine Bestellung aufgeben.",
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
            "Grosses Hero-Bild mit zwei CTA-Buttons.",
            "Die Buttons lenken Besucher direkt zum Menü und zum Kontaktformular.",
          ],
          highlights: [
            { x: 30, y: 85, label: "CTA Buttons" },
            { x: 15, y: 50, label: "Hero Bild" },
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
            "Die Startseite ist so aufgebaut, dass Ihre Kunden alle wichtigen Informationen möglichst schnell finden.",
            "In der Mobile Ansicht verschwindet die Navigationsleiste in einem sogenannten Hamburger Menü.",
            "Die Buttons im Hero lenken Besucher direkt zum Menü und zum Kontaktformular.",
            "Auf der Startseite kann man auch direkt die Öffnungszeiten einsehen.",
          ],
        },
      ],
    },
  },
];
