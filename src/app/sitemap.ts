import type { MetadataRoute } from "next";

const siteUrl = "https://www.buildrightconstructionllc.com";
const routes = ["", "/about", "/services", "/projects", "/reviews", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
