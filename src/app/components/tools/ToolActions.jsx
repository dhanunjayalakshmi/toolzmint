import { Button } from "@/components/ui/button";

const ToolActions = ({ onClear, onCopy, disableCopy }) => {
  return (
    <div className="flex justify-between items-center w-full">
      <p className="text-xs text-muted-foreground">Changes update instantly</p>

      <div className="flex gap-2">
        <Button variant="outline" size="sm" onClick={onClear}>
          Clear
        </Button>

        <Button size="sm" onClick={onCopy} disabled={disableCopy}>
          Copy
        </Button>
      </div>
    </div>
  );
};

export default ToolActions;
