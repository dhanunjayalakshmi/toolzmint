const ToolStatsCard = ({ label, value }) => {
  return (
    <div className="p-4 rounded-lg bg-muted shadow-sm text-center">
      <p className="text-xl font-semibold">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default ToolStatsCard;
