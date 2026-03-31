import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  CHARACTER_OPTION_KEYS,
  MODE_PASSWORD,
  OPTION_LABELS,
} from "./passwordGeneratorConfig";

const PasswordGeneratorOptions = ({
  enabledCharacterSets,
  mode,
  options,
  toggleOption,
}) => {
  if (mode !== MODE_PASSWORD) {
    return (
      <div className="rounded-3xl bg-muted/80 px-4 py-3 text-sm text-muted-foreground shadow-sm">
        Uses simple words joined with hyphens and a number for easy recall.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {Object.entries(options).map(([key, value]) => (
        <div
          key={key}
          className="flex items-center justify-between rounded-3xl bg-muted px-4 py-3 shadow-sm transition-colors hover:bg-muted/80"
        >
          <Label htmlFor={OPTION_LABELS[key]} className="text-sm capitalize">
            {OPTION_LABELS[key]}
          </Label>

          <Switch
            id={OPTION_LABELS[key]}
            checked={value}
            onCheckedChange={() => toggleOption(key)}
            disabled={
              CHARACTER_OPTION_KEYS.includes(key) &&
              value &&
              enabledCharacterSets.length === 1
            }
          />
        </div>
      ))}
    </div>
  );
};

export default PasswordGeneratorOptions;
