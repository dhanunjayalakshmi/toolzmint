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
        className={`w-full rounded-lg p-3 text-foreground bg-muted placeholder:text-muted-foreground focus:outline-none resize-none ${
          readOnly ? "shadow-inner" : "focus:ring-2 focus:ring-primary/40"
        }`}
        rows={8}
      />
    </div>
  );
};

export default ToolTextarea;
