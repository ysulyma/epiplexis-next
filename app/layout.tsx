"use client";

import {syncDarkMode} from "@/lib/api/dark-mode";
import {syncHeight} from "@/lib/api/height";
import {useSearchParams} from "next/navigation";

import "../pages/global.css";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return <ApplyDarkMode>{children}</ApplyDarkMode>;
}

function ApplyDarkMode({children}: {children: React.ReactNode}) {
  const searchParams = useSearchParams();
  const isDark = searchParams?.has("dark") ?? false;
  // syncDarkMode();
  syncHeight();

  return (
    <html
      className={isDark ? "dark" : undefined}
      lang="en"
      // suppressHydrationWarning
    >
      <body className="dark:bg-stone-800 dark:text-white">{children}</body>
    </html>
  );
}
