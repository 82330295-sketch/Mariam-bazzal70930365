import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Offer from "./pages/Offer";
import Contact from "./pages/Contact";

import Education from "./pages/Education";
import HomeServices from "./pages/HomeServices";
import WeddingServices from "./pages/WeddingServices";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="app">
      {location.pathname !== "/" && <Navbar />}

      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/education" element={<Education />} />
          <Route path="/home-services" element={<HomeServices />} />
          <Route path="/wedding-services" element={<WeddingServices />} />

          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {location.pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;