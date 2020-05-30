import React, { useContext } from "react";
import { Theme } from "./themes";

interface AppContextProps {
  lang: "en" | "es";
  theme: Theme;
  setTheme?: (theme: Theme) => void;
  sidebarOpen: boolean;
}

export const AppContext = React.createContext<AppContextProps>({
  lang: "en",
  theme: "dark",
  setTheme: (theme: Theme) => {},
  sidebarOpen: false,
});

export function useAppContext() {
  const AppContextProps = useContext(AppContext);

  return AppContextProps;
}
