import {KTX} from "@/components/KTX";

export default function Proof() {
  const a = 200;
  const b = 100;

  const padX = 1;
  const gap = 100;
  const padY = 1;

  return (
    <svg
      className="max-h-[100dvh] max-w-[100dvw]"
      viewBox={`${-a - padX} ${-padY} ${(a + b) * 2 + gap + 2 * padX} ${
        a + b + 2 * padY
      }`}
    >
      {/* left square */}
      <g>
        <rect
          x="-200"
          y="0"
          height={a}
          width={a}
          className="fill-red-600"
          stroke="#000"
        />
        <rect
          x="0"
          y="0"
          height={a}
          width={b}
          className="fill-violet-600"
          stroke="#000"
        />
        <rect
          x="-200"
          y={a}
          height={b}
          width={a}
          className="fill-violet-600"
          stroke="#000"
        />
        <rect
          x="0"
          y={a}
          height={b}
          width={b}
          className="fill-blue-600"
          stroke="#000"
        />
      </g>

      {/* right square */}
      <g transform="translate(200, 0)">
        <polygon points={`0,0 0,${b} ${a},0`} className="fill-violet-600" />
        <rect
          height={a + b}
          width={a + b}
          className="fill-violet-600"
          stroke="#000"
        />
        <polygon
          points={`0,${b} ${a},0 ${a + b},${a} ${b},${a + b}`}
          className="fill-green-600"
          stroke="#000"
        />
      </g>
    </svg>
  );
}
