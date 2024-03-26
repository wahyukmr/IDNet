import {createContext, useContext, useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {darkTheme, lightTheme} from '../utils/colors';

const ThemeContext = createContext({
  theme: '',
  setTheme: () => {},
});

export const ThemeProvider = ({children}) => {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState(
    systemTheme === 'dark' ? darkTheme : lightTheme,
  );

  useEffect(() => {
    setTheme(systemTheme === 'dark' ? darkTheme : lightTheme);
  }, [systemTheme]);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
