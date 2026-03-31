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
        className={`w-full min-h-45 resize-none rounded-3xl bg-muted p-4 text-sm text-foreground placeholder:text-muted-foreground shadow-inner transition-all duration-200 focus:outline-none ${readOnly ? "" : "focus:ring-2 focus:ring-primary/30 focus:ring-offset-1"} `}
        rows={8}
      />
    </div>
  );
};

export default ToolTextarea;
