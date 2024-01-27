/* eslint-disable @typescript-eslint/no-use-before-define */
import {CircleControl} from "@/components/CircleControl";
import {KTX} from "@/components/KTX";
import {DEGREES, step} from "@/lib/constants";
import type {Pt3} from "@/lib/types";
import {truncate} from "@/lib/utils";
import {range} from "@liqvid/utils/misc";
import {useCallback} from "react";
import shallow from "zustand/shallow";

import {useStore} from "./store";

const min = 0;
const max = 1;

const {raw} = String;

const getValue = (e: React.ChangeEvent<HTMLInputElement>) =>
  parseFloat(e.currentTarget.value);

function setIndex(n: number) {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    useStore.setState((prev) => ({
      cube: [
        ...prev.cube.slice(0, n),
        parseFloat(e.currentTarget.value),
        ...prev.cube.slice(n + 1),
      ] as Pt3,
    }));
  };
}

const NumberInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className="ml-2 w-16 outline outline-1 outline-gray-200"
    type="number"
    {...props}
  />
);

function setIndexTorus(n: number) {
  return (theta: number) => {
    useStore.setState((prev) => ({
      torus: [...prev.torus.slice(0, n), theta, ...prev.torus.slice(n + 1)] as [
        number,
        number,
      ],
    }));
  };
}

export function Controls() {
  return (
    <form className="flex w-full justify-around pt-2">
      <CubeTable />
      <CylinderTable />
      <TorusTable />
    </form>
  );
}

function CubeTable() {
  const cube = useStore((state) => state.cube);
  return (
    <table>
      <caption>
        <KTX>I\times I\times I</KTX>
      </caption>
      <tbody>
        {range(0, 3).map((n) => (
          <tr key={n}>
            <td>
              <input
                {...{min, max, step}}
                onChange={setIndex(n)}
                type="range"
                value={cube[n]}
              />
            </td>
            <td>
              <NumberInput
                {...{min, max, step}}
                onChange={setIndex(n)}
                value={cube[n]}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function CylinderTable() {
  const {z, theta} = useStore((state) => state.cylinder, shallow);

  const onChangeZ = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      useStore.setState((prev) => ({
        cylinder: {
          ...prev.cylinder,
          z: parseFloat(e.currentTarget.value),
        },
      })),
    [],
  );

  const onChangeTheta = useCallback(
    (theta: number) =>
      useStore.setState((prev) => ({
        cylinder: {
          ...prev.cylinder,
          theta,
        },
      })),
    [],
  );

  return (
    <table>
      <caption>
        <KTX>I\times S^1</KTX>
      </caption>
      <tbody>
        <tr>
          <td>
            <input
              onChange={onChangeZ}
              {...{min, max, step}}
              type="range"
              value={z}
            />
          </td>
          <td>
            <NumberInput onChange={onChangeZ} {...{min, max, step}} value={z} />
          </td>
        </tr>
        <tr>
          <td>
            <CircleControl onChange={onChangeTheta} value={theta} />
          </td>
          <td>
            <NumberInput
              onChange={(e) => onChangeTheta(getValue(e) * DEGREES)}
              min={0}
              max={360}
              step={step}
              value={truncate(theta / DEGREES)}
            />
            <KTX>{raw`{}^\circ`}</KTX>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

/** Controls for the torus */
function TorusTable() {
  const torus = useStore((state) => state.torus);

  return (
    <table>
      <caption>
        <KTX>S^1\times S^1</KTX>
      </caption>
      <tbody>
        {range(0, 2).map((i) => (
          <tr key={i}>
            <td>
              <CircleControl onChange={setIndexTorus(i)} value={torus[i]} />
            </td>
            <td>
              <NumberInput
                onChange={(e) => setIndexTorus(i)(getValue(e) * DEGREES)}
                min={0}
                max={360}
                step={step}
                value={truncate(torus[i] / DEGREES)}
              />
              <KTX>{raw`{}^\circ`}</KTX>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
