import { useTheme } from '../context/ThemeContext';

/*
 * A simple wrapper around ThemeContext to expose a more descriptive
 * interface.  Components can call `useDarkMode()` to get the current
 * theme and a function to toggle between modes.
 */
export default function useDarkMode() {
  const { theme, toggleTheme } = useTheme();
  return { theme, toggleTheme };
}