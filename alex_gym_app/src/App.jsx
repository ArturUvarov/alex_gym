// Components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Kainos from "./pages/Kainos";
import Treneriai from "./pages/Treneriai";
import Apie from "./pages/Apie";
import Klubai from "./pages/Klubai";
import Taisykles from "./pages/Taisykles";
import GrupinesTreniruotes from "./pages/GrupinesTreniruotes";
import SignUp from "./pages/SignIUp";
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} /> // Route for the main page
        <Route path="/kainos" element={<Kainos />} /> // Rout for Kainos page
        <Route path="/services/trainers" element={<Treneriai />} /> // Route for
        Trainers page
        <Route path="/services/alexgym" element={<Apie />} /> // Route for About
        page
        <Route path="/services/clubs" element={<Klubai />} /> // Route for Clubs
        page
        <Route path="/services/rules" element={<Taisykles />} /> // Route for
        Rules page
        <Route path="/services/group" element={<GrupinesTreniruotes />} /> //
        Route for Group Training page
        <Route path="/sign-up" element={<SignUp />} /> // Route for Sign Up page
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
