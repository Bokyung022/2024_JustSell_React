import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import CreateProperty from "./pages/CreateProperty";
import EditProperty from "./pages/EditProperty";
import Filter from "./pages/Filter";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import Login from "./pages/Login";
import Property from "./pages/Property";
import Registration from "./pages/Registration";
import Admin from "./pages/Admin";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Filter />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/createProperty" element={<CreateProperty />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/property/:id" element={<Property />} />
          <Route path="/editProperty/:id" element={<EditProperty />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
