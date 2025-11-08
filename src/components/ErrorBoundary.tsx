import { Component } from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { ErrorBoundaryProps, ErrorBoundaryState } from "../types";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: unknown) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReload = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          textAlign="center"
          mt={20}
          p={6}
          bg="red.50"
          borderRadius="xl"
          maxW="md"
          mx="auto"
          boxShadow="lg"
        >
          <Heading size="lg" color="red.600" mb={3}>
            Oops! Something went wrong 😢
          </Heading>
          <Text mb={6}>
            {this.state.error?.message || "An unexpected error occurred."}
          </Text>
          <Button colorScheme="red" onClick={this.handleReload}>
            Reload Page
          </Button>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
