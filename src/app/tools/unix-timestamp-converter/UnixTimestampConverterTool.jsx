"use client";

import { useMemo, useState } from "react";
import ToolActions from "@/app/components/tools/ToolActions";
import { Button } from "@/components/ui/button";
import {
  convertDateTimeLocalToTimestamps,
  formatTimestampDetails,
  getCurrentDateTimeLocalValue,
  parseUnixTimestampInput,
} from "@/lib/unixTimestampUtils";

const MODE_TIMESTAMP_TO_DATE = "timestamp-to-date";
const MODE_DATE_TO_TIMESTAMP = "date-to-timestamp";

const ResultCard = ({ label, value }) => {
  return (
    <div className="rounded-3xl bg-background p-4 shadow-sm">
      <p className="text-sm font-medium text-foreground">{label}</p>
      <p className="mt-2 break-all text-sm text-muted-foreground">
        {value || "Value will appear here..."}
      </p>
    </div>
  );
};

const UnixTimestampConverterTool = () => {
  const [mode, setMode] = useState(MODE_TIMESTAMP_TO_DATE);
  const [timestampInput, setTimestampInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [copied, setCopied] = useState(false);

  const parsedTimestamp = useMemo(
    () => parseUnixTimestampInput(timestampInput),
    [timestampInput],
  );
  const timestampDetails = useMemo(
    () => formatTimestampDetails(parsedTimestamp.milliseconds),
    [parsedTimestamp.milliseconds],
  );
  const parsedDate = useMemo(
    () => convertDateTimeLocalToTimestamps(dateInput),
    [dateInput],
  );

  const handleClear = () => {
    setTimestampInput("");
    setDateInput("");
  };

  const handleCopy = async () => {
    const summary =
      mode === MODE_TIMESTAMP_TO_DATE
        ? JSON.stringify(
            timestampDetails
              ? {
                  seconds: parsedTimestamp.seconds,
                  milliseconds: parsedTimestamp.milliseconds,
                  ...timestampDetails,
                }
              : null,
            null,
            2,
          )
        : JSON.stringify(
            parsedDate.seconds !== null && parsedDate.milliseconds !== null
              ? {
                  seconds: parsedDate.seconds,
                  milliseconds: parsedDate.milliseconds,
                }
              : null,
            null,
            2,
          );

    await navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full space-y-5">
      <div className="space-y-3 rounded-3xl p-4 shadow-sm">
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            size="sm"
            variant={mode === MODE_TIMESTAMP_TO_DATE ? "default" : "outline"}
            onClick={() => setMode(MODE_TIMESTAMP_TO_DATE)}
            className={
              mode === MODE_TIMESTAMP_TO_DATE
                ? "cursor-pointer rounded-full shadow-sm transition-all hover:shadow-md"
                : "cursor-pointer rounded-full border-0 bg-background/90 shadow-sm transition-all hover:bg-background hover:shadow-md"
            }
          >
            Timestamp to Date
          </Button>

          <Button
            type="button"
            size="sm"
            variant={mode === MODE_DATE_TO_TIMESTAMP ? "default" : "outline"}
            onClick={() => setMode(MODE_DATE_TO_TIMESTAMP)}
            className={
              mode === MODE_DATE_TO_TIMESTAMP
                ? "cursor-pointer rounded-full shadow-sm transition-all hover:shadow-md"
                : "cursor-pointer rounded-full border-0 bg-background/90 shadow-sm transition-all hover:bg-background hover:shadow-md"
            }
          >
            Date to Timestamp
          </Button>
        </div>
      </div>

      {mode === MODE_TIMESTAMP_TO_DATE ? (
        <div className="space-y-3 rounded-3xl bg-muted p-4 shadow-sm">
          <div className="space-y-1">
            <p className="text-sm font-medium text-foreground">
              Unix Timestamp to Date
            </p>
            <p className="text-sm text-muted-foreground">
              Paste a Unix timestamp in seconds or milliseconds.
            </p>
          </div>

          <input
            type="text"
            value={timestampInput}
            onChange={(e) => setTimestampInput(e.target.value)}
            placeholder="e.g. 1712126400 or 1712126400000"
            className="w-full rounded-3xl bg-background px-4 py-3 text-foreground shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/30"
          />

          {parsedTimestamp.error && (
            <p className="text-sm text-red-500">{parsedTimestamp.error}</p>
          )}

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <ResultCard label="Local Time" value={timestampDetails?.local} />
            <ResultCard label="UTC Time" value={timestampDetails?.utc} />
            <ResultCard label="ISO String" value={timestampDetails?.iso} />
            <ResultCard
              label="Normalized Milliseconds"
              value={
                parsedTimestamp.milliseconds !== null
                  ? String(parsedTimestamp.milliseconds)
                  : ""
              }
            />
          </div>
        </div>
      ) : (
        <div className="space-y-3 rounded-3xl bg-muted p-4 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">
                Date to Unix Timestamp
              </p>
              <p className="text-sm text-muted-foreground">
                Choose a local date and time to convert it into Unix format.
              </p>
            </div>

            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => setDateInput(getCurrentDateTimeLocalValue())}
              className="rounded-full border-0 bg-background/90 cursor-pointer shadow-sm transition-all hover:bg-background hover:shadow-md"
            >
              Use Current Time
            </Button>
          </div>

          <input
            type="datetime-local"
            value={dateInput}
            onChange={(e) => setDateInput(e.target.value)}
            className="w-full cursor-text rounded-3xl bg-background px-4 py-3 text-foreground shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/30"
          />

          {parsedDate.error && (
            <p className="text-sm text-red-500">{parsedDate.error}</p>
          )}

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <ResultCard
              label="Unix Seconds"
              value={
                parsedDate.seconds !== null ? String(parsedDate.seconds) : ""
              }
            />
            <ResultCard
              label="Unix Milliseconds"
              value={
                parsedDate.milliseconds !== null
                  ? String(parsedDate.milliseconds)
                  : ""
              }
            />
          </div>
        </div>
      )}

      <ToolActions
        onClear={handleClear}
        onCopy={handleCopy}
        disableCopy={
          mode === MODE_TIMESTAMP_TO_DATE
            ? !timestampDetails
            : parsedDate.seconds === null && parsedDate.milliseconds === null
        }
        copied={copied}
      />
    </div>
  );
};

export default UnixTimestampConverterTool;
