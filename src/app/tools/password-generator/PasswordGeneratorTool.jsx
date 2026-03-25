"use client";

import { useEffect, useMemo, useState } from "react";
import { generatePassword, getPasswordStrength } from "@/lib/textUtils";
import ToolTextarea from "@/app/components/tools/ToolTextarea";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import ToolActions from "@/app/components/tools/ToolActions";

const labels = {
  uppercase: "Uppercase",
  lowercase: "Lowercase",
  numbers: "Numbers",
  symbols: "Symbols",
  excludeSimilar: "Exclude Similar",
};

const PasswordGeneratorTool = () => {
  const [length, setLength] = useState(12);
  const [seed, setSeed] = useState(0);

  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
    excludeSimilar: false,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const password = generatePassword({
    length,
    ...options,
    seed,
  });

  const strength = getPasswordStrength(password);

  const handleCopy = async () => {
    if (!password) return;
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleClear = () => {
    setLength(12);
    setOptions({
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: false,
      excludeSimilar: false,
    });
  };

  const toggleOption = (key) => {
    setOptions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="space-y-6">
      {/* Output */}
      <div className="flex items-center gap-2">
        <ToolTextarea value={password} readOnly label="Generated Password" />

        <button
          onClick={() => setSeed((prev) => prev + 1)}
          className="px-3 py-2 text-sm bg-muted rounded-lg hover:bg-muted/80"
        >
          ↻
        </button>
      </div>

      {/* Length */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Length: {length}</p>
        <Slider
          min={4}
          max={32}
          step={1}
          value={[length]}
          onValueChange={(val) => setLength(val[0])}
        />
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(options)?.map(([key, value]) => {
          console.log(key, value);
          return (
            <div key={key} className="flex items-center justify-between">
              <Label htmlFor={labels[key]} className="text-sm capitalize">
                {labels[key]}
              </Label>

              <Switch
                id={labels[key]}
                checked={value}
                onCheckedChange={() => toggleOption(key)}
                // className="bg-red-500"
              />
            </div>
          );
        })}
      </div>

      {/* Strength */}
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">
          Strength: {strength.label}
        </p>

        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div
            className={`h-full ${strength.color} transition-all`}
            style={{
              width:
                strength.label === "Weak"
                  ? "33%"
                  : strength.label === "Medium"
                    ? "66%"
                    : "100%",
            }}
          />
        </div>
      </div>

      {/* Actions */}
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
