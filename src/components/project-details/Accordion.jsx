import { useState } from "react";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="flex flex-col gap-2 w-full">
      {items.description.map((item, i) => (
        <div className="px-5">
          <div
            key={i}
            className="border-2 border-gw-accent-muted rounded-lg overflow-hidden mt-5"
          >
            <button
              className="w-full cursor-pointer text-left px-4 py-4 flex justify-between items-center bg-gw-bg-card text-gw-text hover:bg-gw-bg-elevated transition-colors"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="text-2xl text-gw-accent">{item.title}</span>
              <span
                className={`text-xl text-gw-accent transition-transform ${openIndex === i ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>
            {openIndex === i && (
              <div className="text-lg  shadow-2xl p-4 text-gw-text-mute border-t-2 bg-gw-bg-card border-dotted border-gw-accent-muted">
                {item.text}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
