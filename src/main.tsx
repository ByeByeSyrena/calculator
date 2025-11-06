import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Calculator from "./App";
import { CalculatorProvider } from "./providers";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <CalculatorProvider>
      <Calculator />
    </CalculatorProvider>
  </StrictMode>
);
