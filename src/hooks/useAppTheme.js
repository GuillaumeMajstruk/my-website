import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

export function useAppTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  return { theme, setTheme };
}
