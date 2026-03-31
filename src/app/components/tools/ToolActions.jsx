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
          className="rounded-full border-0 bg-muted shadow-sm cursor-pointer transition-all hover:bg-muted/80 hover:shadow-md active:scale-95"
        >
          Clear
        </Button>

        <Button
          size="sm"
          onClick={onCopy}
          disabled={disableCopy}
          className="rounded-full shadow-sm cursor-pointer transition-all hover:shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {copied ? "copied" : "copy"}
        </Button>
      </div>
    </div>
  );
};

export default ToolActions;
