"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { calculateAge, calculateDateDiff, todayString } from "@/lib/dateUtils";

const StatCard = ({ label, value, highlight }) => (
  <div className={`rounded-3xl p-4 shadow-sm ${highlight ? "bg-primary/10" : "bg-card"}`}>
    <p className="text-sm font-medium text-muted-foreground">{label}</p>
    <p className={`mt-1 text-2xl font-semibold ${highlight ? "text-primary" : ""}`}>
      {value}
    </p>
  </div>
);

const DateInput = ({ label, value, onChange, max }) => (
  <div className="space-y-2 flex-1">
    <p className="text-sm font-medium text-muted-foreground">{label}</p>
    <input
      type="date"
      value={value}
      max={max}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-2xl bg-card px-4 py-2.5 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-1"
    />
  </div>
);

const AgeCalculatorTool = () => {
  const today = todayString();
  const [mode, setMode] = useState("age");
  const [birthDate, setBirthDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState(today);
  const [copied, setCopied] = useState(false);

  const ageResult = useMemo(
    () => (mode === "age" && birthDate ? calculateAge(birthDate) : null),
    [mode, birthDate]
  );

  const diffResult = useMemo(
    () => (mode === "diff" && startDate && endDate ? calculateDateDiff(startDate, endDate) : null),
    [mode, startDate, endDate]
  );

  const handleClear = () => {
    setBirthDate("");
    setStartDate("");
    setEndDate(today);
    setCopied(false);
  };

  const handleCopy = async () => {
    let text = "";
    if (ageResult) {
      text = [
        `Age: ${ageResult.years} years, ${ageResult.months} months, ${ageResult.days} days`,
        `Total days lived: ${ageResult.totalDays.toLocaleString()}`,
        `Total weeks: ${ageResult.totalWeeks.toLocaleString()}`,
        ageResult.isTodayBirthday
          ? "Days until birthday: Today!"
          : `Days until birthday: ${ageResult.daysUntilBirthday}`,
        `Born on a: ${ageResult.dayOfWeek}`,
      ].join("\n");
    } else if (diffResult) {
      text = [
        `Date difference: ${diffResult.years} years, ${diffResult.months} months, ${diffResult.days} days`,
        `Total days: ${Math.abs(diffResult.totalDays).toLocaleString()}`,
        `Total weeks: ${diffResult.totalWeeks.toLocaleString()}`,
      ].join("\n");
    }
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full space-y-4">
      {/* Mode selector */}
      <div className="flex flex-wrap gap-2 rounded-3xl bg-muted p-4 shadow-sm">
        {[
          { id: "age", label: "Age Calculator" },
          { id: "diff", label: "Date Difference" },
        ].map((m) => (
          <Button
            key={m.id}
            type="button"
            size="sm"
            variant={mode === m.id ? "default" : "outline"}
            onClick={() => { setMode(m.id); handleClear(); }}
            className={
              mode === m.id
                ? "cursor-pointer rounded-full shadow-sm transition-all hover:shadow-md"
                : "cursor-pointer rounded-full border-0 bg-card shadow-sm transition-all hover:bg-background/90 hover:shadow-md"
            }
          >
            {m.label}
          </Button>
        ))}
      </div>

      {/* Inputs */}
      <div className="flex flex-wrap gap-4 rounded-3xl bg-muted p-5 shadow-sm">
        {mode === "age" ? (
          <DateInput
            label="Date of Birth"
            value={birthDate}
            onChange={setBirthDate}
            max={today}
          />
        ) : (
          <>
            <DateInput label="Start Date" value={startDate} onChange={setStartDate} />
            <DateInput label="End Date" value={endDate} onChange={setEndDate} />
          </>
        )}
      </div>

      {/* Age results */}
      {ageResult && (
        <div className="space-y-3">
          {ageResult.isTodayBirthday && (
            <p className="rounded-3xl bg-primary/10 px-5 py-3 text-sm font-medium text-primary">
              🎂 Happy Birthday!
            </p>
          )}

          <div className="grid gap-3 sm:grid-cols-3">
            <StatCard label="Years" value={ageResult.years} highlight />
            <StatCard label="Months" value={ageResult.months} />
            <StatCard label="Days" value={ageResult.days} />
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <StatCard label="Total days lived" value={ageResult.totalDays.toLocaleString()} />
            <StatCard label="Total weeks" value={ageResult.totalWeeks.toLocaleString()} />
            <StatCard
              label={ageResult.isTodayBirthday ? "Next birthday" : "Days until birthday"}
              value={ageResult.isTodayBirthday ? "Today!" : `${ageResult.daysUntilBirthday} days`}
            />
          </div>

          <div className="rounded-3xl bg-card p-4 shadow-sm">
            <p className="text-sm font-medium text-muted-foreground">Born on a</p>
            <p className="mt-1 text-lg font-semibold">{ageResult.dayOfWeek}</p>
          </div>
        </div>
      )}

      {/* Date diff results */}
      {diffResult && (
        <div className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-3">
            <StatCard label="Years" value={diffResult.years} highlight />
            <StatCard label="Months" value={diffResult.months} />
            <StatCard label="Days" value={diffResult.days} />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <StatCard
              label="Total days"
              value={`${diffResult.isNegative ? "−" : ""}${Math.abs(diffResult.totalDays).toLocaleString()}`}
            />
            <StatCard
              label="Total weeks"
              value={diffResult.totalWeeks.toLocaleString()}
            />
          </div>
        </div>
      )}

      {/* Fallback hint */}
      {mode === "age" && !birthDate && (
        <p className="text-sm text-muted-foreground px-1">Enter a date of birth to calculate age.</p>
      )}
      {mode === "diff" && (!startDate || !endDate) && (
        <p className="text-sm text-muted-foreground px-1">Enter both dates to calculate the difference.</p>
      )}

      <div className="flex justify-end gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handleClear}
          disabled={mode === "age" ? !birthDate : !startDate}
          className="rounded-full border-0 bg-muted shadow-sm cursor-pointer transition-all hover:bg-muted/80 hover:shadow-md active:scale-95 disabled:opacity-50"
        >
          Clear
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopy}
          disabled={!ageResult && !diffResult}
          className="rounded-full border-0 bg-muted shadow-sm cursor-pointer transition-all hover:bg-muted/80 hover:shadow-md active:scale-95 disabled:opacity-50"
        >
          {copied ? "Copied!" : "Copy results"}
        </Button>
      </div>
    </div>
  );
};

export default AgeCalculatorTool;
