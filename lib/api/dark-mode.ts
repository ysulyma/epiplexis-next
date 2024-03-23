import type {DownwardMessage} from "./messages";

const bodyClass = "dark";

export function syncDarkMode() {
  if (!globalThis.document?.documentElement) return;

  document.documentElement.classList.toggle(
    bodyClass,
    new URLSearchParams(location.search).has("dark"),
  );

  window.addEventListener("message", ({data}: {data: DownwardMessage}) => {
    if (data.type === "color-scheme") {
      document.documentElement.classList.toggle(
        bodyClass,
        data.value === "dark",
      );
    }
  });
}
