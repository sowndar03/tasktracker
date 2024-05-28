import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Feature  from "./pages/Feature";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<h1>Sorry!... Page not found!</h1>} />
        <Route path="/" element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path="/feature" element={<Feature />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about'  element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
