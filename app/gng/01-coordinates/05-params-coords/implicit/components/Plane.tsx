import {useSchemed} from "@/lib/api/dark-mode";
import {useEffect, useRef} from "react";
import {DoubleSide} from "three";

import {zSignal} from "../state";

export function CuttingPlane() {
  const ref = useRef<THREE.Mesh>(null);
  const z = zSignal.get();

  useEffect(
    () =>
      zSignal.subscribe((z) => {
        ref.current?.position.setZ(z);
      }),
    [],
  );

  const color = useSchemed({light: 0x333333, dark: 0xffffff});

  return (
    <mesh ref={ref} renderOrder={1} position={[0, 0, z]}>
      <planeGeometry args={[4, 4]} />
      <meshPhongMaterial
        color={color}
        opacity={0.05}
        side={DoubleSide}
        transparent
      />
    </mesh>
  );
}
