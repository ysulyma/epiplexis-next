import {DEGREES, TWOPI} from "@/lib/constants";
import {onDrag} from "@liqvid/utils/react";
import {screenToSVG} from "@liqvid/utils/svg";
import {useMemo, useRef} from "react";

export function CircleControl({
  onChange,
  value,
}: {
  onChange: (theta: number) => unknown;
  value: number;
}) {
  const r = 45;
  const target = useRef<SVGCircleElement>(null);

  const events = useMemo(
    () =>
      onDrag(
        (e, hit) => {
          const [x, y] = screenToSVG(target.current!, hit.x, hit.y);
          onChange?.((Math.atan2(-y, x) + TWOPI) % TWOPI);
        },
        () => {
          document.body.classList.add("dragging");
          // target.current = e.currentTarget as SVGElement;
        },
        () => {
          document.body.classList.remove("dragging");
        },
      ),
    [onChange],
  );

  return (
    <svg
      aria-valuemin={0}
      aria-valuemax={360}
      aria-valuenow={value / DEGREES}
      className="mx-auto block h-20"
      viewBox="-50 -50 100 100"
    >
      <circle
        className="fill-none stroke-black dark:stroke-white"
        cx="0"
        cy="0"
        r={r}
      />
      <circle
        className="fill-[#ff0070] hover:cursor-grab"
        cx={r * Math.cos(value)}
        cy={r * -Math.sin(value)}
        r="5"
        ref={target}
        {...events}
      />
    </svg>
  );
}
