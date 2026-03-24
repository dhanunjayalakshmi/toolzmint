export const metadata = {
  title: "About Toolzmint",
  description:
    "Learn about Toolzmint - a free online platform offering fast and simple utility tools.",
};

const AboutPage = () => {
  return (
    <div className="w-full max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">About Toolzmint</h1>

      <p className="mb-4">
        Toolzmint is a free collection of simple and powerful online tools
        designed to help developers, writers, and everyday users solve common
        problems quickly.
      </p>

      <p className="mb-4">
        Our goal is to provide fast, clean, and easy-to-use tools without
        unnecessary complexity or distractions.
      </p>

      <p className="mb-4">
        We focus on performance, usability, and accessibility — all tools are
        optimized to work directly in your browser.
      </p>

      <p>
        We are continuously adding new tools to make Toolzmint your go-to
        productivity platform.
      </p>
    </div>
  );
};

export default AboutPage;
