import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  MODE_PASSWORD,
  MODE_PASSPHRASE,
  PASSWORD_PRESETS,
} from "./passwordGeneratorConfig";

const PasswordGeneratorControls = ({
  applyPreset,
  length,
  mode,
  onModeChange,
  setLength,
  summary,
}) => {
  const lengthLabel =
    mode === MODE_PASSPHRASE ? `Words: ${length}` : `Length: ${length}`;
  const sliderMin = mode === MODE_PASSPHRASE ? 3 : 4;
  const sliderMax = mode === MODE_PASSPHRASE ? 8 : 32;

  return (
    <div className="space-y-4 rounded-3xl p-4 shadow-sm">
      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          variant={mode === MODE_PASSWORD ? "default" : "outline"}
          size="sm"
          onClick={() => onModeChange(MODE_PASSWORD)}
          className={
            mode === MODE_PASSWORD
              ? "cursor-pointer rounded-full shadow-sm transition-all hover:shadow-md"
              : "cursor-pointer rounded-full border-0 bg-background/90 shadow-sm transition-all hover:bg-background hover:shadow-md"
          }
        >
          Password
        </Button>
        <Button
          type="button"
          variant={mode === MODE_PASSPHRASE ? "default" : "outline"}
          size="sm"
          onClick={() => onModeChange(MODE_PASSPHRASE)}
          className={
            mode === MODE_PASSPHRASE
              ? "cursor-pointer rounded-full shadow-sm transition-all hover:shadow-md"
              : "cursor-pointer rounded-full border-0 bg-muted shadow-sm transition-all hover:bg-background hover:shadow-md"
          }
        >
          Passphrase
        </Button>
      </div>

      {mode === MODE_PASSWORD ? (
        <div className="flex flex-wrap gap-2 pt-1">
          {PASSWORD_PRESETS.map((preset) => (
            <Button
              key={preset.id}
              type="button"
              variant="outline"
              size="sm"
              onClick={() => applyPreset(preset)}
              className="cursor-pointer rounded-full border-0 bg-muted shadow-sm transition-all hover:bg-muted/20 hover:shadow-md"
            >
              {preset.label}
            </Button>
          ))}
        </div>
      ) : null}

      <div className="space-y-2">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-medium">{lengthLabel}</p>
          <p className="text-xs text-muted-foreground">{summary}</p>
        </div>
        <Slider
          min={sliderMin}
          max={sliderMax}
          step={1}
          value={[length]}
          onValueChange={(val) => setLength(val[0])}
        />
      </div>
    </div>
  );
};

export default PasswordGeneratorControls;
