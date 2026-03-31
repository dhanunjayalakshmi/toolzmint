const ToolStatsCard = ({ label, value }) => {
  return (
    <div className="rounded-3xl bg-muted p-4 text-center shadow-sm">
      <p className="text-xl font-semibold">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default ToolStatsCard;
