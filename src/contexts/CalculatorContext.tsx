import { createContext } from "react";
import { CalculatorService } from "../types";

interface CalculatorContextProps {
  service: CalculatorService;
  displayValue: string;
  setDisplayValue: (value: string) => void;
}

export const CalculatorContext = createContext<CalculatorContextProps | undefined>(undefined);