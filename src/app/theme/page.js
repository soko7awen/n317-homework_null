"use client";

import { useState } from "react";
import Link from "next/link";

export default function ThemePage() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const wrapper =
    theme === "light"
      ? "min-h-screen bg-white text-black p-10"
      : "min-h-screen bg-black text-white p-10";

  return (
    <div className={wrapper}>
      <h1 className="text-3xl font-bold mb-4">Theme Switcher</h1>
      <p className="mb-6">This page allows you to switch between Light Mode and Dark Mode using a hook (useState).</p>
      <Link href="/" className="text-blue-400 underline">
        Go Back Home
      </Link>
      <br />
      <button
        onClick={toggleTheme}
        className="mt-6 px-4 py-2 border rounded"
      >
        Toggle to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}
