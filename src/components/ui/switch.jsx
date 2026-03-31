"use client";

const Switch = ({ checked, onCheckedChange, disabled = false, id }) => {
  return (
    <button
      type="button"
      id={id}
      role="switch"
      aria-checked={checked}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={() => onCheckedChange(!checked)}
      className={`flex h-6 w-11 items-center rounded-full p-1 transition-all duration-200 ${
        checked
          ? "bg-primary shadow-sm"
          : "bg-background shadow-sm ring-1 ring-border/40"
      } ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:scale-[1.02]"}`}
    >
      <div
        className={`h-4 w-4 rounded-full bg-white shadow transform transition-transform ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
};

export { Switch };
