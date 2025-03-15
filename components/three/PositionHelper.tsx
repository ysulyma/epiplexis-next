/* eslint-disable @typescript-eslint/no-use-before-define */
import type {OrbitControls} from "@react-three/drei";
import {useThree} from "@react-three/fiber";
import {createContext, useContext, useEffect} from "react";
import type {Vector3} from "three";

export const ControlsContext = createContext<React.ComponentRef<
  typeof OrbitControls
> | null>(null);

export function useControls() {
  return useContext(ControlsContext);
}

export function PositionHelper() {
  const {camera} = useThree();
  const controls = useControls();

  useEffect(() => {
    const log = (e: MouseEvent) => {
      if (!controls) return;
      if (!e.getModifierState("Shift")) {
        return;
      }

      console.log(fmtVec(camera.position));
      console.log(fmtVec(controls.target as Vector3));
    };

    document.body.addEventListener("click", log);

    return () => {
      document.body.removeEventListener("click", log);
    };
  }, [camera, controls]);

  return null;
}

function fmtVec(vec: Vector3, precision = 2): number[] {
  return Object.values(vec).map((x) => Number.parseFloat(x.toFixed(precision)));
}
