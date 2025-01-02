# Password Generator: Exploring useEffect, useRef, and useCallback 🔐

This project showcases the creation of a dynamic **Password Generator** using React. It focuses on leveraging React hooks like `useEffect`, `useRef`, and `useCallback` for state management, side effects, and optimization.

---

## 🛠 Features
- **Dynamic Password Generation:**
  - Generate passwords of adjustable lengths (6 to 100 characters).
  - Toggle options for including numbers and special characters.

- **Copy to Clipboard:**
  - Copy generated passwords to the clipboard with a single click using the `Clipboard API`.

- **Responsive UI:**
  - Styled with Tailwind CSS for a clean and modern interface.

---

## 📚 What I Learned
1. **useEffect Hook:**
   - Used to automatically regenerate the password whenever dependencies (`length`, `numberAllowed`, `charAllowed`) change.
   - Example:
     ```javascript
     useEffect(() => {passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator]);
     ```

2. **useRef Hook:**
   - Used for interacting with the DOM element (password input) to enable the clipboard copying functionality.
   - Example:
     ```javascript
     const passwordRef = useRef(null);
     passwordRef.current?.select();
     ```

3. **useCallback Hook:**
   - Optimized the `passwordGenerator` and `copyPasswordToClipboard` functions by memoizing them to avoid unnecessary re-creations.
   - Example:
     ```javascript
     const passwordGenerator = useCallback(() => {
       let pass = "";
       // Generate password logic
       setPassword(pass);
     }, [length, numberAllowed, charAllowed, setPassword]);
     ```

---

## 🗂 File Structure

```
  src/ 
    ├── App.jsx # Main React component for the password generator 
    ├── index.css # Global Tailwind CSS styles 
    ├── main.jsx # Vite entry point
```

---

## 🌟 The Road Ahead
This project provided a solid understanding of advanced React hooks. Moving forward, I plan to:
- Explore more complex state management using `useReducer`.
- Implement custom hooks for reusability.
- Enhance the UI further with animations and transitions.

---

## 🌐 Connect with Me
- [GitHub](https://github.com/mayurbadgujar03/)
- [LinkedIn](https://www.linkedin.com/in/mayur-badgujar-060a7927b/)
