import type {AppProps} from "next/app";
import "./global.css";
import {syncDarkMode} from "@/lib/dark-mode";

export default function MyApp({Component, pageProps}: AppProps) {
  syncDarkMode();

  return <Component {...pageProps} />;
}
