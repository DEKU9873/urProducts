import React, { useEffect, useState } from "react";
import Light from "../../assets/light.png";
import Dark from "../../assets/dark.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem
    ("theme")? localStorage.getItem("theme") : "light");

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
    })
  return (
    <div className="relative">
      <img
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={Light}
        alt=""
        className={`w-12 cursor-pointer absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } transition-all duration-300`}
      />
      <img
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      src={Dark} alt="" className={`w-12 cursor-pointer `} />
    </div>
  );
};

export default DarkMode;
