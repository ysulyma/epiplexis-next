import {Head, Html, Main, NextScript} from "next/document";

import {syncDarkMode} from "@/lib/dark-mode";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
