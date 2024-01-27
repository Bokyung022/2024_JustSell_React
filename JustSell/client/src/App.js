import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import CreateProperty from "./pages/CreateProperty";
import EditProperty from "./pages/EditProperty";
import Filter from "./pages/Filter";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import Property from "./pages/Property";
import Registration from "./pages/Registration";

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
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/registration" element={<Registration />} />
          <Route path="/property/:id" element={<Property />} />
          <Route path="/editProperty/:id" element={<EditProperty />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
