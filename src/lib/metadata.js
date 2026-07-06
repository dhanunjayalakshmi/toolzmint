const BASE_URL = "https://toolzmint.com";

export const getMetadata = ({ title, description, path }) => {
  const ogImageUrl = `${BASE_URL}/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;

  return {
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
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
};

export const getToolMetadata = (tool) =>
  getMetadata({
    title: tool?.metaTitle,
    description: tool?.metaDescription,
    path: `/tools/${tool?.slug}`,
  });
