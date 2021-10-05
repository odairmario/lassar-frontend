import React from 'react';
import DarkModeContext from '../contexts/DarkMode'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const DarkModeProvider: React.FC<React.ReactNode>=({children}) => {
  const [is_dark_mode,setIsDarkMode] = React.useState(
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches 
      );
  const setDarkMode = (is_dark:boolean) => { setIsDarkMode(is_dark); };
  const theme = React.useMemo(()=>
    createTheme({
      palette: {
        mode: is_dark_mode ? 'dark' : 'light'
      },
    }), [is_dark_mode]);

  return (
      <DarkModeContext.Provider value={{ is_dark_mode,setDarkMode}} >
        <ThemeProvider theme={theme} >
          <CssBaseline />
          {children}
        </ThemeProvider>
      </DarkModeContext.Provider>
      )

};
export default DarkModeProvider;
