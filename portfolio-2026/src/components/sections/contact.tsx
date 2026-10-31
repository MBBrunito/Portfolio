import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import type { Dictionary } from "@/i18n/get-dictionary";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

type ContactProps = {
  dictionary: Dictionary;
};

const email = "MarcosBrunoDev@gmail.com";

export function Contact({ dictionary }: ContactProps) {
  const { contact } = dictionary;

  return (
    <section
      id="contacto"
      className="relative isolate scroll-mt-20 overflow-hidden bg-brand-navy py-24 text-brand-light md:py-32"
    >
      {/* Iluminación decorativa */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-40 -right-32 h-[450px] w-[450px] rounded-full bg-brand-blue/15 blur-[110px]" />
        <div className="absolute -left-40 top-0 h-[350px] w-[350px] rounded-full bg-[#256A9A]/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl">
          {/* Encabezado */}
          <ScrollReveal>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-brand-sky">
              {contact.eyebrow}
            </p>

            <h2 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {contact.title}
            </h2>

            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-brand-light/75">
              {contact.description}
            </p>
          </ScrollReveal>

          {/* Botón principal */}
          <ScrollReveal delay={180}>
            <a
              href={`mailto:${email}`}
              className="group inline-flex items-center justify-center gap-3 rounded-lg bg-[#256A9A] px-6 py-3 font-medium text-white transition-[background-color,color,box-shadow,transform] duration-300 hover:bg-brand-sky hover:text-brand-navy hover:shadow-lg hover:shadow-brand-blue/20 motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-sky"
            >
              <Mail className="size-5" aria-hidden="true" />
              {contact.emailButton}
              <ArrowUpRight
                className="size-4 transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </ScrollReveal>

          {/* Información de contacto */}
          <ScrollReveal delay={300}>
            <div className="mt-12 border-t border-white/15 pt-8">
              <p className="mb-2 text-sm text-brand-light/60">Email</p>

              <a
                href={`mailto:${email}`}
                className="text-base text-brand-light transition-colors duration-300 hover:text-brand-sky focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-sky"
              >
                {email}
              </a>

              {/* Redes sociales */}
              <div className="mt-8">
                <p className="mb-4 text-sm text-brand-light/60">
                  {contact.socialTitle}
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.linkedin.com/in/mbbrunito/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-sm text-brand-light transition-colors duration-300 hover:text-brand-sky focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-sky"
                  >
                    <FaLinkedinIn
                      className="size-5 transition-transform duration-300 motion-safe:group-hover:scale-110"
                      aria-hidden="true"
                    />
                    LinkedIn
                  </a>

                  <a
                    href="https://github.com/MBBrunito"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-sm text-brand-light transition-colors duration-300 hover:text-brand-sky focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-sky"
                  >
                    <FaGithub
                      className="size-5 transition-transform duration-300 motion-safe:group-hover:scale-110"
                      aria-hidden="true"
                    />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
