import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { HeroNetwork } from "@/components/visuals/hero-network";

type HeroProps = {
  dictionary: Dictionary;
};

export function Hero({ dictionary }: HeroProps) {
  const { hero } = dictionary;

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[85svh] items-center overflow-hidden bg-brand-navy text-brand-light"
    >
      <HeroNetwork />
      {/* Fondo tecnológico */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Cuadrícula */}
        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(138,201,235,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(138,201,235,0.16) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 75%, transparent)",
          }}
        />

        {/* Luz azul superior */}
        <div className="hero-glow-one absolute right-[-10%] top-[5%] h-[450px] w-[450px] rounded-full bg-[#338DCA]/35 blur-[85px] md:h-[650px] md:w-[650px]" />

        {/* Luz azul inferior */}
        <div className="hero-glow-two absolute bottom-[-25%] left-[-10%] h-[400px] w-[400px] rounded-full bg-[#256A9A]/30 blur-[90px] md:h-[550px] md:w-[550px]" />
        {/* Línea luminosa decorativa
        <div className="hero-light-line absolute right-[15%] top-0 hidden h-full w-px bg-linear-to-b from-transparent via-brand-sky/20 to-transparent lg:block" /> */}

        {/* Degradado para mantener la legibilidad */}
        <div className="absolute inset-0 bg-linear-to-r from-brand-navy/50 via-transparent to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 md:px-10">
        <div className="max-w-4xl space-y-7">
          <p className="hero-reveal hero-delay-1 text-sm font-semibold uppercase tracking-[0.2em] text-brand-sky">
            {hero.eyebrow}
          </p>

          <h1 className="hero-reveal hero-delay-2 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {hero.title}{" "}
            <span className="text-brand-sky">{hero.titleHighlight}</span>{" "}
            {hero.titleEnd}
          </h1>

          <p className="hero-reveal hero-delay-3 max-w-2xl text-lg leading-relaxed text-slate-300">
            {hero.description}
          </p>

          <div className="hero-reveal hero-delay-4 flex flex-wrap gap-4 pt-3">
            <a
              href="#proyectos"
              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-[#256A9A] px-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1D567D] hover:shadow-[0_8px_28px_rgba(51,141,202,0.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-sky"
            >
              {hero.projectsButton}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>

            <a
              href="#contacto"
              className="inline-flex h-9 items-center justify-center rounded-lg border border-white/25 bg-transparent px-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-sky/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-sky"
            >
              {hero.contactButton}
            </a>
          </div>
        </div>

        {/* Indicador de desplazamiento */}
        <div className="hero-reveal hero-delay-5 absolute bottom-8 left-6 flex items-center gap-2 text-sm text-slate-400 md:left-10">
          <ArrowDown className="hero-scroll-arrow size-4" aria-hidden="true" />
          {hero.scrollText}
        </div>
      </div>
    </section>
  );
}
