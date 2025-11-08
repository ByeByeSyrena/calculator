import { Operator, Key, Operation, SetStringState } from "../types";

export default class CalculatorService {
  private displayValue = "0";
  private expression = "";
  private firstOperand: number | null = null;
  private waitingForOperand = false;
  private operator: Operator | null = null;
  private setDisplayValue: SetStringState;

  private operations: Operation = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (b !== 0 ? a / b : NaN),
  };

  constructor(setDisplayValue: SetStringState) {
    this.setDisplayValue = setDisplayValue;
  }

  private updateDisplay() {
    this.setDisplayValue(this.expression);
  }

  public inputDigit(digit: string): void {
    const isDot = digit === ".";

    if (this.waitingForOperand) {
      this.displayValue = isDot ? "0." : digit;
      this.waitingForOperand = false;
    } else {
      if (isDot && this.displayValue.includes(".")) return;

      const isReplacingZero = this.displayValue === "0" && !isDot;
      this.displayValue = isReplacingZero ? digit : this.displayValue + digit;
    }

    this.expression = this.expression + digit;

    this.updateDisplay();
  }

  public inputOperator(nextOperator: Operator): void {
    const currentValue = parseFloat(this.displayValue);

    if (this.firstOperand === null) {
      this.firstOperand = currentValue;
    } else if (this.operator) {
      const result = this.performOperation(
        this.firstOperand,
        currentValue,
        this.operator
      );
      this.firstOperand = result;
      this.displayValue = this.toString(result);
    }

    this.operator = nextOperator;
    this.waitingForOperand = true;

    this.expression = `${this.firstOperand}${nextOperator}`;

    this.updateDisplay();
  }

  private performOperation(a: number, b: number, operator: Operator): number {
    return this.operations[operator]?.(a, b) ?? b;
  }

  public inputEquals(): void {
    const hasPendingOperation = this.operator && this.firstOperand !== null;
    if (!hasPendingOperation) return;

    const currentValue = parseFloat(this.displayValue);
    const result = this.performOperation(
      this.firstOperand,
      currentValue,
      this.operator
    );

    this.displayValue = this.toString(result);
    this.expression = this.toString(result);
    this.firstOperand = null;
    this.operator = null;
    this.waitingForOperand = false;

    this.updateDisplay();
  }

  public toString(value?: number): string {
    if (typeof value === "number") {
      return Number.isFinite(value) ? String(value) : "Error";
    }
    return this.displayValue;
  }

  public clear(): void {
    this.displayValue = "0";
    this.expression = "";
    this.firstOperand = null;
    this.operator = null;
    this.waitingForOperand = false;
    this.updateDisplay();
  }

  public getDisplayValue(): string {
    return this.displayValue;
  }

  public getExpression(): string {
    return this.expression;
  }

  public handleKey = (key: Key): void => {
    const isOperator = ["+", "-", "*", "/"].includes(key);
    const isIntOrFloat = /^[0-9]$/.test(key) || key === ".";
    const isEqual = key === "=";
    const isClear = key === "C";

    if (isIntOrFloat) this.inputDigit(key);
    else if (isOperator) this.inputOperator(key as Operator);
    else if (isEqual) this.inputEquals();
    else if (isClear) this.clear();
  };
}
