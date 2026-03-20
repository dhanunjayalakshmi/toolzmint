import { tools } from "@/lib/toolsConfig";

const ToolLayout = ({ title, description, children }) => {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">{title}</h1>

      {/* Short Description */}
      <p className="text-gray-500 mb-6">{description}</p>

      {/* Tool UI */}
      <div className="mb-10">{children}</div>

      {/* SEO Content */}
      <div className="space-y-4 text-gray-700">
        <h2 className="text-lg font-semibold mb-2">About this tool</h2>

        <p>
          {description}. This tool helps you easily process your text online
          without installing any software. It works directly in your browser and
          provides instant results.
        </p>

        <h2 className="text-lg font-semibold mt-4 mb-2">How to use</h2>

        <ul className="list-disc ml-5">
          <li>Enter your text</li>
          <li>View the result instantly</li>
          <li>Copy output if needed</li>
        </ul>
      </div>

      {/* Related Tools */}
      <div className="space-y-4 text-gray-700">
        <h2 className="text-xl font-semibold mb-4">Related Tools</h2>

        <div className="grid gap-3 sm:grid-cols-2">
          {tools
            ?.filter((t) => t.name !== title)
            ?.map((tool) => (
              <a
                key={tool?.slug}
                href={`/tools/${tool?.slug}`}
                className="p-3 border rounded-lg hover:bg-blue-50"
              >
                {tool?.name}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ToolLayout;
