import { FC } from "react";
import { Box, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CalculatorContainerProps } from "../types";
import { snowyPeaks } from "../assets";

const MotionVStack = motion(VStack);

const CalculatorContainer: FC<CalculatorContainerProps> = ({ children }) => {
  return (
    <Box
      w="100vw"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="gray.900"
      bgImage={`url(${snowyPeaks})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      backgroundPosition="center"
    >
      <MotionVStack
        gap={4}
        bg="rgba(26, 32, 44, 0.9)"
        p={6}
        borderRadius="2xl"
        boxShadow="2xl"
        width="fit-content"
        minW="340px"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={{ boxShadow: "0 0 25px rgba(255,255,255,0.2)" }}
      >
        {children}
      </MotionVStack>
    </Box>
  );
};

export default CalculatorContainer;

