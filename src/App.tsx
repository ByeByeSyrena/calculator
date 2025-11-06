import { useState, useEffect, FC } from "react";
import { withCalculatorProxy } from "./hocs";
import { ButtonPanel, Display } from "./components";
import { displayValue } from "./types";
import { BUTTONS } from "./constants";
import { useDisplayValue } from "./hooks";

const CoreCalculator: FC<{ proxiedService?: any }> = ({ proxiedService }) => {
  const [localDisplay, setLocalDisplay] = useState<string>("");
  const displayValue = useDisplayValue();

  useEffect(() => {
    setLocalDisplay(displayValue);
  }, [displayValue]);

  const handleButtonClick = (key: string) => {
    if (proxiedService) {
      proxiedService.service.handleKey(key);
    }
  };

  return (
    <div className="calculator-container">
      <Display value={localDisplay as displayValue} operand={0} />
      <ButtonPanel buttons={BUTTONS} onButtonClick={handleButtonClick} />
    </div>
  );
};

const Calculator = withCalculatorProxy(CoreCalculator);

export default Calculator;
