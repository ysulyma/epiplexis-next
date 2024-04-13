import "../pages/global.css";

import {darkModeScript} from "@/lib/api/dark-mode";
import Script from "next/script";

import {Providers} from "./providers";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:text-white">
        <Script id="dark-mode-script" strategy="beforeInteractive">
          {darkModeScript}
        </Script>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
