"use client";

import { useState, useEffect } from "react";

interface Section {
  id: string;
  label: string;
}

export default function NavDots({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      const midY = window.scrollY + window.innerHeight * 0.45;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= midY && el.offsetTop + el.offsetHeight > midY) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav
      aria-label="Page sections"
      className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-[10px] hidden md:flex"
    >
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          title={label}
          aria-label={`Go to ${label}`}
          className={`group relative flex items-center justify-end transition-all duration-300 ${
            active === id ? "scale-110" : "hover:scale-105"
          }`}
        >
          {/* Tooltip */}
          <span className="absolute right-6 bg-slate-800 text-emerald-400 text-xs font-medium px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-emerald-900/60">
            {label}
          </span>
          {/* Dot */}
          <span
            className={`block rounded-full border-2 transition-all duration-300 ${
              active === id
                ? "w-3 h-3 bg-emerald-400 border-emerald-400"
                : "w-2.5 h-2.5 bg-transparent border-emerald-700 group-hover:border-emerald-400"
            }`}
          />
        </button>
      ))}
    </nav>
  );
}
