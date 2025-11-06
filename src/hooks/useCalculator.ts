import { useState, useMemo } from "react";
import { CalculatorService } from "../services";

export default function useCalculator() {
  const [value, setValue] = useState("0");

  const calculator = useMemo(() => new CalculatorService(setValue), []);

  return { calculator, value };
}
