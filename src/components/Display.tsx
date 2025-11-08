import { FC } from "react";
import { Box, Text } from "@chakra-ui/react";
import { DisplayProps } from "../types";

const Display: FC<DisplayProps> = ({ value }) => {
  return (
    <Box
      bg="black"
      color="white"
      borderRadius="xl"
      p={4}
      textAlign="right"
      fontSize="4xl"
      fontWeight="bold"
      boxShadow="md"
      w="320px"
      mx="auto"
      mb={4}
    >
      <Text>{value || "0"}</Text>
    </Box>
  );
};

export default Display;
