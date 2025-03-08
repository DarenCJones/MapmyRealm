import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Link, Routes, Route } from "react-router";
import About from "./routes/About";
import Tutorial from "./routes/Tutorial";
import Contact from "./routes/Contact";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <nav>
        <Link to="/">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/tutorial">Tutorial</Link>
      </nav>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="tutorial" element={<Tutorial />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
