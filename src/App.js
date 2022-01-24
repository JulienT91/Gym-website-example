import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./View/Home";
import Services from "./View/Services";
import Contact from "./View/Contact";
import NavBar from "./Components/NavBar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Services" exact element={<Services />} />
          <Route path="/Contact" exact element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
