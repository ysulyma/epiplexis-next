"use client";

import {syncDarkMode} from "@/lib/dark-mode";
import {useSearchParams} from "next/navigation";
import {Suspense} from "react";

import "../pages/global.css";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <Suspense>
      <ApplyDarkMode>{children}</ApplyDarkMode>
    </Suspense>
  );
}

function ApplyDarkMode({children}: {children: React.ReactNode}) {
  const searchParams = useSearchParams();
  const isDark = searchParams?.has("dark") ?? false;
  syncDarkMode();

  return (
    <html className={isDark ? "dark" : undefined} lang="en">
      <body className="dark:bg-stone-800 dark:text-white">{children}</body>
    </html>
  );
}
