import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import themes, { Theme } from "./themes";

import { AppContext } from "./context";

interface AppProps {
  children: React.ReactNode;
}

function App({ children }: AppProps) {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <ThemeProvider theme={themes[theme]}>
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
