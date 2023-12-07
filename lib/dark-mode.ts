interface Message {
  type: "color-scheme";
  value: "dark" | "light";
}

const bodyClass = "dark";

export function syncDarkMode() {
  if (!globalThis.document?.documentElement) return;

  document.documentElement.classList.toggle(
    bodyClass,
    new URLSearchParams(location.search).has("dark"),
  );

  window.addEventListener("message", ({data}: {data: Message}) => {
    if (data.type === "color-scheme") {
      document.documentElement.classList.toggle(
        bodyClass,
        data.value === "dark",
      );
    }
  });
}
