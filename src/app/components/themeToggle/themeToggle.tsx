// components/ThemeToggle.tsx
import { useEffect, useState } from "react";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <label className="cursor-pointer grid place-items-center">
      <input
        type="checkbox"
        value="synthwave"
        className="toggle theme-controller bg-black dark:bg-white row-start-1 col-start-1 col-span-2"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <svg
        className="col-start-1 row-start-1 dark:stroke-black dark:fill-black stroke-white fill-white place-items-center ml-[2px] md:max-lg:ml-[5px]"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
      <svg
        className="col-start-2 row-start-1 dark:stroke-black dark:fill-black stroke-white fill-white mr-[2px] md:max-lg:mr-[5px]"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </label>
  );
};

export default ThemeToggle;
