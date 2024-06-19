import {TURN, pointRadius, resolution} from "@/lib/constants";
import {cylindrical} from "@/lib/parametrizations";
import {useEffect, useRef} from "react";
import {DoubleSide, type Mesh} from "three";

import {useStore} from "./store";

const r = 0.5;
const h = 2;

export function Cylinder(props: JSX.IntrinsicElements["group"]): JSX.Element {
  const point = useRef<Mesh>(null);

  useEffect(
    () =>
      useStore.subscribe(
        (state) => state.cylinder,
        ({z, theta}) => {
          point.current!.position.set(...cylindrical({r, z: z * h, theta}));
        },
      ),
    [],
  );

  const {z, theta} = useStore.getState().cylinder;

  return (
    <group {...props}>
      <mesh position={[0, 0, h / 2]} rotation={[TURN / 4, 0, 0]}>
        <cylinderGeometry args={[r, r, h, resolution, resolution, true]} />
        <meshStandardMaterial color="blue" side={DoubleSide} />
      </mesh>
      <mesh position={cylindrical({r, z: z * h, theta})} ref={point}>
        <sphereGeometry args={[pointRadius, resolution, resolution]} />
      </mesh>
    </group>
  );
}
