const tools = [
  {
    name: "Word Counter",
    description: "Count words, characters, and sentences instantly.",
    link: "/tools/word-counter",
  },
  {
    name: "Character Counter",
    description: "Count characters instantly with or without spaces.",
    link: "/tools/character-counter",
  },
];

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Hero */}
      <h1 className="text-4xl font-bold mb-4">
        Simple Tools. Instant Results.
      </h1>

      <p className="text-gray-600 mb-8">
        Toolzmint offers fast, free, and easy-to-use tools for everyday tasks.
      </p>

      {/* Featured Tools */}
      <h2 className="text-2xl font-semibold mb-4">Featured Tools</h2>

      <div className="grid gap-4 sm:grid-cols-2 mb-10">
        {tools?.map((tool, index) => (
          <a
            key={index}
            href={tool?.link}
            className="p-4 border rounded-lg hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold">{tool?.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{tool?.description}</p>
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="/tools"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg"
      >
        Explore All Tools
      </a>

      {/* SEO Content */}
      <div className="mt-12 space-y-4 text-gray-700">
        <h2 className="text-xl font-semibold">What is Toolzmint?</h2>
        <p>
          Toolzmint is a collection of free online tools designed to help you
          complete everyday tasks quickly and efficiently. From text processing
          to simple calculations, everything is built for speed and ease of use.
        </p>

        <h2 className="text-xl font-semibold">Why use online tools?</h2>
        <p>
          Online tools save time by providing instant results without requiring
          downloads or installations. They are accessible from anywhere and help
          improve productivity.
        </p>
      </div>
    </div>
  );
};

export default Home;
