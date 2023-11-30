"use client";

import katex from "katex";
import {useEffect, useRef} from "react";

import "katex/dist/katex.min.css";

export function KTX({
  className,
  children,
}: {
  className?: string;
  children: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    katex.render(children ?? "", ref.current, {
      throwOnError: false,
    });
  }, [children]);

  return <span className={className} ref={ref} />;
}
