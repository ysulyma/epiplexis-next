import {KTX} from "@/components/KTX";
import classNames from "classnames";

const KtxLabel = ({
  children,
  ...attrs
}: React.SVGAttributes<SVGForeignObjectElement> & {
  children: string;
}) => (
  <foreignObject
    className="overflow-visible"
    {...attrs}
    width={200}
    height={100}
  >
    <KTX className="block w-min -translate-x-1/2 -translate-y-1/2">
      {children}
    </KTX>
  </foreignObject>
);

export default function Proof() {
  const a = 200;
  const b = 100;

  const padX = 24;
  const gap = 150;
  const padY = 24;

  return (
    <svg
      className="max-h-[100dvh] max-w-[100dvw] stroke-black text-xl text-black dark:stroke-white dark:text-white"
      strokeWidth="1.5"
      viewBox={`${-a - b - gap / 2 - padX} ${-padY} ${
        (a + b) * 2 + gap + 2 * padX
      } ${a + b + 2 * padY}`}
    >
      {/* left square */}
      <g transform={`translate(${-(a + b + gap / 2)}, 0)`}>
        <rect x="0" y="0" height={a} width={a} className="fill-red-600" />
        <rect x={a} y="0" height={a} width={b} className="fill-violet-600" />
        <rect x="0" y={a} height={b} width={a} className="fill-violet-600" />
        <rect x={a} y={a} height={b} width={b} className="fill-blue-600" />
        <g className="text-white">
          <KtxLabel {...centroid([0, 0], [a, a])}>a^2</KtxLabel>
          <KtxLabel {...centroid([a, 0], [a + b, a])}>ab</KtxLabel>
          <KtxLabel {...centroid([0, a], [a, a + b])}>ab</KtxLabel>
          <KtxLabel {...centroid([a, a], [a + b, a + b])}>b^2</KtxLabel>
        </g>
        <g className="opacity-50">
          {/* top */}
          <KtxLabel {...centroid([0, 0], [a, -padY])}>a</KtxLabel>
          <KtxLabel {...centroid([a, 0], [a + b, -padY])}>b</KtxLabel>

          {/* left */}
          <KtxLabel {...centroid([0, 0], [-padX, a])}>a</KtxLabel>
          <KtxLabel {...centroid([0, a], [-padX, a + b])}>b</KtxLabel>

          {/* right */}
          <KtxLabel {...centroid([a + b, 0], [a + b + padX, a])}>a</KtxLabel>
          <KtxLabel {...centroid([a + b, a], [a + b + padX, a + b])}>
            b
          </KtxLabel>

          {/* bottom */}
          <KtxLabel {...centroid([0, a + b], [a, a + b + padY])}>a</KtxLabel>
          <KtxLabel {...centroid([a, a + b], [a + b, a + b + padY])}>
            b
          </KtxLabel>
        </g>
      </g>
      {/* right square */}
      <g transform={`translate(${gap / 2}, 0)`}>
        <polygon points={`0,0 0,${b} ${a},0`} className="fill-violet-600" />
        <rect height={a + b} width={a + b} className="fill-violet-600" />
        <polygon
          points={`0,${b} ${a},0 ${a + b},${a} ${b},${a + b}`}
          className="fill-green-600"
        />
        <g className="text-white">
          <KtxLabel {...centroid([0, 0], [a, 0], [0, b])}>\frac12ab</KtxLabel>
          <KtxLabel {...centroid([a, 0], [a + b, 0], [a + b, a])}>
            \frac12 ab
          </KtxLabel>
          <KtxLabel {...centroid([0, 0], [a, 0], [0, b])}>\frac12 ab</KtxLabel>
          <KtxLabel {...centroid([0, b], [0, a + b], [b, a + b])}>
            \frac12 ab
          </KtxLabel>
          <KtxLabel {...centroid([b, a + b], [a + b, a], [a + b, a + b])}>
            \frac12 ab
          </KtxLabel>
          <KtxLabel {...centroid([0, 0], [a + b, a + b])}>c^2</KtxLabel>
        </g>
        <g className="opacity-50">
          {/* top */}
          <KtxLabel {...centroid([0, 0], [a, -padY])}>a</KtxLabel>
          <KtxLabel {...centroid([a, 0], [a + b, -padY])}>b</KtxLabel>

          {/* left */}
          <KtxLabel {...centroid([0, 0], [-padX, b])}>b</KtxLabel>
          <KtxLabel {...centroid([0, b], [-padX, a + b])}>a</KtxLabel>

          {/* right */}
          <KtxLabel {...centroid([a + b, 0], [a + b + padX, a])}>a</KtxLabel>
          <KtxLabel {...centroid([a + b, a], [a + b + padX, a + b])}>
            b
          </KtxLabel>

          {/* bottom */}
          <KtxLabel {...centroid([0, a + b], [b, a + b + padY])}>b</KtxLabel>
          <KtxLabel {...centroid([b, a + b], [a + b, a + b + padY])}>
            a
          </KtxLabel>
        </g>
      </g>
    </svg>
  );
}

type Pt2 = [number, number];
function centroid(...points: Pt2[]): {x: number; y: number} {
  const [totalX, totalY] = points.reduce(
    ([x, y], [x1, y1]) => [x + x1, y + y1],
    [0, 0],
  );

  return {
    x: totalX / points.length,
    y: totalY / points.length,
  };
}
