import type {UpwardMessage} from "./messages";

export function syncHeight() {
  if (!globalThis.document?.documentElement) return;

  const onResize = () => {
    console.log("resize", document.body.clientHeight);
    window.parent?.postMessage(
      {
        type: "sizing.height",
        height: document.body.clientHeight,
      } satisfies UpwardMessage,
      "*",
    );
  };

  const observer = new ResizeObserver((entries) => {
    console.log(entries);
    onResize();
  });

  observer.observe(document.body);
}
