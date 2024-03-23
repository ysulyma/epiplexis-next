import type {UpwardMessage} from "./messages";

export function syncHeight() {
  if (!globalThis.document?.documentElement) return;

  window.parent?.postMessage(
    {
      type: "sizing.height",
      height: document.body.clientHeight,
    } satisfies UpwardMessage,
    "*",
  );

  // window.addEventListener("message", handler);
}
