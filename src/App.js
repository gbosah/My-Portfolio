import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "../src/components/Home"
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";


function App() {

  const [click, setClick] = useState(false)

  function handleClick() {
    setClick(!click)
  }

  const closeMenu = () => setClick(false)

  return (
     <BrowserRouter>
          <Navbar handleClick={handleClick}
                  click={click}
          />
          <MobileNav handleClick={handleClick}
                     closeMenu={closeMenu}
                     click={click}
          />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
     </BrowserRouter>
  )
}

export default App;
