import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateProperty from "./pages/CreateProperty";
import Filter from "./pages/Filter";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home Page</Link>
        <Link to="/search">Search</Link>
        <Link to="/createProperty">Create Property</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createProperty" element={<CreateProperty />} />
          <Route path="/search" element={<Filter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
