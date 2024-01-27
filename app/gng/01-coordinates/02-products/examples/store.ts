import {TWOPI} from "@/lib/constants";
import type {Pt3} from "@/lib/types";
import create from "zustand";
import {subscribeWithSelector} from "zustand/middleware";

export interface State {
  /** Cube coordinates [x, y, z] */
  cube: Pt3;

  /** Cylinder coordinates */
  cylinder: {
    z: number;

    theta: number;
  };

  /** Torus [theta, phi] coordinates */
  torus: [number, number];
}

export const useStore = create(
  subscribeWithSelector<State>(() => ({
    cube: [1, 0.5, 0.5] as Pt3,
    cylinder: {z: 0.5, theta: 0.75 * TWOPI},
    torus: [0.05 * TWOPI, 0.7 * TWOPI],
  })),
);
