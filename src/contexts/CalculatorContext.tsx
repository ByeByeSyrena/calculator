import { createContext } from "react";
import { CalculatorContextProps } from "../types";

export const CalculatorContext = createContext<CalculatorContextProps | undefined>(undefined);