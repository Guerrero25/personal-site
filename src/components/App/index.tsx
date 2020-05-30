import React, { useState, useEffect } from "react";
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
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');

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
  const [theme, setTheme] = useState<Theme>("dark");
  const isBig = useMediaQuery("(min-width: 1024px)");
  const [sidebarOpen, setSidebarOpen] = useState(isBig);

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
