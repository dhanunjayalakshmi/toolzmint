import { Button } from "@/components/ui/button";

const ToolActions = ({ onClear, onCopy, disableCopy, copied }) => {
  return (
    <div className="w-full flex justify-between items-center">
      <p className="text-xs text-muted-foreground">Changes update instantly</p>

      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onClear}
          className="rounded-lg cursor-pointer shadow-sm active:scale-95 transition"
        >
          Clear
        </Button>

        <Button
          size="sm"
          onClick={onCopy}
          disabled={disableCopy}
          className="rounded-lg shadow-sm cursor-pointer active:scale-95 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {copied ? "copied" : "copy"}
        </Button>
      </div>
    </div>
  );
};

export default ToolActions;
