// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav"; // Import your new component
import Footer from "./components/Footer";
import Kainos from "./pages/Kainos";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/kainos" element={<Kainos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
