import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Routes from "./Routes";
import Sidebar from "components/Sidebar";
import Footer from "components/Footer";
import { BrowserRouter } from "react-router";
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider
        attribute='class'
        defaultTheme='light'
        enableSystem
      >
        <Theme
          panelBackground='solid'
          grayColor='sand'
          accentColor='red'
        >
          <div className="page">
            <Routes />
          </div>
          <Sidebar />
          <Footer />
        </Theme>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
