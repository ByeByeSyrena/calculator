import { useContext } from "react";
import { CalculatorContext } from "../contexts";

export const useCalculatorContext = () => {
  const ctx = useContext(CalculatorContext);
  if (!ctx) throw new Error("CalculatorContext not found");
  return ctx;
};
