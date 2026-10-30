import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";
import type { Dictionary } from "@/i18n/get-dictionary";

type HeaderProps = {
  dictionary: Dictionary;
};

export function Header({ dictionary }: HeaderProps) {
  const navigation = [
    { label: dictionary.navigation.home, href: "#inicio" },
    { label: dictionary.navigation.about, href: "#sobre-mi" },
    { label: dictionary.navigation.experience, href: "#experiencia" },
    { label: dictionary.navigation.projects, href: "#proyectos" },
    { label: dictionary.navigation.contact, href: "#contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-6 md:px-10">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-foreground"
        >
          Marcos Bruno Barrancos
        </Link>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-6 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-brand-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />

          <div className="lg:hidden">
            <MobileNav dictionary={dictionary} />
          </div>
        </div>
      </div>
    </header>
  );
}
