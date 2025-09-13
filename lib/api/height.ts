import type { UpwardMessage } from "./messages";

export function syncHeight() {
  if (!globalThis.document?.documentElement) return;

  const onResize = () => {
    window.parent?.postMessage(
      {
        height: document.body.clientHeight,
        type: "sizing.height",
      } satisfies UpwardMessage,
      "*",
    );
  };

  const observer = new ResizeObserver(() => {
    onResize();
  });

  observer.observe(document.body);
}
