import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Routes from "./Routes";
import Sidebar from "components/Sidebar";
import Footer from "components/Footer";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="page">
        <Routes />
      </div>
      <Sidebar />
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
