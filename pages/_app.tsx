import {syncDarkMode} from "@/lib/dark-mode";
import type {AppProps} from "next/app";
import "./global.css";

export default function MyApp({Component, pageProps}: AppProps) {
  syncDarkMode();

  return <Component {...pageProps} />;
}
