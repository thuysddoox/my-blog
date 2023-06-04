import React, { useState } from 'react';
export type ThemeColorContextIProps = {
  themeApp: string;
  setThemeApp?: React.Dispatch<React.SetStateAction<string>>;
};
export const ThemeColorContext = React.createContext<ThemeColorContextIProps>({
  themeApp: 'light',
});

const ThemeProvider = ({ children }: { children: any }) => {
  const [themeApp, setThemeApp] = useState<string>('light');
  return <ThemeColorContext.Provider value={{ themeApp, setThemeApp }}>{children}</ThemeColorContext.Provider>;
};

export default ThemeProvider;
