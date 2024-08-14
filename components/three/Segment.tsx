import {useTime} from "@liqvid/playback/react";
import {lerp} from "@liqvid/utils/misc";
import {forwardRef, useImperativeHandle, useRef, useState} from "react";
import type {Mesh} from "three";
import {Curve, Plane, TubeGeometry, Vector3} from "three";

type Pt3 = [number, number, number];

interface Handle {
  mesh: Mesh;
  setTo(x: number, y: number, z: number): void;
}

interface Props {
  from: Pt3;
  to: Pt3;
  a?: (t: number) => number;
}

export const Segment = forwardRef<Handle, Props>(function Segment(props, ref) {
  /* curve */
  const [va] = useState(() => new Vector3(...props.from));
  const [vb] = useState(() => new Vector3(...props.to));

  const [curve] = useState(() => new Curve<Vector3>());
  curve.getPoint = (t, dest = new Vector3()) => {
    return dest.lerpVectors(va, vb, t);
  };

  /* animate segment */
  if (props.a) {
    const normal = new Vector3().subVectors(va, vb).normalize();
    const plane = new Plane(normal, 0);
    const da = -plane.distanceToPoint(va);
    const db = -plane.distanceToPoint(vb);
    let prev: number;

    useTime((t) => {
      const value = lerp(da, db, props.a(t));
      if (value !== prev) {
        const plane = new Plane(normal, value);
        (innerRef.current.material as Material).clippingPlanes = [plane];
        prev = value;
      }
    }, []);
  }

  // update tip
  useImperativeHandle(
    ref,
    () =>
      ({
        setTo(x: number, y: number, z: number) {
          vb.set(x, y, z);
          innerRef.current.geometry = new TubeGeometry(curve, undefined, 0.01);
        },
        mesh: innerRef.current,
      }) as Mesh & Handle,
    [curve, vb],
  );

  const innerRef = useRef<Mesh>();

  return (
    <mesh ref={innerRef} name="segment">
      <tubeGeometry args={[curve, undefined, 0.01]} />
      <meshToonMaterial color={0xffffff} />
    </mesh>
  );
});
