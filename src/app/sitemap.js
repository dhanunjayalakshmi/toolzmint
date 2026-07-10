import { tools } from "@/lib/toolsConfig";

const sitemap = () => {
  const baseUrl = "https://toolzmint.com";
  const now = new Date();

  const staticPages = [
    { path: "",               priority: 1.0, freq: "weekly"  },
    { path: "/tools",         priority: 0.9, freq: "weekly"  },
    { path: "/about",         priority: 0.3, freq: "yearly"  },
    { path: "/contact",       priority: 0.3, freq: "yearly"  },
    { path: "/privacy-policy",priority: 0.2, freq: "yearly"  },
    { path: "/terms",         priority: 0.2, freq: "yearly"  },
  ].map(({ path, priority, freq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  }));

  const toolPages = tools?.map((tool) => ({
    url: `${baseUrl}/tools/${tool?.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...toolPages];
};

export default sitemap;
