"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "portfolio-language-scroll";

export function ScrollRestorer() {
  const pathname = usePathname();

  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);

    if (!saved) return;

    sessionStorage.removeItem(STORAGE_KEY);

    try {
      const { path, scrollY } = JSON.parse(saved);

      if (path !== pathname || typeof scrollY !== "number") {
        return;
      }

      requestAnimationFrame(() => {
        window.scrollTo({
          top: scrollY,
          behavior: "instant",
        });
      });
    } catch {
      // Ignorar datos inválidos.
    }
  }, [pathname]);

  return null;
}
