"use client";

import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1];

  function getLocalizedPath(locale: Locale) {
    const segments = pathname.split("/");

    if (locales.some((item) => item === segments[1])) {
      segments[1] = locale;
      return segments.join("/");
    }

    return `/${locale}`;
  }

  function handleLanguageChange(
    event: React.MouseEvent<HTMLAnchorElement>,
    locale: Locale,
  ) {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    if (locale === currentLocale) {
      event.preventDefault();
      return;
    }

    const targetUrl = getLocalizedPath(locale);

    sessionStorage.setItem(
      "portfolio-language-scroll",
      JSON.stringify({
        path: targetUrl,
        scrollY: window.scrollY,
      }),
    );
  }

  return (
    <nav
      aria-label="Seleccionar idioma"
      className="flex items-center gap-1 rounded-lg border border-border bg-muted/50 p-1"
    >
      {locales.map((locale) => {
        const isActive = currentLocale === locale;

        return (
          <a
            key={locale}
            href={getLocalizedPath(locale)}
            hrefLang={locale}
            lang={locale}
            aria-current={isActive ? "page" : undefined}
            onClick={(event) => handleLanguageChange(event, locale)}
            className={`rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors ${
              isActive
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {locale.toUpperCase()}
          </a>
        );
      })}
    </nav>
  );
}
