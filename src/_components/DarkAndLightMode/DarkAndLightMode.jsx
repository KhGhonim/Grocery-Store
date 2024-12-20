"use client";

import { useEffect, useState } from "react";
import { CiCloudMoon, CiLight } from "react-icons/ci";

export default function DarkAndLightMode() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);

      document.documentElement.classList.add(savedTheme);
    } else {
      const defaultTheme = "light";
      localStorage.setItem("theme", defaultTheme);
      setTheme(defaultTheme);
      document.documentElement.classList.add(defaultTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="flex justify-between items-center gap-4">
      {/* Theme Toggle */}
      <div>
        {theme === "light" ? (
          <button onClick={toggleTheme}>
            <CiLight
              size={"30px"}
              className=" text-green-400 hover:text-green-500 transition-all duration-300 ease-out"
            />
          </button>
        ) : (
          <button>
            <CiCloudMoon
              onClick={toggleTheme}
              size={"30px"}
              className=" text-green-400 hover:text-green-500 transition-all duration-300 ease-out"
            />
          </button>
        )}
      </div>
    </div>
  );
}
