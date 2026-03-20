import { tools } from "@/lib/toolsConfig";

const sitemap = () => {
  const baseUrl = "https://toolzmint.com";

  const toolPages = tools?.map((tool) => ({
    url: `${baseUrl}/tools/${tool?.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
    },
    ...toolPages,
  ];
};

export default sitemap;
