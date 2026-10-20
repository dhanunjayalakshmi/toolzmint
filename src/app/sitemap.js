import { tools } from "@/lib/toolsConfig";
import { blogPosts } from "@/lib/blogPosts";

// Bump these when the content actually changes. Google ignores lastmod
// values that change on every build.
const PAGES_UPDATED_AT = "2026-07-11";
const TOOLS_UPDATED_AT = "2026-07-10";

const toDate = (day) => new Date(day + "T00:00:00Z");

const sitemap = () => {
  const baseUrl = "https://toolzmint.com";
  const latestPost = blogPosts
    .map((post) => post.publishedAt)
    .sort()
    .at(-1);

  const staticPages = [
    { path: "",               priority: 1.0, freq: "weekly",  updatedAt: TOOLS_UPDATED_AT },
    { path: "/tools",         priority: 0.9, freq: "weekly",  updatedAt: TOOLS_UPDATED_AT },
    { path: "/blog",          priority: 0.7, freq: "weekly",  updatedAt: latestPost       },
    { path: "/about",         priority: 0.3, freq: "yearly",  updatedAt: PAGES_UPDATED_AT },
    { path: "/contact",       priority: 0.3, freq: "yearly",  updatedAt: PAGES_UPDATED_AT },
    { path: "/privacy-policy",priority: 0.2, freq: "yearly",  updatedAt: PAGES_UPDATED_AT },
    { path: "/terms",         priority: 0.2, freq: "yearly",  updatedAt: PAGES_UPDATED_AT },
  ].map(({ path, priority, freq, updatedAt }) => ({
    url: `${baseUrl}${path}`,
    lastModified: toDate(updatedAt),
    changeFrequency: freq,
    priority,
  }));

  const toolPages = tools?.map((tool) => ({
    url: `${baseUrl}/tools/${tool?.slug}`,
    lastModified: toDate(tool?.updatedAt || TOOLS_UPDATED_AT),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: toDate(post.updatedAt || post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...toolPages, ...blogPages];
};

export default sitemap;
