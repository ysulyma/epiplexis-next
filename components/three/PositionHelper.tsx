/* eslint-disable @typescript-eslint/no-use-before-define */
import type {OrbitControls} from "@react-three/drei";
import {useThree} from "@react-three/fiber";
import {createContext, useContext, useEffect} from "react";
import type {Vector3} from "three";

export type RefHandle<T> = T extends React.ForwardRefExoticComponent<infer C>
  ? C
  : never;

export const ControlsContext = createContext<
  undefined | RefHandle<typeof OrbitControls>
>(undefined);

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
  return Object.values(vec).map((x) => parseFloat(x.toFixed(precision)));
}
