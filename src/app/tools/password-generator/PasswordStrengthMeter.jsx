const PasswordStrengthMeter = ({ strength }) => {
  return (
    <div className="space-y-3 rounded-3xl bg-muted p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-foreground">
          Strength: {strength.label}
        </p>
        <p className="text-xs text-muted-foreground">{strength.hint}</p>
      </div>

      <div className="w-full overflow-hidden rounded-full bg-background shadow-inner">
        <div
          className={`h-2.5 rounded-full ${strength.color} transition-all duration-300`}
          style={{ width: strength.width }}
        />
      </div>
    </div>
  );
};

export default PasswordStrengthMeter;
