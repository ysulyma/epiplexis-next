"use client";

import {
  ControlsContext,
  PositionHelper,
} from "@/components/three/PositionHelper";
import type {Pt3} from "@/lib/types";
import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {Suspense, useState} from "react";

import {Controls} from "./Controls";
import {Cube} from "./Cube";
import {Cylinder} from "./Cylinder";
import {Torus} from "./Torus";

const cameraPosition: Pt3 = [2.31, -5.86, 2.11];
const orbitTarget: Pt3 = [2.3, -0.29, -1.81];

const Scene = () => {
  return (
    <>
      <ambientLight intensity={3} />
      <pointLight intensity={30} position={[0, -2, 2]} />
      <pointLight intensity={30} position={[0, 2, 2]} />
      <pointLight intensity={30} position={[4, -1, 2]} />
      <Cube position={[-3, -0.5, -0.5]} />
      <Cylinder position={[0, 0, -1]} />
      <Torus position={[5, 0, 0]} />
    </>
  );
};

export default function Examples() {
  const [controls, setControls] = useState<any>();

  return (
    <main className="flex h-screen flex-col">
      <Controls />
      <Canvas
        camera={{
          near: 0.1,
          far: 1000,
          up: [0, 0, 1],
          position: cameraPosition,
          zoom: 1,
        }}
        onCreated={({gl}) => {
          gl.setClearColor("#252934");
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
