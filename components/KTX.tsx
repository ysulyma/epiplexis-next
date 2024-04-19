"use client";

import katex from "katex";
import {useEffect, useRef} from "react";

import "katex/dist/katex.min.css";

export function KTX({
  className,
  children,
  display = false,
}: {
  className?: string;
  children: string;
  display?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // eslint-disable-next-line import/no-named-as-default-member
    katex.render(children ?? "", ref.current, {
      displayMode: display,
      throwOnError: false,
    });
  }, [children, display]);

  return <span className={className} ref={ref} />;
}
