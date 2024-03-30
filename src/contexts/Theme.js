import {createContext, useContext, useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {darkThemes, lightThemes} from '../constants';

const ThemeContext = createContext({
  theme: '',
  setTheme: () => {},
});

export const ThemeProvider = ({children}) => {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState(
    systemTheme === 'dark' ? darkThemes : lightThemes,
  );

  useEffect(() => {
    setTheme(systemTheme === 'dark' ? darkThemes : lightThemes);
  }, [systemTheme]);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
