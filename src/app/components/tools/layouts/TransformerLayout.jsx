import { Children } from "react";

const TransformerLayout = ({ children }) => {
  const items = Children.toArray(children);

  const input = items[0];
  const output = items[1];
  const actions = items[2];

  return (
    <div className="space-y-4 w-full">
      {/* Grid only for input/output */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {input}
        {output}
      </div>

      {/* Actions full width */}

      <div className="w-full">{actions}</div>
    </div>
  );
};

export default TransformerLayout;
