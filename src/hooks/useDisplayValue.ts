import { useCallback, useMemo } from "react";
import { useCalculatorContext } from "./useCalculatorContext";

export function useDisplayValue() {
  const { displayValue } = useCalculatorContext();
  const getValue = useCallback(() => displayValue, [displayValue]);
  return useMemo(() => getValue(), [getValue]);
}
