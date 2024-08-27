"use client";

import { IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "next-themes";
import { LuMoonStar } from "react-icons/lu";
import { useEffect, useState } from "react";

type Props = {};

export default function DarkAndLightBtn({}: Props) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  function toggleDark() {
    if (resolvedTheme === "light") setTheme("dark");
    else if (resolvedTheme === "dark") setTheme("light");
  }

  return (
    <div className="flex items-center gap-2">
      <p className="text-sm">
        {resolvedTheme === "light" ? "DARK" : "LIGHT"} MODE
      </p>
      <button onClick={toggleDark} className="text-2xl">
        {resolvedTheme === "light" ? <LuMoonStar /> : <IoSunnyOutline />}
      </button>
    </div>
  );
}
