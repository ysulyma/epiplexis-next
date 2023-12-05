import type {Pt3} from "@/lib/types";
import {OrbitControls as DreiOrbitControls} from "@react-three/drei";
import {extend, useFrame, useThree} from "@react-three/fiber"; /* camera */
import {useEffect, useRef} from "react";

export function OrbitControls(props: {target?: Pt3}) {
  const $three = useThree();

  const {
    camera,
    gl: {domElement},
    scene,
  } = $three;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).scene = scene;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).$three = $three;

  // set correct up direction
  camera.up.set(0, 0, 1);

  // controls
  const controls = useRef<DreiOrbitControls>();
  useFrame(() => controls.current?.update());
  useEffect(() => {
    if (props.target) {
      controls.current.target.set(...props.target);
    }
    console.log(controls.current);
    $three.controls = controls.current;
  }, [$three, props.target]);

  // // point camera
  // useEffect(() => {
  //   camera.position.set(4.3, -9.5, 6);
  //   // camera.lookAt(new THREE.Vector3(0, 0, 0));
  //   // camera.up.set(0, 0, 1);
  // }, []);

  return (
    <DreiOrbitControls
      args={[camera, domElement]}
      enableDamping={false}
      ref={controls}
    />
  );
}
