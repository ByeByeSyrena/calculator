import { Dispatch, SetStateAction } from "react";
export interface CalculatorService {
  handleKey?: (key: Key) => void;
  getDisplayValue?: () => string;
}

export interface CalculatorContextProps {
  service: CalculatorService;
  displayValue: string;
}

export interface CalculatorProps {
  proxiedService: Omit<CalculatorContextProps, "displayValue">;
}

export type Operator = "+" | "-" | "*" | "/";
export type Key = Operator | "=" | "C" | "." | `${number}`;

export type Operation = Record<Operator, (a: number, b: number) => number>;

export type SetStringState = Dispatch<SetStateAction<string>>;
