import React from 'react';

export type DarkModeContextType = {
  is_dark_mode: boolean;
  setDarkMode: (is_dark:boolean) => void;
};

export const DarkModeContext = React.createContext<DarkModeContextType | null>(null);

export default DarkModeContext;
