import { useMemo } from "react";
import { useCalculatorContext } from "../hooks";
import type { WithCalculatorProxyComponent } from "../types";

export function withCalculatorProxy<P>(
  Component: WithCalculatorProxyComponent<P>
) {
  return function Wrapped(props: P) {
    const context = useCalculatorContext();

    const proxiedService = useMemo(() => {
      return new Proxy(context, {
        get(target, prop, receiver) {
          return Reflect.get(target, prop, receiver);
        },
      });
    }, [context]);

    return <Component {...props} proxiedService={proxiedService} />;
  };
}


