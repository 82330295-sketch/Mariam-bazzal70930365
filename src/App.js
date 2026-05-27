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
import CleaningServices from "./pages/CleaningServices";
import HomeRepairs from "./pages/HomeRepairs";
import FurnitureMoving from "./pages/FurnitureMoving";
import Babysitting from "./pages/Babysitting";
import WeddingCakes from "./pages/WeddingCakes";
import WeddingDecoration from "./pages/WeddingDecoration";
import WeddingPhotography from "./pages/WeddingPhotography";
import WeddingPlanning from "./pages/WeddingPlanning";
import BridalMakeup from "./pages/BridalMakeup";
import DJServices from "./pages/DJServices";
import MathTutoring from "./pages/MathTutoring";
import ChemistrySupport from "./pages/ChemistrySupport";
import ScienceSupport from "./pages/ScienceSupport";
import Request from "./pages/Request";
import OfficialExams from "./pages/OfficialExams";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="app">
      {location.pathname !== "/" && <Navbar />}

      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/education" element={<Education />} />
          <Route path="/home-services" element={<HomeServices />} />
          <Route path="/wedding-services" element={<WeddingServices />} />

          <Route path="/cleaning-services" element={<CleaningServices />} />
          <Route path="/home-repairs" element={<HomeRepairs />} />
          <Route path="/furniture-moving" element={<FurnitureMoving />} />
          <Route path="/babysitting" element={<Babysitting />} />

          <Route path="/wedding-cakes" element={<WeddingCakes />} />
          <Route path="/wedding-decoration" element={<WeddingDecoration />} />
          <Route path="/wedding-photography" element={<WeddingPhotography />} />
          <Route path="/wedding-planning" element={<WeddingPlanning />} />

          <Route path="/bridal-makeup" element={<BridalMakeup />} />
          <Route path="/dj-services" element={<DJServices />} />
          <Route path="/official-exams" element={<OfficialExams />} />
          <Route path="/math-tutoring" element={<MathTutoring />} />
          <Route path="/chemistry-support" element={<ChemistrySupport />} />
          <Route path="/science-support" element={<ScienceSupport />} />

          <Route path="/request" element={<Request />} />

        </Routes>
      </main>

      {location.pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;