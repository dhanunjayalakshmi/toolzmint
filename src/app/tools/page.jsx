const tools = [
  {
    name: "Word Counter",
    description: "Count words, characters, and sentences instantly.",
    link: "/tools/word-counter",
  },
];

const ToolsPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">All Tools</h1>

      <div className="grid gap-4 sm:grid-cols-2">
        {tools.map((tool, index) => (
          <a
            key={index}
            href={tool?.link}
            className="p-4 border rounded-lg hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold">{tool?.name}</h2>
            <p className="text-sm text-gray-500 mt-1">{tool?.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;
