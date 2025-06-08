// Components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Kainos from "./pages/Kainos";
import Treneriai from "./pages/Treneriai";
import Apie from "./pages/Apie";
import Klubai from "./pages/Klubai";
import Taisykles from "./pages/Taisykles";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/kainos" element={<Kainos />} /> // Rout for Kainos page
        <Route path="/services/trainers" element={<Treneriai />} /> // Route for
        Trainers page
        <Route path="/services/alexgym" element={<Apie />} /> // Route for About
        page
        <Route path="/services/clubs" element={<Klubai />} /> // Route for Clubs
        page
        <Route path="/services/rules" element={<Taisykles />} /> // Route for
        Rules page
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
