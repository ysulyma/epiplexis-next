import type { UpwardMessage } from "./messages";

export function syncHeight() {
  if (!globalThis.document?.documentElement) return;

  const onResize = () => {
    window.parent?.postMessage(
      {
        type: "sizing.height",
        height: document.body.clientHeight,
      } satisfies UpwardMessage,
      "*",
    );
  };

  const observer = new ResizeObserver((entries) => {
    onResize();
  });

  observer.observe(document.body);
}
