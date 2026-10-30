import { notFound } from "next/navigation";

import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { isValidLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type PageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LocalizedHome({ params }: PageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const dictionary = await getDictionary(lang);

  return (
    <main className="min-h-screen">
      <Hero dictionary={dictionary} />
      <About dictionary={dictionary} />
      <Experience dictionary={dictionary} />
      <Projects dictionary={dictionary} />
      <Contact dictionary={dictionary} />
    </main>
  );
}
