import { FC, useEffect } from "react";
import Button from "./Button";
import useCalculator from "../hooks/useCalculator";

interface ButtonPanelProps {
  buttons: string[];
  onButtonClick: (value: string) => void;
}

const ButtonPanel: FC<ButtonPanelProps> = ({ buttons, onButtonClick }) => {
  const { calculator, } = useCalculator();

  useEffect(() => {
    calculator.clear();
  }, [calculator]);

  const onClick = (btn: any) => {
    onButtonClick(btn);
  }

  return (
    <div className="calculator-buttons">
      {buttons.map((btn) => (
        <Button key={btn} value={btn} onClick={() => onClick(btn)} />
      ))}
    </div>
  );
};

export default ButtonPanel;