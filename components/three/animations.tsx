import {setOpacity} from "@/lib/animation/three";
import {useTime} from "@liqvid/playback/react";
import {animate, bezier, easings} from "@liqvid/utils/animation";
import dynamic from "next/dynamic";
import {useRef, Children, cloneElement} from "react";
import type {Object3D} from "three";

export const FadeIn3 = dynamic(
  () =>
    import("liqvid").then(
      ({useScript}) =>
        function FadeIn3({
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

          const animOpacity = animate({
            startTime: script.parseStart(start) + delay,
            duration,
            endValue,
            easing: bezier(...easings.easeInCubic),
          });

          const ref = useRef<Object3D>(null);
          useTime((opacity) => {
            if (!ref.current) return;
            setOpacity(ref.current, opacity);
          }, animOpacity);

          return <>{cloneElement(Child, {ref})}</>;
        },
    ),
  {ssr: false},
);
