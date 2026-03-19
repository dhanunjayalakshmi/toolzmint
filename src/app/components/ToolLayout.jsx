const ToolLayout = ({ title, description, children }) => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">{title}</h1>

      {/* Short Description */}
      <p className="text-gray-500 mb-6">{description}</p>

      {/* Tool UI */}
      <div className="mb-10">{children}</div>

      {/* SEO Content */}
      <div className="space-y-4 text-gray-700">
        <h2 className="text-xl font-semibold">What is this tool?</h2>
        <p>
          This tool helps you quickly analyze your text by counting words,
          characters, and sentences instantly.
        </p>

        <h2 className="text-xl font-semibold">How to use this tool?</h2>
        <p>
          Simply type or paste your text into the input box. The tool will
          automatically calculate and display the results in real time.
        </p>
      </div>
    </div>
  );
};

export default ToolLayout;
