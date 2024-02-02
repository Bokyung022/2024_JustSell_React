import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import { AuthContext } from "./helpers/AuthContext";

import Admin from "./pages/Admin";
import CreateProperty from "./pages/CreateProperty";
import EditProperty from "./pages/EditProperty";
import EditUser from "./pages/EditUser";
import Filter from "./pages/Filter";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import Login from "./pages/Login";
import Property from "./pages/Property";
import Registration from "./pages/Registration";

function App() {
  const [authState, setAuthState] = useState(false);

  

  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
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
            <Route path="/editUser/:userID" element={<EditUser />} />
          </Routes>
          <Footer />
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
