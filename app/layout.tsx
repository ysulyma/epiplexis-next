"use client";

import {useSearchParams} from "next/navigation";

import "../pages/global.css";
import {syncDarkMode} from "@/lib/dark-mode";

export default function RootLayout({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const isDark = searchParams?.has("dark") ?? false;
  syncDarkMode();

  return (
    <html className={isDark ? "dark" : undefined} lang="en">
      <body className="dark:bg-stone-800 dark:text-white">{children}</body>
    </html>
  );
}
