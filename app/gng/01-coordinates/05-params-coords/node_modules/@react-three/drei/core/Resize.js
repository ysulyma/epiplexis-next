import _extends from '@babel/runtime/helpers/esm/extends';
import * as THREE from 'three';
import * as React from 'react';

const Resize = /*#__PURE__*/React.forwardRef(({
  children,
  width,
  height,
  depth,
  box3,
  precise = true,
  ...props
}, fRef) => {
  const ref = React.useRef(null);
  const outer = React.useRef(null);
  const inner = React.useRef(null);
  React.useLayoutEffect(() => {
    outer.current.matrixWorld.identity();
    box3 || (box3 = new THREE.Box3().setFromObject(inner.current, precise));
    const w = box3.max.x - box3.min.x;
    const h = box3.max.y - box3.min.y;
    const d = box3.max.z - box3.min.z;
    let dimension = Math.max(w, h, d);
    if (width) dimension = w;
    if (height) dimension = h;
    if (depth) dimension = d;
    outer.current.scale.setScalar(1 / dimension);
  }, [width, height, depth, box3, precise]);
  React.useImperativeHandle(fRef, () => ref.current, []);
  return /*#__PURE__*/React.createElement("group", _extends({
    ref: ref
  }, props), /*#__PURE__*/React.createElement("group", {
    ref: outer
  }, /*#__PURE__*/React.createElement("group", {
    ref: inner
  }, children)));
});

export { Resize };
