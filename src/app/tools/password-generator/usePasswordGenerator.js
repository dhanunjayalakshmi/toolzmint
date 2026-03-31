"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  generatePassphrase,
  generatePassword,
  getPasswordStrength,
} from "@/lib/passwordUtils";
import {
  CHARACTER_OPTION_KEYS,
  DEFAULT_OPTIONS,
  DEFAULT_SETTINGS,
  MODE_PASSWORD,
  MODE_PASSPHRASE,
  OPTION_LABELS,
  STORAGE_KEY,
} from "./passwordGeneratorConfig";

const getSavedSettings = () => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const rawValue = window.localStorage.getItem(STORAGE_KEY);

    if (!rawValue) return null;

    const parsed = JSON.parse(rawValue);
    const savedLength = Number(parsed?.length);

    return {
      length:
        Number.isFinite(savedLength) && savedLength >= 4 && savedLength <= 32
          ? savedLength
          : DEFAULT_SETTINGS.length,
      mode:
        parsed?.mode === MODE_PASSPHRASE ? MODE_PASSPHRASE : MODE_PASSWORD,
      options: {
        ...DEFAULT_OPTIONS,
        ...parsed?.options,
      },
    };
  } catch {
    return null;
  }
};

export const usePasswordGenerator = () => {
  const hasRestoredSettings = useRef(false);
  const [length, setLength] = useState(DEFAULT_SETTINGS.length);
  const [seed, setSeed] = useState(0);
  const [mode, setMode] = useState(DEFAULT_SETTINGS.mode);
  const [options, setOptions] = useState(DEFAULT_SETTINGS.options);

  useEffect(() => {
    const savedSettings = getSavedSettings();

    if (!savedSettings) {
      hasRestoredSettings.current = true;
      return;
    }

    const restoreTimer = window.setTimeout(() => {
      setLength(savedSettings.length);
      setMode(savedSettings.mode);
      setOptions(savedSettings.options);
      hasRestoredSettings.current = true;
    }, 0);

    return () => window.clearTimeout(restoreTimer);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !hasRestoredSettings.current) return;

    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ length, mode, options }),
    );
  }, [length, mode, options]);

  const password = useMemo(() => {
    if (mode === MODE_PASSPHRASE) {
      return generatePassphrase({
        wordCount: length,
        separator: "-",
        includeNumber: true,
        seed,
      });
    }

    return generatePassword({
      length,
      ...options,
      seed,
    });
  }, [length, mode, options, seed]);

  const enabledCharacterSets = CHARACTER_OPTION_KEYS.filter((key) => options[key]);
  const strength = getPasswordStrength(password, mode);
  const summary =
    mode === MODE_PASSPHRASE
      ? "Memorable phrase with a number"
      : enabledCharacterSets.map((key) => OPTION_LABELS[key]).join(" • ");

  const handleRegenerate = () => {
    setSeed((prev) => prev + 1);
  };

  const handleClear = () => {
    setMode(MODE_PASSWORD);
    setLength(DEFAULT_SETTINGS.length);
    setOptions(DEFAULT_OPTIONS);
    setSeed(0);
  };

  const handleModeChange = (nextMode) => {
    setMode(nextMode);
    setLength(nextMode === MODE_PASSPHRASE ? 4 : DEFAULT_SETTINGS.length);
    setSeed((prev) => prev + 1);
  };

  const toggleOption = (key) => {
    if (
      CHARACTER_OPTION_KEYS.includes(key) &&
      options[key] &&
      enabledCharacterSets.length === 1
    ) {
      return;
    }

    setOptions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const applyPreset = ({
    length: presetLength,
    options: presetOptions,
    mode: presetMode = MODE_PASSWORD,
  }) => {
    setMode(presetMode);
    setLength(presetLength);
    setOptions(presetOptions);
    setSeed((prev) => prev + 1);
  };

  return {
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
  };
};
