import React, { useState, useEffect } from "react";
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

  ul, ol {
    padding: 0;
    list-style: none;
  }

  a,
  a:visited,
  a:focus,
  a:hover,
  a:active {
    color: inherit;
    text-decoration: none;
    outline: none;
  }

  body {
    font-family: "Poppins", Helvetica, sans-serif;
  }
`;

interface AppProps {
  children: React.ReactNode;
}

function App({ children }: AppProps) {
  const savedTheme = safeBrowserUse<Theme>(() => {
    return localStorage.getItem("theme") as Theme;
  });
  const [theme, setTheme] = useState<Theme>(savedTheme || "light");
  const isBig = useMediaQuery("(min-width: 1024px)");
  const [sidebarOpen, setSidebarOpen] = useState(isBig);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    setSidebarOpen(isBig);
  }, [isBig]);

  return (
    <ThemeProvider theme={themes[theme]}>
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
          show={!isBig}
          open={sidebarOpen}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />
        {children}
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
