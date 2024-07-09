import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { IoMoon, IoSunny } from "react-icons/io5";

const ThemeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded right-0 border-[1px] border-secondaryDarkText m-2 z-10 fixed ${
        darkMode ? "bg-primaryLightText" : "bg-[#ffff]"
      }`}
    >
      {darkMode ? (
        <IoMoon className="text-[#264DE4]" />
      ) : (
        <IoSunny className="text-[#F0C106]" />
      )}
    </button>
  );
};

export default ThemeToggle;
