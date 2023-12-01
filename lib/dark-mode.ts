interface Message {
  type: "color-scheme";
  value: "dark" | "light";
}

const bodyClass = "dark"

export function syncDarkMode() {
  if (!globalThis.document?.body) return;
  document.body.classList.toggle(bodyClass, true);

  window.addEventListener("message", ({data}: {data: Message}) => {
    if (data.type === "color-scheme") {
      document.body.classList.toggle(bodyClass, data.value === "dark");
    }
  });
}
