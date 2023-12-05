import type {MeshProps} from "@react-three/fiber";
import {forwardRef} from "react";
import {DoubleSide, type Mesh, type MeshToonMaterialParameters} from "three";

export const Point = forwardRef<
  Mesh,
  {r?: number} & MeshToonMaterialParameters & MeshProps
>(function Point(props, ref) {
  const {r = 0.2, color, ...attrs} = props;
  return (
    <mesh {...attrs} ref={ref}>
      <sphereGeometry args={[r, 32, 32]} />
      <meshToonMaterial color={color} side={DoubleSide} />
    </mesh>
  );
});
