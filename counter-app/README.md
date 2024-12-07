# Counter App: Exploring the Power of React Hooks with Vite 🚀

Welcome to my **Counter App**, a small but meaningful project in my React learning journey! Powered by **Vite**, this app marks my first step into the world of React Hooks and functional components. 🌟

---

## 🌟 The Story: From Classes to Hooks

Before **React Hooks**, managing state in React relied heavily on class components, which were often verbose and complex. With the introduction of Hooks, React simplified state management and opened the door for more concise, readable code.

This Counter App is my first experiment with React Hooks, especially `useState`, which allows functional components to manage dynamic data without the need for class-based components.

---

## 🛠️ Features

- **Increment and Decrement Controls**: The counter value can be increased or decreased, with the value constrained between 0 and 20.
- **Live Updates**: The counter value dynamically updates as the user interacts with the buttons.
- **Bounds Error Handling**: Displays console warnings if the counter tries to exceed or drop below the set limits.

---

## 🎯 What I Learned

1. **React Hooks Basics**:  
   - This was my introduction to using **`useState`** in functional components, and how it simplifies state management compared to class components.

2. **Handling Dynamic State**:  
   - I learned how to use `useState` to declare state variables and how to update them dynamically with user interaction.

3. **Error Handling**:  
   - Implementing error handling when the counter exceeds defined bounds was a great exercise in managing side effects in React.

4. **The Speed of Vite**:  
   - Vite has truly revolutionized my development experience with its fast build times and lightning-fast refresh during development.

---

## 💻 How to Run the Project

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mayurbadgujar03/react-learning-journey.git

2. **Navigate to the project directory:**
    ```bash
   cd counter-app
    ```
4. **Install dependencies:**
    ```bash
   npm install
    ```
5. **Start the development server:**
    ```bash
   npm run dev
    ```

🗂️ File Structure
Here’s an overview of the project structure:
```bash
counter-app/ 
├── index.html         # Entry HTML file
├── src/<br />
│   ├── App.css        # Styling for the App component
│   ├── App.jsx        # Main React component
│   ├── index.css      # Global styles
│   ├── main.jsx       # Entry point for Vite and React
├── .gitignore         # Files and directories to ignore in Git
├── package.json       # Project dependencies and scripts
├── README.md          # Documentation for the project
├── vite.config.js     # Vite configuration file
```

# 🔮 The Road Ahead

Though this Counter App is simple, it lays the foundation for more complex React apps in the future. As I continue this journey, I’ll dive deeper into routing, context API, and global state management with libraries like Redux.

Stay tuned for more challenges, projects, and exciting adventures ahead! 🚀

---

# 🌐 Connect with Me

- [GitHub](https://github.com/mayurbadgujar03)
- [LinkedIn](https://www.linkedin.com/in/mayur-badgujar-060a7927b/)

---

# Pushing Your Project to GitHub

1. **Initialize Git in your project directory:**

    ```bash
    git init
    ```

2. **Add your files to the repository:**

    ```bash
    git add .
    ```

3. **Commit the files:**

    ```bash
    git commit -m "Initial commit: Counter app with useState hook"
    ```

4. **Link your repository:**

    ```bash
    git remote add origin https://github.com/mayurbadgujar03/react-learning-journey.git
    ```

5. **Push the project:**

    ```bash
    git push -u origin main
    ```

---

# Differences for Vite Setup

- The main entry point is `main.jsx` instead of `index.js`.
- The `index.html` file is in the root directory, unlike Create React App's default structure.
- Vite configuration is managed with `vite.config.js`, providing a fast, optimized development experience.
