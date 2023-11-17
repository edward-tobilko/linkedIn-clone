import { useState } from "react";

const useLocalStorage = (key: string, initialState: boolean) => {
  const [localStorageState, setLocalStorageState] = useState(() => {
    try {
      let item = localStorage.getItem(key);

      return item ? JSON.parse(item) : initialState;
    } catch (error) {
      return initialState;
    }
  });

  const setItem = (item: string) => {
    setLocalStorageState(item);

    localStorage.setItem(key, JSON.stringify(item));
  };

  return [localStorageState, setItem];
};

export const useDarkMode = (initialState = true) => {
  const [darkModeTheme, setDarkModeTheme] = useLocalStorage(
    "darkMode",
    initialState,
  );

  const toggleDarkMode = () => {
    setDarkModeTheme(!darkModeTheme);
  };

  return { darkModeTheme, toggleDarkMode };
};
