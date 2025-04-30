import "../pages/global.css";

import Script from "next/script";

import { darkModeScript } from "@/lib/api/dark-mode-server";

import { Providers } from "./providers";

// apparently necessary for tailwind to generate this class
("dark:bg-stone-800");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:text-white" suppressHydrationWarning={true}>
        <Script id="dark-mode-script" strategy="beforeInteractive">
          {darkModeScript}
        </Script>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
