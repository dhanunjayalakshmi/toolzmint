import useTransformer from "@/app/hooks/useTransformer";
import ToolActions from "./ToolActions";
import ToolTextarea from "./ToolTextarea";

const TransformerTool = ({ transformFn }) => {
  const { input, setInput, output, handleClear, handleCopy, hasOutput } =
    useTransformer(transformFn);

  return (
    <div className="w-full space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ToolTextarea
          label="Input"
          value={input}
          onChange={setInput}
          placeholder="Type or paste your text here..."
        />

        <ToolTextarea
          label="Output"
          value={output}
          readOnly
          placeholder="Output..."
        />
      </div>

      <ToolActions
        onClear={handleClear}
        onCopy={handleCopy}
        disableCopy={!hasOutput}
      />
    </div>
  );
};

export default TransformerTool;
