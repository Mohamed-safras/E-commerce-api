import { useEffect, useState } from "react";

const useSystemDefaultTheme = () => {
  const getDefaultTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getDefaultTheme());

  const mqListner = (e) => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    const darkThMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThMq.addListener(mqListner);

    return () => darkThMq.removeListener(mqListner);
  }, []);
  return isDarkTheme;
};

export default useSystemDefaultTheme;
