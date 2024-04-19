export const darkClass = "dark";

/** Apply dark background (instead of transparent) when not in an iframe. */
const orphanBodyClass = "dark:bg-stone-800";

/** Script to inject into app mode */
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
