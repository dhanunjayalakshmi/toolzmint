const BASE_URL = "https://toolzmint.com";

export const getMetadata = ({ title, description, path }) => ({
  title,
  description,
  alternates: {
    canonical: path,
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: `${BASE_URL}${path}`,
    siteName: "Toolzmint",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
});

export const getToolMetadata = (tool) =>
  getMetadata({
    title: tool?.metaTitle,
    description: tool?.metaDescription,
    path: `/tools/${tool?.slug}`,
  });
