import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

const defaultValue = {
  isDarkMode: false,
  toggle: () => {}
};

const ThemeContext = createContext(defaultValue);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleHandler = useCallback(() => {
    setIsDarkMode((prevState) => !prevState);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggle: toggleHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
