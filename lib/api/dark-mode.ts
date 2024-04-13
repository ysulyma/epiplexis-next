import type {DownwardMessage} from "./messages";

const darkClass = "dark";

/** Apply dark background (instead of transparent) when not in an iframe. */
const orphanBodyClass = "dark:bg-stone-800";

("dark:bg-stone-800");

export const darkModeScript = `
  document.documentElement.classList.toggle(
    "${darkClass}",
    new URLSearchParams(location.search).has("dark"),
  );

  document.body.classList.toggle(
    "${orphanBodyClass}",
    parent === window,
  );
`;

export function initializeDarkMode() {
  if (!globalThis.document?.documentElement) return;

  document.documentElement.classList.toggle(
    darkClass,
    new URLSearchParams(location.search).has("dark"),
  );
}

export function syncDarkMode() {
  if (!globalThis.document?.documentElement) return;

  window.addEventListener("message", ({data}: {data: DownwardMessage}) => {
    if (data.type === "color-scheme") {
      document.documentElement.classList.toggle(
        darkClass,
        data.value === "dark",
      );
    }
  });
}
