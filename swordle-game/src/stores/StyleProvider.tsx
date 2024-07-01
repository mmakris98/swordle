import { ReactNode, useEffect, useState } from "react";
import { useRootStore } from "./RootStoreProvider";
import { ThemeProvider } from "styled-components";
import { observer } from "mobx-react";
import { ITheme } from "./ITheme";

export const ThemeStyleProvider = observer(function ThemeStyleProvider({ children }: { children: ReactNode }) {
  const { themeStore } = useRootStore();
  const [theme, setTheme] = useState<ITheme>(themeStore.currentTheme);

  useEffect(() => {
    setTheme(themeStore.currentTheme)
  }, [themeStore.currentTheme])

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
})