"use client";

const ToolSearchInput = ({ value, onChange, placeholder }) => {
  return (
    <div className="tool-search-shell rounded-[2rem] bg-muted/65 p-3 shadow-sm shadow-black/5">
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="tool-search-input w-full rounded-2xl bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground shadow-sm shadow-black/5 outline-none transition-all focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
};

export default ToolSearchInput;
