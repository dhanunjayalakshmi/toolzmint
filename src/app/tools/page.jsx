import { tools } from "@/lib/toolsConfig";

const Page = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">All Tools</h1>

      <div className="grid gap-4 sm:grid-cols-2">
        {tools?.map((tool) => (
          <a
            key={tool?.slug}
            href={`/tools/${tool?.slug}`}
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

export default Page;
