import {useRef} from "react";

export function useChanged(args: Record<string, unknown>) {
  const prev = useRef(args);

  const keys = Object.keys(args).filter(
    (key) => args[key] !== prev.current[key],
  );

  const changes = Object.fromEntries(
    keys.map((key) => [
      key,
      {
        from: prev.current[key],
        to: args[key],
      },
    ]),
  );

  prev.current = args;

  return changes;
}
