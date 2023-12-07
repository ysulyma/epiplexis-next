import {KTX} from "@/components/KTX";

export default function Statement() {
  const width = 200;
  const height = 100;

  const degrees = Math.PI / 180;

  const turn = Math.PI / 2;

  const angle = Math.atan(height / width);

  // c square
  const c = Math.hypot(width, height);

  const transform = `rotate(${-angle / degrees} 0 0)`;

  const xc = width / 2 + (c / 2) * Math.cos(angle + turn);
  const yc = -(height / 2 + (c / 2) * Math.sin(angle + turn));

  return (
    <svg
      className="mx-auto h-screen text-2xl"
      strokeWidth="1.5"
      viewBox="-105 -300 410 500"
    >
      {/* a square */}
      <g>
        <rect
          x="0"
          y="0"
          width={width}
          height={width}
          className="fill-red-600"
          strokeWidth="1"
        />
        <foreignObject
          className="overflow-visible"
          x={width / 2}
          y={width / 2}
          width={height / 2}
          height={height / 2}
        >
          <KTX className="fixed block w-min -translate-x-1/2 -translate-y-1/2">
            a^2
          </KTX>
        </foreignObject>
      </g>

      {/* b square */}
      <g>
        <rect
          x={width}
          y={-height}
          width={height}
          height={height}
          className="fill-blue-600"
          strokeWidth="1"
        />
        <foreignObject
          className="overflow-visible"
          x={width + height / 2}
          y={-height / 2}
          width="50"
          height="50"
        >
          <KTX className="fixed block w-min -translate-x-1/2 -translate-y-1/2">
            b^2
          </KTX>
        </foreignObject>
      </g>

      {/* c square */}
      <rect
        x="0"
        y={-c}
        width={c}
        height={c}
        className="fill-green-600"
        strokeWidth="1"
        transform={transform}
      />
      <foreignObject
        className="overflow-visible"
        x={xc}
        y={yc}
        width="50"
        height="50"
      >
        <KTX className="fixed block w-min -translate-x-1/2 -translate-y-1/2">
          c^2
        </KTX>
      </foreignObject>

      {/* triangle */}
      <g>
        <path
          d={`M 0 0 l ${width} ${-height} v ${height} z`}
          className="fill-violet-600"
        />
        <path d={`M ${width} -20 h -20 v 20`} fill="none" />
      </g>
    </svg>
  );
}
