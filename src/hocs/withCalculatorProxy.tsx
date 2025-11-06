import { ComponentType, useMemo } from "react";
import { useCalculatorContext } from "../hooks";

export function withCalculatorProxy<P>(Component: ComponentType<P & { proxiedService: any }>) {
  return function Wrapped(props: P) {
    const service = useCalculatorContext();
    // We need it for getting latest data in CalculatorContext
    const proxiedService = useMemo(() => {
      return new Proxy(service, {
        get(target, prop, receiver) {
          return Reflect.get(target, prop, receiver);
        },
      });
    }, [service]);
    return <Component {...props} proxiedService={proxiedService} />;
  };
}


