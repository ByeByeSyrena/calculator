import type { ComponentType } from "react";
import type { CalculatorContextProps } from "./index";

export type WithCalculatorProxyProps = {
  proxiedService: Omit<CalculatorContextProps, "displayValue">;
};

export type WithCalculatorProxyComponent<P> = ComponentType<
  P & WithCalculatorProxyProps
>;
