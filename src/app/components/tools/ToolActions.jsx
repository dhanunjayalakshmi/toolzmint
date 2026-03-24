import { Button } from "@/components/ui/button";

const ToolActions = ({ onClear, onCopy, disableCopy }) => {
  return (
    <div className="w-full flex justify-between items-center">
      <p className="text-xs text-muted-foreground">Changes update instantly</p>

      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onClear}
          className="rounded-lg cursor-pointer"
        >
          Clear
        </Button>

        <Button
          size="sm"
          onClick={onCopy}
          disabled={disableCopy}
          className="rounded-lg shadow-sm cursor-pointer"
        >
          Copy
        </Button>
      </div>
    </div>
  );
};

export default ToolActions;
