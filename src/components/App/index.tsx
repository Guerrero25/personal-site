import React, { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import themes, { Theme } from "./themes";

import { AppContext } from "./context";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

  ul, ol {
    padding: 0;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
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

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <AppContext.Provider
        value={{
          lang: "en",
          theme,
          setTheme,
        }}
      >
        {children}
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
