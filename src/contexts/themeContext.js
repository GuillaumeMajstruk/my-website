import { createContext, useCallback, useEffect, useState } from "react";

export const ThemeContext = createContext({
  theme: null,
  setTheme: () => {}
});

export function ThemeProvider({children}) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
      return;
    }
    updateTheme('light');
  }, []);

  const updateTheme = (t) => {
    localStorage.setItem('theme', t);
    setTheme(t);
  };
  
  const contextValue = {
    theme,
    setTheme: useCallback((theme) => updateTheme(theme), [])
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}
