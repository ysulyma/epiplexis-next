"use client";

import {ControlsContext} from "@/components/three/PositionHelper";
import type {Pt3} from "@/lib/types";
import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {Suspense, useState} from "react";

import {Form} from "./components/Form";
import {ImplicitSurface} from "./components/ImplicitSurface";
import {CuttingPlane} from "./components/Plane";

const cameraPosition: Pt3 = [3.24, -2.63, 1.71];
const orbitTarget: Pt3 = [0, 0, 0];

const Scene = () => {
  return (
    <>
      <gridHelper args={[4, 4]} rotation={[Math.PI / 2, 0, 0]} />
      <axesHelper />
      <ambientLight intensity={Math.PI} />
      <pointLight decay={0} intensity={Math.PI} position={[5, 3, 5]} />
      <ImplicitSurface />
      <CuttingPlane />
    </>
  );
};

export default function App() {
  const [controls, setControls] = useState<React.ComponentRef<
    typeof OrbitControls
  > | null>(null);

  return (
    <div className="flex h-screen w-screen flex-col">
      <Form />
      <Canvas
        className="flex-1 rounded-md bg-grid"
        camera={{
          near: 0.1,
          far: 1000,
          up: [0, 0, 1],
          position: cameraPosition,
          zoom: 1,
        }}
      >
        <ControlsContext.Provider value={controls}>
          {/* <PositionHelper /> */}
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
    </div>
  );
}
