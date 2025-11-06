import { FC, ReactNode, useRef, useState } from "react";
import { CalculatorService } from "../services";
import { CalculatorContext } from "../contexts";

export const CalculatorProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const serviceRef = useRef<CalculatorService | null>(null);

  const [displayValue, setDisplayValue] = useState<string>("0");

  if (!serviceRef.current) {
    serviceRef.current = new CalculatorService(setDisplayValue);
  }

  return (
    <CalculatorContext.Provider value={{ service: serviceRef.current, displayValue, setDisplayValue }}>
      {children}
    </CalculatorContext.Provider>
  );
};