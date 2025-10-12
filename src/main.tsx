import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Routes from "./Routes";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { BrowserRouter } from "react-router";
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider
        attribute='class'
        defaultTheme='dark'
        enableSystem
      >
        <Theme
          panelBackground='solid'
          grayColor='gray'
          accentColor='teal'
        >
          <Navbar />
          <Routes />
          <Footer />
        </Theme>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
