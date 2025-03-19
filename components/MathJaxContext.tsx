"use client";

import type { MathJax3Config } from "better-react-mathjax";
import { MathJaxContext } from "better-react-mathjax";
import { useMemo } from "react";

type Feature = "input";

export function EpiplexisMathJaxContext({
  features = [],
  ...props
}: Omit<
  Extract<React.ComponentProps<typeof MathJaxContext>, { version?: 3 }>,
  "config"
> & {
  features?: Feature[];
}) {
  const config = useMemo(() => {
    const config: MathJax3Config = {
      loader: {
        load: ["[tex]/color"] as string[],
        paths: {},
      },
      tex: {
        packages: { "[+]": ["color"] },
      },
    };

    if (features.length > 0) {
      config.loader.paths.custom =
        "https://cdn.jsdelivr.net/gh/ysulyma/mathjax-extensions/";
    }

    if (features.includes("input")) {
      config.loader.load.push("[custom]/forminput.js");
      config.tex.packages["[+]"].push("input");
    }

    return config;
  }, [features]);

  return <MathJaxContext config={config} {...props} />;
}
