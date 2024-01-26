import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateProperty from "./pages/CreateProperty";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home Page</Link>
        <Link to="/createProperty">Create Property</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createProperty" element={<CreateProperty />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
