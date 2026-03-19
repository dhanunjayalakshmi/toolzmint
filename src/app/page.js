const Home = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">
        Simple Tools. Instant Results.
      </h1>

      <p className="text-gray-600 mb-6">
        Toolzmint provides fast, free, and easy-to-use tools for everyday tasks.
      </p>

      <a
        href="/tools/word-counter"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg"
      >
        Try Word Counter
      </a>
    </div>
  );
};

export default Home;
