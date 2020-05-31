import React, { useState, useEffect, useMemo } from "react";
/* Theme */
import { ThemeProvider, createGlobalStyle } from "styled-components";
import themes, { Theme } from "./themes";
/* Context */
import { AppContext } from "./context";
/* Utils */
import { useMediaQuery } from "../../utils/hooks";
import { safeBrowserUse } from "../../utils/helpers";
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
  }
`;

interface AppProps {
  children: React.ReactNode;
}

function App({ children }: AppProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const isBig = useMediaQuery("(min-width: 1024px)");
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
