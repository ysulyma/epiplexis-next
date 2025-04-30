"use client";

import katex from "katex";
import { forwardRef, useEffect, useRef } from "react";

import "katex/dist/katex.min.css";

import { combineRefs } from "@liqvid/utils/react";

export const KTX = forwardRef<
  HTMLSpanElement,
  {
    className?: string;
    children: string;
    display?: boolean;
  }
>(function KTX({ className, children, display = false }, fwdRef) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // eslint-disable-next-line import/no-named-as-default-member
    katex.render(children ?? "", ref.current, {
      displayMode: display,
      throwOnError: false,
    });
  }, [children, display]);

  return <span className={className} ref={combineRefs(ref, fwdRef)} />;
});
