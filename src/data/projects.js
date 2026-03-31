import pizDesktop from "../assets/piz-patty/piz-desktop-1.png";
import pizFeatures from "../assets/piz-patty/piz-desktop-2.png";
import pizMenu from "../assets/piz-patty/piz-desktop-menu.png";

export const projects = [
  {
    slug: "piz-patty",
    title: "Piz Patty",
    category: "Gastronomie",
    description:
      "Eine Restaurant-Website mit Speisekarte, Reservierungsmöglichkeit und Google Maps Einbindung. Die Inhalte können vom Betreiber selbst gepflegt werden — ohne technische Vorkenntnisse.",
    tags: ["Astro", "Sanity CMS", "Responsive", "SEO"],
    liveUrl: "https://piz-patty.vercel.app",
    images: [
      {
        src: pizDesktop,
        alt: "desktop Ansicht der Überschrift, Hero- sektion und Öffnungszeiten",
      },
      {
        src: pizFeatures,
        alt: "Desktop Ansicht der Einbindung vom Google maps und Lieferservices",
      },
      { src: pizMenu, alt: "Desktop Ansicht von der Menü Seite" },
    ],
  },
];
