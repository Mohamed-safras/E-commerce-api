import React, { createContext, useState } from "react";

export const ThemeContex = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const changeTheme = (theme) => {
    setTheme(theme);
  };

  return (
    <ThemeContex.Provider value={{ changeTheme, theme }}>
      {children}
    </ThemeContex.Provider>
  );
};
