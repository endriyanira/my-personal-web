import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { IoMoon, IoSunny } from "react-icons/io5";

const ThemeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="absolute p-2 rounded bg-gray-200 dark:bg-gray-700 right-0 border-[1px] m-2 z-10"
    >
      {darkMode ? <IoMoon /> : <IoSunny />}
    </button>
  );
};

export default ThemeToggle;
