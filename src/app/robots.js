const robots = () => {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://toolzmint.com/sitemap.xml",
  };
};

export default robots;
