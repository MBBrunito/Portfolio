import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import type { Dictionary } from "@/i18n/get-dictionary";

type ContactProps = {
  dictionary: Dictionary;
};

const email = "MarcosBrunoDev@gmail.com";

export function Contact({ dictionary }: ContactProps) {
  const { contact } = dictionary;

  return (
    <section
      id="contacto"
      className="scroll-mt-20 bg-brand-navy py-24 text-brand-light md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-brand-sky">
            {contact.eyebrow}
          </p>

          <h2 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {contact.title}
          </h2>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-brand-light/75">
            {contact.description}
          </p>

          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#256A9A] px-6 py-3 font-medium text-white transition-colors hover:bg-brand-sky hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-sky"
          >
            <Mail className="size-5" aria-hidden="true" />
            {contact.emailButton}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>

          <div className="mt-12 border-t border-white/15 pt-8">
            <p className="mb-2 text-sm text-brand-light/60">Email</p>

            <a
              href={`mailto:${email}`}
              className="text-base text-brand-light transition-colors hover:text-brand-sky"
            >
              {email}
            </a>

            <div className="mt-8">
              <p className="mb-4 text-sm text-brand-light/60">
                {contact.socialTitle}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/mbbrunito/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-light transition-colors hover:text-brand-sky"
                >
                  <FaLinkedinIn className="size-5" aria-hidden="true" />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/MBBrunito"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-light transition-colors hover:text-brand-sky"
                >
                  <FaGithub className="size-5" aria-hidden="true" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
