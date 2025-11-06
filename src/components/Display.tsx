import { FC } from "react";
import { displayValue } from "../types";

const Display: FC<{ value: displayValue | undefined; operand: number }> = ({ value }) => (
  <div className="calculator-display">
    <div className="calculator-input">{value || "0"}</div>
  </div>
);

export default Display;