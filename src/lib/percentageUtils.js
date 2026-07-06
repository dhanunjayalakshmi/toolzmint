function round(n) {
  return Math.round(n * 1e10) / 1e10;
}

export const MODES = [
  { id: "of",     label: "% of a number"   },
  { id: "is",     label: "X is what % of Y" },
  { id: "change", label: "% change"          },
  { id: "adjust", label: "Increase / Decrease" },
];

export function calculate(mode, a, b, direction) {
  const x = parseFloat(a);
  const y = parseFloat(b);

  if (isNaN(x) || isNaN(y)) return null;

  switch (mode) {
    case "of":
      // What is X% of Y?
      return { value: round((x / 100) * y), unit: "" };

    case "is":
      // X is what percent of Y?
      if (y === 0) return null;
      return { value: round((x / y) * 100), unit: "%" };

    case "change":
      // Percentage change from X to Y
      if (x === 0) return null;
      return { value: round(((y - x) / Math.abs(x)) * 100), unit: "%", signed: true };

    case "adjust":
      // X increased or decreased by Y%
      return {
        value: round(direction === "decrease" ? x * (1 - y / 100) : x * (1 + y / 100)),
        unit: "",
      };

    default:
      return null;
  }
}
