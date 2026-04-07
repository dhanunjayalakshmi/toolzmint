import { tools } from "@/lib/toolsConfig";

const sitemap = () => {
  const baseUrl = "https://toolzmint.com";
  const staticPages = [
    "",
    "/tools",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const toolPages = tools?.map((tool) => ({
    url: `${baseUrl}/tools/${tool?.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...toolPages];
};

export default sitemap;
