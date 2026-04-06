import useTransformer from "@/app/hooks/useTransformer";
import ToolActions from "./ToolActions";
import ToolTextarea from "./ToolTextarea";

const TransformerTool = ({
  transformFn,
  inputLabel = "Input",
  outputLabel = "Output",
  inputPlaceholder = "Type or paste your text here...",
  outputPlaceholder = "Output will appear here...",
  helperText = "Changes update instantly as you type.",
}) => {
  const {
    input,
    setInput,
    output,
    handleClear,
    handleCopy,
    hasOutput,
    copied,
  } = useTransformer(transformFn);

  return (
    <div className="w-full space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <ToolTextarea
          label={inputLabel}
          value={input}
          onChange={setInput}
          placeholder={inputPlaceholder}
        />

        <ToolTextarea
          label={outputLabel}
          value={output}
          readOnly
          placeholder={outputPlaceholder}
        />
      </div>

      <p className="text-sm text-muted-foreground">{helperText}</p>

      <ToolActions
        onClear={handleClear}
        onCopy={handleCopy}
        disableCopy={!hasOutput}
        copied={copied}
      />
    </div>
  );
};

export default TransformerTool;
