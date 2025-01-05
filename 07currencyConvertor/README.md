# 🌎 Currency Converter Application

A React-based currency converter app that allows users to convert currencies in real-time. Powered by **@fawazahmed0/currency-api**, the app showcases the use of React hooks and Tailwind CSS for a smooth and dynamic user experience. 

## 🚀 Features
- **Real-Time Conversion**: Convert currencies instantly using live exchange rates.
- **Swap Functionality**: Swap "From" and "To" currencies effortlessly.
- **Dynamic Inputs**: Input the amount and select currencies dynamically.
- **Responsive Design**: Built with Tailwind CSS, ensuring seamless usability across devices.
- **Reusable Components**: Modular `InputBox` component for flexible input handling.
  
## 🧰 Key Learnings
This project focuses on leveraging React hooks and component design for building interactive web applications. Below are the concepts utilized:

### 1. **React Hooks**:
   - **`useState`**: Manages application state (e.g., amount, currencies).
   - **`useEffect`**: Fetches live currency rates when the base currency changes.
   - **`useId`**: Generates unique IDs for accessibility and reusability.

### 2. **Reusable Components**:
   - **`InputBox` Component**: A modular input field for handling both numeric amounts and currency selection.

### 3. **Custom Hooks**:
   - **`useCurrencyInfo` Hook**: Fetches live exchange rates for a given base currency dynamically.

### 4. **Styling**:
   - **Tailwind CSS**: Used for styling the app with utility-first CSS classes.
   - Responsive design with support for modern web standards.

### 5. **API Integration**:
   - **`@fawazahmed0/currency-api`**: Provides live exchange rates used for calculations.

---

## 🗂 Project Directory Structure

```plaintext
07currencyConvertor/
├── index.html                  # HTML entry point
├── package.json                # Project dependencies and scripts
├── public/                     # Static assets
├── src/                        # Source files
│   ├── App.css                 # Global styles
│   ├── App.jsx                 # Main app component
│   ├── index.css               # Tailwind CSS configuration
│   ├── main.jsx                # Vite entry point
│   ├── Components/             # UI components
│   │   ├── InputBox.jsx        # Modular input field
│   │   └── index.js            # Component exports
│   ├── assets/                 # App assets
│   └── hooks/                  # Custom hooks
│       └── useCurrencyInfo.js  # Fetches currency information
```

## **🛠 How It Works**

### Currency Fetching:
- A custom hook `useCurrencyInfo` fetches the latest exchange rates for the selected base currency using the currency API.

### User Input Handling:
- The `InputBox` component handles user input for currency selection and amounts, keeping the UI clean and modular.

### Real-Time Conversion:
- Conversion calculations are performed dynamically based on the fetched exchange rates.

### State Management:
- States (`amount`, `from`, `to`, `convertedAmount`) ensure a reactive experience.

---

## 💡 Future Enhancements
- Add support for historical exchange rates.
- Improve error handling for API failures.
- Allow users to save favorite currency pairs.
- Include dark mode for better accessibility.

---

## 🤝 Acknowledgments
- **API**: [@fawazahmed0/currency-api](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json).
- **Icons**: Vite React Icon
