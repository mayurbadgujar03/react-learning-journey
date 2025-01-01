# Background Color Changer: Exploring React State & Tailwind CSS 🎨

This project demonstrates the use of React state, the `onClick` event handler, and Tailwind CSS to build a simple app that changes the background color of the screen dynamically.

## 🛠 Features

### Dynamic Background Color Change:
- Users can change the background color by clicking on the color buttons.
- Colors update instantly using React's state management.

### Styled with Tailwind CSS:
- Responsive and modern design using Tailwind's utility classes.
- Smooth transitions with Tailwind's `duration-200` class.

## 📚 What I Learned

### React State (`useState`):
- Used `useState` to track the current background color.
  
  Example:
  ```jsx
  const [color, setColor] = useState("olive");
  ```

## **Handling Events with onClick:**
- Implemented event handlers for the buttons to update the state and trigger UI changes.
- Example:
    ```
      <button onClick={() => setColor("red")}>Red</button>
    ```
## **Styling with Tailwind CSS:**
- Created responsive buttons using classes like `rounded-full`, `shadow-2xl`, and `text-white`.
- Applied dynamic styles to update the `backgroundColor` property.

## **🗂 File Structure**
  ```
      src/
    ├── App.jsx            # Main React component for background changer
    ├── index.css          # Global Tailwind CSS styles
    ├── main.jsx           # Vite entry point

  ```
## **💻 How to Run**
1. Clone the repository:
```
git clone https://github.com/mayurbadgujar03/react-learning-journey.git
```
2. Navigate to the project directory:
```
cd bg-changer
```
3. Install dependencies:
```
npm install
```
4. Start the development server:
```
npm run dev
```


## **🌟 The Road Ahead**
This project highlights the basics of state and event handling in React. As I progress, I'll explore more complex state management solutions, like useReducer and Context API, and enhance the UI with animations using Tailwind CSS.
