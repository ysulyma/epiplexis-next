import {FadeIn} from "@/components/animations/html";
import {
  Canvas,
  Html,
  KatexAnimations,
  KTX,
  LoadKaTeX,
  Player,
} from "@/components/liqvid";
import {FadeIn3, FadeInOut3} from "@/components/three/animations";
import {OrbitControls} from "@/components/three/OrbitControls";
import {Point} from "@/components/three/Point";
import {Segment} from "@/components/three/Segment";
import {blue600, green500, pink600, red600} from "@/components/three/theme";
import type {Pt3} from "@/lib/types";
import {animate, bezier, easings} from "@liqvid/utils/animation";
import type * as TLiqvid from "liqvid";
import {useEffect, useMemo, useState} from "react";
import {DoubleSide, Quaternion, Vector3} from "three";

import "katex/dist/katex.min.css";
import "liqvid/dist/liqvid.min.css";

const a = [5, 3, 2] as Pt3;
const b = [-1, 5, 4] as Pt3;
const va = new Vector3(...a);
const vb = new Vector3(...b);

const aux = [b[0], b[1], a[2]] as Pt3;

const vc = new Vector3(...aux);
const vab = new Vector3().subVectors(va, vb);
const vac = new Vector3().subVectors(vc, va);
const {raw} = String;

const q = new Quaternion();

q.setFromUnitVectors(new Vector3(0, 1, 0), new Vector3(0, 0, 1)).premultiply(
  new Quaternion().setFromUnitVectors(
    new Vector3(-1, 0, 0),
    vab.clone().setZ(0).normalize(),
  ),
);

const q2 = new Quaternion().setFromUnitVectors(
  new Vector3(-1, 0, 0),
  vac.clone().setZ(0).normalize(),
  // )
);
function useLiqvid() {
  const [Liqvid, setLiqvid] = useState<typeof TLiqvid | null>(null);

  useEffect(() => {
    import("liqvid").then(setLiqvid);
  }, []);

  return Liqvid;
}

export default function ThreeD() {
  const Liqvid = useLiqvid();
  const script = useMemo(() => {
    if (!Liqvid) return null;

    return new Liqvid.Script([
      ["back", "1"],
      ["aux", "1"],
      ["ab", "1"],
      ["c", "1"],
      ["plane", "1"],
      ["dab", "1"],
      ["dz", "1"],
      ["plane2", "1"],
      ["dac", "1"],
      ["qed", "1"],
    ]);
  }, [Liqvid]);

  if (!script) return null;

  return (
    <>
      <LoadKaTeX />
      <Player script={script}>
        <section
          className="h-full w-full dark:bg-stone-900 dark:text-white"
          data-affords="click"
        >
          <Canvas
            camera={{position: [11.01, 9.73, 8.79]}}
            onCreated={(state) => (state.gl.localClippingEnabled = true)}
          >
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls />
            <axesHelper args={[10]} />

            {/* A and B points */}
            <Point name="a" position={a} color={red600} />
            <Point name="b" position={b} color={blue600} />
            <Segment from={a} to={b} a={animateLine} />

            {/* Question */}
            <Html position={vb}>
              <span className="ml-72 block w-72">
                distance from <KTX className="text-red-600">(x_1,y_1,z_1)</KTX>{" "}
                to <KTX className="text-blue-600">(x_2,y_2,z_2)</KTX>?
              </span>
            </Html>

            {/* Pyth3 derivation */}
            <FadeIn3 start="aux">
              <Point name="aux" position={aux} color={pink600} />
            </FadeIn3>

            <Html position={a}>
              <FadeIn start="ab">
                <KTX
                  className="-translate-x-1/2 text-red-600"
                  display
                >{`A(x_1, y_1, z_1)`}</KTX>
              </FadeIn>
            </Html>
            <Html position={b}>
              <FadeIn start="ab">
                <KTX
                  className="-translate-x-1/2 text-blue-600"
                  display
                >{raw`B(x_2, y_2, z_2)`}</KTX>
              </FadeIn>
            </Html>
            <Html position={aux}>
              <FadeIn start="c">
                <KTX
                  className="-translate-x-1/2 text-pink-600"
                  display
                >{raw`C(x_2, y_2, z_1)`}</KTX>
              </FadeIn>
            </Html>

            {/* planes */}
            <FadeInOut3
              enter="plane"
              enterDuration={150}
              exit="plane2"
              target={0.5}
            >
              <mesh
                name="plane"
                position={vb.clone().addScaledVector(vab, 0.5)}
                quaternion={q}
              >
                <planeGeometry args={[vab.length() * 2, vab.length() * 1]} />
                <meshToonMaterial color={green500} side={DoubleSide} />
              </mesh>
            </FadeInOut3>
            <FadeIn3 start="plane2" endValue={0.5}>
              <mesh
                name="plane2"
                position={va.clone().addScaledVector(vac, 0.5)}
                quaternion={q2}
              >
                <planeGeometry args={[vac.length() * 2, vac.length()]} />
                <meshToonMaterial color={green500} side={DoubleSide} />
              </mesh>
            </FadeIn3>
          </Canvas>
        </section>
        <KatexAnimations>
          <KTX
            className="absolute bottom-20 right-8 rounded-md bg-[#fff1] p-2 text-white shadow-lg"
            display
            id="pyth3"
            data-from-first="dab"
          >{raw`
        \begin{aligned}
          \fadeIn{dab}{d(\pA, \pB)^2} &\fadeIn{dab}{=
          d(\pA, \pC)^2 + d(\pC, \pB)^2}\\
          &\fadeIn{dz}{= d(\pA, \pC)^2 + (z_2-z_1)^2}\\
          \fadeIn{dac}{d(\pA, \pC)^2} &\fadeIn{dac}{= (x_2 - x_1)^2 + (y_2 - y_1)^2}\\
          \fadeIn{qed}{d(\pA, \pB)^2} &\fadeIn{qed}{= (x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}
        \end{aligned}
      `}</KTX>
        </KatexAnimations>
      </Player>
    </>
  );
}

const animateLine = animate({
  startTime: 0,
  duration: 700,
  easing: bezier(...easings.easeInCubic),
});
