import { useCallback, useMemo } from "react";
import { useCalculatorContext } from "./useCalculatorContext";

// returns string value for calculator's "display"
export function useDisplayValue() {
  const { displayValue } = useCalculatorContext();
  const getValue = useCallback(() => displayValue, [displayValue]);
  return useMemo(() => getValue(), [getValue]);
}
