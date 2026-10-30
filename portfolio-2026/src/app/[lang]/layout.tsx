import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { PersonSchema } from "@/components/seo/person-schema";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/layout/header";
import { isValidLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Footer } from "@/components/layout/footer";
import { ScrollRestorer } from "@/components/layout/scroll-restorer";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://brunito.vercel.app";

const seo = {
  es: {
    title: "Marcos Bruno Barrancos | Especialista IT y Operaciones Web",
    description:
      "Especialista en sistemas, WordPress, SEO técnico, QA, infraestructura web y desarrollo de soluciones digitales.",
  },
  en: {
    title: "Marcos Bruno Barrancos | IT Systems & Web Operations",
    description:
      "IT Systems & Web Operations Specialist focused on WordPress, technical SEO, website QA, web infrastructure, and digital solutions.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    return {};
  }

  const content = seo[lang];

  return {
    metadataBase: new URL(siteUrl),
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        es: "/es",
        en: "/en",
        "x-default": "/es",
      },
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `/${lang}`,
      siteName: "Marcos Bruno Barrancos",
      locale: lang === "es" ? "es_AR" : "en_US",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Marcos Bruno Barrancos - IT Systems & Web Operations Specialist",
        },
      ],
    },
  };
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

type LocalizedLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
};

export default async function LocalizedLayout({
  children,
  params,
}: LocalizedLayoutProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const dictionary = await getDictionary(lang);

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PersonSchema lang={lang} />
          <ScrollRestorer />

          <Header dictionary={dictionary} />

          {children}

          <Footer lang={lang} />
        </ThemeProvider>
      </body>
    </html>
  );
}
