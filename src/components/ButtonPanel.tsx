import { FC, useEffect, useCallback } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Button from "./Button";
import useCalculator from "../hooks/useCalculator";
import type { ButtonPanelProps, Key } from "../types";

const ButtonPanel: FC<ButtonPanelProps> = ({ buttons, onButtonClick }) => {
  const { calculator } = useCalculator();

  useEffect(() => {
    calculator.clear();
  }, [calculator]);

  const handleClick = useCallback(
    (btn: Key) => onButtonClick(btn),
    [onButtonClick]
  );

  return (
    <SimpleGrid
      columns={4}
      gap={3}
      mt={4}
      w="fit-content"
      mx="auto"
    >
      {buttons.map((btn) => (
        <Button
          key={btn}
          value={btn}
          onClick={() => handleClick(btn as Key)}
        />
      ))}
    </SimpleGrid>
  );
};

export default ButtonPanel;

