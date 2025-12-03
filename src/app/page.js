"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-10 font-sans">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <p className="mb-6">Click below to visit the Theme Switcher.</p>
      <Link href="/theme" className="text-blue-600 underline">
        Go to Theme Switcher
      </Link>
    </div>
  );
}
