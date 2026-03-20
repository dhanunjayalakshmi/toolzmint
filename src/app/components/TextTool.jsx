"use client";

const TextTool = ({
  text,
  setText,
  placeholder = "Type or paste your text...",
  children,
}) => {
  return (
    <div>
      <textarea
        className="w-full h-40 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="mt-3">{children}</div>
    </div>
  );
};

export default TextTool;
