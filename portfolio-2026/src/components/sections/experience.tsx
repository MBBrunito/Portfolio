import type { Dictionary } from "@/i18n/get-dictionary";

type ExperienceProps = {
  dictionary: Dictionary;
};

export function Experience({ dictionary }: ExperienceProps) {
  const { experience } = dictionary;

  return (
    <section
      id="experiencia"
      className="scroll-mt-20 bg-muted/30 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
            {experience.eyebrow}
          </p>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {experience.title}
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground">
            {experience.description}
          </p>
        </div>

        <div className="relative ml-3 border-l-2 border-brand-blue/25 md:ml-6">
          {experience.stages.map((stage, index) => (
            <div
              key={stage.period}
              className={`relative pl-8 md:pl-12 ${
                index !== experience.stages.length - 1 ? "pb-8 md:pb-10" : ""
              }`}
            >
              <div className="absolute -left-2.25 top-2 flex size-4 items-center justify-center rounded-full border-4 border-background bg-brand-blue ring-4 ring-brand-blue/15" />

              <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
                <p className="mb-3 text-sm font-semibold tracking-wide text-brand-blue">
                  {stage.period}
                </p>

                <h3 className="mb-4 text-xl font-semibold tracking-tight text-card-foreground md:text-2xl">
                  {stage.title}
                </h3>

                <p className="mb-6 max-w-3xl leading-relaxed text-muted-foreground">
                  {stage.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {stage.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
