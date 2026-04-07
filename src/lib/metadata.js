export const getMetadata = ({ title, description, path }) => ({
  title,
  description,
  alternates: {
    canonical: path,
  },
});

export const getToolMetadata = (tool) =>
  getMetadata({
    title: tool?.metaTitle,
    description: tool?.metaDescription,
    path: `/tools/${tool?.slug}`,
  });
