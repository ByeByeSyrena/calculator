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
      maxH="5.5rem"
      overflowY="auto"
      overflowX="hidden"
      css={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
      transition="max-height 0.3s ease"
    >
      <Text
        whiteSpace="pre-wrap"
        wordBreak="break-all"
        lineHeight="shorter"
      >
        {value || "0"}
      </Text>
    </Box>
  );
};

export default Display;

