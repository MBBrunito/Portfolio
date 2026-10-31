import type { Locale } from "@/i18n/config";

type PersonSchemaProps = {
  lang: Locale;
};

const siteUrl = "https://brunito.vercel.app";

export function PersonSchema({ lang }: PersonSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Marcos Bruno Barrancos",
    url: `${siteUrl}/${lang}`,
    email: "mailto:MarcosBrunoDev@gmail.com",
    jobTitle: "IT Systems & Web Operations Specialist",
    description:
      lang === "es"
        ? "Especialista en sistemas, operaciones web, WordPress, SEO técnico, QA e infraestructura web."
        : "IT Systems & Web Operations Specialist focused on WordPress, technical SEO, website QA, and web infrastructure.",
    knowsAbout: [
      "IT Systems",
      "Web Operations",
      "WordPress",
      "Technical SEO",
      "Website Quality Assurance",
      "Web Infrastructure",
      "Next.js",
      "React",
      "Web Security",
    ],
    sameAs: [
      "https://www.linkedin.com/in/mbbrunito/",
      "https://github.com/MBBrunito",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
