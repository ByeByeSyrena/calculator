# 🧮 React Calculator

A modern, animated calculator built with **React**, **TypeScript**, **Chakra UI**, and **Framer Motion**.  
It features smooth button animations, a clean dark theme, and simple arithmetic operations — all wrapped in a modular, reusable structure.

---

## 🚀 Features
- ✨ **Responsive UI** built with Chakra UI  
- 🎞️ **Smooth animations** using Framer Motion  
- ⚙️ **Modular service layer** (`CalculatorService`) for logic separation  
- 🧠 Supports basic operations: `+`, `-`, `*`, `/`  
- 💾 Clear state management via React Context  

---

## 🗂️ Project Structure

```
src/
├── assets/ # Images and static files
├── components/ # UI components (Button, Display, etc.)
├── constants / # data for calculator panel
├── contexts/ # React context for calculator state
├── hocs/ # High-Order components to handle state
├── hooks/ # Custom hooks (useCalculator, useDisplayValue)
├── services/ # CalculatorService (business logic)
├── providers / # Custom providers for business logic
├── types/ # TypeScript types
└── main.tsx # Entry point
```

🧰 Tech Stack

- React 18
- TypeScript
- Chakra UI
- Framer Motion

Vite
---

## 🛠️ Installation
```bash
# Clone the repository
git clone https://github.com/your-username/calculator-vite.git

# Navigate to the project folder
cd calculator-vite

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open http://localhost:5173 in your browser 🚀.
