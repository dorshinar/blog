"use client";

import { SunMoonIcon } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="grid size-8 cursor-pointer place-items-center rounded-lg hover:bg-gray-600"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunMoonIcon size={24}></SunMoonIcon>
    </button>
  );
}
