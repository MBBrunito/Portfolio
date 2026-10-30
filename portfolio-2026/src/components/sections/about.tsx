import { MonitorCog, Globe2, ShieldCheck } from "lucide-react";

import type { Dictionary } from "@/i18n/get-dictionary";

type AboutProps = {
  dictionary: Dictionary;
};

const icons = [MonitorCog, Globe2, ShieldCheck];

export function About({ dictionary }: AboutProps) {
  const { about } = dictionary;

  return (
    <section
      id="sobre-mi"
      className="scroll-mt-20 bg-background py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div className="space-y-7">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
            {about.eyebrow}
          </p>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {about.title}
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground">
            {about.description}
          </p>

          <p className="leading-relaxed text-muted-foreground">
            {about.descriptionSecondary}
          </p>
        </div>

        <div className="grid gap-4">
          {about.highlights.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={item.title}
                className="flex items-start gap-5 rounded-xl border border-border bg-card p-6 transition-colors hover:border-brand-blue/40"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                  <Icon className="size-6" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
