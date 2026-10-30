import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import type { Locale } from "@/i18n/config";

type FooterProps = {
  lang: Locale;
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mbbrunito/",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/MBBrunito",
    icon: FaGithub,
  },
];

export function Footer({ lang }: FooterProps) {
  const year = new Date().getFullYear();

  const description =
    lang === "es"
      ? "IT Systems & Web Operations Specialist"
      : "IT Systems & Web Operations Specialist";

  const rights =
    lang === "es" ? "Todos los derechos reservados." : "All rights reserved.";

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="font-semibold tracking-tight text-foreground">
              Marcos Bruno Barrancos
            </p>

            <p className="text-sm text-muted-foreground">{description}</p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="flex size-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand-blue hover:text-brand-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                >
                  <Icon className="size-5" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            © {year} Marcos Bruno Barrancos. {rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
