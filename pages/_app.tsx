import {initializeDarkMode, syncDarkMode} from "@/lib/api/dark-mode";
import {syncHeight} from "@/lib/api/height";
import type {AppProps} from "next/app";

import "./global.css";

export default function MyApp({Component, pageProps}: AppProps) {
  initializeDarkMode();
  syncDarkMode();
  syncHeight();

  return <Component {...pageProps} />;
}
