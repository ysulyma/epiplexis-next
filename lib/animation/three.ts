import {animate, bezier, easings} from "@liqvid/utils/animation";
import type {Playback} from "liqvid";
import type {Material, Mesh, Object3D} from "three";

/** Set opacity on THREE Mesh or Group */
export const setOpacity = (target: Object3D, opacity: number) => {
  if ("material" in target && target.material) {
    const material = target.material as Material;
    material.visible = opacity > 0;
    material.transparent = material.visible && opacity < 1;
    material.opacity = opacity;
  } else if (target.children) {
    for (const child of target.children) {
      setOpacity(child, opacity);
    }
  }
};

export const fadeIn3 = (
  playback: Playback,
  startTime: number,
  duration = 300,
  delay = 0,
  target = 1,
) => {
  const animOpacity = animate({
    startTime: startTime + delay,
    duration,
    endValue: target,
    easing: bezier(...easings.easeInCubic),
  });
  let update: (t: number) => void | undefined;

  return (target: Object3D) => {
    if (target === null) {
      playback.off("seek", update);
      playback.off("timeupdate", update);
      update = undefined;
      return;
    }
    let prev: number;
    update = (t: number) => {
      const opacity = animOpacity(t);
      if (opacity !== prev) setOpacity(target, opacity);
      prev = opacity;
    };
    playback.on("seek", update);
    playback.on("timeupdate", update);
    update(playback.currentTime);
  };
};

export const fadeOut3 = (
  startTime: number,
  duration = 300,
  delay = 0,
  target = 1,
) => {
  const animOpacity = animate({
    startTime: startTime + delay,
    duration,
    startValue: target,
    endValue: 0,
    easing: bezier(...easings.easeOutCubic),
  });
  let update: (t: number) => void;

  return (target: Object3D) => {
    if (target === null) {
      // playback.off("seek", update);
      // playback.off("timeupdate", update);
      // update = undefined;
      return;
    }
    // let prev;
    // update = (t: number) => {
    //   const opacity = animOpacity(t);
    //   if (opacity !== prev) setOpacity(target, opacity);
    //   prev = opacity;
    // };
    // playback.on("seek", update);
    // playback.on("timeupdate", update);
    // update(playback.currentTime);
  };
};

export const fadeOutIn3 = ({
  enter,
  enterDelay = 0,
  enterDuration = 300,
  exit,
  exitDelay = 0,
  exitDuration = 300,
  target = 1,
}: {
  enter: number;
  enterDelay?: number;
  enterDuration?: number;

  exit: number;
  exitDelay?: number;
  exitDuration?: number;

  target?: number;
}) => {
  const animOpacity = animate([
    {
      startTime: exit + exitDelay,
      duration: enterDuration,
      endValue: 0,
      startValue: target,
      easing: bezier(...easings.easeOutCubic),
    },
    {
      startTime: enter + enterDelay,
      duration: exitDuration,
      startValue: 0,
      endValue: target,
      easing: bezier(...easings.easeInCubic),
    },
  ]);
  // let update: (t: number) => void;

  return (target: Object3D) => {
    if (target === null) {
      // playback.off("seek", update);
      // playback.off("timeupdate", update);
      // update = undefined;
      return;
    }
    // let prev;
    // update = (t: number) => {
    //   const opacity = animOpacity(t);
    //   if (opacity !== prev) setOpacity(target, opacity);
    //   prev = opacity;
    // };
    // playback.on("seek", update);
    // playback.on("timeupdate", update);
    // update(playback.currentTime);
  };
};

export const fadeInOut3 = ({
  enter,
  enterDelay = 0,
  enterDuration = 300,
  exit,
  exitDelay = 0,
  exitDuration = 300,
  target = 1,
}: {
  enter: number;
  enterDelay?: number;
  enterDuration?: number;

  exit: number;
  exitDelay?: number;
  exitDuration?: number;

  target?: number;
}) => {
  const animOpacity = animate([
    {
      startTime: enter + enterDelay,
      duration: enterDuration,
      endValue: target,
      easing: bezier(...easings.easeInCubic),
    },
    {
      startTime: exit + exitDelay,
      duration: exitDuration,
      startValue: target,
      endValue: 0,
      easing: bezier(...easings.easeOutCubic),
    },
  ]);
  // let update: (t: number) => void;

  return (target: Object3D) => {
    if (target === null) {
      // playback.off("seek", update);
      // playback.off("timeupdate", update);
      // update = undefined;
      return;
    }
    // let prev;
    // update = (t: number) => {
    //   const opacity = animOpacity(t);
    //   if (opacity !== prev) setOpacity(target, opacity);
    //   prev = opacity;
    // };
    // playback.on("seek", update);
    // playback.on("timeupdate", update);
    // update(playback.currentTime);
  };
};

export const vis3 = (marker: number, markerEnd?: number) => {
  // let update: () => void;
  // const index = script.markerNumberOf(marker);
  // const endIndex =
  //   typeof markerEnd === "undefined"
  //     ? Infinity
  //     : script.markerNumberOf(markerEnd);

  return (target: Mesh) => {
    if (target === null) {
      // script.off("markerupdate", update);
      // update = undefined;
      return;
    }
    // update = () => {
    //   target.visible = between(index, script.markerIndex, endIndex);
    // };
    // script.on("markerupdate", update);
    // update();
  };
};
