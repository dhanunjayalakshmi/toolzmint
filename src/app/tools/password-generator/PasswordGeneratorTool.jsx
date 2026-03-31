"use client";

import { useState } from "react";
import { RefreshCw } from "lucide-react";
import ToolTextarea from "@/app/components/tools/ToolTextarea";
import { Button } from "@/components/ui/button";
import ToolActions from "@/app/components/tools/ToolActions";
import PasswordGeneratorControls from "./PasswordGeneratorControls";
import PasswordGeneratorOptions from "./PasswordGeneratorOptions";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import { usePasswordGenerator } from "./usePasswordGenerator";

const PasswordGeneratorTool = () => {
  const [copied, setCopied] = useState(false);
  const {
    applyPreset,
    enabledCharacterSets,
    handleClear,
    handleModeChange,
    handleRegenerate,
    length,
    mode,
    options,
    password,
    setLength,
    strength,
    summary,
    toggleOption,
  } = usePasswordGenerator();

  const handleCopy = async () => {
    if (!password) return;
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="space-y-5">
      <div className="rounded-3xl p-3 shadow-sm">
        <div className="flex items-start gap-2">
          <ToolTextarea value={password} readOnly label="Generated Password" />

          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            onClick={handleRegenerate}
            aria-label="Generate a new password"
            title="Generate a new password"
            className="mt-8 shrink-0 cursor-pointer border-0 bg-muted shadow-sm transition-all hover:bg-background hover:shadow-md"
          >
            <RefreshCw className="size-4" />
          </Button>
        </div>
      </div>

      <PasswordGeneratorControls
        applyPreset={applyPreset}
        length={length}
        mode={mode}
        onModeChange={handleModeChange}
        setLength={setLength}
        summary={summary}
      />

      <PasswordGeneratorOptions
        enabledCharacterSets={enabledCharacterSets}
        mode={mode}
        options={options}
        toggleOption={toggleOption}
      />

      <PasswordStrengthMeter strength={strength} />

      <ToolActions
        onClear={handleClear}
        onCopy={handleCopy}
        disableCopy={!password}
        copied={copied}
      />
    </div>
  );
};

export default PasswordGeneratorTool;
