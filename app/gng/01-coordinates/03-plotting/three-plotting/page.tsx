"use client";

import {
  ControlsContext,
  PositionHelper,
} from "@/components/three/PositionHelper";
import type {Pt3} from "@/lib/types";
import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {Suspense, useState} from "react";

import {CurveGraph} from "./components/Curve";
import {SurfaceGraph} from "./components/Surface";

const cameraPosition: Pt3 = [10.77, -10.98, 9.41];
const orbitTarget: Pt3 = [0, 0, 0];

const Scene = () => {
  return (
    <>
      <gridHelper rotation={[Math.PI / 2, 0, 0]} />
      <axesHelper />
      <ambientLight intensity={Math.PI} />
      <pointLight decay={0} intensity={Math.PI} position={[5, 3, 5]} />
      <CurveGraph />
      <SurfaceGraph />
    </>
  );
};

export default function Examples() {
  const [controls, setControls] = useState<any>();

  return (
    <main className="flex h-screen flex-col">
      <Canvas
        camera={{
          near: 0.1,
          far: 1000,
          up: [0, 0, 1],
          position: cameraPosition,
          zoom: 1,
        }}
      >
        <ControlsContext.Provider value={controls}>
          <PositionHelper />
          <OrbitControls
            enableDamping={false}
            target={orbitTarget}
            ref={(ref) => setControls(ref)}
          />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </ControlsContext.Provider>
      </Canvas>
    </main>
  );
}
