import { useState } from "react";
import Switch from "./MobileSwitch";

export default function ProjectDetails({ project, desktop, mobile }) {
  const [isMobile, setIsMobile] = useState(true);

  function handleToggle() {
    setIsMobile((prev) => !prev);
  }

  return (
    <>
      <div className="flex gap-5 items-center">
        <p className="text-[clamp(0.6rem,2vw,1.1rem)]">
          Diese Website ist responsive. wechsle hier zwischen der Desktop oder
          Mobile Ansicht:
        </p>
        <Switch isMobile={isMobile} onSwitch={handleToggle} />
      </div>
      <div className="flex justify-between items-center">
        <h1>{project.title}</h1>
        <a className="text-2xl border-b" href={project.liveUrl}>
          zur Website
        </a>
      </div>
      <div className="flex flex-col gap-10">
        {(isMobile ? mobile : desktop).images.map((img) => (
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className={`relative w-[95%] ${!isMobile ? "md:max-w-190" : "md:max-w-110"} md:w-[50%] shrink-0`}>
              <img className="rounded-xl w-full" src={img.src.src} />
              {img.highlights &&
                img.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="absolute flex items-center gap-1"
                    style={{ left: `${h.x}%`, top: `${h.y}%` }}
                  >
                    <span className="text-gw-accent text-2xl animate-pulse">
                      ▼
                    </span>
                    <span className="text-gw-accent text-sm bg-gw-bg-card px-2 py-1 rounded">
                      {h.label}
                    </span>
                  </div>
                ))}
            </div>
            <ul className="flex flex-col justify-center gap-7 p-5 border rounded-2xl border-dotted">
              {img.description.map((text, i) => (
                <li
                  className="text-[clamp(0.9rem,2vw,1.2rem)] text-gw-text"
                  key={i}
                >
                  {text}
                </li>
              ))}
            </ul>
            <hr className="md:hidden" />
          </div>
        ))}
      </div>
    </>
  );
}
