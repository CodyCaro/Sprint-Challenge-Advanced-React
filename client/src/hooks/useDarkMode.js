// import { useLocalStorage } from "./useLocalStorage";
import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [darkMode, setDarkMode, setLocalValue] = useState("dark", false);

  useEffect(() => {
    console.log(darkMode);
    if (darkMode === true) {
      window.document.body.classList.add("dark-mode");
    } else {
      window.document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export default useDarkMode;
