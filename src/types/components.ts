import { MouseEventHandler, ReactNode } from "react";

export type displayValue = string & { __brand: "displayValue" };

export interface ButtonProps {
  value: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export interface ButtonPanelProps {
  buttons: string[];
  onButtonClick: (value: string) => void;
}

export interface DisplayProps {
  value: displayValue | undefined;
  operand: number;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export interface CalculatorContainerProps {
  children: ReactNode;
}
