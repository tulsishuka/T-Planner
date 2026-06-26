import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyTrips from "./pages/Dashboard/MyTrips";
import Documents from "./pages/Dashboard/Documents";
import Verify from "./pages/Verify/Verify";
import SharedTrip from "./pages/SharedTrip/SharedTrip";
import TripDetail from "./pages/Dashboard/TripDetail";
import ScrollToHash from "./components/ScrollToHash";


function App() {
  return (
    <>
      <Navbar />
<ScrollToHash/>
      <Routes>

        <Route path="/" element={<Home />} />
           
   <Route path="/TripDetail" element={< TripDetail/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
          <Route path="/share/:shareId" element={<SharedTrip />} />
<Route path="/verify" element={<Verify />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="trips" element={<MyTrips />} />
          <Route path="documents" element={<Documents />} />
         
        </Route>
      </Routes>
     

      <Footer />
    </>
  );
}

export default App;