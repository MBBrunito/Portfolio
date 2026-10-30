import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";

type HeroProps = {
  dictionary: Dictionary;
};

export function Hero({ dictionary }: HeroProps) {
  const { hero } = dictionary;

  return (
    <section
      id="inicio"
      className="relative flex min-h-[85svh] items-center overflow-hidden bg-brand-navy text-brand-light"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(51,141,202,0.16),transparent_55%)]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24 md:px-10">
        <div className="max-w-4xl space-y-7">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-sky">
            {hero.eyebrow}
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {hero.title}{" "}
            <span className="text-brand-sky">{hero.titleHighlight}</span>{" "}
            {hero.titleEnd}
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
            {hero.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-3">
            <a
              href="#proyectos"
              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-[#256A9A] px-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1D567D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-sky"
            >
              {hero.projectsButton}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>

            <a
              href="#contacto"
              className="inline-flex h-9 items-center justify-center rounded-lg border border-white/25 bg-transparent px-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-sky"
            >
              {hero.contactButton}
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-6 flex items-center gap-2 text-sm text-slate-400 md:left-10">
          <ArrowDown className="size-4" />
          {hero.scrollText}
        </div>
      </div>
    </section>
  );
}
