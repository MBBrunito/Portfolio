import type { MetadataRoute } from "next";

const baseUrl = "https://brunito.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/es`,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          en: `${baseUrl}/en`,
          "x-default": `${baseUrl}/es`,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          en: `${baseUrl}/en`,
          "x-default": `${baseUrl}/es`,
        },
      },
    },
  ];
}
