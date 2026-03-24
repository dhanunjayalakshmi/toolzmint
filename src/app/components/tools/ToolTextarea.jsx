const ToolTextarea = ({
  value,
  onChange,
  placeholder = "Type or paste your text here...",
  readOnly = false,
  label,
}) => {
  return (
    <div className="space-y-2 w-full">
      {label && (
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
      )}

      <textarea
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        readOnly={readOnly}
        placeholder={placeholder}
        className={`w-full min-h-45 rounded-xl p-4 text-foreground text-sm placeholder:text-muted-foreground resize-none transition-all duration-200 focus:outline-none bg-muted shadow-inner ${readOnly ? "" : "focus:ring-2 focus:ring-primary/40"} `}
        rows={8}
      />
    </div>
  );
};

export default ToolTextarea;
