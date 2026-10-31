import Image from "next/image";
import { ArrowUpRight, FolderCode } from "lucide-react";

import type { Dictionary } from "@/i18n/get-dictionary";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

type ProjectsProps = {
  dictionary: Dictionary;
};

const projectImages: Record<string, { src: string; alt: string }> = {
  "gtr-autosale": {
    src: "https://res.cloudinary.com/wgutuufv/image/upload/v1793332363/2026-10-30_004707_MARCOSBRUNODEV.jpg",
    alt: "Página principal de GTR Autosale",
  },
  mentalis: {
    src: "https://res.cloudinary.com/wgutuufv/image/upload/v1793332996/2026-10-30_010111_MARCOSBRUNODEV.jpg",
    alt: "Página principal de Mentalis",
  },
  "tecno-las-tipas": {
    src: "https://res.cloudinary.com/wgutuufv/image/upload/v1793333192/2026-10-30_010519_MARCOSBRUNODEV.jpg",
    alt: "Página principal de Tecno Las Tipas",
  },
  "deep-angle-studio": {
    src: "https://res.cloudinary.com/wgutuufv/image/upload/v1793333383/2026-10-30_010813_MARCOSBRUNODEV.jpg",
    alt: "Página principal de Deep Angle Studio",
  },
};

const projectLinks: Record<string, string> = {
  "gtr-autosale": "https://gtrautosale.com/",
  "tecno-las-tipas": "https://www.tecnolastipas.com.ar/",
  "deep-angle-studio": "https://deepanglestudio.com/",
};

export function Projects({ dictionary }: ProjectsProps) {
  const { projects } = dictionary;

  return (
    <section
      id="proyectos"
      className="scroll-mt-20 bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* Encabezado animado */}
        <ScrollReveal className="mb-14 max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
            {projects.eyebrow}
          </p>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {projects.title}
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground">
            {projects.description}
          </p>
        </ScrollReveal>

        {/* Cuadrícula de proyectos */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.items.map((project, index) => {
            const image = projectImages[project.slug];
            const url = projectLinks[project.slug];
            const isMaintenance = project.slug === "mentalis";

            return (
              <ScrollReveal
                key={project.slug}
                delay={(index % 2) * 180}
                className="h-full"
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-[border-color,box-shadow,transform] duration-300 motion-safe:hover:-translate-y-1 hover:border-brand-blue/50 hover:shadow-xl hover:shadow-brand-blue/10">
                  {/* Imagen */}
                  <div className="relative flex aspect-video items-center justify-center overflow-hidden border-b border-border bg-muted/50">
                    {image ? (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.06]"
                      />
                    ) : (
                      <FolderCode
                        className="size-12 text-brand-blue/50"
                        strokeWidth={1.25}
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {/* Información */}
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-blue">
                      {project.category}
                    </p>

                    <div className="mb-4 flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold tracking-tight text-card-foreground md:text-2xl">
                        {project.title}
                      </h3>

                      {url && (
                        <ArrowUpRight
                          className="size-5 shrink-0 text-muted-foreground transition-[color,transform] duration-300 group-hover:text-brand-blue motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    <p className="mb-6 flex-1 leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Tecnologías */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* Enlace o estado */}
                    <div className="mt-auto border-t border-border pt-5">
                      {url ? (
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-foreground underline-offset-4 transition-colors hover:text-brand-blue hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
                        >
                          {projects.viewProject}
                          <ArrowUpRight className="size-4" aria-hidden="true" />
                        </a>
                      ) : isMaintenance ? (
                        <span className="text-sm font-medium text-muted-foreground">
                          {projects.underMaintenance}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
