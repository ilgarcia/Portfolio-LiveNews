"use client";

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  // const { theme, setTheme } = useTheme();
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {theme === "dark" ? (
        <BsFillSunFill
          className="h-8 w-8 cursor-pointer text-yellow-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsMoonStarsFill
          className="h-8 w-8 cursor-pointer text-yellow-500"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}

export default DarkModeButton;
