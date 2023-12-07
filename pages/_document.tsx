import {syncDarkMode} from "@/lib/dark-mode";
import {Head, Html, Main, NextScript} from "next/document";

export default function Document() {
  syncDarkMode();

  return (
    <Html lang="en">
      <Head />
      <body className="dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
