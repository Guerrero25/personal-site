import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "@reach/router";
/* Theme */
import { ThemeProvider, createGlobalStyle } from "styled-components";
import themes, { Theme } from "./themes";
/* Context */
import { AppContext } from "./context";
/* Utils */
import { useMediaQuery } from "../../utils/hooks";
/* Components */
import MenuToggle from "../UI/MenuToggle";

const GlobalStyle = createGlobalStyle`
  html {
    overflow-x: hidden;
  }

  a,
  a:visited,
  a:focus,
  a:hover,
  a:active {
    color: inherit !important;
    text-decoration: none !important;
    outline: none !important;
  }

  * {
    font-family: "Poppins", Helvetica, sans-serif !important;
    color: ${({
      theme: {
        text: { titleColor },
      },
    }) => titleColor};
  }
`;

interface AppProps {
  children: React.ReactNode;
}

function App({ children }: AppProps) {
  const isBig = useMediaQuery("(min-width: 1024px)");
  const { pathname } = useLocation();

  const [theme, setTheme] = useState<Theme>("dark");
  const [sidebarOpen, setSidebarOpen] = useState(isBig);

  const selectedTheme = useMemo(() => {
    return themes[theme];
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    setSidebarOpen(isBig);
  }, [isBig]);

  useEffect(() => {
    if (!isBig) {
      setSidebarOpen(false);
    }
  }, [pathname]);

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      <AppContext.Provider
        value={{
          theme,
          setTheme,
          sidebarOpen,
          lang: "en",
        }}
      >
        <MenuToggle
          open={sidebarOpen}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />
        {children}
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
