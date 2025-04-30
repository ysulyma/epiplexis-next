import { useMemo, useState } from "react";

const labels = {
  b: "Blue",
  g: "Green",
  r: "Red",
};

const primary = ["r", "g", "b"] as const;
type Primary = (typeof primary)[number];

export default function Table() {
  const { color, r, g, b, setColor, setComponent } = useColor("#ff0000");

  return (
    <main className="flex h-full text-xl">
      <table>
        <tbody>
          {primary.map((c) => {
            const value = { b, g, r }[c];
            const onChange: React.ChangeEventHandler<HTMLInputElement> = (
              e,
            ) => {
              const value = Number.parseInt(e.currentTarget.value, 10);
              setComponent(c, value);
            };

            return (
              <tr key={c}>
                <th className="pr-4 text-right">{labels[c]}</th>
                <td className="flex items-center gap-4">
                  <input
                    max={255}
                    min={0}
                    onChange={onChange}
                    type="range"
                    value={value}
                  />
                  <input
                    className="w-16"
                    max={255}
                    min={0}
                    onChange={onChange}
                    type="number"
                    value={value}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex h-full flex-col items-center px-20 py-5 text-center font-mono">
        <input
          className="block"
          onChange={(e) => setColor(e.currentTarget.value)}
          type="color"
          value={color}
        />
        {color}
      </div>
      <div className="flex-1" style={{ backgroundColor: color }} />
    </main>
  );
}

function useColor(initial = "#ffffff") {
  const [color, setColor] = useState(initial);
  const r = Number.parseInt(color.slice(1, 3), 16);
  const g = Number.parseInt(color.slice(3, 5), 16);
  const b = Number.parseInt(color.slice(5, 7), 16);

  return useMemo(
    () => ({
      b,
      color,

      g,
      r,
      setColor,

      setComponent: (c: Primary, value: number) => {
        const components = { b, g, r };
        components[c] = value;
        setColor(
          "#" +
            [components.r, components.g, components.b]
              .map((v) => v.toString(16).padStart(2, "0"))
              .join(""),
        );
      },
    }),
    [b, color, g, r],
  );
}
