import { FC } from "react";
import { Button, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { ButtonProps } from "../types";

const MotionButton = motion(Button);

const CalcButton: FC<ButtonProps> = ({ value, onClick }) => {
  const isOperator = ["+", "-", "*", "/", "="].includes(value);

  return (
    <Box position="relative" w="full">
      <MotionButton
        layout
        whileHover={{
          scale: 1.05,
          y: 0,
          transformOrigin: "center center",
          transition: { type: "spring", stiffness: 250, damping: 18 },
        }}
        whileTap={{
          scale: 0.95,
          y: 1,
          transition: { type: "spring", stiffness: 400, damping: 20 },
        }}
        onClick={onClick}
        size="lg"
        colorScheme={isOperator ? "orange" : "blue"}
        borderRadius="xl"
        variant="solid"
        _hover={{ bg: isOperator ? "orange.400" : "blue.400" }}
        boxShadow="md"
        w="full"
      />

      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        pointerEvents="none"
        userSelect="none"
        textAlign="center"
        fontSize="2xl"
        fontWeight="bold"
        color="whiteAlpha.900"
        letterSpacing="wide"
        lineHeight="1"
        textShadow="0 1px 2px rgba(0,0,0,0.3)"
      >
        {value}
      </Box>
    </Box>
  );
};

export default CalcButton;


