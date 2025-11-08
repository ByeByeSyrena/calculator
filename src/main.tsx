import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { CalculatorProvider } from "./providers";
import { ErrorBoundary } from "./components";
import Calculator from "./components/Calculator";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <ErrorBoundary>
      <CalculatorProvider>
        <ChakraProvider value={defaultSystem}>
          <Calculator />
        </ChakraProvider>
      </CalculatorProvider>
    </ErrorBoundary>
  </StrictMode>
);
