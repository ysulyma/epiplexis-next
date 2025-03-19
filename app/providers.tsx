"use client";

import { syncDarkMode } from "@/lib/api/dark-mode";
import { syncHeight } from "@/lib/api/height";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ApplyDarkMode>{children}</ApplyDarkMode>;
}

function ApplyDarkMode({ children }: { children: React.ReactNode }) {
  syncDarkMode();
  syncHeight();

  return <>{children}</>;
}
