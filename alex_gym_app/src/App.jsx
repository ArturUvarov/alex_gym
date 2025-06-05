// src/App.jsx
import React from "react";
import BookList from "./components/TestNav"; // Import your new component
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>GraphQL Client with React and Apollo Server</h1>
      <BookList /> {/* Render your BookList component */}
    </div>
  );
}

export default App;
