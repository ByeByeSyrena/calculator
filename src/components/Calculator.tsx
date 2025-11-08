import { useState, useEffect, FC } from "react";
import { ButtonPanel, Display, CalculatorContainer } from ".";
import { CalculatorProps, displayValue, Key, } from "../types";
import { useDisplayValue } from "../hooks";
import { withCalculatorProxy } from "../hocs";
import { BUTTONS } from "../constants";

const CoreCalculator: FC<CalculatorProps> = ({
  proxiedService,
}) => {
  const [localDisplay, setLocalDisplay] = useState<string>("");
  const displayValue = useDisplayValue();

  useEffect(() => {
    setLocalDisplay(displayValue);
  }, [displayValue]);

  const handleButtonClick = (key: Key) => {
    if (proxiedService) {
      proxiedService.service.handleKey(key);
    }
  };

  return (
    <CalculatorContainer>
      <Display value={localDisplay as displayValue} operand={0} />
      <ButtonPanel buttons={BUTTONS} onButtonClick={handleButtonClick} />
    </CalculatorContainer>
  );
};

const Calculator = withCalculatorProxy(CoreCalculator);

export default Calculator;
