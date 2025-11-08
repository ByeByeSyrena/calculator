import { useState, useMemo, useEffect } from "react";
import { CalculatorService } from "../services";

export default function useCalculator() {
  const [value, setValue] = useState("0");
  const [expression, setExpression] = useState("");

  const calculator = useMemo(() => new CalculatorService(setValue), []);

  useEffect(() => {
    setExpression(calculator.getExpression());
  }, [calculator]);

  return { calculator, value, expression };
}
