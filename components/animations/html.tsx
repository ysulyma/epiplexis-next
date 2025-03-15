import dynamic from "next/dynamic";
import {Children, cloneElement, useMemo} from "react";

export const FadeIn = dynamic(
  () =>
    import("liqvid").then(
      ({useScript}) =>
        function FadeIn({
          children,
          delay = 0,
          duration = 300,
          start = 0,
          endValue = 1,
        }: {
          children: React.ReactNode;
          duration?: number;
          delay?: number;
          endValue?: number;
          start?: string | number;
        }) {
          const Child = Children.only(children) as React.ReactElement;
          const script = useScript();

          const animation = useMemo(
            () =>
              script.playback.newAnimation(
                [
                  {opacity: 0, pointerEvents: "none"},
                  {opacity: endValue, pointerEvents: "all"},
                ],
                {
                  delay: script.parseStart(start) + delay,
                  fill: "both",
                  easing: "ease-in",
                  duration,
                },
              ),
            [delay, duration, endValue, script, start],
          );

          const ref = (value) => {
            if (value === null) {
              animation(value);
            } else if (typeof value === "object" && "domElement" in value) {
              animation(value.domElement);
            }
          };

          return <>{cloneElement(Child, {ref})}</>;
        },
    ),
  {ssr: false},
);
