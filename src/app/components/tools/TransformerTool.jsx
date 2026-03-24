import useTransformer from "@/app/hooks/useTransformer";
import ToolActions from "./ToolActions";
import ToolTextarea from "./ToolTextarea";

const TransformerTool = ({ transformFn }) => {
  const { input, setInput, output, handleClear, handleCopy } =
    useTransformer(transformFn);

  return (
    <>
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

      <ToolActions
        onClear={handleClear}
        onCopy={handleCopy}
        disableCopy={!output}
      />
    </>
  );
};

export default TransformerTool;
