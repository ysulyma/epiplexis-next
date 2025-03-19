import { pointRadius, resolution } from "@/lib/constants";
import { useEffect, useRef } from "react";
import { BoxGeometry, type Mesh } from "three";

import { useStore } from "./store";

const box = new BoxGeometry(1, 1, 1);

export function Cube(props: JSX.IntrinsicElements["group"]): JSX.Element {
  const point = useRef<Mesh>(null);

  useEffect(
    () =>
      useStore.subscribe(
        (state) => state.cube,
        (pos) => {
          point.current?.position.set(...pos);
        },
      ),
    [],
  );

  const cube = useStore.getState().cube;

  return (
    <group {...props}>
      <lineSegments name="cube skeleton" position={[0.5, 0.5, 0.5]}>
        <edgesGeometry args={[box]} />
        <lineBasicMaterial color="white" />
      </lineSegments>
      <mesh name="cube" position={[0.5, 0.5, 0.5]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" opacity={0.5} transparent />
      </mesh>
      <mesh name="cube point" position={cube} ref={point}>
        <sphereGeometry args={[pointRadius, resolution, resolution]} />
      </mesh>
    </group>
  );
}
