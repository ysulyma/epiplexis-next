import type { Material, Object3D } from "three";

/** Set opacity on THREE Mesh or Group */
export const setOpacity = (target: Object3D, opacity: number) => {
  if ("material" in target && target.material) {
    const material = target.material as Material;
    material.visible = opacity > 0;
    material.transparent = material.visible && opacity < 1;
    material.opacity = opacity;
  } else if (target.children) {
    for (const child of target.children) {
      setOpacity(child, opacity);
    }
  }
};
