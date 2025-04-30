import type { Playback } from "@liqvid/playback";
import { combineRefs } from "@liqvid/utils/react";
/*
Warning! iOS will explode if you omit {pointerEvents: "all"}!
*/

export const fadeIn = (
  playback: Playback,
  startTime: number,
  duration = 300,
  delay = 0,
  target = 1,
) => {
  return playback.newAnimation(
    [
      { opacity: 0, pointerEvents: "none" },
      { opacity: target, pointerEvents: "all" },
    ],
    {
      delay: startTime + delay,
      duration,
      easing: "ease-in",
      fill: "both",
    },
  );
};

// export const fadeOut = <M>(
//   marker: M,
//   duration = 300,
//   delay = 0,
//   fill: FillMode = "both",
//   target = 1,
// ) => {
//   return playback.newAnimation(
//     [
//       { opacity: target, pointerEvents: "all" },
//       { opacity: 0, pointerEvents: "none" },
//     ],
//     {
//       delay: script.parseStart(marker) + delay,
//       fill,
//       easing: "ease-out",
//       duration,
//     },
//   );
// };

// export const fadeInOut = <M>(args: {
//   in: M;
//   out: M;
//   target?: number;
//   inDelay?: number;
//   inDuration?: number;
//   outDelay?: number;
//   outDuration?: number;
// }) =>
//   combineRefs(
//     fadeIn(args.in, undefined, args.inDelay, args.target),
//     fadeOut(args.out, undefined, args.outDelay, "forwards", args.target),
//   );

// export const travel = <M>(marker: M, duration = 300, delay = 0) => {
//   return playback.newAnimation(
//     [{ offsetDistance: "0%" }, { offsetDistance: "100%" }],
//     {
//       delay: script.parseStart(marker) + delay,
//       fill: "both",
//       easing: "ease-in-out",
//       duration,
//     },
//   );
// };

// LMFAO
// export const dashArray = <M>({
//   count,
//   delay,
//   duration,
//   easing = "ease-in",
//   fill = "both",
//   marker,
// }: {
//   count: number;
//   delay?: number;
//   duration: number;
//   easing?: string;
//   fill?: FillMode;
//   marker: M;
// }) => {
//   const frames: Keyframe[] = [];
//   for (let i = 0; i < count; ++i) {
//     const hist = ".3 .3".repeat(i);
//     for (let j = 1; j <= 20; ++j) {
//       frames.push({ strokeDasharray: `${hist} ${(j / 20) * 0.3} 100` });
//     }
//   }
//   frames.push({ strokeDasharray: ".3 .3".repeat(12) });
//   return playback.newAnimation(frames, {
//     delay: script.parseStart(marker),
//     duration,
//     easing,
//     fill,
//   });
// };
