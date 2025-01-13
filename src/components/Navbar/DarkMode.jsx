import React, { useEffect, useState } from "react";
import { FiMoon } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const elemetn = document.documentElement;

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      elemetn.classList.add("light");
      elemetn.classList.add("dark");
    } else {
      elemetn.classList.remove("light");
      elemetn.classList.remove("dark");
    }
  }, [theme]); // إضافة dependency array

  return (
    <div className="relative">
      <IoSunnySharp
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        style={{ fontSize: "35px" }} // تكبير الأيقونة
        className={`cursor-pointer absolute right-0 z-10 text-brandYellow ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } transition-all duration-300`}
      />
      <IoMoonSharp
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        style={{ fontSize: "35px" }} // تكبير الأيقونة
        className="cursor-pointer text-white dark:text-primary"
      />
    </div>
  );
};

export default DarkMode;
