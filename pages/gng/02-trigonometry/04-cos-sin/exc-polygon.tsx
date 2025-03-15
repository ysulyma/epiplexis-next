import {onDrag} from "@liqvid/utils/react";
import {screenToSVG, screenToSVGVector} from "@liqvid/utils/svg";
import classNames from "classnames";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";

import {KTX} from "@/components/KTX";
import {DEGREES, TURN} from "@/lib/constants";
import {mod, truncate} from "@/lib/math";
import {brand} from "@/lib/utils";
import {between} from "@liqvid/utils/misc";

const {cos, sin, tan, sqrt, atan2} = Math;

export default function Polygon() {
  const [n, setN] = useState(3);

  const r = 45;

  const ref = useRef<SVGSVGElement>(null);

  const points = useMemo(
    () =>
      Array.from({length: n}).map((_, i) =>
        [
          r * Math.cos((i * TURN) / n),
          -r * Math.sin((i * TURN) / n),
          // truncate to avoid React hydration errors
        ].map((coord) => truncate(coord, 8)),
      ),
    [n],
  );

  const perimeter = 2 * n * Math.sin(TURN / (2 * n));
  const area = (n / 2) * sin(TURN / n);

  return (
    <div className="font-cm h-screen w-screen text-xl">
      <table className="absolute right-4 top-4">
        <tbody>
          <tr>
            <Th>
              Sides <KTX>(n)</KTX>
            </Th>
            <td className="flex items-center gap-2">
              <input
                type="range"
                min={3}
                max={50}
                onChange={(e) => setN(Number.parseInt(e.currentTarget.value))}
                value={n}
              />
              <output className="w-6 text-right">{n}</output>
            </td>
          </tr>
          <tr>
            <Th className="">Perimeter</Th>
            <td>
              <KTX>{String.raw`\texttt{${perimeter.toFixed(8)}}`}</KTX>
            </td>
          </tr>
          <tr>
            <Th>Area</Th>
            <td>
              <output>
                <KTX>{String.raw`\texttt{${area.toFixed(8)}}`}</KTX>
              </output>
            </td>
          </tr>
        </tbody>
      </table>
      <svg className="mx-auto h-full p-2" ref={ref} viewBox="-100 -100 200 200">
        <circle
          className="stroke-violet-600"
          r={r}
          fill="none"
          strokeWidth="1"
        />
        <path
          d={
            `M ${points[0][0]} ${points[0][1]}` +
            points
              .slice(1)
              .map(([x, y]) => ` L ${x},${y}`)
              .join("") +
            " z"
          }
          className="fill-none stroke-blue-600"
        />
        {points.map((p) => (
          <line
            key={`${p[0]},${p[1]}`}
            x1={0}
            y1={0}
            x2={p[0]}
            y2={p[1]}
            className="stroke-blue-600"
            strokeDasharray="0.2,2"
            strokeLinecap="round"
          />
        ))}
      </svg>
    </div>
  );
}

const Th = brand<"th">("Th", <th className="pr-2 text-right" scope="row" />);
