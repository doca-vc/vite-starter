import useMediaQuery from '@mui/material/useMediaQuery';
import { createContext, Dispatch, FC, SetStateAction } from 'react';
import React from 'react';

import useLocalStorage from '@/hooks/useLocalStorage';

export const ChosenTheme = createContext<IChosenTheme>({} as IChosenTheme);

export const ChosenThemeProvider: FC = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [theme, setTheme] = useLocalStorage<ThemeName>('theme', prefersDarkMode ? 'dark' : 'light');

  return <ChosenTheme.Provider value={{ theme, setTheme }}>{children}</ChosenTheme.Provider>;
};

type ThemeName = 'dark' | 'light';
interface IChosenTheme {
  theme: ThemeName;
  setTheme: Dispatch<SetStateAction<ThemeName>>;
}
