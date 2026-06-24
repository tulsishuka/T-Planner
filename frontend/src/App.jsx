import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/Hero/herosection";
import Itineraries from "./components/Itineraries";
import Destinations from "./components/Destinations";
import Concierge from "./components/concierge";
import Footer from "./components/layout/Footer";
import Register from "./components/Register";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/itineraries" element={<Itineraries />} />
         <Route path="/destinations" element={<Destinations />} />
                  <Route path="/Concierge" element={<Concierge />} />
                  <Route path="/register" element={<Register />} />

      </Routes>
      <Footer/>
    </>
  );
}

export default App;