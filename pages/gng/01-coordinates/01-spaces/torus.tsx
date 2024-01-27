import {ParametricGeometry} from "@/components/three/ParametricGeometry";
import {
  ControlsContext,
  PositionHelper,
} from "@/components/three/PositionHelper";
import {blue500, green400, green500, red500} from "@/components/three/theme";
import type {Pt3} from "@/lib/types";
import {OrbitControls} from "@react-three/drei";
import {Canvas, extend} from "@react-three/fiber";
import {Suspense, useState} from "react";
import {DoubleSide} from "three";

extend({ParametricGeometry});

const cameraPosition: Pt3 = [7.27, -5.04, 4.09];
const orbitTarget: Pt3 = [0, 0, 0];

const Torus = () => (
  <mesh name="torus">
    <torusGeometry args={[4, 1, 32, 64]} />
    <meshPhongMaterial color={green500} side={DoubleSide} />
  </mesh>
);

const Circle = () => (
  <mesh name="circle 1" position={[4, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
    <torusGeometry args={[1, 0.05, 32, 32]} />
    <meshStandardMaterial color={blue500} />
  </mesh>
);

const Circle2 = () => (
  <mesh name="circle 2" position={[0, 0, 0]}>
    <torusGeometry args={[5, 0.05, 16, 64]} />
    <meshStandardMaterial color={red500} />
  </mesh>
);

const Scene = () => {
  return (
    <>
      <ambientLight />
      <pointLight intensity={1.0} position={[5, 3, 5]} />
      <Torus />
      <Circle />
      <Circle2 />
    </>
  );
};

export default function CirclesOnTorus() {
  const [controls, setControls] = useState<any>();

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Canvas
        camera={{
          near: 0.1,
          far: 1000,
          up: [0, 0, 1],
          position: cameraPosition,
          zoom: 1,
        }}
        onCreated={({gl}) => {
          // wtf?
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
    </div>
  );
}
