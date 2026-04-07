const robots = () => {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    host: "https://toolzmint.com",
    sitemap: "https://toolzmint.com/sitemap.xml",
  };
};

export default robots;
