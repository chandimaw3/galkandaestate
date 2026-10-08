const imageModules = import.meta.glob(
  "./img/**/*.{avif,webp,png,jpg,jpeg,gif,svg}",
  { eager: true, query: "?url", import: "default" },
);

// Reference images by their path relative to src/img.
export const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, url]) => [
    path.replace("./img/", ""),
    url,
  ]),
);
