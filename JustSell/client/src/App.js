import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import CreateProperty from "./pages/CreateProperty";
import Filter from "./pages/Filter";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import Property from "./pages/Property";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home Page</Link>
        <Link to="/search">Search</Link>
        <Link to="/listings">Listings</Link>
        <Link to="/createProperty">Create Property</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Filter />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/createProperty" element={<CreateProperty />} />
          <Route path="/property/:id" element={<Property />} />
        </Routes>
      </Router>
    </div>
  );
}



export default App;


